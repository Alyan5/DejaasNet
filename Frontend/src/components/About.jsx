import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-section__container">
        <div className="about-section__header">
          <span className="about-section__icon">🧬</span>
          <h2>About Dejaa'sNet</h2>
          <p>AI-powered pneumonia detection from chest X-ray images</p>
        </div>

        <div className="about-section__grid">
          {/* Architecture */}
          <div className="about-card about-card--full">
            <h3>Architecture Overview</h3>
            <div className="about-card__arch">
              <p>
                <strong>Dejaa'sNet</strong> is a deep learning system designed for binary classification 
                of chest X-ray images — detecting the presence or absence of pneumonia. It uses 
                <strong> DenseNet-121</strong> as the backbone feature extractor, a proven architecture 
                in medical imaging that achieves radiologist-level performance through dense layer connectivity 
                and efficient feature reuse.
              </p>
              <div className="about-card__pipeline">
                <div className="about-card__step">
                  <span className="about-card__step-num">1</span>
                  <h4>Input Layer</h4>
                  <p>224×224×3 grayscale X-ray (stacked to 3 channels) with normalization</p>
                </div>
                <div className="about-card__arrow">→</div>
                <div className="about-card__step">
                  <span className="about-card__step-num">2</span>
                  <h4>DenseNet-121</h4>
                  <p>Pre-trained feature extractor with dense block connectivity</p>
                </div>
                <div className="about-card__arrow">→</div>
                <div className="about-card__step">
                  <span className="about-card__step-num">3</span>
                  <h4>Custom Head</h4>
                  <p>Global Average Pooling + Dense layers with dropout regularization</p>
                </div>
                <div className="about-card__arrow">→</div>
                <div className="about-card__step">
                  <span className="about-card__step-num">4</span>
                  <h4>Output</h4>
                  <p>Sigmoid activation — probability of pneumonia (0 to 1)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="about-card">
            <h3>Technology Stack</h3>
            <div className="about-card__tech-list">
              <div className="about-card__tech">
                <span className="about-card__tech-icon">🧠</span>
                <div>
                  <strong>TensorFlow / Keras</strong>
                  <p>Deep learning framework for model training and inference</p>
                </div>
              </div>
              <div className="about-card__tech">
                <span className="about-card__tech-icon">⚡</span>
                <div>
                  <strong>FastAPI</strong>
                  <p>High-performance Python backend with async support</p>
                </div>
              </div>
              <div className="about-card__tech">
                <span className="about-card__tech-icon">⚛️</span>
                <div>
                  <strong>React + Vite</strong>
                  <p>Modern frontend with fast build tooling</p>
                </div>
              </div>
              <div className="about-card__tech">
                <span className="about-card__tech-icon">🏥</span>
                <div>
                  <strong>DenseNet-121</strong>
                  <p>State-of-the-art CNN backbone proven in medical imaging (CheXNet)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Model Details */}
          <div className="about-card">
            <h3>Model Performance</h3>
            <div className="about-card__stats">
              <div className="about-card__stat-item">
                <span className="about-card__stat-value">2</span>
                <span className="about-card__stat-label">Classifications</span>
              </div>
              <div className="about-card__stat-item">
                <span className="about-card__stat-value">~95%</span>
                <span className="about-card__stat-label">Accuracy</span>
              </div>
              <div className="about-card__stat-item">
                <span className="about-card__stat-value">224×224</span>
                <span className="about-card__stat-label">Input Resolution</span>
              </div>
              <div className="about-card__stat-item">
                <span className="about-card__stat-value">~8M</span>
                <span className="about-card__stat-label">Parameters</span>
              </div>
            </div>
            <div className="about-card__classes">
              <h4>Supported Classifications</h4>
              <div className="about-card__class-tags">
                <span className="tag tag--healthy">🫁 Normal (Healthy)</span>
                <span className="tag tag--tomato">🩻 Pneumonia (Infected)</span>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="about-card about-card--full">
            <h3>How It Works</h3>
            <div className="about-card__flow">
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">🩻</div>
                <h4>1. Capture</h4>
                <p>Obtain a standard PA chest X-ray image from a medical facility</p>
              </div>
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">📤</div>
                <h4>2. Upload</h4>
                <p>Upload the X-ray through the secure web interface (drag and drop supported)</p>
              </div>
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">🧠</div>
                <h4>3. Process</h4>
                <p>Image is converted to grayscale, resized to 224×224, normalized, and fed through DenseNet-121</p>
              </div>
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">🔬</div>
                <h4>4. Classify</h4>
                <p>The model outputs a probability score using sigmoid activation for binary classification</p>
              </div>
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">📋</div>
                <h4>5. Report</h4>
                <p>Results include diagnosis, confidence score, risk level, and medical recommendations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section__footer">
          <p>Built by <strong>Dejaa</strong> — Dejaa'sNet AI</p>
          <p className="about-section__version">v1.0.0 | Powered by DenseNet-121 + Custom Classification Head</p>
        </div>
      </div>
    </section>
  );
};

export default About;
