import chunk from "lodash.chunk";
import { lighten } from "polished";
import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { BACKGROUND_COLOR } from "../src/palette";
import { Green } from "./Green";
import { IDidALot } from "./IDidALot";
import { CompactStats } from "./map-response-to-stats";
import { TotalContributions } from "./TotalContributions";

export const Contributions: React.FC<{
  stats: CompactStats;
}> = ({ stats }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: lighten(0.08, BACKGROUND_COLOR),
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Series>
          <Series.Sequence durationInFrames={45}>
            <IDidALot commitCount={stats.contributionCount}></IDidALot>
          </Series.Sequence>
          {Object.keys(stats.contributions)
            .sort()
            .map((m, i) => {
              const val = stats.contributions[m];
              const chunked = chunk(val, 7);
              return (
                <Series.Sequence
                  key={m[0]}
                  durationInFrames={i === 0 ? 35 : i === 11 ? 33 : 8}
                  layout="none"
                >
                  <Green key={m[0]} chunked={chunked} i={i}></Green>
                </Series.Sequence>
              );
            })}
          <Series.Sequence durationInFrames={50}>
            <TotalContributions
              totalContributions={stats.contributionCount}
            ></TotalContributions>
          </Series.Sequence>
        </Series>
      </div>
    </AbsoluteFill>
  );
};
