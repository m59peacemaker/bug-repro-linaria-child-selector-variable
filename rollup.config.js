import linaria from 'linaria/rollup'
import css from 'rollup-plugin-css-only'
import babel from "@rollup/plugin-babel"
import serve from 'rollup-plugin-serve'
import node from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife'
	},
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		linaria({

		}),
		css({
			output: 'dist/styles.css'
		}),
		babel({
			babelHelpers: 'bundled',
			exclude: "node_modules/**",
			presets: [ "@babel/preset-env", "@babel/preset-react" ]
		}),
		node(),
		commonjs(),
		serve({ contentBase: 'dist', port: 3001 })
	]
}
