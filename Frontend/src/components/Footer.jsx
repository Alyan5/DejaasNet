import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">🌿</span>
              <span className="footer__logo-text">Dejaa'sNet</span>
            </div>
            <p className="footer__description">
              AI-powered plant disease detection system using deep learning. 
              Protecting crops through advanced computer vision technology.
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__link-group">
              <h4>Platform</h4>
              <ul>
                <li>Disease Diagnosis</li>
                <li>Disease Library</li>
                <li>Prediction History</li>
              </ul>
            </div>
            <div className="footer__link-group">
              <h4>Technology</h4>
              <ul>
                <li>EfficientNet-B0</li>
                <li>TensorFlow/Keras</li>
                <li>FastAPI + MongoDB</li>
              </ul>
            </div>
            <div className="footer__link-group">
              <h4>Supported Crops</h4>
              <ul>
                <li>🍎 Apple (4 classes)</li>
                <li>🍅 Tomato (10 classes)</li>
                <li>🥔 Potato (3 classes)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Dejaa'sNet — AI Plant Disease Detection System</p>
          <p className="footer__disclaimer">
            Disclaimer: Results are AI-generated and should be verified by agricultural professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
