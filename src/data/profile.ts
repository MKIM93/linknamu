import type { Profile } from "@/types/profile";

// 보여 주기용 더미 데이터 — 실제 내용은 추후 교체 (이후 MongoDB에서 불러오도록 변경)
export const profile: Profile = {
  username: "username",
  displayName: "홍길동",
  bio: "웹 개발자 · 만들고 기록하는 걸 좋아합니다",
  avatarUrl: "/avatar-placeholder.svg",
  socialLinks: [],
  links: [
    { id: "github", type: "link", title: "GitHub", url: "https://github.com/" },
    { id: "linkedin", type: "link", title: "LinkedIn", url: "https://www.linkedin.com/" },
    { id: "blog", type: "link", title: "Blog", url: "https://blog.naver.com/" },
  ],
};
