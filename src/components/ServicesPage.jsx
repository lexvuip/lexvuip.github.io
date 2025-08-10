import React from 'react';
import '../styles/ServicesPage.css';
import lawyerImage from '../assets/stockimages/lawer.jpg';

function ServicesPage() {
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
					src={lawyerImage}
					alt="Law building"
					className="services-hero-image"
				/>
			</div>
		</section>
	);
}

export default ServicesPage;
