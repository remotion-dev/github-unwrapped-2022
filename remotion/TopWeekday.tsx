import { lighten } from "polished";
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  interpolateColors,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { PINK, PINK_BACKGROUND } from "../src/palette";
import { CompactStats, Weekday } from "./map-response-to-stats";

const weekdayToName = (weekday: Weekday) => {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ][weekday];
};

const label: React.CSSProperties = {
  textAlign: "center",
  color: PINK,
  fontFamily: "Jelle",
  marginTop: 20,
  fontWeight: "bold",
  fontSize: 36,
};

const title: React.CSSProperties = {
  color: PINK,
  fontWeight: "bold",
  fontSize: 80,
  fontFamily: "Jelle",
  paddingLeft: 50,
  paddingRight: 50,
  textAlign: "center",
  marginBottom: 100,
};

const higher = 400;

export const TopWeekDays: React.FC<{
  stats: CompactStats;
}> = ({ stats }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PINK_BACKGROUND,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={title}>
        {stats.weekdays.mostCount === 0
          ? "I'm rather outside than in front of the screen."
          : `${weekdayToName(stats.weekdays.most)} was my most productive day.`}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {stats.weekdays.days.map((d, i) => {
          const lower = Math.max(150, (d / stats.weekdays.mostCount) * higher);
          const isMostProductive =
            stats.weekdays.most === String(i) && stats.weekdays.mostCount > 0;

          const progress = spring({
            fps,
            frame: frame - i * 3 - 20,
            config: {
              damping: 200,
            },
          });

          return (
            <div key={d}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  height: 500,
                }}
              >
                <div>
                  <div
                    style={{
                      width: 90,
                      height: interpolate(progress, [0, 1], [50, lower]),
                      borderRadius: 30,
                      backgroundColor: isMostProductive
                        ? PINK
                        : lighten(0.15, PINK),
                      display: "flex",
                      color: interpolateColors(
                        progress,
                        [0, 1],
                        [lighten(0.1, PINK), PINK_BACKGROUND]
                      ),
                      justifyContent: "center",
                      alignItems: "flex-end",
                      fontFamily: "Jelle",
                      fontWeight: "bold",
                      fontSize: 24,
                      paddingBottom: interpolate(progress, [0, 1], [0, 30]),
                    }}
                  ></div>
                  <div
                    style={{
                      ...label,
                      color: isMostProductive ? PINK : lighten(0.15, PINK),
                    }}
                  >
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </div>
                </div>
                <div
                  style={{
                    width: 30,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
