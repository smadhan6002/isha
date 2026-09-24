import React from 'react';
import { Check } from 'lucide-react';
import founderImage from '../assets/isha founder.jpeg';

const Founder = () => {
  return (
    <section className="founder-split">
      <div className="container">
        <div className="founder-split-grid">
          
          {/* Left Column: Image */}
          <div className="founder-image-col">
            {/* User will replace this image */}
            <img 
              src={founderImage}
              alt="Founder" 
              className="founder-img"
            />
            <div className="founder-name-card">
              <div className="founder-legacy">A legacy of devotion</div>
              <div className="founder-title-text">FOUNDER • ISHA PRODUCTS</div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="founder-content-col">
            <div className="section-label" style={{color: 'var(--color-gold)', marginBottom: '8px', letterSpacing: '0.15em', fontWeight: 600}}>OUR HERITAGE</div>
            <h2>Born from faith.<br/>Built on trust.</h2>
            
            <p>
              What began as a humble promise to bring purity into every prayer has grown into a name families welcome into their sacred spaces.
            </p>
            <p>
              Guided by our founder's belief that devotion deserves nothing less than the finest, ISHA Products preserves the care, integrity and traditional wisdom behind every pooja essential.
            </p>

            <div className="founder-checks">
              <div className="founder-check-item">
                <Check size={16} color="var(--color-gold)" /> Selected with care
              </div>
              <div className="founder-check-item">
                <Check size={16} color="var(--color-gold)" /> Rooted in tradition
              </div>
              <div className="founder-check-item">
                <Check size={16} color="var(--color-gold)" /> Made for every home
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
