import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";
import { instagramPosts, site } from "@/lib/site";

const gradients = [
  "from-stone-600/80 to-stone-900/90",
  "from-amber-800/70 to-stone-900/90",
  "from-slate-600/80 to-slate-900/90",
  "from-neutral-700/80 to-neutral-900/90",
  "from-zinc-600/80 to-zinc-900/90",
  "from-stone-500/80 to-stone-800/90",
];

export function InstagramSection() {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24">
      <SiteContainer>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-eyebrow">Follow along</p>
            <h2 className="section-title mt-3">On Instagram</h2>
          </div>
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand hover:text-brand/80"
          >
            @{site.domain.replace(".ca", "")}
          </Link>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {instagramPosts.map((post, index) => (
            <li key={post.id}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${gradients[index % gradients.length]}`}
                />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs leading-snug text-white/95">{post.caption}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  );
}
