import React, { useState, useEffect } from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'diagnose', label: 'Scan X-Ray', icon: '🩻' },
    { id: 'info', label: 'About Pneumonia', icon: '📖' },
    { id: 'about', label: 'About', icon: 'ℹ️' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__brand" onClick={() => setCurrentPage('home')}>
          <div className="navbar__logo">
            <span className="navbar__logo-icon">🏥</span>
            <span className="navbar__logo-text">Dejaa'sNet</span>
          </div>
          <span className="navbar__tagline">Pneumonia Detection</span>
        </div>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${currentPage === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => {
                setCurrentPage(link.id);
                setMenuOpen(false);
              }}
            >
              <span className="navbar__link-icon">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </div>

        <div className="navbar__actions">
          <button
            className="navbar__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`navbar__menu-icon ${menuOpen ? 'navbar__menu-icon--open' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
