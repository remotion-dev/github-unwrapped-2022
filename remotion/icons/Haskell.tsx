import React from "react";
import { AbsoluteFill } from "remotion";
import makeColorMoreChill from "make-color-more-chill";

export const Haskell: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: makeColorMoreChill("#5f5187"),
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
          d="M0 110.2L30.1 65 0 19.9h22.6L52.7 65l-30.1 45.1H0z"
        ></path>
        <path
          fill="#fff"
          d="M30.1 110.2L60.2 65 30.1 19.9h22.6l60.2 90.3H90.4L71.5 81.9l-18.8 28.2H30.1zM102.9 83.8l-10-15.1H128v15.1h-25.1zM87.8 61.3l-10-15.1H128v15.1H87.8z"
        ></path>
      </svg>
    </AbsoluteFill>
  );
};
