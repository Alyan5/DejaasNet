import React, { useState } from 'react';
import { getDiseaseInfo, getSeverityColor } from '../data/diseaseInfo';

const ResultCard = ({ result, onReset }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const diseaseData = getDiseaseInfo(result.label);

  if (!diseaseData) {
    return (
      <div className="result-card">
        <div className="result-card__header result-card__header--unknown">
          <h3>⚠️ Unknown Classification</h3>
          <p>Label: {result.label}</p>
        </div>
      </div>
    );
  }

  const isHealthy = result.is_healthy || diseaseData.severity === 'None';
  const severityColor = getSeverityColor(diseaseData.severity);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'symptoms', label: 'Symptoms', icon: '🔍' },
    { id: 'treatment', label: 'Treatment', icon: '💊' },
    { id: 'prevention', label: 'Prevention', icon: '🛡️' },
  ];

  return (
    <div className={`result-card ${isHealthy ? 'result-card--healthy' : 'result-card--diseased'}`}>
      {/* Header */}
      <div className="result-card__header" style={{ borderLeftColor: severityColor }}>
        <div className="result-card__status">
          <span className="result-card__status-icon">{isHealthy ? '✅' : '⚠️'}</span>
          <span className="result-card__status-text" style={{ color: severityColor }}>
            {isHealthy ? 'Healthy Plant Detected' : 'Disease Detected'}
          </span>
        </div>
        <div className="result-card__main-info">
          <span className="result-card__plant-icon">{diseaseData.icon}</span>
          <div>
            <h3 className="result-card__disease-name">{diseaseData.disease}</h3>
            <p className="result-card__plant-name">{diseaseData.plant}</p>
            {diseaseData.scientificName !== 'N/A' && (
              <p className="result-card__scientific"><em>{diseaseData.scientificName}</em></p>
            )}
          </div>
        </div>

        {/* Severity */}
        {!isHealthy && (
          <div className="result-card__metrics">
            <div className="result-card__metric">
              <span className="result-card__metric-label">Severity</span>
              <span className="result-card__severity-badge" style={{ backgroundColor: severityColor }}>
                {diseaseData.severity}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="result-card__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`result-card__tab ${activeTab === tab.id ? 'result-card__tab--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="result-card__content">
        {activeTab === 'overview' && (
          <div className="result-card__panel">
            <p className="result-card__description">{diseaseData.description}</p>
            {!isHealthy && diseaseData.causes.length > 0 && (
              <div className="result-card__section">
                <h4>🔬 Causes</h4>
                <ul>
                  {diseaseData.causes.map((cause, i) => (
                    <li key={i}>{cause}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'symptoms' && (
          <div className="result-card__panel">
            {diseaseData.symptoms.length > 0 ? (
              <div className="result-card__symptoms-grid">
                {diseaseData.symptoms.map((symptom, i) => (
                  <div key={i} className="result-card__symptom-item">
                    <span className="result-card__symptom-number">{i + 1}</span>
                    <p>{symptom}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="result-card__empty">
                <span>✅</span>
                <p>No disease symptoms detected. Your plant appears healthy!</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'treatment' && (
          <div className="result-card__panel">
            <div className="result-card__treatment-list">
              {diseaseData.treatment.map((item, i) => (
                <div key={i} className="result-card__treatment-item">
                  <span className="result-card__treatment-icon">💊</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'prevention' && (
          <div className="result-card__panel">
            <div className="result-card__prevention-list">
              {diseaseData.prevention.map((item, i) => (
                <div key={i} className="result-card__prevention-item">
                  <span className="result-card__prevention-icon">🛡️</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="result-card__footer">
        <p className="result-card__disclaimer">
          ⚠️ This diagnosis is AI-generated. Consult an agricultural expert for confirmation.
        </p>
        <button className="btn btn--primary btn--sm" onClick={onReset}>
          <span>🔄</span> New Analysis
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
