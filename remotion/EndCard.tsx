import React from "react";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BACKGROUND_COLOR, BASE_COLOR } from "../src/palette";
import { Decoration } from "./Decoration";
import { CompactStats } from "./map-response-to-stats";

const title: React.CSSProperties = {
  textAlign: "center",
  fontSize: 70,
  fontFamily: "Jelle",
  color: BASE_COLOR,
  fontWeight: "bold",
};

export const EndCard: React.FC<{
  stats: CompactStats;
  enableDecoration: boolean;
}> = ({ stats, enableDecoration }) => {
  const { width, height, fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const line = spring({
    fps,
    frame: frame - 10,
    config: {
      mass: 4,
      damping: 200,
    },
  });

  const zeroCommits = stats.contributionCount === 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BACKGROUND_COLOR,
      }}
    >
      {enableDecoration ? (
        <>
          <Decoration
            start={[1, 0.2]}
            end={[0.2, 1]}
            width={width}
            height={height}
            progress={line}
            curliness={3}
          ></Decoration>
          <Decoration
            end={[0.5, 0]}
            start={[0, 0.5]}
            width={width}
            height={height}
            progress={line - 0.2}
            curliness={2}
          ></Decoration>
        </>
      ) : null}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={title}>
          {zeroCommits
            ? "Actually, everything is on GitLab."
            : `Wonder how you'll compare?`}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
