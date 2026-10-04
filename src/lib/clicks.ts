import { profile } from "@/data/profile";
import { getDb } from "@/lib/mongodb";

// link_clicks 컬렉션: 링크 하나당 문서 하나 { _id: 링크 ID, count: 누적 클릭 수 }
interface LinkClickDoc {
  _id: string;
  count: number;
}

export type ClickCounts = Record<string, number>;

const linkIds = profile.links
  .filter((link) => link.type === "link")
  .map((link) => link.id);

async function getCollection() {
  const db = await getDb();
  return db.collection<LinkClickDoc>("link_clicks");
}

export function isKnownLinkId(id: string): boolean {
  return linkIds.includes(id);
}

export async function getClickCounts(): Promise<ClickCounts> {
  const collection = await getCollection();
  const docs = await collection.find({ _id: { $in: linkIds } }).toArray();

  const counts: ClickCounts = Object.fromEntries(linkIds.map((id) => [id, 0]));
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }
  return counts;
}

export async function incrementClickCount(id: string): Promise<number> {
  const collection = await getCollection();
  const doc = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return doc?.count ?? 1;
}
