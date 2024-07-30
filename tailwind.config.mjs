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
				min: '10px', // 10px
				sm: '0.75rem', // 12px
				'2sm': '0.875rem', // 14px
				base: '1rem',
				md: '1.25rem', // 20px
				'2md': '1.5rem', // 24px
				'header-sp': '1.625rem', // 26px
				header: '1.75rem', // 28px
				xl: '',
				'2xl': '2rem', // 32px
				'3xl': '2.25rem', // 36px
				'4xl': '3rem',// 48px
				'kv': '6rem',
			},
			gap: {
				'20': '1.25rem', // 20px
				'30': '1.875rem',  // 30pxを1.875remに設定
			},
			padding: {
				'100': '6.25rem', // 100px
				'container-sp': '4vw', // (15 / 375) * 100vw
				'slider': '1.875rem' // 30px
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
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			},
			animation: {
				fadeIn: 'fadeIn 0.5s ease-in-out',
				fadeOut: 'fadeOut 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
}
