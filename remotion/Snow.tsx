import React from "react";
import {
  AbsoluteFill,
  interpolate,
  random,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { noise2D } from "@remotion/noise";

export const Snow: React.FC = () => {
  const { width, fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const wind =
    spring({
      fps,
      frame: frame - 100,
      config: {
        damping: 200,
      },
      durationInFrames: 30,
    }) * 0;

  return (
    <AbsoluteFill
      style={{
        display: "block",
      }}
    >
      {new Array(400).fill(true).map((_, i) => {
        const size = 15 + random(i + "size") * 15;

        const pos = random(i) * (width + size);

        const randomOffsset = interpolate(
          random(i + "fr"),
          [0, 1],
          [-200, 200]
        );

        const speed = random(i + "speed") * 500 + 1000;

        const progress = interpolate(frame - randomOffsset, [0, 100], [0, 1]);
        const down = interpolate(progress, [0, 1], [0, speed]);
        const x =
          interpolate(progress, [0, 1], [-wind * 0.5, -wind]) +
          noise2D(i, frame / 200, 0) * 200;

        return (
          <div
            key={i}
            style={{
              backgroundColor: "white",
              height: size,
              width: size,
              borderRadius: size,
              display: "inline-block",
              position: "absolute",
              left: pos,
              top: down,
              marginLeft: -size / 2 + x,
            }}
          ></div>
        );
      })}
    </AbsoluteFill>
  );
};
