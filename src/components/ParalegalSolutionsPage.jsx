import React from 'react';
import '../styles/ParalegalSolutionsPage.css';
import lawyerImage from '../assets/stockimages/lawer.jpg';
import paralegalSolutionsServiceHeroImage from '../assets/stockimages/paralegalSolutionsServiceHeroImage.jpg';
import caseManagement from '../assets/stockimages/caseManagement.jpg';
import docketingManagement from '../assets/stockimages/docketingManagement.jpg';
import eFillingServices from '../assets/stockimages/eFillingServices.jpg';
import contactManagementServices from '../assets/stockimages/contactManagementServices.jpg';
import trailPreparation from '../assets/stockimages/trailPreparation.jpg';
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';

function ParaLegalSolutions() {
	const services = [
		{
			image: caseManagement,
			title: 'Case',
			subtitle: 'Management',
			desc: 'From intake to resolution, we organize, track, and update every part of your case, ensuring nothing slips through the cracks and keeping you informed on status and next steps.',
			bullets: [
				'950+ clients defended',
				'Felonies, DUIs, white-collar',
				'Strong, rights-focused defense',
			],
		},
		{
			image: docketingManagement,
			title: 'Docketing',
			subtitle: 'Management',
			desc: 'Accurate, real-time tracking of case deadlines, hearings, and filings. We ensure nothing slips through the cracks so you can work with confidence.',
			bullets: [
				'1,100+ cases resolved',
				'Divorce, custody, adoption',
				'Compassionate advocacy',
			],
		},
		{
			image: eFillingServices,
			title: 'E-Filling',
			subtitle: 'Services',
			desc: 'From local courts to federal systems, we handle precise and timely electronic filings. You send the final documents — we ensure they’re in the right hands, at the right time.',
			bullets: [
				'1,100+ cases resolved',
				'Divorce, custody, adoption',
				'Compassionate advocacy',
			],
		},
		{
			image: contactManagementServices,
			title: 'Contact Management',
			subtitle: 'Services',
			desc: 'Organized, up-to-date client and witness records. We streamline communication logs, ensuring you have the right information at your fingertips.',
			bullets: [
				'1,100+ cases resolved',
				'Divorce, custody, adoption',
				'Compassionate advocacy',
			],
		},
		{
			image: trailPreparation,
			title: 'Trial',
			subtitle: 'Preparation',
			desc: 'Case binders, exhibits, witness lists, ready when you need them. We work behind the scenes so you can walk into court fully prepared.',
			bullets: [
				'1,100+ cases resolved',
				'Divorce, custody, adoption',
				'Compassionate advocacy',
			],
		},
		{
			image: lawyerImage,
			title: 'Deposition',
			subtitle: 'Coordination',
			desc: 'Case binders, exhibits, witness lists, ready when you need them. We work behind the scenes so you can walk into court fully prepared.',
			bullets: [
				'1,100+ cases resolved',
				'Divorce, custody, adoption',
				'Compassionate advocacy',
			],
		},
		{
			image: lawyerImage,
			title: 'Compliance',
			subtitle: 'Support',
			desc: 'We monitor court requirements, procedural rules, and documentation standards, helping your practice stay compliant and avoid costly delays.',
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
					Talk to a Lawyer <span className="arrow">→</span>
				</button>
			</div>
			<div className="services-hero-image-row">
				<img
					src={paralegalSolutionsServiceHeroImage}
					alt="Law building"
					className="services-hero-image"
				/>
			</div>

			{/* New Section: Stats and Description */}
			<section className="services-stats-section">
				<div className="services-stats-content">
					<div className="services-stats-left">
						<h2 className="services-stats-title">
							<span className="italic">Protecting</span> Rights, Resolving
							Disputes, and
							<br />
							Delivering Results for Over Two{' '}
							<span className="italic">Decades</span>
						</h2>
						<button className="services-hero-btn stats-btn">
							Talk to a Lawyer <span className="arrow">→</span>
						</button>
					</div>
					<div className="services-stats-right">
						<p>
							We help individuals, families, and businesses resolve their legal
							issues with strategic insight and unwavering commitment. Whatever
							your case, we're ready to stand by your side.
						</p>
						<p>
							With decades of experience and a passion for justice, we provide
							clients with clarity, confidence, and powerful legal
							solutions—tailored to your unique needs.
						</p>
					</div>
				</div>
				<div className="services-stats-row">
					<div className="services-stat">
						<div className="services-stat-value">1,200+</div>
						<div className="services-stat-label">
							Cases Successfully Handled
						</div>
					</div>
					<div className="services-stat">
						<div className="services-stat-value">98%</div>
						<div className="services-stat-label">Client Satisfaction Rate</div>
					</div>
					<div className="services-stat">
						<div className="services-stat-value">20+ Years</div>
						<div className="services-stat-label">
							Serving Individuals & Businesses
						</div>
					</div>
					<div className="services-stat">
						<div className="services-stat-value">40+</div>
						<div className="services-stat-label">Industries Represented</div>
					</div>
				</div>

				{/* New Legal Services Section */}
				<section className="legal-services-section">
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
				</section>
			</section>
			<TestimonialSection />
			<FAQSection />
			<FotterSection />
		</section>
	);
}

export default ParaLegalSolutions;
