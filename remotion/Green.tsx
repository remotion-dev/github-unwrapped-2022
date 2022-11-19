import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BASE_COLOR } from "../src/palette";
import { SpaceSavingContribution } from "./map-response-to-stats";

const title: React.CSSProperties = {
  textAlign: "center",
  fontSize: 70,
  fontFamily: "Jelle",
  color: BASE_COLOR,
};

export const Green: React.FC<{
  chunked: SpaceSavingContribution[][];
  i: number;
}> = ({ chunked, i }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const pop = spring({
    fps,
    frame,
    config: {
      mass: 0.4,
      damping: 200,
    },
  });
  const scale = interpolate(pop, [0, 1], [0.85, 1]);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <h1 style={title}>
        {
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ][i]
        }
      </h1>
      {chunked.map((c, j) => {
        return (
          <div key={c[0][2]} style={{ flexDirection: "row", display: "flex" }}>
            {c.map((chunk, k) => {
              const [weekday, contributions, date, color] = chunk;
              const prog =
                i === 0
                  ? spring({
                      fps,
                      frame: frame - (j * 7 + k) * 0.35,
                      config: {
                        damping: 200,
                      },
                    })
                  : 1;
              return (
                <div
                  key={date}
                  style={{
                    backgroundColor: color,
                    width: 80,
                    height: 80,
                    borderRadius: 12,
                    margin: 12,
                    transform: `translateY(${interpolate(
                      prog,
                      [0, 1],
                      [1000, 0]
                    )}px)`,
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
