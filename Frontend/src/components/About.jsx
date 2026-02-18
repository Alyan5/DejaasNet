import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-section__container">
        <div className="about-section__header">
          <span className="about-section__icon">🧬</span>
          <h2>About Dejaa'sNet</h2>
          <p>An advanced AI system for plant disease detection</p>
        </div>

        <div className="about-section__grid">
          {/* Architecture */}
          <div className="about-card about-card--full">
            <h3>🏗️ Architecture Overview</h3>
            <div className="about-card__arch">
              <p>
                <strong>Dejaa'sNet</strong> is a deep learning architecture designed specifically for 
                plant disease detection from leaf images. It leverages transfer learning with 
                <strong> EfficientNet-B0</strong> as the backbone feature extractor, combined with 
                custom classification layers optimized for agricultural disease identification.
              </p>
              <div className="about-card__pipeline">
                <div className="about-card__step">
                  <span className="about-card__step-num">1</span>
                  <h4>Input Layer</h4>
                  <p>224×224×3 RGB image input with preprocessing normalization</p>
                </div>
                <div className="about-card__arrow">→</div>
                <div className="about-card__step">
                  <span className="about-card__step-num">2</span>
                  <h4>EfficientNet-B0</h4>
                  <p>Pre-trained feature extractor with compound scaling</p>
                </div>
                <div className="about-card__arrow">→</div>
                <div className="about-card__step">
                  <span className="about-card__step-num">3</span>
                  <h4>Custom Head</h4>
                  <p>Global Average Pooling + Dense layers with dropout</p>
                </div>
                <div className="about-card__arrow">→</div>
                <div className="about-card__step">
                  <span className="about-card__step-num">4</span>
                  <h4>Output</h4>
                  <p>Softmax classification across 17 disease classes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="about-card">
            <h3>⚙️ Technology Stack</h3>
            <div className="about-card__tech-list">
              <div className="about-card__tech">
                <span className="about-card__tech-icon">🧠</span>
                <div>
                  <strong>TensorFlow / Keras</strong>
                  <p>Deep learning framework for model training & inference</p>
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
                  <strong>React</strong>
                  <p>Modern frontend with component-based architecture</p>
                </div>
              </div>
              <div className="about-card__tech">
                <span className="about-card__tech-icon">🍃</span>
                <div>
                  <strong>MongoDB</strong>
                  <p>NoSQL database for prediction history storage</p>
                </div>
              </div>
              <div className="about-card__tech">
                <span className="about-card__tech-icon">🌐</span>
                <div>
                  <strong>EfficientNet-B0</strong>
                  <p>State-of-the-art CNN backbone with compound scaling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Model Details */}
          <div className="about-card">
            <h3>📊 Model Performance</h3>
            <div className="about-card__stats">
              <div className="about-card__stat-item">
                <span className="about-card__stat-value">17</span>
                <span className="about-card__stat-label">Disease Classes</span>
              </div>
              <div className="about-card__stat-item">
                <span className="about-card__stat-value">3</span>
                <span className="about-card__stat-label">Crop Types</span>
              </div>
              <div className="about-card__stat-item">
                <span className="about-card__stat-value">224×224</span>
                <span className="about-card__stat-label">Input Resolution</span>
              </div>
              <div className="about-card__stat-item">
                <span className="about-card__stat-value">~5.3M</span>
                <span className="about-card__stat-label">Parameters</span>
              </div>
            </div>
            <div className="about-card__classes">
              <h4>Supported Classes</h4>
              <div className="about-card__class-tags">
                <span className="tag tag--apple">🍎 Apple Scab</span>
                <span className="tag tag--apple">🍎 Black Rot</span>
                <span className="tag tag--apple">🍎 Cedar Rust</span>
                <span className="tag tag--healthy">🍏 Apple Healthy</span>
                <span className="tag tag--potato">🥔 Early Blight</span>
                <span className="tag tag--potato">🥔 Late Blight</span>
                <span className="tag tag--healthy">🥔 Potato Healthy</span>
                <span className="tag tag--tomato">🍅 Bacterial Spot</span>
                <span className="tag tag--tomato">🍅 Early Blight</span>
                <span className="tag tag--tomato">🍅 Late Blight</span>
                <span className="tag tag--tomato">🍅 Leaf Mold</span>
                <span className="tag tag--tomato">🍅 Septoria</span>
                <span className="tag tag--tomato">🍅 Spider Mites</span>
                <span className="tag tag--tomato">🍅 Target Spot</span>
                <span className="tag tag--tomato">🍅 TYLCV</span>
                <span className="tag tag--tomato">🍅 Mosaic Virus</span>
                <span className="tag tag--healthy">🍅 Tomato Healthy</span>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="about-card about-card--full">
            <h3>🔄 How It Works</h3>
            <div className="about-card__flow">
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">📸</div>
                <h4>1. Capture</h4>
                <p>Take a clear photo of the plant leaf showing any symptoms or discoloration</p>
              </div>
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">📤</div>
                <h4>2. Upload</h4>
                <p>Upload the image through our secure web interface (drag & drop supported)</p>
              </div>
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">🧠</div>
                <h4>3. Process</h4>
                <p>Dejaa'sNet preprocesses the image (resize to 224×224, normalize) and feeds it through the CNN</p>
              </div>
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">🔬</div>
                <h4>4. Classify</h4>
                <p>The model outputs probability scores across all 17 classes using softmax activation</p>
              </div>
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">📋</div>
                <h4>5. Report</h4>
                <p>Results include disease name, confidence score, symptoms, treatment & prevention tips</p>
              </div>
              <div className="about-card__flow-step">
                <div className="about-card__flow-icon">💾</div>
                <h4>6. Store</h4>
                <p>Predictions are saved to MongoDB for future reference and analysis tracking</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section__footer">
          <p>Built with ❤️ using Dejaa'sNet Architecture</p>
          <p className="about-section__version">v2.0.0 | Powered by EfficientNet-B0 + Custom Classification Head</p>
        </div>
      </div>
    </section>
  );
};

export default About;
