import { defineConfig } from 'vite';
import HublPostCSSCleaner from './build/rollup-plugin-hubl-cleaner';
import HublParser from '@spingroup/postcss-hubl/hubl-parse';
import postcssImport from 'postcss-import';

export default defineConfig({
	plugins: [HublPostCSSCleaner()],
	publicDir: false,
	build: {
		outDir: './src/theme/my-theme/styles/',
		minify: false,
		rollupOptions: {
		watch: {
			include: ['./src/theme/my-theme/styles/*'],
		},
		input: {
			main: './src/theme/my-theme/assets/css/main.hubl.css',
		},
		output: {
			assetFileNames: '[name].hubl.[ext]',
		},
		},
	},
	css: {
		postcss: {
			parser: HublParser,
			plugins: [
				postcssImport(),
			],
		},
	},
});