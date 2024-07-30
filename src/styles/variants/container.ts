// cardVariants.ts
import { tv } from 'tailwind-variants';

export const container = tv(
	{
		base: 'mx-auto px-container-sp w-full md:max-w-screen-lg',
		variants: {
			wide: {
				header:
					'mx-auto px-[15px] h-[60px] w-full md:max-w-[none] md:px-[160px]',
			},
		},
	},
	{
		responsiveVariants: ['sm', 'md'],
	}
);
