import React, { useState } from 'react';
import { getAllDiseases, getSeverityColor } from '../data/diseaseInfo';

const DiseaseLibrary = () => {
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [filter, setFilter] = useState('all');
  const allDiseases = getAllDiseases();

  const filteredDiseases = allDiseases.filter((d) => {
    if (filter === 'all') return true;
    if (filter === 'healthy') return d.severity === 'None';
    if (filter === 'diseased') return d.severity !== 'None';
    return d.plant.toLowerCase() === filter;
  });

  return (
    <section className="disease-library">
      <div className="disease-library__container">
        <div className="disease-library__header">
          <span className="disease-library__icon">📚</span>
          <h2>Disease Library</h2>
          <p>Comprehensive reference for all plant diseases detectable by Dejaa'sNet</p>
        </div>

        {/* Filters */}
        <div className="disease-library__filters">
          {['all', 'apple', 'tomato', 'potato', 'diseased', 'healthy'].map((f) => (
            <button
              key={f}
              className={`disease-library__filter ${filter === f ? 'disease-library__filter--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' && '🌍 All'}
              {f === 'apple' && '🍎 Apple'}
              {f === 'tomato' && '🍅 Tomato'}
              {f === 'potato' && '🥔 Potato'}
              {f === 'diseased' && '🦠 Diseases Only'}
              {f === 'healthy' && '✅ Healthy Only'}
            </button>
          ))}
        </div>

        <div className="disease-library__grid">
          {filteredDiseases.map((disease) => (
            <div
              key={disease.key}
              className={`disease-card ${selectedDisease?.key === disease.key ? 'disease-card--selected' : ''}`}
              onClick={() => setSelectedDisease(selectedDisease?.key === disease.key ? null : disease)}
              style={{ borderTopColor: disease.color }}
            >
              <div className="disease-card__header">
                <span className="disease-card__icon">{disease.icon}</span>
                <div>
                  <h3 className="disease-card__name">{disease.disease}</h3>
                  <p className="disease-card__plant">{disease.plant}</p>
                </div>
                <span
                  className="disease-card__severity"
                  style={{ backgroundColor: getSeverityColor(disease.severity) }}
                >
                  {disease.severity}
                </span>
              </div>

              {selectedDisease?.key === disease.key && (
                <div className="disease-card__expanded">
                  {disease.scientificName !== 'N/A' && (
                    <p className="disease-card__scientific"><em>{disease.scientificName}</em></p>
                  )}
                  <p className="disease-card__description">{disease.description}</p>

                  {disease.symptoms.length > 0 && (
                    <div className="disease-card__section">
                      <h4>🔍 Symptoms</h4>
                      <ul>
                        {disease.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                  )}

                  {disease.treatment.length > 0 && (
                    <div className="disease-card__section">
                      <h4>💊 Treatment</h4>
                      <ul>
                        {disease.treatment.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    </div>
                  )}

                  {disease.prevention.length > 0 && (
                    <div className="disease-card__section">
                      <h4>🛡️ Prevention</h4>
                      <ul>
                        {disease.prevention.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseaseLibrary;
