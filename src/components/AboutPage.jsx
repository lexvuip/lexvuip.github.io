import React from 'react';
import '../styles/AboutPage.css';
import lawyerImage from '../assets/stockimages/lawer.jpg';
import ourMission from '../assets/stockimages/ourmission.jpg'
import ourPurpose from '../assets/stockimages/ourpurpose.jpg'
import ourPromise from '../assets/stockimages/ourpromise.jpg'
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import FotterSection from './FotterSection';
import { useNavigate } from 'react-router-dom';

function AboutPage() {

    let navigate = useNavigate();
    return (
        <div>
        <section className="about-page-section">
            <div className="about-page-content">
                <h1 className="about-page-title">Innovation. Secured by <span className="about-page-emphasis">Expertise.</span></h1>
                <p className="about-page-description">
                    For over 25 years, LexVuIP has empowered intellectual property attorneys with expert patent illustration and IP documentation services—enabling seamless filings, confident prosecution, and bulletproof compliance with global patent offices. From complex utility patents to intricate design and trademark filings, we help legal professionals worldwide present innovation with unmatched accuracy and clarity.
                </p>
                <button className="about-page-btn" onClick={() => navigate('/contact')}>Talk to our Experts →</button>
            </div>
            <div className="about-page-image-container">
                <img src={lawyerImage} alt="Lawyer" className="about-page-image" />
            </div>
        </section>
       <section class="section-wrapper">
    <h2>At LexVuIP, We Provide Precise Support, From Paralegal Services to Patent Drawings, So Attorneys Can Focus on Advocacy Instead of Administration.</h2>
    
    <div class="cards-container">
      
      <div class="card">
        <div class="icon-circle">
          <img src={ourMission} alt="Mission Icon"/>
        </div>
        <h3>Our mission</h3>
        <p>We aim to support attorneys with reliable, detail-oriented help in both intellectual property and litigation. We ensure every filing, drawing, and deadline is managed with care.</p>
      </div>

      <div class="card">
        <div class="icon-circle">
          <img src={ourPromise} alt="Promise Icon" />
        </div>
        <h3>Our promise</h3>
        <p>We relieve the pressure on your desk. Whether you need design patent figures or trial prep documents, our work is accurate, compliant, and delivered on time every time.</p>
      </div>

      <div class="card">
        <div class="icon-circle">
          <img src={ourPurpose} alt="Purpose Icon" />
        </div>
        <h3>Our purpose</h3>
        <p>To strengthen the work of attorneys by removing bottlenecks, protecting innovation, and building lasting partnerships rooted in trust, clarity, and results.</p>
      </div>

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
                    From Full Legal Support to <span className="our-journey-emphasis">Patent Drawings</span>
                    <br />
                    Built on <span className="our-journey-emphasis">Precision</span> Expanded Through<span className="our-journey-emphasis">Trust</span>
                </h1>
                <p className="our-journey-description">
                    What started over two decades ago as a patent illustration practice has evolved into a trusted partner for attorneys in both intellectual property and litigation support. Over the years, we have helped firms protect innovation with accurate utility and design patent drawings, trademarks, and global IP documentation. At the same time, our role has grown to include paralegal services, drafting pleadings, preparing filings, managing dockets, and supporting trial preparation.  
                </p>
                <p className="our-journey-description">
                    Our mission remains the same: to give attorneys the confidence that every detail, whether technical or procedural, is handled with accuracy and care. 
                </p>
                <button className="our-journey-btn" onClick={() => navigate('/contact')}>Talk to our Experts →</button>
            </div>
        </section>
        <TestimonialSection />
        <FAQSection />
        <FotterSection />
        </div>
    );
}

export default AboutPage;