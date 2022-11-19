import { Composition, Still } from "remotion";
import { COMP_NAME } from "../src/config";
import { all } from "./all";
import { Contributions } from "./Contrib";
import { DecorativeLines } from "./DecorativeLines";
import { Flashcard } from "./Flashcard";
import { Issues } from "./Issues";
import { Main } from "./Main";
import { ManyLanguages } from "./ManyLanguages";
import { mapResponseToStats } from "./map-response-to-stats";
import { TitleCard } from "./TitleCard";
import { TopWeekDays } from "./TopWeekday";
import { TransitionDemo } from "./TransitionDemo";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        component={Main}
        durationInFrames={990}
        fps={30}
        height={1080}
        width={1080}
        id={COMP_NAME}
        defaultProps={{
          enableDecoration: true,
          stats: mapResponseToStats(all),
        }}
      ></Composition>
      <Composition
        component={Contributions}
        durationInFrames={400}
        fps={30}
        height={1080}
        width={1080}
        id={"contributions"}
        defaultProps={{
          stats: mapResponseToStats(all),
        }}
      ></Composition>
      <Composition
        component={ManyLanguages}
        durationInFrames={300}
        fps={30}
        height={1080}
        width={1080}
        id="many-languages"
      ></Composition>
      <Composition
        component={TitleCard}
        durationInFrames={300}
        fps={30}
        height={1080}
        width={1080}
        id="title-card"
        defaultProps={{
          enableDecoration: false,
          stats: mapResponseToStats(all),
        }}
      ></Composition>
      <Composition
        component={TransitionDemo}
        durationInFrames={300}
        fps={30}
        height={1080}
        width={1080}
        id="transition"
      ></Composition>
      <Composition
        component={TopWeekDays}
        durationInFrames={300}
        fps={30}
        height={1080}
        width={1080}
        id="weekdays"
        defaultProps={{
          stats: mapResponseToStats(all),
        }}
      ></Composition>
      <Composition
        component={Issues}
        durationInFrames={300}
        fps={30}
        height={1080}
        width={1080}
        id="issues"
        defaultProps={{
          stats: mapResponseToStats(all),
        }}
      ></Composition>
      <Composition
        component={DecorativeLines}
        durationInFrames={300}
        fps={30}
        height={1080}
        width={1080}
        id="decorative-lines"
        defaultProps={{
          stats: mapResponseToStats(all),
        }}
      ></Composition>
      <Still
        component={Flashcard}
        height={630}
        width={1200}
        id="flashcard"
      ></Still>
    </>
  );
};
