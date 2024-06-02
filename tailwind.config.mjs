/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'th-body': '"Noto Sans Thai", "Noto Sans", sans-serif',
				'th-heading': '"Noto Sans Thai", "Noto Sans", sans-serif',
			},
			colors: {
				'th-color-1': '#0c4da2',
				'th-color-2': '#3476ae',
				'th-color-noti': '#cb1515',
				'th-text-1': '#333',
				'th-text-2': '#71767f',
				'th-text-3': '#14314f',
				'th-text-4': '#222',
				'th-bg-1': '#fff',
				'th-bg-2': '#f5f5f7',
				'th-bg-dark': '#161d44',
				'th-border-1': '#d2d2d7',
				'th-border-2': '#e2e2e7',
				'th-head-text': '#333',
				'th-head-bg': '#fff',
				'th-nav-text': '#fff',
				'th-nav-bg': '#0c4da2',
				'th-foot-text': '#ffffffcc',
				'th-foot-bg': '#161d44',
				'th-link-1': '#0c4da2',
				'th-link-2': '#3476ae',
			},
			spacing: {
				'th-gap': '1rem',
				'th-space': '1rem',
				'th-width-sm': '790px',
				'th-width-lg': '1180px',
			},
			fontWeight: {
				'th-heading-weight': '700',
			},
			boxShadow: {
				'th-shadow-1': '0 0.5px 2px rgba(0, 0, 0, 0.16)',
				'th-shadow-2': '0 4px 12px rgba(0, 0, 0, 0.08)',
			},
			borderRadius: {
				'th-rounded-1': '3px',
				'th-rounded-2': '5px',
			}
		},
	},
	plugins: [
		function ({ addVariant }) {
      addVariant('width-sm', '.width-sm &')
			addVariant('has-sub', '.has-sub &')
			addVariant('_dark', '._dark &')
			addVariant('size-m', '.size-m &')
			addVariant('size-l', '.size-l &')
    }
	],
}
