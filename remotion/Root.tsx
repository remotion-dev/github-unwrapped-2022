import {Composition, Folder, Still} from 'remotion';
import {COMP_NAME, DURATION} from '../src/config';
import {all} from './all';
import {Flashcard} from './Flashcard';
import {Main} from './Main';
import {mapResponseToStats} from './map-response-to-stats';
import {TopWeekdays2022} from './TopWeekdays';
import {TitleCard} from './TitleCard';
import {Snow} from './Snow';
import {Title} from './Title2022';
import {AvgCommits} from './AvgCommits';
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
import {IssuesOpened} from './IssuesOpened';
import {TreeComp} from './TreeComp';
import {LogoComp} from './LogoComp';
import {GithubComp} from './GithubComp';
import {TreeGithub} from './TreeGithub';
import {SockComp} from './SockComp';
import {Socks} from './Socks';
import {WallHanger} from './WallHanger';
import {AvatarFrame} from './AvatarFrame';
import {Unwrap} from './Unwrap';
import {Commit} from './Commit';
import {BestCommits} from './BestCommits';
import {mapApiResponseToCommits} from './map-api-response-to-commits';
import {commits} from './commits';
import {backendResponseToBackendStats} from '../src/get-all';
import {Loader} from './Loader';
import {blueTheme, goldenTheme, redTheme} from './theme';
import {LanguageToSocks} from './LanguageToSocks';
import {EndCard} from './EndCard';
import {OG} from './og/Og';
import React from 'react';

