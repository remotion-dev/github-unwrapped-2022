import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { Decoration } from "./Decoration";

const start = [1, 0.5] as const;
const end = [0.7, 0] as const;

const start2 = [0, 0.75] as const;
const end2 = [0.5, 1] as const;

export const DecorativeLines: React.FC = () => {
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill>
      <Decoration
        start={start}
        end={end}
        width={width}
        height={height}
        progress={1}
        curliness={3}
      ></Decoration>
      <Decoration
        start={start2}
        end={end2}
        width={width}
        height={height}
        progress={1}
        curliness={3}
      ></Decoration>
    </AbsoluteFill>
  );
};
