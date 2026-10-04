import Image from "next/image";
import type { LinkIcon } from "@/types/profile";

interface LinkCardProps {
  title: string;
  url: string;
  thumbnailUrl?: string;
  icon?: LinkIcon;
  clickCount?: number;
  onClick?: () => void;
}

// 아이콘은 글자 크기(1em)에 맞춰 표시
const ICONS: Record<LinkIcon, React.ReactNode> = {
  email: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[1em] shrink-0"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
};

export default function LinkCard({
  title,
  url,
  thumbnailUrl,
  icon,
  clickCount,
  onClick,
}: LinkCardProps) {
  // mailto: 등은 새 탭 없이 기기 기본 앱으로 연결
  const isWeb = /^https?:\/\//.test(url);

  return (
    <a
      href={url}
      {...(isWeb && { target: "_blank", rel: "noopener noreferrer" })}
      onClick={onClick}
      className="relative flex min-h-15 w-full items-center justify-center rounded-2xl border-2 border-ink bg-white px-16 py-4 text-center text-base font-medium transition-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      {thumbnailUrl && (
        <Image
          src={thumbnailUrl}
          alt=""
          width={40}
          height={40}
          className="absolute left-3 size-10 rounded-lg object-cover"
        />
      )}
      <span className="inline-flex items-center gap-2 break-keep">
        {icon && ICONS[icon]}
        {title}
      </span>
      {clickCount !== undefined && (
        <span className="absolute right-4 text-xs text-muted tabular-nums">
          {clickCount.toLocaleString("ko-KR")}회
        </span>
      )}
    </a>
  );
}
