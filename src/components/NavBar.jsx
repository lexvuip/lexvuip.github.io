import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
	const [mobileIpSolutionsOpen, setMobileIpSolutionsOpen] = useState(false);
	const [mobileParalegalSolutionsOpen, setMobileParalegalSolutionsOpen] = useState(false);
	const [mobileCustomSolutionsOpen, setMobileCustomSolutionsOpen] = useState(false);
	const servicesTimeout = useRef();
	const navigate = useNavigate();
	const location = useLocation();

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
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleContactClick = () => {
		navigate('/contact');
		setMobileMenuOpen(false);
		setMobileServicesOpen(false);
		setMobileIpSolutionsOpen(false);
		setMobileParalegalSolutionsOpen(false);
		setMobileCustomSolutionsOpen(false);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
		if (mobileMenuOpen) {
			setMobileServicesOpen(false);
			setMobileIpSolutionsOpen(false);
			setMobileParalegalSolutionsOpen(false);
			setMobileCustomSolutionsOpen(false);
		}
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
		setMobileServicesOpen(false);
		setMobileIpSolutionsOpen(false);
		setMobileParalegalSolutionsOpen(false);
		setMobileCustomSolutionsOpen(false);
	};

	const toggleMobileServices = () => {
		setMobileServicesOpen(!mobileServicesOpen);
		if (mobileServicesOpen) {
			setMobileIpSolutionsOpen(false);
			setMobileParalegalSolutionsOpen(false);
			setMobileCustomSolutionsOpen(false);
		}
	};

	const toggleMobileIpSolutions = () => {
		setMobileIpSolutionsOpen(!mobileIpSolutionsOpen);
	};

	const toggleMobileParalegalSolutions = () => {
		setMobileParalegalSolutionsOpen(!mobileParalegalSolutionsOpen);
	};

	const toggleMobileCustomSolutions = () => {
		setMobileCustomSolutionsOpen(!mobileCustomSolutionsOpen);
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
					<li>
						<Link to="/about">About</Link>
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
							<Link to="/about" onClick={closeMobileMenu}>
								About
							</Link>
						</li>
						<li className="mobile-services-item">
							<div className="mobile-services-toggle">
								<Link to="/services" onClick={closeMobileMenu} className="mobile-services-title">
									<span>Services</span>
								</Link>
								<button 
									className="mobile-arrow-btn"
									onClick={toggleMobileServices}
								>
									<span className={`mobile-arrow ${mobileServicesOpen ? 'open' : ''}`}>▼</span>
								</button>
							</div>
							<div className={`mobile-services-dropdown ${mobileServicesOpen ? 'open' : ''}`}>
								{/* IP Solutions Nested Dropdown */}
								<div className="mobile-services-section">
									<div className="mobile-services-title-toggle">
										<Link to="/service/ipsolutions" onClick={closeMobileMenu} className="mobile-services-section-title">
											<span>IP Solutions</span>
										</Link>
										<button 
											className="mobile-sub-arrow-btn"
											onClick={toggleMobileIpSolutions}
										>
											<span className={`mobile-sub-arrow ${mobileIpSolutionsOpen ? 'open' : ''}`}>▼</span>
										</button>
									</div>
									<div className={`mobile-services-sub-dropdown ${mobileIpSolutionsOpen ? 'open' : ''}`}>
										<ul className="mobile-services-list">
											<li>Utility Patent Drawings</li>
											<li>Design Patent Drawings</li>
											<li>Trademark Support</li>
										</ul>
									</div>
								</div>

								{/* Paralegal Solutions Nested Dropdown */}
								<div className="mobile-services-section">
									<div className="mobile-services-title-toggle">
										<Link to="/service/paralegalsolutions" onClick={closeMobileMenu} className="mobile-services-section-title">
											<span>Paralegal Solutions</span>
										</Link>
										<button 
											className="mobile-sub-arrow-btn"
											onClick={toggleMobileParalegalSolutions}
										>
											<span className={`mobile-sub-arrow ${mobileParalegalSolutionsOpen ? 'open' : ''}`}>▼</span>
										</button>
									</div>
									<div className={`mobile-services-sub-dropdown ${mobileParalegalSolutionsOpen ? 'open' : ''}`}>
										<ul className="mobile-services-list">
											<li>Case Management</li>
											<li>Docketing Management</li>
											<li>E-Filing Services</li>
											<li>Contact Management Services</li>
											<li>Trial Preparation</li>
											<li>Deposition Coordination</li>
											<li>Compliance Support</li>
										</ul>
									</div>
								</div>

								{/* Custom Solutions Nested Dropdown */}
								<div className="mobile-services-section">
									<div className="mobile-services-title-toggle">
										<Link to="/service/customsolutions" onClick={closeMobileMenu} className="mobile-services-section-title">
											<span>Custom Solutions</span>
										</Link>
										<button 
											className="mobile-sub-arrow-btn"
											onClick={toggleMobileCustomSolutions}
										>
											<span className={`mobile-sub-arrow ${mobileCustomSolutionsOpen ? 'open' : ''}`}>▼</span>
										</button>
									</div>
									<div className={`mobile-services-sub-dropdown ${mobileCustomSolutionsOpen ? 'open' : ''}`}>
										{/* Custom solutions content can be added here if needed */}
									</div>
								</div>
							</div>
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
