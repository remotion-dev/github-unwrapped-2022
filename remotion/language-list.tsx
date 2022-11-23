import React, {SVGProps} from 'react';
import {Clojure} from './Languages/Clojure';
import {CMake} from './Languages/CMake';
import {CoffeeScript} from './Languages/CoffeeScript';
import {CPlusPlus} from './Languages/CPlusPlus';
import {Css} from './Languages/Css';
import {Flutter} from './Languages/Flutter';
import {GraphQL} from './Languages/GraphQl';
import {Haskell} from './Languages/Haskell';
import {Html} from './Languages/HTML';
import {Java} from './Languages/Java';
import {JavaScript} from './Languages/JavaScript';
import {Kotlin} from './Languages/Kotlin';
import {Lua} from './Languages/Lua';
import {Php} from './Languages/Php';
import {PowerShell} from './Languages/PowerShell';
import {Python} from './Languages/Python';
import {Reason} from './Languages/Reason';
import {RLang} from './Languages/RLang';
import {Ruby} from './Languages/Ruby';
import {Rust} from './Languages/Rust';
import {Sass} from './Languages/Sass';
import {Scala} from './Languages/Scala';
import {Solidity} from './Languages/Solidity';
import {SQL} from './Languages/SQL';
import {Swift} from './Languages/Swift';
import {TypeScript} from './Languages/Typescript';
import {Vue} from './Languages/Vue';

export type LangMapping = {
	name: string;
	Component: React.FC<SVGProps<SVGSVGElement>>;
};

// TODO: Use it
const NotLanguages = ['Markdown', 'Dockerfile'];

export const languageList: LangMapping[] = [
	{
		name: 'Clojure',
		Component: Clojure,
	},
	{
		name: 'CMake',
		Component: CMake,
	},
	{
		name: 'CoffeeScript',
		Component: CoffeeScript,
	},
	{
		name: 'C++',
		Component: CPlusPlus,
	},
	{
		name: 'CSS',
		Component: Css,
	},
	{
		name: 'Solidity',
		Component: Solidity,
	},
	{
		name: 'Dart',
		Component: Flutter,
	},
	{
		name: 'GraphQL',
		Component: GraphQL,
	},
	{
		name: 'Haskell',
		Component: Haskell,
	},
	{
		name: 'HTML',
		Component: Html,
	},
	{
		name: 'Java',
		Component: Java,
	},
	{
		name: 'JavaScript',
		Component: JavaScript,
	},
	{
		name: 'Kotlin',
		Component: Kotlin,
	},
	{
		name: 'Lua',
		Component: Lua,
	},
	{
		name: 'SQL',
		Component: SQL,
	},
	{
		name: 'PHP',
		Component: Php,
	},
	{
		name: 'PowerShell',
		Component: PowerShell,
	},
	{
		name: 'Python',
		Component: Python,
	},
	{
		name: 'R',
		Component: RLang,
	},
	{
		name: 'Reason',
		Component: Reason,
	},
	{
		name: 'Ruby',
		Component: Ruby,
	},
	{
		name: 'Rust',
		Component: Rust,
	},
	{
		name: 'Sass',
		Component: Sass,
	},
	{
		name: 'Scala',
		Component: Scala,
	},
	{
		name: 'Swift',
		Component: Swift,
	},
	{
		name: 'TypeScript',
		Component: TypeScript,
	},
	{
		name: 'Vue',
		Component: Vue,
	},
];
