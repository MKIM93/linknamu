import BrandBadge from "@/components/BrandBadge";
import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ShareButton from "@/components/ShareButton";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[680px] flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))]">
      <div className="flex justify-end">
        <ShareButton title={profile.displayName} />
      </div>

      <ProfileHeader
        displayName={profile.displayName}
        username={profile.username}
        bio={profile.bio}
        avatarUrl={profile.avatarUrl}
      />

      <div className="mt-6">
        <SocialLinks links={profile.socialLinks} />
      </div>

      <ul className="mt-8 flex flex-col gap-3">
        {profile.links.map((item) =>
          item.type === "header" ? (
            <li key={item.id} className="pt-3 text-center">
              <h2 className="text-sm font-bold text-muted">{item.title}</h2>
            </li>
          ) : (
            <li key={item.id}>
              <LinkCard
                title={item.title}
                url={item.url}
                thumbnailUrl={item.thumbnailUrl}
                icon={item.icon}
              />
            </li>
          ),
        )}
      </ul>

      <footer className="mt-auto flex justify-center pt-10">
        <BrandBadge />
      </footer>
    </main>
  );
}
