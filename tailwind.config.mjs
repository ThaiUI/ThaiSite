/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'th-body': '"Noto Sans Thai", "Noto Sans", sans-serif',
				'th-heading': '"Noto Sans Thai", "Noto Sans", sans-serif',
				'monospace': 'monospace',
			},
			colors: {
				'th-color-1': '#0c4da2',
				'th-color-1-dark': '#0c4da2',
				'th-color-2': '#3476ae',
				'th-color-2-dark': '#3476ae',
				'th-color-noti': '#cb1515',
				'th-color-noti-dark': '#cb1515',
				'th-text-1': '#333',
				'th-text-1-dark': '#e4e6eb',
				'th-text-2': '#71767f',
				'th-text-2-dark': '#b0b3b8',
				'th-text-3': '#14314f',
				'th-text-3-dark': '#fff',
				'th-text-4': '#222',
				'th-text-4-dark': '#fff',
				'th-text-5': '#64717c',
				'th-text-5-dark': '#fff',
				'th-text-6': '#757575',
				'th-text-5-dark': '#fff',
				'th-bg-1': '#fff',
				'th-bg-1-dark': '#242426',
				'th-bg-2': '#f5f5f7',
				'th-bg-2-dark': '#1c1e21',
				'th-bg-3': '#e9eff8',
				'th-bg-3-dark': '#313131',
				'th-bg-4': '#f5f5f5',
				'th-bg-4-dark': '#313131',
				'th-bg-5': '#2060b6',
				'th-bg-5-dark': '#1c1e21',
				'th-bg-dark': '#161d44',
				'th-bg-dark-dark': '#000',
				'th-border-1': '#d2d2d7',
				'th-border-1-dark': '#444',
				'th-border-2': '#e2e2e7',
				'th-border-2-dark': '#333',
				'th-head-text': '#333',
				'th-head-text-dark': '#fff',
				'th-head-bg': '#fff',
				'th-head-bg-dark': '#242426',
				'th-nav-text': '#fff',
				'th-nav-bg': '#0c4da2',
				'th-nav-bg-dark': '#313131',
				'th-foot-text': '#ffffffcc',
				'th-foot-bg': '#161d44',
				'th-foot-bg-dark': '#000',
				'th-foot-bg-2': '#14314f',
				'th-foot-bg-2-dark': '#000',
				'th-link-1': '#0c4da2',
				'th-link-1-dark': '#fff',
				'th-link-2': '#3476ae',
				'th-link-2-dark': '#3476ae',
				'th-nav-overlay-dark': '#11176dee',
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
			},
			backgroundImage: {
        'slogan': "url('/img/bg-slogan.jpg')",
      }
		},
	},
	plugins: [
		function ({ addVariant }) {
      addVariant('width-sm', '.width-sm &')
			addVariant('has-sub', '.has-sub &')
			addVariant('size-m', '.size-m &')
			addVariant('size-l', '.size-l &')
    }
	],
	darkMode: 'class',
}
