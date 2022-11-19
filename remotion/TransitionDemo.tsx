import React from "react";
import { AbsoluteFill } from "remotion";
import { Transition } from "./Transition";

export const TransitionDemo: React.FC = () => {
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          backgroundColor: "red",
        }}
      >
        <h1>A</h1>
      </AbsoluteFill>
      <Transition>
        <h1>B</h1>
      </Transition>
    </AbsoluteFill>
  );
};
