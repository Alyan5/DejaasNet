import React from 'react';

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="hero">
      <div className="hero__bg-pattern"></div>
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-icon">🧬</span>
            <span>Powered by DenseNet-121 Deep Learning</span>
          </div>
          <h1 className="hero__title">
            <span className="hero__title-line">Detect Pneumonia with</span>
            <span className="hero__title-highlight">Dejaa'sNet</span>
          </h1>
          <p className="hero__subtitle">
            AI-powered chest X-ray analysis for pneumonia detection. Upload a chest X-ray image 
            and receive an instant diagnosis with confidence scoring and medical recommendations. 
            Fast, accessible, and designed to support clinical decision-making.
          </p>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">2</span>
              <span className="hero__stat-label">Classifications</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">DenseNet</span>
              <span className="hero__stat-label">Architecture</span>
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
              <span>🩻</span> Scan X-Ray
            </button>
            <button className="hero__btn hero__btn--secondary" onClick={() => setCurrentPage('info')}>
              <span>📖</span> About Pneumonia
            </button>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__card-stack">
            <div className="hero__feature-card hero__feature-card--1" onClick={() => setCurrentPage('diagnose')} style={{ cursor: 'pointer' }}>
              <div className="hero__feature-icon">📤</div>
              <h3>Upload X-Ray</h3>
              <p>Upload a chest X-ray image in JPEG, PNG, or WebP format</p>
            </div>
            <div className="hero__feature-card hero__feature-card--2" onClick={() => setCurrentPage('diagnose')} style={{ cursor: 'pointer' }}>
              <div className="hero__feature-icon">🧠</div>
              <h3>AI Analysis</h3>
              <p>DenseNet-121 processes the image through deep learning layers</p>
            </div>
            <div className="hero__feature-card hero__feature-card--3" onClick={() => setCurrentPage('info')} style={{ cursor: 'pointer' }}>
              <div className="hero__feature-icon">📋</div>
              <h3>Get Results</h3>
              <p>Receive diagnosis with confidence score and medical recommendations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__supported">
        <h3 className="hero__supported-title">How It Helps</h3>
        <div className="hero__supported-list">
          <div className="hero__crop">
            <span className="hero__crop-icon">⏱️</span>
            <span className="hero__crop-name">Early Detection</span>
            <span className="hero__crop-count">Rapid screening</span>
          </div>
          <div className="hero__crop">
            <span className="hero__crop-icon">🏥</span>
            <span className="hero__crop-name">Clinical Support</span>
            <span className="hero__crop-count">AI-assisted diagnosis</span>
          </div>
          <div className="hero__crop">
            <span className="hero__crop-icon">🌍</span>
            <span className="hero__crop-name">Accessible</span>
            <span className="hero__crop-count">Available anywhere</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
