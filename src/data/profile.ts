import type { Profile } from "@/types/profile";

// 추후 MongoDB에서 불러오도록 교체
export const profile: Profile = {
  username: "username",
  displayName: "김민건",
  bio: "Claude 배우는 중",
  avatarUrl: "/avatar-totoro.svg",
  socialLinks: [],
  links: [
    {
      id: "email",
      type: "link",
      title: "E-mail",
      url: "mailto:mingeon.kim.93@gmail.com",
      icon: "email",
    },
  ],
};
