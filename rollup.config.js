import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import multiInput from 'rollup-plugin-multi-input';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const commonJsConfig = {
	input: 'src/components/index.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
	],
	plugins: [
	peerDepsExternal(),
	babel({
		exclude: 'node_modules/**',
		presets: ['@babel/preset-env', '@babel/preset-react'],
		babelHelpers: 'bundled',
	}),
	image(),
	postcss({
		modules: true,
	}),
	nodeResolve({ extensions: ['.js', '.jsx'] }),
	commonjs({ include: /node_modules/ }),
	json(),
	],
	external: [
	'react',
	'react-dom',
	'prop-types',
	'formik'
	],
};

const esmConfig = {
	input: ['src/components/**/*.js'],
	experimentalCodeSplitting: true,
	output: [
		{ dir: pkg.module, format: 'esm' },
	],
	plugins: [
		multiInput(),
		peerDepsExternal(),
		babel({
			exclude: 'node_modules/**',
			presets: ['@babel/preset-env', '@babel/preset-react'],
			babelHelpers: 'bundled',
		}),
		resolve({
			mainFields: ['module', 'main', 'jsnext:main', 'browser'],
			extensions
		}),
		image(),
		postcss({
			modules: true,
		}),
		nodeResolve({ extensions: ['.js', '.jsx'] }),
		commonjs({ include: /node_modules/ }),
		json(),
	],
	external: [
		'react',
		'react-dom',
		'prop-types',
		'formik'
	]
};

export default [
	commonJsConfig,
	esmConfig
]
