// cardVariants.ts
import { tv } from 'tailwind-variants';

export const button = tv(
	{
		base: 'text-[16px] rounded-full block w-fit px-[35px] py-[10px] font-bold cursor-pointer',
		variants: {
			color: {
				primary: 'bg-white',
				secondary: 'bg-black',
			},
		},
	},
	{
		responsiveVariants: ['sm', 'md'],
	}
);
