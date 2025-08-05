import React, { useState } from 'react';
import '../styles/FAQSection.css';

const faqs = [
	{
		question: 'What type of patent drawings do you provide?',
		answer:
			'We provide Utility, Design, Provisional, and Trademark patent drawings, fully compliant with USPTO and WIPO guidelines. From simple flowcharts to complex mechanical illustrations — we’ve got it covered.',
	},
	{
		question: 'How do I start a project with LexVuIP?',
		answer:
			'Simply share your idea in any format — sketch, CAD file, PDF, or even a photo. We’ll review and provide a timeline and quote. Once approved, we start illustrating.',
	},
	{
		question: 'How long does it take to complete a drawing?',
		answer:
			'Most projects are delivered within 2–4 business days, depending on the complexity. We also offer express service for urgent requests.',
	},
	{
		question: 'What file formats do you accept and deliver?',
		answer:
			'We accept sketches, hand-drawn scans, CAD, PPT, or even rough diagrams. Final files are delivered in PDF, TIFF, and DOC formats — ready for direct patent office submission.',
	},
	{
		question: 'Do you sign NDAs or keep client data confidential?',
		answer:
			'Absolutely. Confidentiality is our top priority. We’re happy to sign NDAs and ensure your innovation remains secure throughout the process.',
	},
	{
		question: 'How do you price your services?',
		answer:
			"Our pricing depends on the type and complexity of the drawings. We offer transparent and competitive rates, with no hidden costs. You’ll always know what you're paying for.",
	}
];

// const avatars = [
// 	'https://randomuser.me/api/portraits/women/44.jpg',
// 	'https://randomuser.me/api/portraits/men/32.jpg',
// 	'https://randomuser.me/api/portraits/women/68.jpg',
// ];

function FAQSection() {
	const [openIdx, setOpenIdx] = useState(null);

	return (
		<section id="faq" className="faq-section">
			<div className="faq-container">
				<div className="faq-left">
					<h2 className="faq-heading">
						<span className="faq-heading-italic">Frequently</span> Asked
						<br />
						Questions
					</h2>
					<div className="faq-desc">
						Anything else you’d like to know? Get in touch with our team
						and we’d be happy to discuss your questions.
					</div>
					<button className="faq-contact-btn" onClick={() => window.location.href = '/contact'}>
						Get In Touch <span className="faq-arrow">→</span>
					</button>
					{/* <div className="faq-avatars">
						{avatars.map((src, idx) => (
							<img className="faq-avatar" src={src} alt="avatar" key={idx} />
						))}
					</div> */}
				</div>
				<div className="faq-right">
					{faqs.map((faq, idx) => (
						<div
							className={`faq-accordion${openIdx === idx ? ' open' : ''}`}
							key={idx}
							onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
						>
							<div className="faq-question-row">
								<span className="faq-question">{faq.question}</span>
								<span className="faq-dropdown-icon">
									{openIdx === idx ? '▲' : '▼'}
								</span>
							</div>
							{openIdx === idx && (
								<div className="faq-answer">{faq.answer}</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQSection;
