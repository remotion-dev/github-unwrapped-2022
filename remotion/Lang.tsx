import makeColorMoreChill from "make-color-more-chill";
import React, { useMemo } from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CompactStats, TopLanguage } from "./map-response-to-stats";

const title: React.CSSProperties = {
  color: "#111",
  fontWeight: "bold",
  fontSize: 80,
  fontFamily: "Jelle",
  paddingLeft: 20,
  paddingRight: 20,
  textAlign: "center",
};

export const Lang: React.FC<{
  stats: CompactStats;
}> = ({ stats }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  const rotateProgress = spring({
    fps,
    frame: frame - 60,
    config: {
      damping: 200,
    },
  });

  const topLanguage: TopLanguage = useMemo(() => {
    if (!stats.topLanguage) {
      return {
        color: null,
        name: "None",
      };
    }
    return stats.topLanguage;
  }, [stats.topLanguage]);

  const rotate = interpolate(
    rotateProgress,
    [0, 0.5, 0.500001, 1],
    [1, 0, 0, 1]
  );

  const text =
    rotateProgress < 0.5
      ? topLanguage.name === "None"
        ? "I really couldn't care about any of them"
        : "there's one that I like the most!"
      : topLanguage.name === "None"
      ? "🤷‍♀️"
      : topLanguage.name;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: makeColorMoreChill(
          topLanguage.color ?? "#000",
          "#000"
        ),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: `${interpolate(scale, [0, 1], [50, 0])}%`,
        perspective: 2000,
      }}
    >
      <div
        style={{
          ...title,
          fontSize: rotateProgress < 0.5 ? 80 : 140,
          color: "white",
          transform: `scale(${rotate}, 1)`,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
