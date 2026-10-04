import { incrementClickCount, isKnownLinkId } from "@/lib/clicks";

// 링크 클릭 수를 1 증가시키고 갱신된 값을 반환
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ linkId: string }> },
) {
  const { linkId } = await params;

  if (!isKnownLinkId(linkId)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  try {
    const count = await incrementClickCount(linkId);
    return Response.json({ count });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return Response.json(
      { error: "클릭 수를 기록하지 못했습니다." },
      { status: 500 },
    );
  }
}
