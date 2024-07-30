// cardVariants.ts
import { tv } from 'tailwind-variants';

export const button = tv(
	{
		base: 'text-header-sp rounded-full block w-fit px-[35px] py-[10px] font-bold cursor-pointer md:text-[16px]',
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
