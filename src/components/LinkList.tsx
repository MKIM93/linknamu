"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { ClickCounts } from "@/lib/clicks";
import type { LinkItem } from "@/types/profile";

// 클릭 수는 줄어들지 않으므로, 응답 순서가 뒤바뀌어도 큰 값을 유지
function mergeCounts(prev: ClickCounts, next: ClickCounts): ClickCounts {
  const merged = { ...prev };
  for (const [id, count] of Object.entries(next)) {
    merged[id] = Math.max(merged[id] ?? 0, count);
  }
  return merged;
}

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<ClickCounts>({});

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/clicks", { signal: controller.signal, cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { counts: ClickCounts }) =>
        setCounts((prev) => mergeCounts(prev, data.counts)),
      )
      .catch(() => {
        // 불러오기 실패 시 0회 표시 유지
      });

    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 +1 반영하고, 서버 응답이 오면 실제 값으로 맞춤
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    // keepalive: 페이지를 벗어나도 요청이 끝까지 전송되도록
    fetch(`/api/clicks/${encodeURIComponent(id)}`, {
      method: "POST",
      keepalive: true,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { count: number }) =>
        setCounts((prev) => mergeCounts(prev, { [id]: data.count })),
      )
      .catch(() => {
        // 기록 실패해도 링크 이동은 그대로 진행
      });
  }

  return (
    <ul className="mt-8 flex flex-col gap-3">
      {links.map((item) =>
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
              clickCount={counts[item.id] ?? 0}
              onClick={() => handleClick(item.id)}
            />
          </li>
        ),
      )}
    </ul>
  );
}
