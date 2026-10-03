import Link from "next/link";

export default function BrandBadge() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-line bg-white px-5 py-2 text-sm font-medium text-brand transition-colors hover:border-brand"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
        aria-hidden="true"
      >
        <path d="M12 2 6 10h4l-5 7h14l-5-7h4z" />
        <path d="M12 17v5" />
      </svg>
      링크나무로 만들기
    </Link>
  );
}
