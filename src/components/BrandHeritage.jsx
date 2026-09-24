import React from 'react';

const BrandHeritage = () => {
  return (
    <section id="heritage" className="heritage-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Since 1985</span>
          <h2 className="section-title">Our Heritage</h2>
        </div>
        <div className="heritage-grid">
          <div className="heritage-image">
            <img 
              src="https://images.unsplash.com/photo-1605668988081-36b325256e29?auto=format&fit=crop&w=800&q=80" 
              alt="Traditional Pooja Ritual" 
              style={{borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)'}}
            />
          </div>
          <div className="heritage-text">
            <p>
              For generations, ISHA has stood as a beacon of purity and tradition. Our journey began with a simple belief: the sacred moments of devotion deserve offerings of unparalleled quality.
            </p>
            <p>
              Every product in our catalogue is a testament to this enduring philosophy. We meticulously source the finest natural ingredients, honoring age-old preparation methods to bring you pooja essentials that elevate your spiritual practice.
            </p>
            <p>
              Trust is not given; it is earned through decades of consistency. When you choose ISHA, you are embracing a legacy of authenticity and deep-rooted cultural values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHeritage;
