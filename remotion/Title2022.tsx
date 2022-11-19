import { evolvePath } from "@remotion/paths";
import React from "react";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BottomBox } from "./BottomBox";
import { Bow } from "./Bow";
import { Snow } from "./Snow";

const title: React.CSSProperties = {
  color: "#8A3629",
  fontFamily: "Wintry",
  marginBottom: 0,
  marginTop: 0,
  fontWeight: "normal",
};

export const Title: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FFE3CA",
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontSize: 50,
        }}
      >
        <Bow></Bow>
        <h1 style={title}>JonnyBurger</h1>
        <BottomBox></BottomBox>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          opacity: 0.2,
        }}
      >
        <Snow></Snow>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
