// cardVariants.ts
import { tv } from 'tailwind-variants';

export const container = tv(
	{
		base: 'mx-auto w-full max-w-screen-lg',
		variants: {
			wide: {
				header: 'mx-auto w-full max-w-[none] px-[160px] h-[60px]',
			},
		},
	},
	{
		responsiveVariants: ['sm', 'md'],
	}
);
