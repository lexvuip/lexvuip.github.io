import React from 'react';
import '../styles/AboutSection.css';

function AboutSection() {
	return (
		<section id="about" className="about-section">
			<div className="about-container">
				<div className="about-content">
					<div className="about-label">About Us</div>
					<h2 className="about-title">
						At LexVuIP, We Don’t Just Draw — We Strategize, Illustrate, and Deliver IP Confidence.
					</h2>
					<p className="about-description">
						With over 25 years of specialized experience in Intellectual Property services, LexVuIP has been a trusted partner to IP attorneys, patent law firms, and corporate legal teams around the world.
					</p>
					<p className='about-description'>
						We bring a deep understanding of global IP standards especially USPTO, EUIPO, PCT and WIPO Patent Office guidelines to every project. Our team of skilled illustrators and IP professionals delivers high-precision utility patent drawings, design patent illustrations, trademark representations, and end-to-end patent and industrial design filing support.
					</p>
					<p className='about-description'>
						Whether you're preparing a complex utility patent application or need fast-turnaround design drawings, we help you present your client’s innovation clearly, professionally, and in full compliance with international IP requirements.
					</p>
					<p className='about-description'>
						At LexVuIP, we believe that your ideas deserve more than protection, they deserve strategic representation that strengthens your filing from the ground up.
					</p>
					<div className="about-actions">
						<button className="about-contact-btn" onClick={() => window.location.href = '/contact'}>Get In Touch</button>
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
				<div className="about-stat">
					<div className="about-stat-value">1000+</div>
					<div className="about-stat-label">IP Projects Successfully Delivered</div>
				</div>
				<div className="about-stat">
					<div className="about-stat-value">98%</div>
					<div className="about-stat-label">Client Satisfaction Worldwide</div>
				</div>
				<div className="about-stat">
					<div className="about-stat-value">25+ Yr</div>
					<div className="about-stat-label">
						Serving Individuals & Businesses
					</div>
				</div>
				<div className="about-stat">
					<div className="about-stat-value">40+</div>
					<div className="about-stat-label">Technical Fields & Sectors Covered</div>
				</div>
			</div>
			<div className="about-divider" />
		</section>
	);
}

export default AboutSection;
