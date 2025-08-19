import React from 'react';
import '../styles/ParalegalSolutionsPage.css';
import lawyerImage from '../assets/stockimages/lawer.jpg';
import paralegalSolutionsServiceHeroImage from '../assets/stockimages/paralegalSolutionsServiceHeroImage.jpg';
import caseManagement from '../assets/stockimages/caseManagement.jpg';
import docketingManagement from '../assets/stockimages/docketingManagement.jpg';
import eFillingServices from '../assets/stockimages/eFillingServices.jpg';
import contactManagementServices from '../assets/stockimages/contactManagementServices.jpg';
import trailPreparation from '../assets/stockimages/trailPreparation.jpg';
import complianceSupport from '../assets/stockimages/complianceSupport.jpg';
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';

function ParaLegalSolutions() {
	const services = [
		{
			image: caseManagement,
			title: 'Case',
			subtitle: 'Management',
			desc: 'Every case has moving parts, and it’s easy to lose track of details. We organize, track, and update each stage, from intake to resolution, so you always know where things stand. We monitor deadlines and provide clear status reports. This lets you focus on strategy while we manage the flow. Nothing gets missed, and progress never stalls.',
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
			desc: 'Deadlines drive litigation. One missed date can change everything. We keep track of hearings, filings, and court deadlines carefully, offering you real-time visibility and peace of mind. Our system helps you stay ahead of schedules and filings without scrambling. You can work knowing critical dates are handled and nothing important will go unnoticed.',
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
			desc: 'Courts require accuracy and timing, and electronic filings leave no room for error. We prepare and submit your documents to local and federal courts on schedule, securing confirmations. You send the final version, and we handle the filing. Every document reaches the right people at the right time without adding more to your workload.',
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
			desc: 'Keeping client and witness information current shouldn’t drain your time. We maintain organized records and clear communication logs so nothing slips through the cracks. You’ll have updated details at hand whenever you need them, helping you move faster in case prep and court. The right information, ready the moment you ask for it.',
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
			desc: 'Winning in court begins well before you enter the courtroom. We put together complete trial binders, exhibits, and witness lists with careful attention to detail. Our behind-the-scenes work makes sure you have everything you need, organized and ready. You can walk into trial prepared, confident, and focused on making your strongest argument.',
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
			desc: 'Depositions need precision, which means every exhibit, transcript, and witness detail must be ready on time. We coordinate schedules, organize materials, and prepare supporting documents to help you focus on questioning and strategy. With everything handled in advance, you can show up focused, fully equipped, and ready to take control.',
			bullets: [
				'1,100+ cases resolved',
				'Divorce, custody, adoption',
				'Compassionate advocacy',
			],
		},
		{
			image: complianceSupport,
			title: 'Compliance',
			subtitle: 'Support',
			desc: 'We keep up with court procedures, filing standards, and documentation requirements so your practice stays compliant and on track. With every detail checked and monitored, you avoid delays, protect your clients, and keep cases moving smoothly through the system.',
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
					pivotal moments, providing trusted legal counsel, winning major cases,
					and shaping futures through law.
				</p>
				<button className="services-hero-btn">
					Get In Touch <span className="arrow">→</span>
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
						{/* <h2 className="services-stats-title">
							<span className="italic">Protecting</span> Rights, Resolving
							Disputes, and
							<br />
							Delivering Results for Over Two{' '}
							<span className="italic">Decades</span>
						</h2> */}
						<h2 className="services-stats-title">
							We support attorneys strengthen cases with proven <span className="italic">experience, precision, and strategic</span> insight that sharpens their competitive edge
						</h2>
						<button className="services-hero-btn stats-btn">
							Get In Touch <span className="arrow">→</span>
						</button>
					</div>
					<div className="services-stats-right">
						<p>
							We help attorneys win more cases by clearing the overload and keeping the details under control. Whatever your docket demands, we’re ready to keep you ahead of deadlines.
						</p>
						<p>
							With decades of hands-on paralegal support, we handle filings, prep, and documentation so you stay focused on arguments and strategy. What this really means is your time goes where it counts, building cases and serving clients.
						</p>
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
									{/* <ul className="separate-legal-service-list">
										{service.bullets.map((b, i) => (
											<li key={i}>{b}</li>
										))}
									</ul> */}
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
