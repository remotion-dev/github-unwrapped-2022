import { parsePath, roundCommands } from "svg-round-corners";

export const roundSvg = (d: string, borderRadius: number) => {
  const parsed = parsePath(d);

  return roundCommands(parsed, borderRadius).path;
};
