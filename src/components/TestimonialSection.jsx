import React, { useState, useEffect } from 'react';
import '../styles/TestimonialSection.css';

const testimonials = [
	
	{
		title : '“Exceptional Quality & Compliance”',
		name: 'Laura S.',
		text: '“LexVuIP delivered drawings that were not only visually precise but perfectly aligned with USPTO and WIPO guidelines. Their team’s technical skill and IP knowledge gave our application a strong foundation. Working with them felt like gaining a strategic partner, not just a vendor.”',
	},
	{
		title : '“Fast, Accurate, and Reliable”',
		name: 'James K.',
		text: '“We had a tight deadline for a utility patent filing and LexVuIP came through with speed and accuracy. Their drawings required no revisions — a rare feat. Communication was smooth, and their professionalism shone through every step. A team we trust completely.”',
	},
	{
		title : '“Trusted IP Experts”',
		name: 'Priya N.',
		text: '“LexVuIP has become our go-to for all IP illustration needs. Their knowledge of global standards is unmatched, and their attention to detail is outstanding. Whether for design or utility patents, they always deliver work that enhances our filings and impresses our clients.”',
	},
	{
		title : '“A Seamless Experience”',
		name: 'Michael D.',
		text: '“From the first interaction, LexVuIP’s process was clear, efficient, and highly professional. Their team understood our technical requirements and delivered elegant, standards-compliant drawings that elevated our submission. We’ve since partnered with them on multiple filings — and every time, the results are excellent.”',
	},
	{
		title : '“IP Visualization Done Right”',
		name: 'Anita R.',
		text: '“LexVuIP blends deep IP expertise with artistic precision. Their illustrations speak the language of both inventors and examiners. They not only meet global standards — they set them. For firms serious about IP protection, partnering with LexVuIP is a smart, strategic move.”',
	},
];

function TestimonialSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [animating, setAnimating] = useState(false);
	const [direction, setDirection] = useState(''); // 'left' or 'right'
	const [visibleCards, setVisibleCards] = useState([]);
	const cardsToShow = 1; // Show only one card at a time
	const total = testimonials.length;

	// Initialize visible cards
	useEffect(() => {
		updateVisibleCards(currentIndex);
	}, [currentIndex]);

	// Function to get the correct index with wrapping
	const getWrappedIndex = (index) => {
		return (index + total) % total;
	};

	// Update which cards are visible
	const updateVisibleCards = (startIndex) => {
		// For single card display, we'll include the current card
		// and also track the previous and next cards for animation purposes
		const currentCard = {
			...testimonials[startIndex],
			originalIndex: startIndex,
			position: 'current'
		};
		
		setVisibleCards([currentCard]);
	};

	const handlePrev = () => {
		if (animating) return;
		setDirection('left');
		setAnimating(true);
		setTimeout(() => {
			setCurrentIndex(prev => getWrappedIndex(prev - 1));
			setAnimating(false);
		}, 500);
	};

	const handleNext = () => {
		if (animating) return;
		setDirection('right');
		setAnimating(true);
		setTimeout(() => {
			setCurrentIndex(prev => getWrappedIndex(prev + 1));
			setAnimating(false);
		}, 500);
	};

	return (
		<section className="testimonial-section">
			<div className="testimonial-container">
				<h2 className="testimonial-heading">WHAT OUR CLIENTS SAY</h2>
				<div className="testimonial-carousel-container">
					<div
						className={`testimonial-cards-row testimonial-slide-${
							animating ? direction : 'none'
						}`}
					>
						{visibleCards.map((testimonial, idx) => (
							<div 
								className="testimonial-card card-center"
								key={`${testimonial.originalIndex}-${idx}`}
							>
								<h3>{testimonial.title}</h3>
								<div className="testimonial-text">{testimonial.text}</div>
								<div className="testimonial-name">— {testimonial.name}</div>
							</div>
						))}
					</div>
				</div>
				<div className="testimonial-nav-row">
					<button
						className="testimonial-nav-btn"
						onClick={handlePrev}
						aria-label="Previous testimonials"
						disabled={animating}
					>
						&#8592;
					</button>

					<button
						className="testimonial-nav-btn"
						onClick={handleNext}
						aria-label="Next testimonials"
						disabled={animating}
					>
						&#8594;
					</button>
				</div>
			</div>
		</section>
	);
}

export default TestimonialSection;