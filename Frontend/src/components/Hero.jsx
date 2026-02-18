import React from 'react';

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="hero">
      <div className="hero__bg-pattern"></div>
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-icon">🧬</span>
            <span>Powered by EfficientNet-B0 Deep Learning</span>
          </div>
          <h1 className="hero__title">
            <span className="hero__title-line">Protect Your Crops with</span>
            <span className="hero__title-highlight">Dejaa'sNet</span>
          </h1>
          <p className="hero__subtitle">
            Advanced AI-powered plant disease detection system. Upload a photo of any plant leaf 
            and get instant diagnosis with treatment recommendations. Supporting Apple, Tomato, 
            and Potato disease identification across 17 classes.
          </p>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">17</span>
              <span className="hero__stat-label">Disease Classes</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">3</span>
              <span className="hero__stat-label">Crop Types</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">~95%</span>
              <span className="hero__stat-label">Accuracy</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">&lt;3s</span>
              <span className="hero__stat-label">Detection Time</span>
            </div>
          </div>
          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" onClick={() => setCurrentPage('diagnose')}>
              <span>🔬</span> Start Diagnosis
            </button>
            <button className="hero__btn hero__btn--secondary" onClick={() => setCurrentPage('diseases')}>
              <span>📖</span> Disease Library
            </button>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__card-stack">
            <div className="hero__feature-card hero__feature-card--1" onClick={() => setCurrentPage('diagnose')} style={{ cursor: 'pointer' }}>
              <div className="hero__feature-icon">📸</div>
              <h3>Upload Image</h3>
              <p>Take a photo or upload an image of the affected plant leaf</p>
            </div>
            <div className="hero__feature-card hero__feature-card--2" onClick={() => setCurrentPage('diagnose')} style={{ cursor: 'pointer' }}>
              <div className="hero__feature-icon">🧠</div>
              <h3>AI Analysis</h3>
              <p>Dejaa'sNet CNN processes the image through deep learning layers</p>
            </div>
            <div className="hero__feature-card hero__feature-card--3" onClick={() => setCurrentPage('diseases')} style={{ cursor: 'pointer' }}>
              <div className="hero__feature-icon">💊</div>
              <h3>Get Treatment</h3>
              <p>Receive diagnosis with detailed treatment & prevention advice</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__supported">
        <h3 className="hero__supported-title">Supported Crops</h3>
        <div className="hero__supported-list">
          <div className="hero__crop">
            <span className="hero__crop-icon">🍎</span>
            <span className="hero__crop-name">Apple</span>
            <span className="hero__crop-count">4 classes</span>
          </div>
          <div className="hero__crop">
            <span className="hero__crop-icon">🍅</span>
            <span className="hero__crop-name">Tomato</span>
            <span className="hero__crop-count">10 classes</span>
          </div>
          <div className="hero__crop">
            <span className="hero__crop-icon">🥔</span>
            <span className="hero__crop-name">Potato</span>
            <span className="hero__crop-count">3 classes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
