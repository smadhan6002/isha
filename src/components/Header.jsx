import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="brand-logo">
          ISHA
          <span className="brand-subtitle">Products</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <button onClick={() => scrollTo('hero')} className="nav-link">Home</button>
          <button onClick={() => scrollTo('products')} className="nav-link">Products</button>
          <button onClick={() => scrollTo('footer')} className="nav-link">Contact</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-bg-cream)',
          padding: '24px',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <button onClick={() => scrollTo('hero')} className="nav-link" style={{textAlign: 'left', padding: '8px 0'}}>Home</button>
          <button onClick={() => scrollTo('products')} className="nav-link" style={{textAlign: 'left', padding: '8px 0'}}>Products</button>
          <button onClick={() => scrollTo('footer')} className="nav-link" style={{textAlign: 'left', padding: '8px 0'}}>Contact</button>
        </div>
      )}
    </header>
  );
};

export default Header;
