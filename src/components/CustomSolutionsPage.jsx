import React from 'react';
import '../styles/CustomSolutionPage.css';
import lawyerImage from '../assets/stockimages/lawer.jpg';
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';

function CustomSolutionsPage() {
	const services = [
		{
			image: lawyerImage,
			title: 'Criminal',
			subtitle: 'Defense',
			desc: 'Our attorneys bring decades of criminal defense experience to defend your rights, challenge evidence, and build a strategic case',
			bullets: [
				'950+ clients defended',
				'Felonies, DUIs, white-collar',
				'Strong, rights-focused defense',
			],
		},
		{
			image: lawyerImage,
			title: 'Immigration',
			subtitle: 'Law',
			desc: 'From family-based petitions and work visas to green cards and naturalization, we guide individuals and businesses through every step, helping you achieve lawful status and long-term security.',
			bullets: [
				'1,100+ cases resolved',
				'Divorce, custody, adoption',
				'Compassionate advocacy',
			],
		},
		{
			image: lawyerImage,
			title: 'Immigration',
			subtitle: 'Law',
			desc: 'From family-based petitions and work visas to green cards and naturalization, we guide individuals and businesses through every step, helping you achieve lawful status and long-term security.',
			bullets: [
				'1,100+ cases resolved',
				'Divorce, custody, adoption',
				'Compassionate advocacy',
			],
		},
	];
	return (
		<section className="services-hero-section">
			<div className="services-hero-content">
				<h1 className="services-hero-title">
					Legal Services Built
					<br />
					Around Your <span className="italic">Needs</span>
				</h1>
				<p className="services-hero-description">
					For over two decades, we’ve stood with clients through their most
					pivotal moments—providing trusted legal counsel, winning major cases,
					and shaping futures through law.
				</p>
				<button className="services-hero-btn">
					Get In Touch <span className="arrow">→</span>
				</button>
			</div>
			<div className="services-hero-image-row">
				<img
					src={lawyerImage}
					alt="Law building"
					className="services-hero-image"
				/>
			</div>

			{/* New Section: Stats and Description */}
			<section className="services-stats-section">
				<div className="services-stats-content">
					<div className="services-stats-left">
						<h2 className="services-stats-title">
							Your firm’s workflow, our support - <span className="italic">customized, accurate, and always</span> on time.
						</h2>
						<button className="services-hero-btn stats-btn">
							Get In Touch <span className="arrow">→</span>
						</button>
					</div>
					<div className="services-stats-right">
						<p>
							Every firm has its own way of working. We adapt to yours. Whether it’s a specific workflow, reporting method, or client communication style, we integrate directly into your process. The result: accurate, timely support that feels like part of your team and keeps both you and your clients ahead of schedule.
						</p>
					</div>
				</div>

				{/* New Legal Services Section */}
				{/* <section className="legal-services-section">
					<div className="legal-services-header">
						<div className="legal-services-badge">OUR LEGAL SERVICES</div>
						<h2 className="legal-services-title">
							Trusted <span className="italic">expertise</span> across the legal
							spectrum — tailored to your unique needs.
						</h2>
					</div>
					<div className="separate-legal-services-cards-row">
						{services.map((service, idx) => (
							<div className="separate-legal-service-card" key={idx}>
								<img
									src={service.image}
									alt={service.title + ' ' + service.subtitle}
									className="separate-legal-service-image"
								/>
								<div className="separate-legal-service-content">
									<h3 className="separate-legal-service-title">
										{service.title}{' '}
										<span className="italic">{service.subtitle}</span>
									</h3>
									<p className="separate-legal-service-desc">{service.desc}</p>
									<ul className="separate-legal-service-list">
										{service.bullets.map((b, i) => (
											<li key={i}>{b}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</section> */}
			</section>
			<TestimonialSection />
			<FAQSection />
			<FotterSection />
		</section>
	);
}

export default CustomSolutionsPage;
