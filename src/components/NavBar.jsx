// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/NavBar.css';

// function NavBar() {
// 	const [scrolled, setScrolled] = useState(false);
// 	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// 	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
// 	const servicesTimeout = useRef();
// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			const currentPath = window.location.pathname;
// 			if (currentPath === '/about') {
// 				setScrolled(true);
// 				return;
// 			}

// 			const scrollPosition = window.scrollY;
// 			if (scrollPosition > 100) {
// 				setScrolled(true);
// 			} else {
// 				setScrolled(false);
// 			}
// 		};

// 		window.addEventListener('scroll', handleScroll);

// 		// Initial check for current path
// 		handleScroll();

// 		// Clean up the event listener when component unmounts
// 		return () => {
// 			window.removeEventListener('scroll', handleScroll);
// 		};
// 	}, []);

// 	const handleContactClick = () => {
// 		navigate('/contact');
// 		setMobileMenuOpen(false);
// 	};

// 	const toggleMobileMenu = () => {
// 		setMobileMenuOpen(!mobileMenuOpen);
// 	};

// 	const closeMobileMenu = () => {
// 		setMobileMenuOpen(false);
// 	};

// 	const handleServicesMouseEnter = () => {
// 		clearTimeout(servicesTimeout.current);
// 		setServicesDropdownOpen(true);
// 	};
// 	const handleServicesMouseLeave = () => {
// 		servicesTimeout.current = setTimeout(
// 			() => setServicesDropdownOpen(false),
// 			120
// 		);
// 	};

// 	return (
// 		<>
// 			<nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
// 				<Link to="/" className="navbar-logo">
// 					LexVuIP
// 				</Link>

// 				{/* Desktop Navigation */}
// 				<ul className="navbar-links">
// 					<li>
// 						<Link to="/">Home</Link>
// 					</li>
// 					<li
// 						onMouseEnter={handleServicesMouseEnter}
// 						onMouseLeave={handleServicesMouseLeave}
// 						className="navbar-services-dropdown-parent"
// 					>
// 						<Link to="/services" onClick={() => setServicesDropdownOpen(false)}>
// 							Services
// 						</Link>
// 						{servicesDropdownOpen && (
// 							<div
// 								className="services-dropdown"
// 								onMouseEnter={handleServicesMouseEnter}
// 								onMouseLeave={handleServicesMouseLeave}
// 							>
// 								<div className="services-dropdown-section">
// 									<div className="services-dropdown-title">IP Solutions</div>
// 									<ul>
// 										<li>Utility Patent Drawings</li>
// 										<li>Design Patent Drawings</li>
// 										<li>Trademark Support</li>
// 									</ul>
// 								</div>
// 								<div className="services-dropdown-section">
// 									<div className="services-dropdown-title">
// 										<Link to="/service/paralegalsolutions">
// 											Paralegal Solutions
// 										</Link>
// 									</div>
// 									<ul>
// 										<li>Docketing Management</li>
// 										<li>E-Filing Services</li>
// 										<li>Contact Management Services</li>
// 										<li>Trial Preparation</li>
// 										<li>Deposition Coordination</li>
// 										<li>Compliance Support</li>
// 									</ul>
// 								</div>
// 								<div className="services-dropdown-section">
// 									<div className="services-dropdown-title">
// 										Custom Solutions
// 									</div>
// 								</div>
// 							</div>
// 						)}
// 					</li>
// 					<li>
// 						<Link to="/about">About</Link>
// 					</li>
// 					<li>
// 						<a href="/#faq">FAQ</a>
// 					</li>
// 					<li>
// 						<Link to="/contact">Contact Us</Link>
// 					</li>
// 				</ul>

// 				<div className="navbar-contact">
// 					<button className="contact-btn" onClick={handleContactClick}>
// 						Get In Touch <span className="faq-arrow">→</span>
// 					</button>
// 				</div>

// 				{/* Mobile Menu Button */}
// 				<div className="mobile-menu-btn" onClick={toggleMobileMenu}>
// 					<div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 					</div>
// 				</div>
// 			</nav>

