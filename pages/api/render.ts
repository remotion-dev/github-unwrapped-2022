import { NextApiRequest, NextApiResponse } from "next";
import { getRenderOrMake } from "../../src/get-render-or-make";
import { getStatsOrFetch } from "../../src/get-stats-or-fetch";
import { RenderProgressOrFinality } from "./progress";

type RequestData = {
  username: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RenderProgressOrFinality>
) {
  const body = JSON.parse(req.body) as RequestData;
  const stats = await getStatsOrFetch(body.username);
  if (!stats) {
    throw new Error("Could not get stats for" + body.username);
  }
  const prog = await getRenderOrMake(body.username, stats);
  res.status(200).json(prog);
}
