// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			favicon: '/favicon.png',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			logo: {
				light: './src/assets/wdq-black-logo.png',
				dark: './src/assets/wdq-white-logo.png',
			},
			social: {
				github: 'https://github.com/jr-frazier',
			},
			// components: {
			//
			// 	Sidebar: './src/components/starlight/Sidebar.astro',
			// },
		}),
	],
});
