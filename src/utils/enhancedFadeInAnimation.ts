import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const enhancedFadeInAnimation = () => {
	const fadeSections: NodeListOf<HTMLElement> =
		document.querySelectorAll('[data-fadein]');
	const fadeElements = Array.from(fadeSections);

	// 要素を上から順にソート
	fadeElements.sort(
		(a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
	);

	fadeElements.forEach((section: HTMLElement) => {
		const fadeType = section.dataset.fadein;
		const isSequence = fadeType?.includes('sequence');
		const axis = fadeType?.includes('x') ? 'x' : 'y';

		let targets: HTMLElement[];
		if (isSequence) {
			targets = Array.from(section.children) as HTMLElement[];
		} else {
			targets = [section];
		}

		targets.forEach((target, index) => {
			const tl = gsap.timeline({ paused: true });
			tl.fromTo(
				target,
				{
					[axis]: axis === 'x' ? -35 : 35,
					opacity: 0,
				},
				{
					[axis]: 0,
					opacity: 1,
					duration: 0.8,
					ease: Power2.easeInOut,
					delay: isSequence ? index * 0.08 : 0,
				}
			);

			ScrollTrigger.create({
				trigger: section,
				start: 'top 80%',
				onEnter: () => tl.play(),
				once: true,
			});

			// 初期表示時のアニメーション
			if (section.getBoundingClientRect().top < window.innerHeight) {
				tl.play();
			}
		});
	});
};
