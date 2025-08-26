import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useEffect } from 'react'; // <-- This is correct
import AboutSection from './components/AboutSection';
import OurSection from './components/OurSection';
import FotterSection from './components/FotterSection';
import TestimonialSection from './components/TestimonialSection';
import NavBar from './components/NavBar';
import FAQSection from './components/FAQSection';
import ContactUs from './components/ContactUs';
import AboutPage from './components/AboutPage';
import BlogSection from './components/BlogSection';
import BlogPost from './components/BlogPost';
import ServicesPage from './components/ServicesPage';

import './styles/App.css';
import ParaLegalSolutions from './components/ParalegalSolutionsPage';
import IpSolutionsPage from './components/IpSolutionsPage';
import CustomSolutionsPage from './components/CustomSolutionsPage';

// Add this import at the top
import FloatingCallButton from './components/FloatingCallButton';

function AppContent() {
	// const location = useLocation();
	// const isContactPage = location.pathname === '/contact';
	const navigate = useNavigate();

	const renderAnimatedWords = (words, startDelay = 0) => {
		return words.map((word, index) => (
			<span
				key={`${word}-${index}`}
				style={{ animationDelay: `${startDelay + index * 0.08}s` }}
			>
				{word}&nbsp;
			</span>
		));
	};

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<header className="hero-section">


								<div className="hero-content">
									<h1 className="hero-title">
										{renderAnimatedWords(
											['Precision', 'in', 'Every', 'Filing'],
											0
										)}
										<br />
										{renderAnimatedWords(
											['Clarity', 'in', 'Every', 'Design.'],
											0.6
										)}
									</h1>
									<p className="hero-description">
										Your cases deserve more than routine paperwork. They deserve strategy and accuracy. At LexVu, we take care of the details that protect your clients and free up your time. Our team is trained in filings, trial preparation, managing clients, docket management and patent support. We don’t just follow procedure; we raise the standard every time.
									</p>
									<div className="hero-actions">
										<button
											className="hero-contact-btn"
											onClick={() => navigate('/contact')}
										>
											Get In Touch
										</button>
										<Link to="/services" className="hero-services-link">
											Our Services
										</Link>
									</div>
								</div>
							</header>
							<AboutSection />
							<OurSection />
							<BlogSection />
							<TestimonialSection />
							<FAQSection />
							<FotterSection />
						</>
					}
				/>
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/blog/:id" element={<BlogPost />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route
					path="/service/paralegalsolutions"
					element={<ParaLegalSolutions />}
				/>
				<Route path="/service/ipsolutions" element={<IpSolutionsPage />} />
				<Route
					path="/service/customsolutions"
					element={<CustomSolutionsPage />}
				/>
			</Routes>
		</div>
	);
}

// ScrollToTop Component to reset the scroll position on route change
const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page on navigation
	}, [location]);

	return null;
};

function App() {
	return (
		<>
			<ScrollToTop /> {/* Ensure the scroll resets on route change */}
			<AppContent />
			{/* // Add this component before the closing </div> in AppContent return statement */}
			<FloatingCallButton />
		</>
	);
}

export default App;