// 			{/* Mobile Navigation Menu */}
// 			<div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
// 				<div className="mobile-nav-content">
// 					<ul className="mobile-nav-links">
// 						<li>
// 							<Link to="/" onClick={closeMobileMenu}>
// 								Home
// 							</Link>
// 						</li>
// 						<li>
// 							<Link to="/services" onClick={closeMobileMenu}>
// 								Services
// 							</Link>
// 						</li>
// 						<li>
// 							<Link to="/about" onClick={closeMobileMenu}>
// 								About
// 							</Link>
// 						</li>
// 						<li>
// 							<a href="/#faq" onClick={closeMobileMenu}>
// 								FAQ
// 							</a>
// 						</li>
// 						<li>
// 							<Link to="/contact" onClick={closeMobileMenu}>
// 								Contact Us
// 							</Link>
// 						</li>
// 					</ul>
// 					<div className="mobile-nav-contact">
// 						<button className="contact-btn" onClick={handleContactClick}>
// 							Get In Touch
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default NavBar;

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
	const servicesTimeout = useRef();
	const navigate = useNavigate();
	const location = useLocation(); // Get current location

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

	const handleServicesMouseEnter = () => {
		clearTimeout(servicesTimeout.current);
		setServicesDropdownOpen(true);
	};

	const handleServicesMouseLeave = () => {
		servicesTimeout.current = setTimeout(
			() => setServicesDropdownOpen(false),
			120
		);
	};

	// Check if the current path is the homepage
	const isHomePage = location.pathname === '/';

	return (
		<>
			<nav
				className={`navbar ${
					isHomePage && !scrolled ? 'transparent' : 'scrolled'
				}`}
			>
				<Link to="/" className="navbar-logo">
					LexVuIP
				</Link>

				{/* Desktop Navigation */}
				<ul className="navbar-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li
						onMouseEnter={handleServicesMouseEnter}
						onMouseLeave={handleServicesMouseLeave}
						className="navbar-services-dropdown-parent"
					>
						<Link to="/services" onClick={() => setServicesDropdownOpen(false)}>
							Services
						</Link>
						{servicesDropdownOpen && (
							<div
								className="services-dropdown"
								onMouseEnter={handleServicesMouseEnter}
								onMouseLeave={handleServicesMouseLeave}
							>
								<div className="services-dropdown-section">
									<div className="services-dropdown-title">
										<Link to="/service/ipsolutions">IP Solutions</Link>
									</div>
									<ul>
										<li>Utility Patent Drawings</li>
										<li>Design Patent Drawings</li>
										<li>Trademark Support</li>
									</ul>
								</div>
								<div className="services-dropdown-section">
									<div className="services-dropdown-title">
										<Link to="/service/paralegalsolutions">
											Paralegal Solutions
										</Link>
									</div>
									<ul>
										<li>Case Management</li>
										<li>Docketing Management</li>
										<li>E-Filing Services</li>
										<li>Contact Management Services</li>
										<li>Trial Preparation</li>
										<li>Deposition Coordination</li>
										<li>Compliance Support</li>
									</ul>
								</div>
								<div className="services-dropdown-section">
									<div className="services-dropdown-title">
										<Link to="/service/customsolutions">Custom Solutions</Link>
									</div>
								</div>
							</div>
						)}
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<a href="/#faq">FAQ</a>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
				</ul>

				<div className="navbar-contact">
					<button className="contact-btn" onClick={handleContactClick}>
						Get In Touch <span className="faq-arrow">→</span>
					</button>
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
						<li>
							<Link to="/" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/services" onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						<li>
							<Link to="/about" onClick={closeMobileMenu}>
								About
							</Link>
						</li>
						<li>
							<a href="/#faq" onClick={closeMobileMenu}>
								FAQ
							</a>
						</li>
						<li>
							<Link to="/contact" onClick={closeMobileMenu}>
								Contact Us
							</Link>
						</li>
					</ul>
					<div className="mobile-nav-contact">
						<button className="contact-btn" onClick={handleContactClick}>
							Get In Touch
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
