import Image from "next/image";

interface ProfileHeaderProps {
  displayName: string;
  username: string;
  bio: string;
  avatarUrl?: string;
}

export default function ProfileHeader({
  displayName,
  username,
  bio,
  avatarUrl,
}: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={`${displayName} 프로필 사진`}
          width={96}
          height={96}
          priority
          className="size-24 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex size-24 items-center justify-center rounded-full bg-placeholder text-3xl font-bold text-muted"
        >
          {displayName.charAt(0)}
        </div>
      )}

      <h1 className="mt-5 text-2xl font-bold">{displayName}</h1>
      <p className="mt-1 text-base text-muted">@{username}</p>
      <p className="mt-3 max-w-xs whitespace-pre-line text-[15px] leading-relaxed">
        {bio}
      </p>
    </header>
  );
}
