import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">�</span>
              <span className="footer__logo-text">Dejaa'sNet</span>
            </div>
            <p className="footer__description">
              AI-powered pneumonia detection from chest X-ray images using deep learning. 
              Supporting rapid screening and clinical decision-making.
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__link-group">
              <h4>Platform</h4>
              <ul>
                <li>X-Ray Analysis</li>
                <li>Pneumonia Information</li>
                <li>About Dejaa'sNet</li>
              </ul>
            </div>
            <div className="footer__link-group">
              <h4>Technology</h4>
              <ul>
                <li>DenseNet-121</li>
                <li>TensorFlow / Keras</li>
                <li>FastAPI + React</li>
              </ul>
            </div>
            <div className="footer__link-group">
              <h4>Classifications</h4>
              <ul>
                <li>🫁 Normal (Healthy)</li>
                <li>🩻 Pneumonia (Infected)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Dejaa'sNet — AI Pneumonia Detection System</p>
          <p className="footer__disclaimer">
            Disclaimer: This is an AI screening tool. Results are not a substitute for professional medical diagnosis.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
