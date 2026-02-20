# Dejaa'sNet — AI Pneumonia Detection from Chest X-Rays

An AI-powered screening tool that detects pneumonia from chest X-ray images using a DenseNet-121 convolutional neural network. Dejaa'sNet provides instant binary classification (Normal vs Pneumonia) with confidence scoring, risk assessment, and actionable medical recommendations — supporting faster clinical decision-making and enabling screening in resource-limited settings.

![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.18-orange?logo=tensorflow&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688?logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Table of Contents

- [The Problem](#the-problem)
- [How Dejaa'sNet Helps](#how-dejaasnet-helps)
- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Model Details](#model-details)
- [Tech Stack](#tech-stack)
- [License](#license)

---

## The Problem

Pneumonia is a leading cause of death worldwide, responsible for approximately **2.5 million deaths annually**, including over **670,000 children** under the age of five. Chest X-ray imaging is the primary diagnostic tool, but accurate interpretation requires trained radiologists — a resource that is scarce in many parts of the world.

The challenge is particularly severe in:

- **Developing countries** where the ratio of radiologists to population can be as low as 1 per million people, leaving vast numbers of X-rays unread or misinterpreted.
- **Emergency departments** where high patient volumes create bottlenecks, delaying pneumonia diagnosis during critical treatment windows.
- **Rural and remote clinics** that may have X-ray equipment but lack on-site specialists to interpret the images, forcing patients to travel long distances or wait days for results.
- **Outbreak scenarios** where sudden surges in respiratory infections (influenza, COVID-19) overwhelm existing radiology capacity.

Delayed or missed diagnosis of pneumonia leads to disease progression, increased hospitalization, higher treatment costs, and preventable deaths.

---

## How Dejaa'sNet Helps

Dejaa'sNet addresses these gaps by providing AI-assisted X-ray screening accessible through any web browser:

- **Rapid Screening:** Analyzes a chest X-ray in under 3 seconds, enabling high-throughput triage in busy clinical environments.
- **Accessible Anywhere:** Requires only an internet connection and an X-ray image — no specialized software or hardware needed.
- **Confidence-Based Risk Assessment:** Provides a probability score and risk level (Low to High), helping clinicians prioritize cases that need urgent attention.
- **Actionable Recommendations:** Each result includes context-specific guidance — from "continue regular checkups" for normal results to "consult a physician immediately" for high-confidence pneumonia detection.
- **Clinical Decision Support:** Designed to augment — not replace — radiologist expertise. Serves as a second opinion or initial screening layer before formal radiology review.
- **Scalable Deployment:** A single instance can serve thousands of concurrent users, making it suitable for hospital networks, public health programs, and telemedicine platforms.

---

## Features

- **Binary Classification** — Classifies chest X-rays as Normal or Pneumonia with confidence percentage.
- **Risk Level Assessment** — Assigns a risk level (Low, Moderate, High) based on prediction confidence.
- **Medical Recommendations** — Provides tailored next-step guidance for each diagnosis outcome.
- **Pneumonia Information** — Comprehensive reference on pneumonia types, symptoms, diagnosis methods, treatment, and prevention.
- **Responsive Interface** — Works on desktop, tablet, and mobile for use in clinical or field settings.
- **Medical Disclaimer** — Clearly communicates that results are AI-assisted and not a substitute for professional diagnosis.

---

## Architecture

Dejaa'sNet uses the DenseNet-121 backbone with a custom binary classification head:

```
Input X-Ray Image (224 x 224 x 3)
    |
Data Augmentation (RandomFlip, RandomRotation, RandomZoom)
    |
DenseNet-121 Preprocessing (Lambda)
    |
DenseNet-121 (Feature Extraction)
    |
Global Average Pooling
    |
Dense — 128 neurons, ReLU activation
    |
Dropout (Regularization)
    |
Dense — 1 neuron, Sigmoid Output (0 = Normal, 1 = Pneumonia)
```

**Preprocessing Pipeline:**
1. Convert to grayscale (single channel)
2. Resize to 224 x 224 using LANCZOS interpolation
3. Normalize pixel values to [0, 1]
4. Stack grayscale to 3 channels (DenseNet-121 expects RGB input)
5. Add batch dimension (1, 224, 224, 3)

---

## Project Structure

```
DejaasNet/
├── README.md
├── LICENSE
├── backend/
│   ├── main.py                       # Application entry point
│   ├── requirements.txt              # Python dependencies
│   ├── .python-version               # Python version for deployment
│   └── app/
│       ├── __init__.py               # FastAPI app factory with CORS
│       ├── api/
│       │   ├── router.py             # API route registry
│       │   └── routes/
│       │       ├── health.py         # Health check endpoint
│       │       └── prediction.py     # Prediction endpoint
│       ├── core/
│       │   └── config.py             # Application settings
│       ├── models/
│       │   ├── cnn_model.py          # Model loading and inference
│       │   └── saved_models/
│       │       └── chest_check.keras
│       ├── schemas/
│       │   └── prediction.py         # Response schemas
│       ├── services/
│       │   └── prediction_service.py # Prediction business logic
│       └── utils/
│           └── preprocessing.py      # X-ray preprocessing pipeline
│
└── Frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── .env.production               # Production API URL
    └── src/
        ├── App.jsx                   # Main application component
        ├── App.css                   # Application styles
        ├── main.jsx                  # React entry point
        ├── components/
        │   ├── Navbar.jsx            # Navigation
        │   ├── Hero.jsx              # Landing section
        │   ├── UploadSection.jsx     # X-ray upload and analysis
        │   ├── ResultCard.jsx        # Diagnosis result display
        │   ├── DiseaseLibrary.jsx    # Pneumonia information reference
        │   ├── About.jsx             # About section
        │   └── Footer.jsx            # Footer
        └── services/
            └── api.js                # API client
```

---

## API Reference

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/predict/` | Upload a chest X-ray for pneumonia classification |
| `GET` | `/api/health` | Service health check |

### Prediction Request

```bash
curl -X POST "http://localhost:8000/api/predict/" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@chest_xray.jpg"
```

### Prediction Response

```json
{
  "label": "PNEUMONIA",
  "confidence": 0.9487,
  "diagnosis": "Pneumonia Detected",
  "is_normal": false,
  "risk_level": "High",
  "recommendation": "Strong indicators of pneumonia detected. Consult a healthcare professional immediately for clinical evaluation and treatment."
}
```

Full interactive API documentation (Swagger UI) is available at the `/docs` endpoint.

---

## Model Details

| Property | Value |
|----------|-------|
| **Architecture** | DenseNet-121 + Custom Classification Head |
| **Input Size** | 224 x 224 x 3 (grayscale stacked to 3 channels) |
| **Output** | Sigmoid (binary: Normal vs Pneumonia) |
| **Framework** | TensorFlow / Keras |
| **Model Format** | `.keras` |
| **Accuracy** | ~95% |
| **Key Metrics** | AUC, Recall, Precision |

---

## Tech Stack

**Backend:**
- Python, FastAPI, Uvicorn
- TensorFlow / Keras (DenseNet-121)
- Pillow, NumPy
- Pydantic

**Frontend:**
- React 19, Vite 7
- Axios
- CSS3

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built by <strong>Dejaa</strong> — Powered by Dejaa'sNet Deep Learning for Medical Imaging
</p>
