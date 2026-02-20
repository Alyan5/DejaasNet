import React from 'react';

const ResultCard = ({ result, onReset }) => {
  const isNormal = result.is_normal;
  const confidencePercent = (result.confidence * 100).toFixed(1);

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return '#10B981';
      case 'Low-Moderate': return '#22C55E';
      case 'Moderate': return '#F59E0B';
      case 'Moderate-High': return '#F97316';
      case 'High': return '#EF4444';
      default: return '#64748B';
    }
  };

  const riskColor = getRiskColor(result.risk_level);

  return (
    <div className={`result-card ${isNormal ? 'result-card--healthy' : 'result-card--diseased'}`}>
      {/* Header */}
      <div className="result-card__header" style={{ borderLeftColor: riskColor }}>
        <div className="result-card__status">
          <span className="result-card__status-icon">{isNormal ? '✅' : '⚠️'}</span>
          <span className="result-card__status-text" style={{ color: riskColor }}>
            {result.diagnosis}
          </span>
        </div>
        <div className="result-card__main-info">
          <span className="result-card__plant-icon">{isNormal ? '🫁' : '🩻'}</span>
          <div>
            <h3 className="result-card__disease-name">{result.label}</h3>
            <p className="result-card__plant-name">Chest X-Ray Analysis</p>
          </div>
        </div>

        {/* Confidence & Risk */}
        <div className="result-card__metrics">
          <div className="result-card__metric">
            <span className="result-card__metric-label">Confidence</span>
            <span className="result-card__severity-badge" style={{ backgroundColor: riskColor }}>
              {confidencePercent}%
            </span>
          </div>
          <div className="result-card__metric">
            <span className="result-card__metric-label">Risk Level</span>
            <span className="result-card__severity-badge" style={{ backgroundColor: riskColor }}>
              {result.risk_level}
            </span>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="result-card__content">
        <div className="result-card__panel">
          <div className="result-card__section">
            <h4>📋 Recommendation</h4>
            <p className="result-card__description">{result.recommendation}</p>
          </div>

          {!isNormal && (
            <div className="result-card__section">
              <h4>🔍 What is Pneumonia?</h4>
              <p className="result-card__description">
                Pneumonia is an infection that inflames the air sacs in one or both lungs. 
                The air sacs may fill with fluid or pus, causing cough with phlegm, fever, 
                chills, and difficulty breathing. It can range from mild to life-threatening 
                and requires medical attention.
              </p>
            </div>
          )}

          {!isNormal && (
            <div className="result-card__section">
              <h4>🏥 Next Steps</h4>
              <div className="result-card__treatment-list">
                <div className="result-card__treatment-item">
                  <span className="result-card__treatment-icon">1️⃣</span>
                  <p>Consult a physician or pulmonologist for clinical evaluation</p>
                </div>
                <div className="result-card__treatment-item">
                  <span className="result-card__treatment-icon">2️⃣</span>
                  <p>A radiologist should review the X-ray for confirmation</p>
                </div>
                <div className="result-card__treatment-item">
                  <span className="result-card__treatment-icon">3️⃣</span>
                  <p>Additional tests (blood work, sputum culture) may be needed</p>
                </div>
                <div className="result-card__treatment-item">
                  <span className="result-card__treatment-icon">4️⃣</span>
                  <p>Treatment typically includes antibiotics, rest, and fluids</p>
                </div>
              </div>
            </div>
          )}

          {isNormal && (
            <div className="result-card__section">
              <h4>✅ Healthy Indicators</h4>
              <div className="result-card__treatment-list">
                <div className="result-card__treatment-item">
                  <span className="result-card__treatment-icon">🫁</span>
                  <p>No visible signs of pneumonia detected in the X-ray</p>
                </div>
                <div className="result-card__treatment-item">
                  <span className="result-card__treatment-icon">📋</span>
                  <p>Continue regular health checkups as recommended by your physician</p>
                </div>
                <div className="result-card__treatment-item">
                  <span className="result-card__treatment-icon">💡</span>
                  <p>If symptoms persist despite normal results, consult your doctor</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="result-card__footer">
        <p className="result-card__disclaimer">
          ⚠️ This is an AI-assisted screening tool. Results are not a substitute for professional medical diagnosis. Always consult a qualified healthcare provider.
        </p>
        <button className="btn btn--primary btn--sm" onClick={onReset}>
          <span>🔄</span> New Analysis
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
