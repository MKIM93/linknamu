import { getClickCounts } from "@/lib/clicks";

// 모든 링크의 현재 클릭 수를 한 번에 반환
export async function GET() {
  try {
    const counts = await getClickCounts();
    return Response.json(
      { counts },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return Response.json(
      { error: "클릭 수를 불러오지 못했습니다." },
      { status: 500 },
    );
  }
}
