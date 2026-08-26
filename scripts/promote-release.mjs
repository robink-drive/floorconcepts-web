#!/usr/bin/env node
/**
 * Merge staging into release and push (triggers prod Workers Builds).
 *
 * Usage:
 *   npm run promote:release
 *
 * Requires a clean working tree. Run from any branch; returns to your branch after.
 */
import { execSync } from "node:child_process";

const SOURCE = "staging";
const TARGET = "release";
const REMOTE = "origin";

function run(cmd, options = {}) {
  return execSync(cmd, {
    encoding: "utf8",
    stdio: options.silent ? "pipe" : "inherit",
    ...options,
  });
}

function runQuiet(cmd) {
  return run(cmd, { silent: true }).trim();
}

function die(message, code = 1) {
  console.error(`\n❌ ${message}`);
  process.exit(code);
}

const startBranch = runQuiet("git branch --show-current");
const dirty = runQuiet("git status --porcelain");

if (dirty) {
  die(
    "Working tree has uncommitted changes. Commit or stash them before promoting to production.",
  );
}

console.log(`\n📦 Promoting ${REMOTE}/${SOURCE} → ${REMOTE}/${TARGET}\n`);

let promoted = false;

try {
  run(`git fetch ${REMOTE}`);
  run(`git checkout ${TARGET}`);
  run(`git pull ${REMOTE} ${TARGET}`);

  try {
    run(`git merge ${REMOTE}/${SOURCE} -m "Merge ${SOURCE} into ${TARGET}"`);
  } catch {
    die(
      `Merge conflict on ${TARGET}. Resolve conflicts, then:\n` +
        `  git push ${REMOTE} ${TARGET}\n` +
        `  git checkout ${startBranch}`,
    );
  }

  run(`git push ${REMOTE} ${TARGET}`);
  promoted = true;
} finally {
  if (promoted && runQuiet("git branch --show-current") !== startBranch) {
    run(`git checkout ${startBranch}`);
  }
}

console.log(`\n✅ ${TARGET} updated. Cloudflare Workers Builds will deploy production.\n`);
