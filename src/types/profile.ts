export type SocialType = "instagram" | "youtube" | "tiktok" | "blog";

export interface SocialLink {
  type: SocialType;
  url: string;
}

export type LinkItem =
  | {
      id: string;
      type: "link";
      title: string;
      url: string;
      thumbnailUrl?: string;
    }
  | {
      id: string;
      type: "header";
      title: string;
    };

export interface Profile {
  username: string;
  displayName: string;
  bio: string;
  avatarUrl?: string;
  socialLinks: SocialLink[];
  links: LinkItem[];
}
