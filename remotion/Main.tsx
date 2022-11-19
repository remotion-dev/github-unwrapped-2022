import React from "react";
import { AbsoluteFill, Audio, Series } from "remotion";
import { Contributions } from "./Contrib";
import { EndCard } from "./EndCard";
import { EndCard2 } from "./EndCard2";
import { Issues } from "./Issues";
import { Lang } from "./Lang";
import { ManyLanguages } from "./ManyLanguages";
import { CompactStats } from "./map-response-to-stats";
import { TitleCard } from "./TitleCard";
import { TopWeekDays } from "./TopWeekday";
import { Transition } from "./Transition";

export const Main: React.FC<{
  stats: CompactStats;
  enableDecoration: boolean;
}> = ({ stats, enableDecoration }) => {
  if (!stats) {
    return null;
  }

  return (
    <AbsoluteFill>
      <Audio src="https://jonnyburger.s3.eu-central-1.amazonaws.com/the-librarian.mp3"></Audio>
      <Series>
        <Series.Sequence durationInFrames={130}>
          <TitleCard
            enableDecoration={enableDecoration}
            stats={stats}
          ></TitleCard>
        </Series.Sequence>
        <Series.Sequence durationInFrames={120} offset={-25}>
          <Transition>
            <ManyLanguages></ManyLanguages>
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={120} offset={-25}>
          <Transition>
            <Lang stats={stats}></Lang>
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={260} offset={-25}>
          <Transition>
            <Contributions stats={stats}></Contributions>
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={220} offset={-25}>
          <Transition>
            <Issues stats={stats}></Issues>
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={120} offset={-25}>
          <Transition>
            <TopWeekDays stats={stats}></TopWeekDays>
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={85} offset={-25}>
          <Transition>
            <EndCard
              enableDecoration={enableDecoration}
              stats={stats}
            ></EndCard>
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={150} offset={-25}>
          <Transition>
            <EndCard2 />
          </Transition>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
