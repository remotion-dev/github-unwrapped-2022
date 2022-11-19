import {
  CompactStats,
  mapResponseToStats,
} from "../remotion/map-response-to-stats";
import { getFromCache, saveCache } from "./db/cache";
import { getAll } from "./get-all";

const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new TypeError(`Expected GITHUB_TOKEN env variable`);
}

export const getStatsOrFetch = async (
  user: string
): Promise<CompactStats | null> => {
  const cache = await getFromCache(user);
  if (cache) {
    return cache;
  }
  const ast = await getAll(user, githubToken);
  if (!ast.data.user) {
    return null;
  }
  const compact = mapResponseToStats(ast);
  saveCache(user, compact);

  return compact;
};
