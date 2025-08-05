import React from 'react';
import '../styles/FotterSection.css';

function FotterSection() {
	return (
		<footer className="footer-section">
			<div className="footer-main-row">
				<div className="footer-col footer-brand">
					<div className="footer-logo">LexVuIP</div>
					<div className="footer-tagline">
						Precision in Every Line.
						<br />
						Protection in Every Design.
					</div>
				</div>
				<div className="footer-col footer-links">
					<div className="footer-links-title">Company</div>
					<ul className="footer-links-list">
						<li>Home</li>
						<li>About</li>
						<li>Services</li>
						<li>FAQ</li>
					</ul>
				</div>
			</div>
			<div className="footer-divider" />
			<div className="footer-bottom-row">
				<div className="footer-copyright">2025 LexVuIP, Inc.</div>
				<div className="footer-policies">
					<span>Privacy Policy</span>
					<span>Terms Of Service</span>
				</div>
			</div>
		</footer>
	);
}

export default FotterSection;
