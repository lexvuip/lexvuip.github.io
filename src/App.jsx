import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import './styles/App.css';

function AppContent() {
	const location = useLocation();
	const isContactPage = location.pathname === '/contact';
	const navigate = useNavigate();

	const renderAnimatedWords = (words, startDelay = 0) => {
		return words.map((word, index) => (
			<span
				key={`${word}-${index}`}
				style={{ animationDelay: `${startDelay + index * 0.08}s` }}
			>
				{word}{' '}
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
											['Precision', 'in', 'Every', 'Line'],
											0
										)}
										<br />
										{renderAnimatedWords(
											['Protection', 'in', 'Every', 'Design.'],
											0.6
										)}
									</h1>
									<p className="hero-description">
										Your ideas deserve more than just documentation—they deserve
										distinction. At LexVuIP, we transform concepts into powerful
										visuals that speak the language of protection. With a team
										of sharp-eyed artists, engineers, and drafting pros, we
										don't just meet USPTO standards—we exceed expectations,
										every time.
									</p>
									<div className="hero-actions">
										<button
											className="hero-contact-btn"
											onClick={() => navigate('/contact')}
										>
											Get In Touch
										</button>
										<a href="#services" className="hero-services-link">
											Our Services
										</a>
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
			</Routes>
		</div>
	);
}

function App() {
	return <AppContent />;
}

export default App;
