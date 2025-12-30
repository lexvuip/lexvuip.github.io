import React from 'react';
import '../styles/FotterSection.css';

function FotterSection() {
	return (
		<footer className="footer-section">
			<div className="footer-container">
				<div className="footer-main-row">
					<div className="footer-col footer-brand">
						<div className="footer-logo">
							<img
								src="/logo.png"
								alt="LexVuIP Logo"
								className="footer-logo-img"
							/>
							<span>LexVuIP</span>
						</div>
						<div className="footer-tagline">
							Precision in Every Filing
							<br />
							Clarity in Every Design.
						</div>
						<div className="footer-social">
							<a
								href="https://www.linkedin.com/in/lexvuip-global-ip-paralegal-solutions"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
								aria-label="LinkedIn"
							>
								<svg
									className="social-icon"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</a>
							<a
								href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61585607920392"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
								aria-label="Facebook"
							>
								<svg
									className="social-icon"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</a>
						</div>
					</div>

					<div className="footer-col footer-links">
						<div className="footer-links-group">
							<h4 className="footer-links-title">Company</h4>
							<ul className="footer-links-list">
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/about">About</a>
								</li>
								<li>
									<a href="/services">Services</a>
								</li>
								<li>
									<a href="/#faq">FAQ</a>
								</li>
								<li>
									<a href="/contact">Contact</a>
								</li>
							</ul>
						</div>

						<div className="footer-links-group">
							<h4 className="footer-links-title">IP Solutions</h4>
							<ul className="footer-links-list">
								<li>
									<a href="/service/ipsolutions">Utility Patent Drawings</a>
								</li>
								<li>
									<a href="/service/ipsolutions">Design Patent Drawings</a>
								</li>
								<li>
									<a href="/service/ipsolutions">Trademark Support</a>
								</li>
							</ul>
						</div>

						<div className="footer-links-group">
							<h4 className="footer-links-title">Paralegal Solutions</h4>
							<ul className="footer-links-list">
								<li>
									<a href="/service/paralegalsolutions">Docketing Management</a>
								</li>
								<li>
									<a href="/service/paralegalsolutions">E-Filing Services</a>
								</li>
								<li>
									<a href="/service/paralegalsolutions-management">
										Contact Management
									</a>
								</li>
								<li>
									<a href="/service/paralegalsolutions">Trial Preparation</a>
								</li>
								<li>
									<a href="/service/paralegalsolutions">
										Deposition Coordination
									</a>
								</li>
								<li>
									<a href="/service/paralegalsolutions">Compliance Support</a>
								</li>
							</ul>
						</div>

						<div className="footer-links-group">
							<h4 className="footer-links-title">Resources</h4>
							<ul className="footer-links-list">
								<li>
									<a href="/#">Blog</a>
								</li>
								<li>
									<a href="/#">Case Studies</a>
								</li>
								<li>
									<a href="/#">Whitepapers</a>
								</li>
								<li>
									<a href="/#">Webinars</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer-divider"></div>

				<div className="footer-bottom-row">
					<div className="footer-copyright">
						© {new Date().getFullYear()} LexVuIP, Inc. All rights reserved.
					</div>
					<div className="footer-policies">
						<a href="/privacy-policy">Privacy Policy</a>
						<a href="/terms-of-service">Terms of Service</a>
						<a href="/cookie-policy">Cookie Policy</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default FotterSection;
