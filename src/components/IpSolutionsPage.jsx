import React from 'react';
import '../styles/IpSolutionsPage.css';
import ipSolutionsServiceHeroImage from '../assets/stockimages/ipSolutionsServiceHeroImage.jpg';
import utilityPatent from '../assets/stockimages/utilitypatentdrawing.jpg';
import designPatent from '../assets/stockimages/desingpatentdrawing.jpg';
import tradeMark from '../assets/stockimages/trademarkdesign.jpg';
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';

function IpSolutionsPage() {
	const services = [
		{
			image: utilityPatent,
			title: 'Design',
			subtitle: 'Patents',
			headingOne: "Precision That Protects",
			descOne: 'For design patents, every line and curve matters. We create drawings that highlight the unique visual qualities of your product while following USPTO and international standards closely.',
			headingTwo: "Showcase Your Vision",
			descTwo: "Our drawings do more than just document your design; they improve it. By making its distinct features clear, we help examiners recognize what sets your product apart.",
			headingThree: "Tailored Service",
			descThree: "No two designs are the same. That’s why we adjust our approach to fit your specific needs, ensuring accuracy, originality, and protection for your intellectual property.",
			bullets: [
				'36,353+ Projects Completed Successfully'
			],
		},
		{
			image: designPatent,
			title: 'Utility',
			subtitle: 'Patents',
			headingOne: "Technical Expertise You Can Trust",
			descOne: 'Our team combines deep engineering knowledge with careful attention to detail. We create utility patent drawings that clearly show every function and component of your invention.',
			headingTwo: "Clarity That Drives Approval",
			descTwo: "From reference numbers to arrowheads, every element is crafted to meet USPTO, PCT, and WIPO requirements. This helps examiners understand your invention quickly and boosts your application’s chance of success.",
			headingThree: "Collaborative Process",
			descThree: "We work closely with you at every step. We ensure the drawings meet technical standards and reflect the true nature of your innovation.",
			bullets: [
				'78,765+ Projects Completed Successfully'
			],
		},
		{
			image: tradeMark,
			title: 'Trademark',
			subtitle: 'Support',
			headingOne: "Your Brand, Defined Clearly",
			descOne: 'We create trademark drawings that capture the essence of your identity while meeting the exact requirements for legal protection.',
			headingTwo: "Visual Strength, Legal Power",
			descTwo: "Our work boosts brand recognition and acts as a protective layer. It prevents unauthorized use and ensures consistency across all applications.",
			headingThree: "Aligned With Your Vision",
			descThree: "We collaborate with you to reflect your brand’s voice. We ensure that your trademark is not only compliant but also connects with your audience.",
			bullets: [
				'6,059+ Projects Completed Successfully'
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
					For over two decades, we’ve stood with clients through their most pivotal moments, providing trusted legal support, winning major cases, and shaping futures through law.
				</p>
				<button className="services-hero-btn">
					Get In Touch <span className="arrow">→</span>
				</button>
			</div>
			<div className="services-hero-image-row">
				<img
					src={ipSolutionsServiceHeroImage}
					alt="Law building"
					className="services-hero-image"
				/>
			</div>

			{/* New Section: Stats and Description */}
			<section className="services-stats-section">
				{/* <div className="services-stats-content">
					<div className="services-stats-left">
						<h2 className="services-stats-title">
							<span className="italic">Protecting</span> Rights, Resolving
							Disputes, and
							<br />
							Delivering Results for Over Two{' '}
							<span className="italic">Decades</span>
						</h2>
						<button className="services-hero-btn stats-btn">
							Get In Touch <span className="arrow">→</span>
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
				</div> */}

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
										<span className="italic">{service.title}</span>{' '}
										{service.subtitle}
									</h3>
									<h4>{service.headingOne}</h4>
									<p className="separate-legal-service-desc">{service.descOne}</p>
									<h4>{service.headingTwo}</h4>
									<p className="separate-legal-service-desc">{service.descTwo}</p>
									<h4>{service.headingThree}</h4>
									<p className="separate-legal-service-desc">{service.descThree}</p>
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

export default IpSolutionsPage;
