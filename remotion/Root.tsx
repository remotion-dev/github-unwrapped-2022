import {Composition, Folder, Still} from 'remotion';
import {COMP_NAME} from '../src/config';
import {all} from './all';
import {Flashcard} from './Flashcard';
import {Main} from './Main';
import {mapResponseToStats} from './map-response-to-stats';
import {TopWeekdays2022} from './Weekday2022';
import {TitleCard} from './TitleCard';
import {WaterColour} from './WaterColour';
import {Snow} from './Snow';
import {Title} from './Title2022';
import {AvgCommits} from './AvgCommits';
import {TopLang} from './TopLang';
import {TypeScript} from './Languages/Typescript';
import {JavaScript} from './Languages/JavaScript';
import {Java} from './Languages/Java';
import {Clojure} from './Languages/Clojure';
import {CMake} from './Languages/CMake';
import {Vue} from './Languages/Vue';
import {CoffeeScript} from './Languages/CoffeeScript';
import {Kotlin} from './Languages/Kotlin';
import {CPlusPlus} from './Languages/CPlusPlus';
import {Solidity} from './Languages/Solidity';
import {Flutter} from './Languages/Flutter';
import {SQL} from './Languages/SQL';
import {Haskell} from './Languages/Haskell';
import {Lua} from './Languages/Lua';
import {Python} from './Languages/Python';
import {PowerShell} from './Languages/PowerShell';
import {Ruby} from './Languages/Ruby';
import {Html} from './Languages/HTML';
import {Scala} from './Languages/Scala';
import {Php} from './Languages/Php';
import {Swift} from './Languages/Swift';
import {Css} from './Languages/Css';
import {GraphQL} from './Languages/GraphQl';
import {RLang} from './Languages/RLang';
import {Rust} from './Languages/Rust';
import {Sass} from './Languages/Sass';
import {IssuesOpened2022} from './IssuesOpened';
import {TreeComp} from './TreeComp';
import {LogoComp} from './LogoComp';
import {GithubComp} from './GithubComp';
import {TreeGithub} from './TreeGithub';
import {SockComp} from './SockComp';
import {Socks} from './Socks';
import {GiftBox} from './GiftBox';
import {WallHanger} from './WallHanger';

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
				component={TopWeekdays2022}
				durationInFrames={300}
				fps={30}
				height={1080}
				width={1080}
				id="top-weekdays-2022"
				defaultProps={{
					noBackground: false,
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
					noBackground: false,
				}}
			></Composition>
			<Composition
				component={Snow}
				durationInFrames={1200}
				fps={30}
				height={1080}
				width={1080}
				id="snow"
				defaultProps={{
					windPushes: undefined,
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
					noBackground: false,
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
				<Composition
					component={CMake}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="cmake"
				></Composition>
				<Composition
					component={Vue}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="vue"
				></Composition>
				<Composition
					component={CoffeeScript}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="coffeescript"
				></Composition>
				<Composition
					component={Kotlin}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="kotlin"
				></Composition>
				<Composition
					component={CPlusPlus}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="cplusplus"
				></Composition>
				<Composition
					component={Solidity}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="solidity"
				></Composition>
				<Composition
					component={Flutter}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="flutter"
				></Composition>
				<Composition
					component={SQL}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="mysql"
				></Composition>
				<Composition
					component={Haskell}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="haskell"
				></Composition>
				<Composition
					component={Lua}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="lua"
				></Composition>
				<Composition
					component={Python}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="python"
				></Composition>
				<Composition
					component={PowerShell}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="powershell"
				></Composition>
				<Composition
					component={Ruby}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="ruby"
				></Composition>
				<Composition
					component={Html}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="html"
				></Composition>
				<Composition
					component={Scala}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="scala"
				></Composition>
				<Composition
					component={Php}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="php"
				></Composition>
				<Composition
					component={Swift}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="swift"
				></Composition>
				<Composition
					component={Css}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="css"
				></Composition>
				<Composition
					component={GraphQL}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="graphql"
				></Composition>
				<Composition
					component={RLang}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="r"
				></Composition>
				<Composition
					component={Rust}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="rust"
				></Composition>
				<Composition
					component={Sass}
					height={1000}
					width={1000}
					durationInFrames={50}
					fps={30}
					id="sass"
				></Composition>
			</Folder>
			<Composition
				component={IssuesOpened2022}
				height={1000}
				width={1000}
				durationInFrames={250}
				fps={30}
				id="Issues"
			></Composition>
			<Composition
				component={TreeComp}
				height={1000}
				width={1000}
				durationInFrames={250}
				fps={30}
				id="Tree"
			></Composition>
			<Composition
				component={LogoComp}
				height={1000}
				width={1000}
				durationInFrames={250}
				fps={30}
				id="Logo"
			></Composition>
			<Composition
				component={GithubComp}
				height={1000}
				width={1000}
				durationInFrames={250}
				fps={30}
				id="Github"
			></Composition>
			<Composition
				component={TreeGithub}
				height={1000}
				width={1000}
				durationInFrames={250}
				fps={30}
				id="TreeGithub"
			></Composition>
			<Composition
				component={SockComp}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="SockComp"
			></Composition>
			<Composition
				component={Socks}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="Socks"
			></Composition>
			<Composition
				component={GiftBox}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="BottomBox"
			></Composition>
			<Composition
				component={WallHanger}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="WallHanger"
			></Composition>
		</>
	);
};
