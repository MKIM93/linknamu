import Image from "next/image";

interface LinkCardProps {
  title: string;
  url: string;
  thumbnailUrl?: string;
}

export default function LinkCard({ title, url, thumbnailUrl }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
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
      <span className="break-keep">{title}</span>
    </a>
  );
}
