import { CompactStats } from "../../remotion/map-response-to-stats";
import { mongoClient } from "./mongo";

type CacheCollection = {
  username: string;
  stats: CompactStats;
};

export const collection = async () => {
  const client = await mongoClient;
  return client.db("wrapped").collection<CacheCollection>("wrapped");
};

export const saveCache = async (username: string, stats: CompactStats) => {
  const coll = await collection();
  return coll.insertOne({
    stats,
    username: username.toLowerCase(),
  });
};

export const getFromCache = async (
  username: string
): Promise<CompactStats | null> => {
  const coll = await collection();
  const f = await coll.findOne({
    username: username.toLowerCase(),
  });
  if (f) {
    return f.stats;
  }
  return null;
};

export const deleteCache = async (username: string) => {
  const coll = await collection();
  await coll.deleteMany({
    username: username.toLowerCase(),
  });
};
