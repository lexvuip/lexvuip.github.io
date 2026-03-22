import React, { useEffect } from 'react';
import '../styles/SecurityPage.css';
import FotterSection from './FotterSection';
import { useNavigate } from 'react-router-dom';

function SecurityPage() {
	useEffect(() => {
		document.title = 'Information Security & Data Privacy Protocols | LexVuIP';

		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				'content',
				'LexVuIP employs rigorous data protection standards, including advanced encryption, restricted access controls, and strict confidentiality agreements to safeguard your intellectual property.'
			);
		}

		const metaKeywords = document.querySelector('meta[name="keywords"]');
		if (metaKeywords) {
			metaKeywords.setAttribute(
				'content',
				'IP security, data privacy, legal confidentiality, encrypted data transfer, secure patent filing, information hardening, non-disclosure compliance, secure document handling, biometric security'
			);
		}

		const ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) {
			ogTitle.setAttribute('content', 'Information Security & Data Privacy Protocols | LexVuIP');
		}

		const ogDescription = document.querySelector('meta[property="og:description"]');
		if (ogDescription) {
			ogDescription.setAttribute(
				'content',
				'Discover how LexVuIP protects your sensitive legal data through multi-layered security infrastructure and stringent privacy policies.'
			);
		}

		const ogUrl = document.querySelector('meta[property="og:url"]');
		if (ogUrl) {
			ogUrl.setAttribute('content', 'https://lexvuip.github.io/security');
		}

		const canonicalLink = document.querySelector('link[rel="canonical"]');
		if (canonicalLink) {
			canonicalLink.setAttribute('href', 'https://lexvuip.github.io/security');
		}

		return () => {
			if (canonicalLink) {
				canonicalLink.setAttribute('href', 'https://lexvuip.github.io/');
			}
		};
	}, []);

	let navigate = useNavigate();

	return (
		<div className="security-page">
			<section className="security-hero-section">
				<div className="security-hero-content">
					<div className="security-badge">Security & Privacy First</div>
					<h1 className="security-hero-title">
						Protecting Your Intellectual Property with{' '}
						<span className="security-emphasis">Uncompromising Standards</span>
					</h1>
					<p className="security-hero-description">
						At LexVuIP, we recognize that your data is your most valuable asset.
						Our security framework is built on a foundation of trust,
						transparency, and multi-layered defense. We have implemented a
						comprehensive suite of technical and organizational measures to
						ensure that every document, drawing, and communication remains
						completely confidential and secure throughout its lifecycle.
					</p>
					<button
						className="security-hero-btn"
						onClick={() => navigate('/contact')}
					>
						Learn More About Our Safety Measures
					</button>
				</div>
			</section>

			<section className="security-details-section">
				<div className="security-details-container">
					<article className="security-detail-card">
						<div className="security-card-icon">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								aria-hidden="true"
							>
								<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
								<path d="M7 11V7a5 5 0 0 1 10 0v4" />
							</svg>
						</div>
						<h2>INFRASTRUCTURE HARDENING</h2>
						<p>
							Our operational environment is fortified against unauthorized
							entry. We utilize segmented networks and strict identity
							management to ensure that sensitive data is only accessible to
							authorized personnel.
						</p>
						<ul>
							<li>24/7 Monitored Access Control</li>
							<li>Hardware Port Lockdown for Removable Media</li>
							<li>
								Multi-factor Biometric Authentication for Secure Zones
							</li>
						</ul>
					</article>

					<article className="security-detail-card">
						<div className="security-card-icon">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								aria-hidden="true"
							>
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
								<polyline points="14 2 14 8 20 8" />
								<line x1="16" y1="13" x2="8" y2="13" />
								<line x1="16" y1="17" x2="8" y2="17" />
								<polyline points="10 9 9 9 8 9" />
							</svg>
						</div>
						<h2>ETHICAL & CONTRACTUAL OBLIGATIONS</h2>
						<p>
							Confidentiality is a legal mandate at LexVuIP. Every member of
							our team is bound by rigorous non-disclosure agreements that
							align with the highest industry standards for legal and patent
							support.
						</p>
						<ul>
							<li>Comprehensive Non-Disclosure Agreements (NDA)</li>
							<li>Binding Confidentiality Clauses in all Contracts</li>
							<li>
								Continuous Security Awareness and Ethical Conduct Training
							</li>
						</ul>
					</article>

					<article className="security-detail-card">
						<div className="security-card-icon">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								aria-hidden="true"
							>
								<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
								<polyline points="22,6 12,13 2,6" />
							</svg>
						</div>
						<h2>SECURE COMMUNICATION CHANNELS</h2>
						<p>
							We protect information in transit using industry-standard
							encryption protocols. Our digital workflows are designed to
							prevent data leakage and ensure end-to-end integrity.
						</p>
						<ul>
							<li>End-to-End Encrypted Data Transmission</li>
							<li>Restricted External Web and Email Access</li>
							<li>
								Proactive Blocking of Unauthorized File-Sharing Platforms
							</li>
						</ul>
					</article>

					<article className="security-detail-card">
						<div className="security-card-icon">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								aria-hidden="true"
							>
								<polyline points="3 6 5 6 21 6" />
								<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
								<line x1="10" y1="11" x2="10" y2="17" />
								<line x1="14" y1="11" x2="14" y2="17" />
							</svg>
						</div>
						<h2>DATA LIFECYCLE MANAGEMENT</h2>
						<p>
							Our commitment to privacy extends to the disposal of information.
							We follow strict protocols for the permanent destruction of both
							physical and digital assets once they are no longer required.
						</p>
						<ul>
							<li>Certified Secure Shredding of Physical Documents</li>
							<li>
								Verifiable Digital Data Sanitization Post-Project
							</li>
							<li>Support for Direct Collaboration via Client-Hosted Servers</li>
						</ul>
					</article>
				</div>
			</section>

			<section className="security-cta-section" aria-label="Contact for security details">
				<div className="security-cta-content">
					<h2>Discuss Our Compliance Standards</h2>
					<p>
						Need more specific details about our security protocols? Our team is
						available to provide deeper insights into how we protect your information.
					</p>
					<button
						className="security-cta-btn"
						onClick={() => navigate('/contact')}
						aria-label="Navigate to contact page"
					>
						Get In Touch
					</button>
				</div>
			</section>

			<FotterSection />
		</div>
	);
}

export default SecurityPage;