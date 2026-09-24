import React from 'react';
import { ArrowRight } from 'lucide-react';

const Instagram = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Youtube = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Footer = () => {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Pre-footer CTA */}
      <section className="pre-footer-cta">
        <div className="container">
          <h2>Bring home the essence of devotion.</h2>
          <p>Thoughtfully made essentials for prayer, celebration and every sacred beginning.</p>
          <button onClick={scrollToProducts} className="btn-primary" style={{backgroundColor: '#4A151B'}}>
            Explore Collection <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer-updated">
        <div className="container">
          <div className="footer-updated-grid">
            
            {/* Column 1 */}
            <div>
              <div className="footer-logo-wrap">
                <div className="footer-logo-circle">I</div>
                <div className="footer-logo-text">
                  <span className="footer-logo-text-main" style={{color: '#a52a2a'}}>ISHA</span>
                  <span className="footer-logo-text-sub">PRODUCTS</span>
                </div>
              </div>
              <p className="footer-updated-desc">
                Authentic pooja essentials, crafted with purity and passed down with pride.
              </p>
              <div className="footer-socials">
                <a href="#" className="footer-social-btn"><Instagram size={18} /></a>
                <a href="#" className="footer-social-btn"><Facebook size={18} /></a>
                <a href="#" className="footer-social-btn"><Youtube size={18} /></a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="footer-heading">PRODUCTS</h4>
              <ul className="footer-links-list">
                <li>Turmeric</li>
                <li>Kumkum</li>
                <li>Pooja Oil</li>
                <li>Sambrani</li>
                <li>Agarbathi</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="footer-heading">WE'RE HERE TO HELP</h4>
              <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem'}}>
                Questions about our products or bulk orders?
              </p>
              <button className="btn-whatsapp">
                Chat on WhatsApp
              </button>
            </div>

          </div>

          <div className="footer-bottom-line">
            <div>© {new Date().getFullYear()} ISHA Products. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
