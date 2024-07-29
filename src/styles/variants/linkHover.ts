// cardVariants.ts
import { tv } from 'tailwind-variants';

export const linkHover = tv(
	{
		base: 'transition ease-in-out hover:opacity-30 duration-300',
		// variants: {
		// 	color: {
		// 		primary: 'bg-white',
		// 		secondary: 'bg-black',
		// 	},
		// },
	},
	{
		responsiveVariants: ['sm', 'md'],
	}
);
