import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
	const [scrolled, setScrolled] = useState(false);
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
	};

	return (
		<nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
			<Link to="/" className="navbar-logo">LexVuIP</Link>
			<ul className="navbar-links">
				<li><Link to="/">Home</Link></li>
				<li><a href="/#services">Services</a></li>
				<li><Link to="/about">About</Link></li>
				{/* <li><a href="/#about">About</a></li> */}
				<li><a href="/#faq">FAQ</a></li>
				<li><Link to="/contact">Contact Us</Link></li>

			</ul>
			<div className="navbar-contact">
				<button className="contact-btn" onClick={handleContactClick}>Get In Touch <span className="faq-arrow">→</span></button>
			</div>
		</nav>
	);
}

export default NavBar;
