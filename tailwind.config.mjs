/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': [
					'Noto Sans JP',
					'sans-serif',
					'游ゴシック',
					'YuGothic',
					'Hiragino Kaku Gothic Pro',
					'ヒラギノ角ゴ Pro W3',
					'メイリオ',
					'Meiryo',
					'ＭＳ Ｐゴシック',
					'Helvetica',
					'Arial',
					'Verdana'
				],
				'raleway': ['Raleway', 'sans-serif'], // Ralewayフォントを追加
			},
			maxWidth: {
				'screen-lg': '1120px',
			},
			fontSize: {
				sm: '0.75rem', // 12px
				base: '1rem',
				md: '1.25rem', // 20px
				header: '1.75rem', // 28px
				xl: '3rem',
				'2xl': '2rem', // 32px
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'kv': '6rem',
			},
			lineHeight: {
				'tight': '1.2',
				'normal': '1.4'
			},
			colors: {
				'kv-bg': '#E4E4E4',
				'card-bg': '#DADADA',
				'section-bg': '#D9D9D9',
				'footer': '#D9D9D9',
			},
		},
	},
	plugins: [],
}
