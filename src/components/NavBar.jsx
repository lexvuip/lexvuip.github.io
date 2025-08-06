import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const navigate = useNavigate();



	useEffect(() => {
		const handleScroll = () => {
			const currentPath = window.location.pathname;
			if (currentPath === '/about') {
				setScrolled(true);
				return;
			}

			const scrollPosition = window.scrollY;
			if (scrollPosition > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		
		// Initial check for current path
		handleScroll();
		
		// Clean up the event listener when component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	
	const handleContactClick = () => {
		navigate('/contact');
		setMobileMenuOpen(false);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<>
			<nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
				<Link to="/" className="navbar-logo">LexVuIP</Link>
				
				{/* Desktop Navigation */}
				<ul className="navbar-links">
					<li><Link to="/">Home</Link></li>
					<li><a href="/#services">Services</a></li>
					<li><Link to="/about">About</Link></li>
					<li><a href="/#faq">FAQ</a></li>
					<li><Link to="/contact">Contact Us</Link></li>
				</ul>
				
				<div className="navbar-contact">
					<button className="contact-btn" onClick={handleContactClick}>Get In Touch <span className="faq-arrow">→</span></button>
				</div>

				{/* Mobile Menu Button */}
				<div className="mobile-menu-btn" onClick={toggleMobileMenu}>
					<div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</nav>

			{/* Mobile Navigation Menu */}
			<div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
				<div className="mobile-nav-content">
					<ul className="mobile-nav-links">
						<li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
						<li><a href="/#services" onClick={closeMobileMenu}>Services</a></li>
						<li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
						<li><a href="/#faq" onClick={closeMobileMenu}>FAQ</a></li>
						<li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
					</ul>
					<div className="mobile-nav-contact">
						<button className="contact-btn" onClick={handleContactClick}>Get In Touch</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
