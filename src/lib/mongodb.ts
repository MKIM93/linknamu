import { MongoClient, type Db } from "mongodb";

const DB_NAME = "linknamu";

// 개발 모드의 핫 리로드 때마다 연결이 새로 생기지 않도록 전역에 캐시
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

export async function getDb(): Promise<Db> {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
    }

    globalForMongo._mongoClientPromise = new MongoClient(uri)
      .connect()
      .catch((error) => {
        // 연결 실패 시 다음 요청에서 다시 시도
        globalForMongo._mongoClientPromise = undefined;
        throw error;
      });
  }

  const client = await globalForMongo._mongoClientPromise;
  return client.db(DB_NAME);
}
