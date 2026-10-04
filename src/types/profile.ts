export type SocialType = "instagram" | "youtube" | "tiktok" | "blog";

export interface SocialLink {
  type: SocialType;
  url: string;
}

export type LinkIcon = "email";

export type LinkItem =
  | {
      id: string;
      type: "link";
      title: string;
      url: string;
      thumbnailUrl?: string;
      icon?: LinkIcon;
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
