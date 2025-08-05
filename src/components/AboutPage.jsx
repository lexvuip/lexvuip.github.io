import React from 'react';
import '../styles/AboutPage.css';
import lawyerImage from '../assets/stockimages/lawer.jpg';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import FotterSection from './FotterSection';

function AboutPage() {
    return (
        <div>
        <section className="about-page-section">
            <div className="about-page-content">
                <h1 className="about-page-title">Innovation. Secured by <span className="about-page-emphasis">Expertise.</span></h1>
                <p className="about-page-description">
                    For over 25 years, LexVuIP has empowered intellectual property attorneys with expert patent illustration and IP documentation services—enabling seamless filings, confident prosecution, and bulletproof compliance with global patent offices. From complex utility patents to intricate design and trademark filings, we help legal professionals worldwide present innovation with unmatched accuracy and clarity.
                </p>
                <button className="about-page-btn">Talk to our Experts →</button>
            </div>
            <div className="about-page-image-container">
                <img src={lawyerImage} alt="Lawyer" className="about-page-image" />
            </div>
        </section>
        <section className="our-journey-section">
            <div className="our-journey-left-column">
                <div className="our-journey-header">
                    <div className="our-journey-arrow-container">
                        <span className="our-journey-arrow"></span>
                        <span className="our-journey-arrow"></span>
                        <span className="our-journey-arrow"></span>
                    </div>
                    <h2 className="our-journey-title-small">OUR JOURNEY</h2>
                </div>
            </div>
            <div className="our-journey-right-column">
                <h1 className="our-journey-title-large">
                    Two Decades of Precision, One <span className="our-journey-emphasis">Patent</span> at a Time
                    <br />
                    Advancing Innovation in Every <span className="our-journey-emphasis">Jurisdiction</span>
                </h1>
                <p className="our-journey-description">
                    What began as a niche patent illustration studio has evolved into a global partner for IP attorneys seeking clarity, compliance, and speed.
                </p>
                <p className="our-journey-description">
                    WFor over 25 years, LexVuIP has empowered patent law firms and corporate legal teams with world-class IP documentation—from high-precision utility and design patent drawings to global trademark representation.
                </p>
                <p className="our-journey-description">
                    Trusted across the USPTO, EPO, EUIPO, and Indian Patent Office, our journey has always been rooted in one mission: to help legal professionals protect innovation with absolute confidence and accuracy.
                </p>
                <button className="our-journey-btn">Talk to our Experts →</button>
            </div>
        </section>
        <TestimonialSection />
        <FAQSection />
        <FotterSection />
        </div>
    );
}

export default AboutPage;