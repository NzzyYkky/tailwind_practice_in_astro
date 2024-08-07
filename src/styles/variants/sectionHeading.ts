// cardVariants.ts
import { tv, type VariantProps } from 'tailwind-variants';

export const sectionHeading = tv(
	{
		base: 'font-bold text-3xl md:text-4xl',
		variants: {
			align: {
				left: 'text-left',
				right: 'text-right',
				center: 'text-center',
				justify: 'text-justify',
			},
		},
	},
	{
		responsiveVariants: ['sm', 'md'],
	}
);

export type sectionHeadingVariants = VariantProps<typeof sectionHeading>;
