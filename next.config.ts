import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 같은 와이파이의 스마트폰에서 개발 서버 접속 허용 (PC의 LAN IP)
  allowedDevOrigins: ["192.168.10.110"],
};

export default nextConfig;
