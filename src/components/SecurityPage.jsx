import React, { useEffect } from 'react';
import '../styles/SecurityPage.css';
import FotterSection from './FotterSection';
import { useNavigate } from 'react-router-dom';

function SecurityPage() {
	useEffect(() => {
		document.title = 'Data Confidentiality & Security | LexVuIP';

		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				'content',
				'LexVuIP ensures complete data security and confidentiality with world-class infrastructure, restricted access, NDAs, encrypted communications, and data destruction policies.'
			);
		}

		const metaKeywords = document.querySelector('meta[name="keywords"]');
		if (metaKeywords) {
			metaKeywords.setAttribute(
				'content',
				'data security, confidentiality, NDA, data protection, information security, legal document security, patent drawing security, encrypted communication, data destruction, biometric access'
			);
		}

		const ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) {
			ogTitle.setAttribute('content', 'Data Confidentiality & Security | LexVuIP');
		}

		const ogDescription = document.querySelector('meta[property="og:description"]');
		if (ogDescription) {
			ogDescription.setAttribute(
				'content',
				'LexVuIP ensures complete data security and confidentiality with world-class infrastructure, restricted access, NDAs, and encrypted communications for all your legal support needs.'
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
					<div className="security-badge">Data Confidentiality and Security</div>
					<h1 className="security-hero-title">
						Confidentiality and Integrity are our{' '}
						<span className="security-emphasis">Core Values</span>
					</h1>
					<p className="security-hero-description">
						Confidentiality and Integrity are our Core Values and we understand
						the importance of data confidentiality and security. With these
						objectives we have integrated multiple strategies and world class
						infrastructure to ensure complete security and compliance. A snapshot
						of the data security measures has been provided below, for details
						regarding those please feel free to contact us.
					</p>
					<button
						className="security-hero-btn"
						onClick={() => navigate('/contact')}
					>
						Contact Us for Details
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
						<h2>SYSTEM LEVEL SECURITY</h2>
						<p>
							Password protected logins allow access to designated users only and
							access to the data of other teams on the server is restricted
						</p>
						<ul>
							<li>Restricted &amp; Monitored Access</li>
							<li>Disabled Ports for Removable Media</li>
							<li>
								Biometric access system for controlled and monitored access
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
						<h2>LEGAL LEVEL SECURITY</h2>
						<p>
							We represent and warrant that the terms of the Non-disclosure and
							confidentiality agreement shall extend and apply to the services
							provided to the client. We will ensure that the team(s) shall at
							all times comply with all policies and codes of conduct imposed by
							the client through
						</p>
						<ul>
							<li>Non-disclosure Agreements</li>
							<li>Confidentiality Agreements</li>
							<li>
								Regular sessions for all employees on data security sensitization
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
						<h2>COMMUNICATION LEVEL SECURITY</h2>
						<p>
							Use of encryption tools such as PGP, GPG, etc., for all
							deliverables and communication
						</p>
						<ul>
							<li>Encrypted Mails</li>
							<li>No access to web-based mail</li>
							<li>
								Data upload websites like blogs and web data servers are blocked
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
						<h2>DATA DESTRUCTION POLICY</h2>
						<p>
							A dedicated group is allocated the task of physical shredding
							printed documents and deleting digital data on a periodic basis
						</p>
						<ul>
							<li>Shredding of Printed documents</li>
							<li>
								Digital deletion certificate issued to clients after project
								completion
							</li>
							<li>Willingness to work through client dedicated servers</li>
						</ul>
					</article>
				</div>
			</section>

			<section className="security-cta-section" aria-label="Contact for security details">
				<div className="security-cta-content">
					<h2>Have Questions About Our Security Measures?</h2>
					<p>
						We take data security seriously. Contact us to learn more about how
						we protect your confidential information.
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