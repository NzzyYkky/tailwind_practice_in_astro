import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function animateText(element: HTMLElement, delay: number = 50): void {
	const text: string = element.textContent || '';
	element.textContent = '';

	text.split('').forEach((char: string, index: number) => {
		const span: HTMLSpanElement = document.createElement('span');
		span.textContent = char;
		span.className = 'inline-block opacity-0 translate-y-5';
		span.dataset.index = index.toString();

		element.appendChild(span);

		gsap.to(span, {
			opacity: 1,
			y: 0,
			duration: 0.3,
			ease: 'power2.out',
			delay: (index * delay) / 1000,
		});
	});
}

export function initializeTextAnimations(): void {
	const elements: NodeListOf<HTMLElement> = document.querySelectorAll(
		'[data-animate-text]'
	);

	elements.forEach((element: HTMLElement) => {
		ScrollTrigger.create({
			trigger: element,
			start: 'top 80%',
			onEnter: () => animateText(element),
			once: true,
		});
	});
}
