import type { NextApiRequest, NextApiResponse } from "next";
import { Finality, getRender } from "../../src/db/renders";
import { getRenderProgressWithFinality } from "../../src/get-render-progress-with-finality";

type RequestData = {
  username: string;
};

export type RenderProgressOrFinality =
  | {
      type: "progress";
      progress: {
        percent: number;
      };
    }
  | {
      type: "finality";
      finality: Finality;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RenderProgressOrFinality>
) {
  const body = JSON.parse(req.body) as RequestData;
  const render = await getRender(body.username);
  if (!render) {
    throw new Error("Could not get progress for ");
  }

  const prog = await getRenderProgressWithFinality(render, render.account ?? 1);

  res.status(200).json(prog);
  return;
}
