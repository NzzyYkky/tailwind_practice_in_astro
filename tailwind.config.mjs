/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			header: '1.75rem', // 28px
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		},
		lineHeight: {
			'tight': '1.2',
		},
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
		},
	},
	plugins: [],
}
