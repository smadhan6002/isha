import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import bgImage from '../assets/2.jpeg';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-full">
      {/* Background Image - User will replace this */}
      <div className="hero-bg">
        <img 
          src={bgImage}
          alt="Temple Background" 
        />
      </div>
      
      {/* Dark gradient overlay on the left */}
      <div className="hero-overlay"></div>

      <div className="hero-content-inner animate-fade-in">
        <div className="hero-top-label">
          SACRED ESSENTIALS SINCE GENERATIONS
        </div>
        
        <h1 className="hero-main-title">
          Tradition You Trust.<br/>
          <span className="italic-gold">Quality You Feel.</span>
        </h1>
        
        <p className="hero-main-subtitle">
          Authentic Pooja Essentials for Every Sacred Moment
        </p>
        
        <button onClick={scrollToProducts} className="btn-primary" style={{backgroundColor: '#6b1c23'}}>
          Explore Collection <ArrowRight size={18} />
        </button>
      </div>

      {/* Bottom Features Bar */}
      <div className="hero-features-bar">
        <div className="hero-features-grid">
          <div className="hero-feature-item">
            <Sparkles size={16} color="var(--color-gold)" /> PURITY ASSURED
          </div>
          <div className="hero-feature-item">
            <Sparkles size={16} color="var(--color-gold)" /> TIME-HONOURED CRAFT
          </div>
          <div className="hero-feature-item">
            <Sparkles size={16} color="var(--color-gold)" /> MADE IN INDIA
          </div>
          <div className="hero-feature-item">
            <Sparkles size={16} color="var(--color-gold)" /> TRUSTED QUALITY
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
