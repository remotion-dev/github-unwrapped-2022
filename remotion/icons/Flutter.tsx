import makeColorMoreChill from "make-color-more-chill";
import React from "react";
import { AbsoluteFill } from "remotion";

export const Flutter: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: makeColorMoreChill("#3FB6D3"),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        viewBox="0 0 128 128"
        style={{
          width: 140,
          height: 140,
        }}
      >
        <path
          fill="#fff"
          d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"
        ></path>
      </svg>
    </AbsoluteFill>
  );
};