export const Root: React.FC = () => {
	return (
		<>
			<Composition
				component={Main}
				durationInFrames={DURATION}
				fps={30}
				height={1080}
				width={1080}
				id={COMP_NAME}
				defaultProps={{
					stats: mapResponseToStats(
						backendResponseToBackendStats(all),
						mapApiResponseToCommits(commits)
					),
					theme: redTheme,
				}}
			></Composition>
			<Composition
				component={Main}
				durationInFrames={DURATION}
				fps={30}
				height={1080}
				width={1080}
				id={`${COMP_NAME}-blue`}
				defaultProps={{
					stats: mapResponseToStats(
						backendResponseToBackendStats(all),
						mapApiResponseToCommits(commits)
					),
					theme: blueTheme,
				}}
			></Composition>
			<Composition
				component={Main}
				durationInFrames={DURATION}
				fps={30}
				height={1080}
				width={1080}
				id={`${COMP_NAME}-gold`}
				defaultProps={{
					stats: mapResponseToStats(
						backendResponseToBackendStats(all),
						mapApiResponseToCommits(commits)
					),
					theme: goldenTheme,
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
					username: 'JonnyBurger',
					theme: redTheme,
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
					stats: mapResponseToStats(
						backendResponseToBackendStats(all),
						mapApiResponseToCommits(commits)
					),
					theme: redTheme,
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
					theme: goldenTheme,
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
					theme: redTheme,
					noBackground: false,
					userStats: mapResponseToStats(
						backendResponseToBackendStats(all),
						mapApiResponseToCommits(commits)
					),
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
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="typescript"
				></Composition>
				<Composition
					component={JavaScript}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="javascript"
				></Composition>
				<Composition
					component={Java}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="java"
				></Composition>
				<Composition
					component={Clojure}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="clojure"
				></Composition>
				<Composition
					component={CMake}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="cmake"
				></Composition>
				<Composition
					component={Vue}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="vue"
				></Composition>
				<Composition
					component={CoffeeScript}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="coffeescript"
				></Composition>
				<Composition
					component={Kotlin}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="kotlin"
				></Composition>
				<Composition
					component={CPlusPlus}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="cplusplus"
				></Composition>
				<Composition
					component={Solidity}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="solidity"
				></Composition>
				<Composition
					component={Flutter}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="flutter"
				></Composition>
				<Composition
					component={SQL}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="mysql"
				></Composition>
				<Composition
					component={Haskell}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="haskell"
				></Composition>
				<Composition
					component={Lua}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="lua"
				></Composition>
				<Composition
					component={Python}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="python"
				></Composition>
				<Composition
					component={PowerShell}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="powershell"
				></Composition>
				<Composition
					component={Ruby}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="ruby"
				></Composition>
				<Composition
					component={Html}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="html"
				></Composition>
				<Composition
					component={Scala}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="scala"
				></Composition>
				<Composition
					component={Php}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="php"
				></Composition>
				<Composition
					component={Swift}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="swift"
				></Composition>
				<Composition
					component={Css}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="css"
				></Composition>
				<Composition
					component={GraphQL}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="graphql"
				></Composition>
				<Composition
					component={RLang}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="r"
				></Composition>
				<Composition
					component={Rust}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="rust"
				></Composition>
				<Composition
					component={Sass}
					height={1080}
					width={1080}
					durationInFrames={50}
					fps={30}
					id="sass"
				></Composition>
			</Folder>
			<Composition
				component={IssuesOpened}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="NoIssues"
				defaultProps={{
					noBackground: false,
					issues: {
						closed: 0,
						open: 0,
					},
					theme: redTheme,
				}}
			></Composition>
			<Composition
				component={IssuesOpened}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="FewIssues"
				defaultProps={{
					noBackground: false,
					issues: {
						closed: 2,
						open: 2,
					},
					theme: redTheme,
				}}
			></Composition>
			<Composition
				component={IssuesOpened}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="50Issues"
				defaultProps={{
					noBackground: false,
					issues: {
						closed: 54,
						open: 11,
					},
					theme: redTheme,
				}}
			></Composition>
			<Composition
				component={TreeComp}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="Tree"
			></Composition>
			<Composition
				component={LogoComp}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="Logo"
			></Composition>
			<Composition
				component={GithubComp}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="Github"
			></Composition>
			<Composition
				component={TreeGithub}
				height={1080}
				width={1080}
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
				defaultProps={{
					theme: redTheme,
					noBackground: false,
					topLanguages: [
						{
							color: 'red',
							name: 'CSS',
						},
						{
							color: 'red',
							name: 'Bash',
						},
						{
							color: 'red',
							name: 'Bash',
						},
					],
				}}
			></Composition>
			<Composition
				component={OG}
				height={630}
				width={1200}
				durationInFrames={250}
				fps={30}
				id="OG"
				defaultProps={{
					theme: redTheme,
					userStats: mapResponseToStats(
						backendResponseToBackendStats(all),
						mapApiResponseToCommits(commits)
					),
				}}
			></Composition>
			<Composition
				component={WallHanger}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="WallHanger"
			></Composition>
			<Composition
				component={AvatarFrame}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="AvatarFrame"
			></Composition>
			<Composition
				component={TitleCard}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="TitleCard"
			></Composition>
			<Composition
				component={Unwrap}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="Unwrap"
			></Composition>
			<Composition
				component={Commit}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="Commit"
				defaultProps={{
					message: 'fix wrong type',
					index: 0,
					repository: 'remotion/remotion-dev',
					theme: redTheme,
				}}
			></Composition>
			<Composition
				component={BestCommits}
				height={1080}
				width={1080}
				durationInFrames={250}
				fps={30}
				id="BestCommits"
				defaultProps={{
					stats: mapResponseToStats(
						backendResponseToBackendStats(all),
						mapApiResponseToCommits(commits)
					),
					theme: redTheme,
					noBackground: false,
				}}
			></Composition>
			<Composition
				component={Loader}
				height={1080}
				width={1080}
				durationInFrames={65}
				fps={30}
				id="Loader"
			></Composition>
			<Composition
				component={LanguageToSocks}
				height={1080}
				width={1080}
				durationInFrames={180}
				fps={30}
				id="TopLanguages"
				defaultProps={{
					theme: redTheme,
					noBackground: true,
					topLanguages: [
						{
							color: 'red',
							name: 'CSS',
						},
						{
							color: 'red',
							name: 'Bash',
						},
						{
							color: 'red',
							name: 'Bash',
						},
					],
				}}
			></Composition>
			<Composition
				component={EndCard}
				height={1080}
				width={1080}
				durationInFrames={180}
				fps={30}
				id="EndCard"
				defaultProps={{
					theme: redTheme,
					noBackground: true,
				}}
			></Composition>
		</>
	);
};
