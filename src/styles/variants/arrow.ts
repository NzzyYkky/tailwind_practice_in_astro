// cardVariants.ts
import { tv } from 'tailwind-variants';

export const arrow = tv(
	{
		base: 'relative inline-block w-[8.2px] h-[12.5px] before:rotate-45 after:-rotate-45 after:content-[""] after:absolute after:top-[calc(50%_-_0.5px)] after:w-2.5 after:h-px after:bg-black after:rounded-full before:content-[""] before:absolute before:top-[calc(50%_-_0.5px)] before:w-2.5 before:h-px before:bg-black before:rounded-full',
		variants: {
			side: {
				prev: 'after:left-0 before:left-0 before:origin-[0.5px_50%] after:origin-[0.5px_50%]',
				next: 'after:right-0 before:right-0 before:origin-[calc(100%_-_0.5px)_50%] after:origin-[calc(100%_-_0.5px)_50%]',
			},
		},
	},
	{
		responsiveVariants: ['sm', 'md'],
	}
);
