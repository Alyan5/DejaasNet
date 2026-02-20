import React, { useState, useRef, useCallback } from 'react';
import { predictDisease } from '../services/api';
import ResultCard from './ResultCard';

const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = useCallback((file) => {
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPEG, PNG, or WebP)');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    setSelectedFile(file);
    setError(null);
    setResult(null);

    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);
  }, []);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, [handleFile]);

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await predictDisease(selectedFile);
      if (data.confidence < 0.85) {
        setResult({ _lowConfidence: true });
      } else {
        setResult(data);
      }
    } catch (err) {
      const message = err.response?.data?.detail || err.message || 'Analysis failed. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section className="upload-section" id="diagnose">
      <div className="upload-section__container">
        <div className="upload-section__header">
          <span className="upload-section__icon">🩻</span>
          <h2 className="upload-section__title">Chest X-Ray Analysis</h2>
          <p className="upload-section__desc">
            Upload a chest X-ray image for AI-powered pneumonia screening. Dejaa'sNet will analyze 
            the image and provide a diagnosis with confidence level and recommendations.
          </p>
        </div>

        <div className="upload-section__content">
          <div className="upload-section__left">
            {/* Upload Area */}
            <div
              className={`upload-zone ${dragActive ? 'upload-zone--active' : ''} ${preview ? 'upload-zone--has-image' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => !preview && fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFile(e.target.files[0])}
                accept="image/jpeg,image/png,image/jpg,image/webp"
                hidden
              />

              {preview ? (
                <div className="upload-zone__preview">
                  <img src={preview} alt="Selected X-ray" className="upload-zone__image" />
                  <div className="upload-zone__overlay">
                    <span className="upload-zone__filename">{selectedFile?.name}</span>
                    <span className="upload-zone__filesize">
                      {(selectedFile?.size / 1024).toFixed(1)} KB
                    </span>
                  </div>
                </div>
              ) : (
                <div className="upload-zone__placeholder">
                  <div className="upload-zone__icon-wrapper">
                    <span className="upload-zone__upload-icon">🩻</span>
                  </div>
                  <h3>Drop your chest X-ray here</h3>
                  <p>or click to browse files</p>
                  <span className="upload-zone__formats">Supports: JPEG, PNG, WebP (max 10MB)</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="upload-section__actions">
              {preview && (
                <button className="btn btn--outline" onClick={handleReset}>
                  <span>🔄</span> Reset
                </button>
              )}
              {preview && !result && (
                <button className="btn btn--change" onClick={() => fileInputRef.current?.click()}>
                  <span>📁</span> Change Image
                </button>
              )}
              <button
                className={`btn btn--primary ${loading ? 'btn--loading' : ''}`}
                onClick={handleSubmit}
                disabled={!selectedFile || loading}
              >
                {loading ? (
                  <>
                    <span className="btn__spinner"></span>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <span>🧠</span> Analyze X-Ray
                  </>
                )}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="upload-section__error">
                <span>⚠️</span>
                <p>{error}</p>
              </div>
            )}

            {/* Tips */}
            <div className="upload-section__tips">
              <h4>📋 Tips for Best Results</h4>
              <ul>
                <li>Use standard PA (posteroanterior) chest X-ray images</li>
                <li>Ensure the image is clear and not rotated</li>
                <li>Avoid uploading CT scans, MRIs, or non-chest images</li>
                <li>Higher resolution images produce more reliable results</li>
              </ul>
            </div>
          </div>

          <div className="upload-section__right">
            {result && !result._lowConfidence ? (
              <ResultCard result={result} onReset={handleReset} />
            ) : (
              <div className="upload-section__placeholder-result">
                {result && result._lowConfidence ? (
                  <>
                    <div className="upload-section__placeholder-icon">⚠️</div>
                    <h3>Inappropriate Image</h3>
                    <p>The uploaded image does not appear to be a valid chest X-ray. The model could not make a confident diagnosis.</p>
                    <div className="upload-section__arch-info">
                      <h4>Please try again with:</h4>
                      <ul style={{ textAlign: 'left', marginTop: '0.5rem' }}>
                        <li>A clear, standard PA chest X-ray image</li>
                        <li>Proper orientation (not rotated or cropped)</li>
                        <li>Good contrast and resolution</li>
                        <li>No CT scans, MRIs, or non-chest images</li>
                      </ul>
                    </div>
                    <button className="btn btn--primary" onClick={handleReset} style={{ marginTop: '1rem' }}>
                      <span>🔄</span> Upload Another Image
                    </button>
                  </>
                ) : (
                  <>
                    <div className="upload-section__placeholder-icon">🏥</div>
                    <h3>Awaiting Analysis</h3>
                    <p>Upload a chest X-ray image and click "Analyze" to get your pneumonia screening result powered by Dejaa'sNet AI.</p>
                    <div className="upload-section__arch-info">
                      <h4>🧬 About Dejaa'sNet Architecture</h4>
                      <p>Built on DenseNet-121 backbone with custom classification layers, trained on thousands of chest X-ray images for accurate pneumonia detection.</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
