# 🌿 Dejaa'sNet — Plant Disease Detection System

A full-stack web application for detecting plant diseases using a Convolutional Neural Network (CNN) built on **EfficientNet-B0**. Upload a photo of a plant leaf and get instant disease diagnosis with treatment recommendations.

![Python](https://img.shields.io/badge/Python-3.10+-blue?logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange?logo=tensorflow&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688?logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

---

## 📋 Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Supported Crops & Diseases](#-supported-crops--diseases)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Model Details](#-model-details)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [License](#-license)

---

## ✨ Features

- **Real-time Disease Detection** — Upload a leaf image and get predictions in seconds
- **17 Disease Classes** — Covers Apple, Tomato, and Potato diseases
- **Treatment Recommendations** — Detailed symptoms, causes, treatment, and prevention info
- **Invalid Image Detection** — Warns users when non-leaf images are uploaded (confidence < 20%)
- **Disease Library** — Browse all supported diseases with comprehensive information
- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- **Professional UI** — Dark-themed navbar, smooth animations, intuitive UX

---

## 🧬 Architecture

**Dejaa'sNet** is built on the EfficientNet-B0 backbone with custom classification layers:

```
Input Image (224×224×3)
    ↓
EfficientNet-B0 (Feature Extraction)
    ↓
Global Average Pooling
    ↓
Dense + Dropout
    ↓
Softmax (17 classes)
```

**Preprocessing Pipeline:**
1. Convert to RGB (force 3 channels)
2. Resize to 224×224 using LANCZOS interpolation
3. Convert to float32
4. Add batch dimension → shape `(1, 224, 224, 3)`

---

## 🌱 Supported Crops & Diseases

| Crop | Diseases | Classes |
|------|----------|---------|
| 🍎 **Apple** | Apple Scab, Black Rot, Cedar Apple Rust, Healthy | 4 |
| 🥔 **Potato** | Early Blight, Late Blight, Healthy | 3 |
| 🍅 **Tomato** | Bacterial Spot, Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Yellow Leaf Curl Virus, Mosaic Virus, Healthy | 10 |

**Total: 17 classes across 3 crop types**

---

## 📁 Project Structure

```
CNN/
├── README.md
├── backend/
│   ├── main.py                  # Entry point — runs uvicorn server
│   ├── requirements.txt         # Python dependencies
│   └── app/
│       ├── __init__.py          # FastAPI app factory
│       ├── api/
│       │   ├── router.py        # API route registry
│       │   └── routes/
│       │       ├── health.py    # Health check endpoint
│       │       └── prediction.py # Prediction endpoint
│       ├── core/
│       │   └── config.py        # App settings
│       ├── models/
│       │   ├── cnn_model.py     # Model loading & inference
│       │   └── saved_models/
│       │       └── disease_model.keras  # Trained model weights
│       ├── schemas/
│       │   └── prediction.py    # Pydantic response schemas
│       ├── services/
│       │   └── prediction_service.py  # Prediction logic
│       └── utils/
│           └── preprocessing.py # Image preprocessing
│
└── Frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx              # Main app with routing
        ├── App.css              # All styles
        ├── main.jsx             # React entry point
        ├── components/
        │   ├── Navbar.jsx       # Navigation bar
        │   ├── Hero.jsx         # Landing hero section
        │   ├── UploadSection.jsx # Image upload & analysis
        │   ├── ResultCard.jsx   # Disease result display
        │   ├── DiseaseLibrary.jsx # Disease browser
        │   ├── About.jsx        # About page
        │   └── Footer.jsx       # Footer
        ├── data/
        │   └── diseaseInfo.js   # Disease database (17 classes)
        └── services/
            └── api.js           # Axios API client
```

---

## 🚀 Getting Started

### Prerequisites

- **Python 3.10+**
- **Node.js 18+**
- **npm** or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/DejaasNet.git
cd DejaasNet
```

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
python main.py
```

The API server starts at `http://localhost:8000`

### 3. Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

The frontend starts at `http://localhost:5173`

### 4. Open the App

Visit `http://localhost:5173` in your browser. Make sure the backend is running first.

---

## 📡 API Documentation

Once the backend is running, interactive API docs are available at:

- **Swagger UI:** `http://localhost:8000/docs`
- **ReDoc:** `http://localhost:8000/redoc`

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/predict/` | Upload an image and get disease prediction |
| `GET` | `/api/health` | Health check |

### Example Request

```bash
curl -X POST "http://localhost:8000/api/predict/" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@leaf_image.jpg"
```

### Example Response

```json
{
  "label": "Tomato___Late_blight",
  "confidence": 0.9742,
  "plant": "Tomato",
  "disease": "Late blight",
  "is_healthy": false
}
```

---

## 🧠 Model Details

| Property | Value |
|----------|-------|
| **Architecture** | EfficientNet-B0 + Custom Head |
| **Input Size** | 224 × 224 × 3 |
| **Output** | 17 softmax classes |
| **Framework** | TensorFlow / Keras |
| **Model Format** | `.keras` |
| **Accuracy** | ~95% on test set |

---

## 🖼️ Screenshots

> Upload leaf images and get instant AI diagnosis with treatment recommendations.

---

## 🛠️ Tech Stack

**Backend:**
- Python, FastAPI, Uvicorn
- TensorFlow / Keras
- Pillow, NumPy
- Pydantic

**Frontend:**
- React 19, Vite 7
- Axios
- CSS3 (custom, no framework)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <strong>Dejaa</strong> — Powered by EfficientNet-B0 Deep Learning
</p>
