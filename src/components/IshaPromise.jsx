import React from 'react';
import templeImage from '../assets/1.jpeg';

const IshaPromise = () => {
  return (
    <section className="promise-split">
      {/* Left side: Content on Dark Red */}
      <div className="promise-content-side">
        <div className="section-label" style={{color: 'var(--color-gold)', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '8px'}}>
          THE ISHA PROMISE
        </div>
        <h2>Purity in every offering</h2>
        <p>
          From vibrant turmeric and auspicious kumkum to fragrant sambrani and lamp oil, every ISHA essential is chosen to honour the rituals that bring generations together.
        </p>

        <div className="promise-stats">
          <div>
            <div className="promise-stat-num">01</div>
            <div className="promise-stat-label">TRADITION</div>
          </div>
          <div>
            <div className="promise-stat-num">02</div>
            <div className="promise-stat-label">QUALITY</div>
          </div>
          <div>
            <div className="promise-stat-num">03</div>
            <div className="promise-stat-label">DEVOTION</div>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="promise-image-side">
        <img 
          src={templeImage}
          alt="Temple Gathering" 
        />
      </div>
    </section>
  );
};

export default IshaPromise;
