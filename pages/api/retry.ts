import { NextApiRequest, NextApiResponse } from "next";
import { deleteRender, getRender } from "../../src/db/renders";
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
  const render = await getRender(body.username);
  const stats = await getStatsOrFetch(body.username);
  if (!render) {
    throw new Error("Could not get progress for " + body.username);
  }
  if (!stats) {
    throw new Error("Could not get stats for" + body.username);
  }
  await deleteRender(render);
  const prog = await getRenderOrMake(body.username, stats);
  res.status(200).json(prog);
}
