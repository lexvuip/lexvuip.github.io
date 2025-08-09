import React, { useEffect, useRef } from 'react';
import '../styles/OurSection.css';
import lawerImage from '../assets/stockimages/lawer.jpg';
import utilityPatentDrawingImage from '../assets/stockimages/utilitypatentdrawing.jpg';
import designPatentDrawingImage from '../assets/stockimages/desingpatentdrawing.jpg';
import trademarkDesignImage from '../assets/stockimages/trademarkdesign.jpg';
import customWorkflowImage from '../assets/stockimages/customworkflow.jpg';

const services = [
	{
		number: 1,
		title: (
			<>
				Precision <em>IP Solutions, Built for Attorneys</em> Who Protect
				Innovation
			</>
		),
		description:
			'At LexVuIP, we understand that accuracy isn’t a luxury it’s a necessity. That’s why we deliver specialized intellectual property support services designed to meet the high standards of patent attorneys, IP law firms, and legal teams worldwide.',
		image: lawerImage,
		alt: 'Utility Patent Drawings',
	},
	{
		number: 2,
		title: (
			<>
				Utility <em>Patent Drawings</em>
			</>
		),
		description:
			'Expertly detailed technical patent illustrations for mechanical, electrical, chemical, and software inventions. Our drawings are fully compliant with USPTO, EPO, and other global patent office standards, ensuring smooth prosecution and clear examiner communication.',
		image: utilityPatentDrawingImage,
		alt: 'Utility Patent Drawings',
	},
	{
		number: 3,
		title: (
			<>
				Design <em>Patent Drawings</em>
			</>
		),
		description:
			'We create clean, high-resolution design patent illustrations that align with the exacting visual format requirements of design patent offices worldwide from the USPTO to the EUIPO and WIPO.',
		image: designPatentDrawingImage,
		alt: 'Design Patent Illustrations',
	},
	{
		number: 4,
		title: (
			<>
				Trademark <em>Support</em>
			</>
		),
		description:
			'Professional trademark drawings and renderings, including wordmarks, logos, and stylized marks, formatted to meet global trademark office requirements for seamless registration.',
		image: trademarkDesignImage,
		alt: 'Trademark Design',
	},
	{
		number: 5,
		title: (
			<>
				Custom <em>Solutions</em>
			</>
		),
		description:
			'Have a unique workflow or firm-specific requirement? We seamlessly integrate into your team’s processes, delivering accurate, on-time support that meets your client’s expectations and yours.',
		image: customWorkflowImage,
		alt: 'Custom Workflow',
	},
];

function OurSection() {
	const listRef = useRef(null);

	useEffect(() => {
		const container = listRef.current;
		if (!container) return;

		const cards = Array.from(container.querySelectorAll('.our-service-card'));

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('revealed');
						observer.unobserve(entry.target);
					}
				});
			},
			{ root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
		);

		cards.forEach((card, index) => {
			card.classList.add('reveal-on-scroll');
			card.style.setProperty('--reveal-delay', `${index * 0.12}s`);
			observer.observe(card);
		});

		return () => observer.disconnect();
	}, []);

	// In-view animation for label and title
	useEffect(() => {
		const section = document.getElementById('services');
		if (!section) return;
		const targets = section.querySelectorAll('.our-label, .our-title');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);
		targets.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (prefersReduced) return;

		const container = listRef.current;
		if (!container) return;

		const wrappers = Array.from(
			container.querySelectorAll('.our-service-image-wrapper')
		);
		let rafId = null;

		const updateParallax = () => {
			wrappers.forEach((wrapper) => {
				const img = wrapper.querySelector('.our-service-image');
				if (!img) return;
				const rect = wrapper.getBoundingClientRect();
				const viewportHeight =
					window.innerHeight || document.documentElement.clientHeight;
				// Only compute when visible to avoid jank
				if (rect.bottom < 0 || rect.top > viewportHeight) return;

				const start = viewportHeight; // top at bottom of viewport
				const end = -rect.height; // bottom above viewport
				const progress = Math.min(
					1,
					Math.max(0, (start - rect.top) / (start - end))
				);
				const maxShift = 24; // px for subtle movement
				const translateY = (progress - 0.5) * 2 * maxShift;
				img.style.setProperty('--parallax-y', `${translateY.toFixed(2)}px`);
			});
			rafId = null;
		};

		const onScroll = () => {
			if (rafId) return;
			rafId = requestAnimationFrame(updateParallax);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		// Initial run
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, []);

	return (
		<section id="services" className="our-section">
			<div className="our-container">
				<div className="our-label">Our Services</div>
				<h2 className="our-title">
					“Strategic IP Solutions across the entire spectrum – crafted for your
					unique success.”
				</h2>
				<div className="our-services-list" ref={listRef}>
					{services.map((service, idx) => (
						<div className="our-service-card" key={idx}>
							<div className="our-service-number">{service.number}.</div>
							<div className="our-service-content">
								<div className="our-service-title">{service.title}</div>
								<div className="our-service-description">
									{service.description}
								</div>
							</div>
							<div className="our-service-image-wrapper">
								<img
									className="our-service-image"
									src={service.image}
									alt={service.alt}
								/>
							</div>
						</div>
					))}
				</div>
				<div className="our-learnmore-row">
					<button className="our-learnmore-btn">Learn More</button>
				</div>
			</div>
		</section>
	);
}

export default OurSection;
