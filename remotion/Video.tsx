import {Composition, Folder, Still} from 'remotion';
import {COMP_NAME} from '../src/config';
import {all} from './all';
import {Flashcard} from './Flashcard';
import {Issues} from './Issues';
import {Main} from './Main';
import {mapResponseToStats} from './map-response-to-stats';
import {TopWeekdays2022} from './Weekday2022';
import {TitleCard} from './TitleCard';
import {TransitionDemo} from './TransitionDemo';
import {WaterColour} from './WaterColour';
import {Snow} from './Snow';
import {Title} from './Title2022';
import {AvgCommits} from './AvgCommits';
import {TopLang} from './TopLang';
import {TypeScript} from './Languages/Typescript';
import {JavaScript} from './Languages/JavaScript';
import {Java} from './Languages/Java';
import {Clojure} from './Languages/Clojure';

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
				component={TopWeekdays2022}
				durationInFrames={300}
				fps={30}
				height={1080}
				width={1080}
				id="top-weekdays-2022"
				defaultProps={{
					stats: mapResponseToStats(all),
				}}
			></Composition>
			<Composition
				component={WaterColour}
				durationInFrames={300}
				fps={30}
				height={1080}
				width={1080}
				id="water"
				defaultProps={{
					stats: mapResponseToStats(all),
				}}
			></Composition>
			<Composition
				component={AvgCommits}
				durationInFrames={300}
				fps={30}
				height={1080}
				width={1080}
				id="commits"
				defaultProps={{
					stats: mapResponseToStats(all),
				}}
			></Composition>
			<Composition
				component={Snow}
				durationInFrames={300}
				fps={30}
				height={1080}
				width={1080}
				id="snow"
				defaultProps={{
					stats: mapResponseToStats(all),
				}}
			></Composition>
			<Composition
				component={Title}
				durationInFrames={300}
				fps={30}
				height={1080}
				width={1080}
				id="title"
				defaultProps={{
					avatar: mapResponseToStats(all).avatar,
				}}
			></Composition>
			<Composition
				component={TopLang}
				durationInFrames={300}
				fps={30}
				height={1080}
				width={1080}
				id="languages"
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
			<Folder name="languages">
				<Composition
					component={TypeScript}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="typescript"
				></Composition>
				<Composition
					component={JavaScript}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="javascript"
				></Composition>
				<Composition
					component={Java}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="java"
				></Composition>
				<Composition
					component={Clojure}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="clojure"
				></Composition>
			</Folder>
		</>
	);
};
