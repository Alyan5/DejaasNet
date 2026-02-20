import React, { useState } from 'react';

const PneumoniaInfo = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'types', label: 'Types', icon: '🔬' },
    { id: 'symptoms', label: 'Symptoms', icon: '🩺' },
    { id: 'diagnosis', label: 'Diagnosis', icon: '🩻' },
    { id: 'treatment', label: 'Treatment', icon: '💊' },
    { id: 'prevention', label: 'Prevention', icon: '🛡️' },
  ];

  return (
    <section className="disease-library">
      <div className="disease-library__container">
        <div className="disease-library__header">
          <span className="disease-library__icon">📖</span>
          <h2>Understanding Pneumonia</h2>
          <p>Comprehensive medical reference on pneumonia — causes, symptoms, diagnosis, and treatment</p>
        </div>

        {/* Section Tabs */}
        <div className="disease-library__filters">
          {sections.map((s) => (
            <button
              key={s.id}
              className={`disease-library__filter ${activeSection === s.id ? 'disease-library__filter--active' : ''}`}
              onClick={() => setActiveSection(s.id)}
            >
              {s.icon} {s.label}
            </button>
          ))}
        </div>

        <div className="disease-library__grid">
          {activeSection === 'overview' && (
            <>
              <div className="disease-card" style={{ borderTopColor: '#3b82f6' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🫁</span>
                  <div>
                    <h3 className="disease-card__name">What is Pneumonia?</h3>
                    <p className="disease-card__plant">Respiratory Infection</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <p className="disease-card__description">
                    Pneumonia is an infection that inflames the air sacs (alveoli) in one or both lungs. 
                    The air sacs may fill with fluid or pus, causing cough with phlegm or pus, fever, chills, 
                    and difficulty breathing. A variety of organisms, including bacteria, viruses, and fungi, 
                    can cause pneumonia.
                  </p>
                  <p className="disease-card__description" style={{ marginTop: '12px' }}>
                    Pneumonia can range in seriousness from mild to life-threatening. It is most serious 
                    for infants, young children, people older than 65, and people with weakened immune 
                    systems or underlying health conditions.
                  </p>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#ef4444' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">📊</span>
                  <div>
                    <h3 className="disease-card__name">Global Impact</h3>
                    <p className="disease-card__plant">Statistics</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <div className="disease-card__section">
                    <ul>
                      <li>Pneumonia accounts for approximately 15% of all deaths of children under 5 years old worldwide</li>
                      <li>It kills an estimated 2.5 million people annually, including 672,000 children</li>
                      <li>In many developing countries, pneumonia is the leading cause of death in children</li>
                      <li>Early detection and treatment can significantly reduce mortality rates</li>
                      <li>AI-assisted X-ray screening can help in regions with limited access to radiologists</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#f59e0b' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">⚠️</span>
                  <div>
                    <h3 className="disease-card__name">Risk Factors</h3>
                    <p className="disease-card__plant">Who is at risk?</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <div className="disease-card__section">
                    <ul>
                      <li>Children under 2 years of age</li>
                      <li>Adults over 65 years old</li>
                      <li>People with weakened immune systems (HIV/AIDS, chemotherapy, organ transplant)</li>
                      <li>Chronic diseases such as asthma, COPD, heart disease, or diabetes</li>
                      <li>Smokers and people exposed to air pollution</li>
                      <li>Hospitalized patients, especially those on ventilators</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === 'types' && (
            <>
              <div className="disease-card" style={{ borderTopColor: '#8b5cf6' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🦠</span>
                  <div>
                    <h3 className="disease-card__name">Bacterial Pneumonia</h3>
                    <p className="disease-card__plant">Most common type</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <p className="disease-card__description">
                    Caused most commonly by Streptococcus pneumoniae. Can occur on its own or after 
                    a cold or flu. It may affect one part (lobe) of the lung, a condition called lobar pneumonia. 
                    Bacterial pneumonia tends to be more severe and is treated with antibiotics.
                  </p>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#06b6d4' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🧫</span>
                  <div>
                    <h3 className="disease-card__name">Viral Pneumonia</h3>
                    <p className="disease-card__plant">Including COVID-19, Influenza, RSV</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <p className="disease-card__description">
                    Caused by various viruses including influenza, respiratory syncytial virus (RSV), 
                    and SARS-CoV-2. Viral pneumonia is usually milder than bacterial pneumonia but can 
                    occasionally become severe. Antibiotics are not effective against viral pneumonia; 
                    antiviral medications may be used in some cases.
                  </p>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#10b981' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🍄</span>
                  <div>
                    <h3 className="disease-card__name">Fungal Pneumonia</h3>
                    <p className="disease-card__plant">Less common, often in immunocompromised</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <p className="disease-card__description">
                    Caused by fungi from soil or bird droppings. Most common in people with chronic 
                    health conditions or weakened immune systems. Types include Pneumocystis pneumonia (PCP), 
                    coccidioidomycosis, histoplasmosis, and cryptococcosis. Treated with antifungal medications.
                  </p>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#f97316' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🏥</span>
                  <div>
                    <h3 className="disease-card__name">Hospital-Acquired Pneumonia</h3>
                    <p className="disease-card__plant">Nosocomial infection</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <p className="disease-card__description">
                    Develops during or after a hospital stay for another illness. Can be more serious 
                    because the bacteria may be resistant to antibiotics, and patients are already ill. 
                    Ventilator-associated pneumonia (VAP) is a significant subtype affecting patients 
                    on mechanical ventilation.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeSection === 'symptoms' && (
            <>
              <div className="disease-card" style={{ borderTopColor: '#ef4444' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🤒</span>
                  <div>
                    <h3 className="disease-card__name">Common Symptoms</h3>
                    <p className="disease-card__plant">Signs to watch for</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <div className="disease-card__section">
                    <ul>
                      <li>Persistent cough, which may produce phlegm (green, yellow, or bloody)</li>
                      <li>Fever, sweating, and shaking chills</li>
                      <li>Shortness of breath during normal activities or at rest</li>
                      <li>Sharp or stabbing chest pain that worsens with deep breathing or coughing</li>
                      <li>Fatigue and general feeling of being unwell</li>
                      <li>Nausea, vomiting, or diarrhea</li>
                      <li>Confusion or changes in mental awareness (especially in adults 65+)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#f59e0b' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🚨</span>
                  <div>
                    <h3 className="disease-card__name">When to Seek Emergency Care</h3>
                    <p className="disease-card__plant">Urgent warning signs</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <div className="disease-card__section">
                    <ul>
                      <li>Difficulty breathing or rapid breathing</li>
                      <li>Chest pain that does not improve</li>
                      <li>High persistent fever (above 102°F / 39°C)</li>
                      <li>Confusion or disorientation</li>
                      <li>Bluish lips or fingernails (cyanosis)</li>
                      <li>Symptoms that worsen after initial improvement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === 'diagnosis' && (
            <>
              <div className="disease-card" style={{ borderTopColor: '#3b82f6' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🩻</span>
                  <div>
                    <h3 className="disease-card__name">Chest X-Ray</h3>
                    <p className="disease-card__plant">Primary diagnostic tool</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <p className="disease-card__description">
                    A chest X-ray is the primary imaging tool for diagnosing pneumonia. It can confirm 
                    the presence of infection and show its location and extent in the lungs. Pneumonia 
                    typically appears as white or hazy areas (opacities) on an X-ray where the lungs 
                    should normally appear dark. This is what Dejaa'sNet analyzes using AI.
                  </p>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#8b5cf6' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🧪</span>
                  <div>
                    <h3 className="disease-card__name">Laboratory Tests</h3>
                    <p className="disease-card__plant">Supporting diagnostics</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <div className="disease-card__section">
                    <ul>
                      <li><strong>Blood tests:</strong> Complete blood count (CBC) to confirm infection and assess severity</li>
                      <li><strong>Blood cultures:</strong> To identify the specific organism causing infection</li>
                      <li><strong>Sputum test:</strong> Analysis of mucus from the lungs to identify the pathogen</li>
                      <li><strong>Pulse oximetry:</strong> Measures oxygen levels in the blood</li>
                      <li><strong>CT scan:</strong> More detailed imaging if X-ray is inconclusive</li>
                      <li><strong>Pleural fluid culture:</strong> If fluid is present around the lungs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#10b981' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🤖</span>
                  <div>
                    <h3 className="disease-card__name">AI-Assisted Screening</h3>
                    <p className="disease-card__plant">How Dejaa'sNet helps</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <p className="disease-card__description">
                    Dejaa'sNet uses a DenseNet-121 deep learning model trained on thousands of labeled 
                    chest X-ray images to detect patterns associated with pneumonia. While not a replacement 
                    for professional radiology, it can serve as a rapid screening tool — especially valuable 
                    in settings with limited access to radiologists, enabling faster triage and earlier treatment.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeSection === 'treatment' && (
            <>
              <div className="disease-card" style={{ borderTopColor: '#3b82f6' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">💊</span>
                  <div>
                    <h3 className="disease-card__name">Medications</h3>
                    <p className="disease-card__plant">Primary treatment options</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <div className="disease-card__section">
                    <ul>
                      <li><strong>Antibiotics:</strong> For bacterial pneumonia (amoxicillin, azithromycin, doxycycline)</li>
                      <li><strong>Antivirals:</strong> For viral pneumonia (oseltamivir for influenza)</li>
                      <li><strong>Antifungals:</strong> For fungal pneumonia</li>
                      <li><strong>Cough medicine:</strong> To manage symptoms (used sparingly)</li>
                      <li><strong>Fever reducers:</strong> Aspirin, ibuprofen, or acetaminophen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#10b981' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🏠</span>
                  <div>
                    <h3 className="disease-card__name">Home Care</h3>
                    <p className="disease-card__plant">Recovery support</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <div className="disease-card__section">
                    <ul>
                      <li>Get plenty of rest to help the body fight infection</li>
                      <li>Stay well hydrated — drink plenty of water and warm fluids</li>
                      <li>Take all prescribed medications as directed (complete the full course)</li>
                      <li>Use a humidifier to ease breathing</li>
                      <li>Avoid smoking and secondhand smoke</li>
                      <li>Follow up with your doctor as scheduled</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#ef4444' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🏥</span>
                  <div>
                    <h3 className="disease-card__name">Hospital Treatment</h3>
                    <p className="disease-card__plant">For severe cases</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <div className="disease-card__section">
                    <ul>
                      <li>Intravenous (IV) antibiotics for faster delivery</li>
                      <li>Supplemental oxygen therapy to maintain blood oxygen levels</li>
                      <li>Mechanical ventilation in critical cases</li>
                      <li>Chest physiotherapy to help clear mucus</li>
                      <li>IV fluids to prevent dehydration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === 'prevention' && (
            <>
              <div className="disease-card" style={{ borderTopColor: '#22c55e' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">💉</span>
                  <div>
                    <h3 className="disease-card__name">Vaccination</h3>
                    <p className="disease-card__plant">Primary prevention</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <div className="disease-card__section">
                    <ul>
                      <li><strong>Pneumococcal vaccine:</strong> PCV13 for children, PPSV23 for adults 65+</li>
                      <li><strong>Flu vaccine:</strong> Annual influenza vaccination reduces risk</li>
                      <li><strong>COVID-19 vaccine:</strong> Reduces risk of SARS-CoV-2 pneumonia</li>
                      <li><strong>Hib vaccine:</strong> For children to prevent Haemophilus influenzae pneumonia</li>
                      <li>Keep vaccinations up to date, especially for high-risk groups</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="disease-card" style={{ borderTopColor: '#3b82f6' }}>
                <div className="disease-card__header">
                  <span className="disease-card__icon">🧼</span>
                  <div>
                    <h3 className="disease-card__name">Hygiene & Lifestyle</h3>
                    <p className="disease-card__plant">Daily prevention measures</p>
                  </div>
                </div>
                <div className="disease-card__expanded">
                  <div className="disease-card__section">
                    <ul>
                      <li>Wash hands regularly with soap and water</li>
                      <li>Avoid smoking — it damages the lungs' natural defense mechanisms</li>
                      <li>Maintain a healthy diet and exercise routine to strengthen immune system</li>
                      <li>Get adequate sleep (7-9 hours for adults)</li>
                      <li>Avoid close contact with people who are sick</li>
                      <li>Cover mouth and nose when coughing or sneezing</li>
                      <li>Keep living spaces well-ventilated</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PneumoniaInfo;
