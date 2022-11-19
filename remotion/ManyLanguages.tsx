import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ORANGE, ORANGE_BACKGROUND } from "../src/palette";
import { C } from "./icons/C";
import { Dart } from "./icons/Dart";
import { Elixir } from "./icons/Elixir";
import { Erlang } from "./icons/Erlang";
import { Flutter } from "./icons/Flutter";
import { Go } from "./icons/Go";
import { Haskell } from "./icons/Haskell";
import { Javascript } from "./icons/Javascript";
import { Php } from "./icons/Php";
import { Python } from "./icons/Python";
import { Ruby } from "./icons/Ruby";
import { Rust } from "./icons/Rust";
import { Scala } from "./icons/Scala";
import { Swift } from "./icons/Swift";
import { Typescript } from "./icons/Typescript";
import { Zig } from "./icons/Zig";

const title: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 90,
  fontFamily: "Jelle",
  paddingLeft: 70,
  paddingRight: 70,
  textAlign: "center",
  color: ORANGE,
};

const row: React.CSSProperties = {
  flexDirection: "row",
  display: "flex",
  flex: 1,
  perspective: 900,
};

const item = (
  frame: number,
  fps: number,
  index: number
): React.CSSProperties => {
  const progress = spring({
    frame: frame - 40 - index * 1,
    fps,
    config: {
      damping: 200,
    },
  });

  const rad = interpolate(progress, [0, 1], [-Math.PI, 0]);

  return {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    opacity: rad < -Math.PI / 2 ? 0 : 1,
    position: "relative",
    transform: `rotateX(${rad}rad)`,
  };
};

export const ManyLanguages: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill
      style={{
        backgroundColor: ORANGE_BACKGROUND,
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={title}>Out of all the languages out there...</div>
      </AbsoluteFill>
      <div style={row}>
        <div style={item(frame, fps, 0)}>
          <Ruby></Ruby>
        </div>
        <div style={item(frame, fps, 1)}>
          <Rust></Rust>
        </div>
        <div style={item(frame, fps, 2)}>
          <Typescript></Typescript>
        </div>
        <div style={item(frame, fps, 3)}>
          <C></C>
        </div>
      </div>
      <div style={row}>
        <div style={item(frame, fps, 4)}>
          <Dart></Dart>
        </div>
        <div style={item(frame, fps, 5)}>
          <Elixir></Elixir>
        </div>
        <div style={item(frame, fps, 6)}>
          <Erlang></Erlang>
        </div>
        <div style={item(frame, fps, 7)}>
          <Flutter></Flutter>
        </div>
      </div>
      <div style={row}>
        <div style={item(frame, fps, 8)}>
          <Go></Go>
        </div>
        <div style={item(frame, fps, 9)}>
          <Javascript></Javascript>
        </div>
        <div style={item(frame, fps, 10)}>
          <Scala></Scala>
        </div>
        <div style={item(frame, fps, 11)}>
          <Php></Php>
        </div>
      </div>
      <div style={row}>
        <div style={item(frame, fps, 12)}>
          <Python></Python>
        </div>
        <div style={item(frame, fps, 13)}>
          <Swift></Swift>
        </div>
        <div style={item(frame, fps, 14)}>
          <Zig></Zig>
        </div>
        <div style={item(frame, fps, 15)}>
          <Haskell></Haskell>
        </div>
      </div>
    </AbsoluteFill>
  );
};
