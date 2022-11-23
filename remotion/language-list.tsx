import React, {SVGProps} from 'react';
import {Java} from './Languages/Java';
import {JavaScript} from './Languages/JavaScript';
import {TypeScript} from './Languages/Typescript';

export type LangMapping = {
	name: string;
	icon: string;
	Component?: React.FC<SVGProps<SVGSVGElement>>;
};

// TODO: Use it
const NotLanguages = ['Markdown', 'Dockerfile'];

export const languageList: LangMapping[] = [
	{
		icon: 'clojure.svg',
		name: 'Clojure',
	},
	{
		icon: 'cmake.svg',
		name: 'CMake',
	},
	{
		icon: 'coffee-script.svg',
		name: 'CoffeeScript',
	},
	{
		icon: 'cplusplus.svg',
		name: 'C++',
	},
	{
		icon: 'css-alt.svg',
		name: 'CSS',
	},
	{
		icon: 'ethereum.svg',
		name: 'Solidity',
	},
	{
		icon: 'flutter.svg',
		name: 'Dart',
	},
	{
		icon: 'graphql.svg',
		name: 'GraphQL',
	},
	{
		icon: 'haskell.svg',
		name: 'Haskell',
	},
	{
		icon: 'html.svg',
		name: 'HTML',
	},
	{
		icon: 'java.svg',
		name: 'Java',
		Component: Java,
	},
	{
		icon: 'javascript.svg',
		name: 'JavaScript',
		Component: JavaScript,
	},
	{
		icon: 'kotlin.svg',
		name: 'Kotlin',
	},
	{
		icon: 'lua.svg',
		name: 'Lua',
	},
	{
		icon: 'markdown.svg',
		name: 'Markdown',
	},
	{
		icon: 'mysql.svg',
		name: 'SQL',
	},
	{
		icon: 'php.svg',
		name: 'PHP',
	},
	{
		icon: 'powershell.svg',
		name: 'PowerShell',
	},
	{
		icon: 'python.svg',
		name: 'Python',
	},
	{
		icon: 'r-project.svg',
		name: 'R',
	},
	{
		icon: 'reason.svg',
		name: 'Reason',
	},
	{
		icon: 'ruby.svg',
		name: 'Ruby',
	},
	{
		icon: 'rust.svg',
		name: 'Rust',
	},
	{
		icon: 'sass.svg',
		name: 'Sass',
	},
	{
		icon: 'scala.svg',
		name: 'Scale',
	},
	{
		icon: 'swift.svg',
		name: 'Swift',
	},
	{
		icon: 'typescript.svg',
		name: 'TypeScript',
		Component: TypeScript,
	},
	{
		icon: 'vue.svg',
		name: 'Vue',
	},
];
