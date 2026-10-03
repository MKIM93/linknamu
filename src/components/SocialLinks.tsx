import type { SocialLink, SocialType } from "@/types/profile";

const SOCIAL_META: Record<SocialType, { label: string; name: string }> = {
  instagram: { label: "IG", name: "인스타그램" },
  youtube: { label: "YT", name: "유튜브" },
  tiktok: { label: "TT", name: "틱톡" },
  blog: { label: "블로그", name: "블로그" },
};

export default function SocialLinks({ links }: { links: SocialLink[] }) {
  if (links.length === 0) return null;

  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {links.map((link) => {
        const meta = SOCIAL_META[link.type];
        return (
          <li key={link.type}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={meta.name}
              className="flex size-12 items-center justify-center rounded-full border-2 border-line bg-white text-sm font-bold transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {meta.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
