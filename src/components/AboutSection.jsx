import React from 'react';
import '../styles/AboutSection.css';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

function AboutSection() {
	const [startCount, setStartCount] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const section = document.querySelector('.about-stats-row');
			const rect = section?.getBoundingClientRect();
			if (rect?.top < window.innerHeight && !startCount) {
				setStartCount(true);
			}
		};

		// Call once after mount to trigger if already in view
		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [startCount]);

	useEffect(() => {
		const container = document.querySelector('.about-image-row');
		const image = document.querySelector('.about-image');
		if (!container || !image) return;

		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (prefersReduced) return;

		let rafId = null;

		const updateParallax = () => {
			const rect = container.getBoundingClientRect();
			const viewportHeight =
				window.innerHeight || document.documentElement.clientHeight;

			// Compute progress of container within viewport [0,1]
			const start = viewportHeight; // when top is at bottom of viewport
			const end = -rect.height; // when bottom is above viewport
			const progress = Math.min(
				1,
				Math.max(0, (start - rect.top) / (start - end))
			);

			// Map progress to translateY range (subtle movement)
			const maxShift = 30; // px; adjust for more/less parallax
			const translateY = (progress - 0.5) * 2 * maxShift; // range [-maxShift, +maxShift]
			image.style.setProperty('--parallax-y', `${translateY.toFixed(2)}px`);
			rafId = null;
		};

		const onScroll = () => {
			if (rafId) return;
			rafId = requestAnimationFrame(updateParallax);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		// Initial position
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, []);
	return (
		<section id="about" className="about-section">
			<div className="about-container">
				<div className="about-content">
					<div className="about-label">About Us</div>
					<h2 className="about-title">
						At LexVuIP, We Don’t Just Draw — We Strategize, Illustrate, and
						Deliver IP Confidence.
					</h2>
					<p className="about-description">
						With over 25 years of specialized experience in Intellectual
						Property services, LexVuIP has been a trusted partner to IP
						attorneys, patent law firms, and corporate legal teams around the
						world.
					</p>
					<p className="about-description">
						We bring a deep understanding of global IP standards especially
						USPTO, EUIPO, PCT and WIPO Patent Office guidelines to every
						project. Our team of skilled illustrators and IP professionals
						delivers high-precision utility patent drawings, design patent
						illustrations, trademark representations, and end-to-end patent and
						industrial design filing support.
					</p>
					<p className="about-description">
						Whether you're preparing a complex utility patent application or
						need fast-turnaround design drawings, we help you present your
						client’s innovation clearly, professionally, and in full compliance
						with international IP requirements.
					</p>
					<p className="about-description">
						At LexVuIP, we believe that your ideas deserve more than protection,
						they deserve strategic representation that strengthens your filing
						from the ground up.
					</p>
					<div className="about-actions">
						<button
							className="about-contact-btn"
							onClick={() => (window.location.href = '/contact')}
						>
							Get In Touch
						</button>
					</div>
				</div>
			</div>
			<div className="about-divider" />
			<div className="about-image-row">
				<img
					className="about-image"
					src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
					alt="Drawing on tablet"
				/>
			</div>
			<div className="about-divider" />
			<div className="about-stats-row">
				<div
					className={`about-stat ${startCount ? 'revealed' : ''}`}
					style={{ '--about-stat-delay': '0s' }}
				>
					<div className="about-stat-value">
						{startCount && <CountUp end={25} duration={2.5} suffix="+ Yr" />}
					</div>
					<div className="about-stat-label">
						Serving Individuals & Businesses
					</div>
				</div>
				<div
					className={`about-stat ${startCount ? 'revealed' : ''}`}
					style={{ '--about-stat-delay': '0.12s' }}
				>
					<div className="about-stat-value">
						{startCount && <CountUp end={46} duration={2.5} suffix="+" />}
					</div>
					<div className="about-stat-label">
						Technical Fields & Sectors Covered
					</div>
				</div>

				<div
					className={`about-stat ${startCount ? 'revealed' : ''}`}
					style={{ '--about-stat-delay': '0.24s' }}
				>
					<div className="about-stat-value">
						{startCount && <CountUp end={98} duration={2.0} suffix="%" />}
					</div>
					<div className="about-stat-label">Client Satisfaction Worldwide</div>
				</div>

				<div
					className={`about-stat ${startCount ? 'revealed' : ''}`}
					style={{ '--about-stat-delay': '0.36s' }}
				>
					<div className="about-stat-value">
						{startCount && (
							<CountUp end={45657} duration={1.5} separator="," suffix="+" />
						)}
					</div>
					<div className="about-stat-label">
						IP Projects Successfully Delivered
					</div>
				</div>
			</div>
			<div className="about-divider" />
		</section>
	);
}

export default AboutSection;
