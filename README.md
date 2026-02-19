# Dejaa'sNet — Plant Disease Detection System

An AI-powered diagnostic tool that helps farmers, agronomists, and agricultural stakeholders identify plant diseases early through leaf image analysis. Built with a Convolutional Neural Network (EfficientNet-B0), Dejaa'sNet delivers instant, accurate disease classification along with actionable treatment recommendations — reducing crop losses and supporting informed decision-making in the field.

**Live Demo:** [https://dejaas-net.vercel.app](https://dejaas-net.vercel.app)

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
- [Supported Crops and Diseases](#supported-crops-and-diseases)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Model Details](#model-details)
- [Deployment](#deployment)
- [Tech Stack](#tech-stack)
- [License](#license)

---

## The Problem

Plant diseases are one of the leading causes of agricultural yield loss worldwide. According to the Food and Agriculture Organization (FAO), plant diseases cost the global economy over **$220 billion annually**, and up to **40% of global crop production** is lost to pests and diseases each year.

The challenge is particularly severe for:

- **Smallholder farmers** who lack access to plant pathologists or laboratory diagnostics and often rely on visual guesswork, leading to misdiagnosis and ineffective treatment.
- **Remote and underserved regions** where agricultural extension services are limited, leaving farmers without timely expert advice during critical growing seasons.
- **Large-scale operations** where manual scouting across vast acreage is slow and expensive, allowing diseases to spread unchecked before they are identified.

Late or inaccurate diagnosis leads to unnecessary pesticide use, increased costs, environmental damage, and ultimately food insecurity.

---

## How Dejaa'sNet Helps

Dejaa'sNet addresses these challenges by putting a trained plant pathology model directly into the hands of anyone with a smartphone or computer:

- **Early Detection:** Identifies diseases from leaf images before visible damage escalates, giving farmers a critical window to act.
- **Accessible Expertise:** Provides diagnostic capability equivalent to a trained agronomist, available 24/7 without the need for physical lab access or specialist consultations.
- **Actionable Guidance:** Goes beyond identification — each diagnosis includes detailed symptoms, root causes, recommended treatments, and prevention strategies tailored to the specific disease.
- **Cost Reduction:** Helps avoid blanket pesticide application by pinpointing the exact disease, reducing input costs and minimizing environmental impact.
- **Scalable Impact:** A single deployment can serve thousands of users simultaneously, making it viable for agricultural cooperatives, government extension programs, and NGOs working in food security.

Whether you are a farmer inspecting a few plants in the field, an agronomist advising clients remotely, or a researcher studying disease prevalence, Dejaa'sNet provides fast, reliable, and practical diagnostic support.

---

## Features

- **Real-time Disease Detection** — Upload a leaf image and receive a diagnosis within seconds.
- **17 Disease Classes** — Covers diseases across Apple, Tomato, and Potato crops, including healthy leaf identification.
- **Treatment Recommendations** — Each prediction is accompanied by detailed information on symptoms, causes, treatment options, and prevention measures.
- **Confidence Thresholding** — Flags low-confidence predictions when non-leaf or ambiguous images are uploaded, preventing false diagnoses.
- **Disease Library** — A searchable reference of all supported diseases with comprehensive agricultural information.
- **Responsive Interface** — Fully functional on desktop, tablet, and mobile devices for use in the office or in the field.

---

## Supported Crops and Diseases

| Crop | Diseases | Classes |
|------|----------|---------|
| **Apple** | Apple Scab, Black Rot, Cedar Apple Rust, Healthy | 4 |
| **Potato** | Early Blight, Late Blight, Healthy | 3 |
| **Tomato** | Bacterial Spot, Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Yellow Leaf Curl Virus, Mosaic Virus, Healthy | 10 |

**Total: 17 classes across 3 crop types**

The model is trained on the PlantVillage dataset and can be extended to support additional crops and diseases as training data becomes available.

---

## Architecture

Dejaa'sNet uses the EfficientNet-B0 backbone with custom classification layers optimized for leaf disease recognition:

```
Input Image (224 x 224 x 3)
    |
EfficientNet-B0 (Feature Extraction)
    |
Global Average Pooling
    |
Dense + Dropout (Regularization)
    |
Softmax Output (17 classes)
```

**Preprocessing Pipeline:**
1. Convert to RGB (3 channels)
2. Resize to 224 x 224 using LANCZOS interpolation
3. Normalize to float32
4. Reshape to batch format (1, 224, 224, 3)

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
│       │       └── disease_model.keras
│       ├── schemas/
│       │   └── prediction.py         # Response schemas
│       ├── services/
│       │   └── prediction_service.py # Prediction business logic
│       └── utils/
│           └── preprocessing.py      # Image preprocessing pipeline
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
        │   ├── UploadSection.jsx     # Image upload and analysis
        │   ├── ResultCard.jsx        # Diagnosis result display
        │   ├── DiseaseLibrary.jsx    # Disease reference browser
        │   ├── About.jsx             # About section
        │   └── Footer.jsx            # Footer
        ├── data/
        │   └── diseaseInfo.js        # Disease information database
        └── services/
            └── api.js                # API client
```

---

## API Reference

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/predict/` | Upload a leaf image for disease classification |
| `GET` | `/api/health` | Service health check |

### Prediction Request

```bash
curl -X POST "https://dejaasnet.onrender.com/api/predict/" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@leaf_image.jpg"
```

### Prediction Response

```json
{
  "label": "Tomato___Late_blight",
  "confidence": 0.9742,
  "plant": "Tomato",
  "disease": "Late blight",
  "is_healthy": false
}
```

Full interactive API documentation (Swagger UI) is available at the `/docs` endpoint of the backend.

---

## Model Details

| Property | Value |
|----------|-------|
| **Architecture** | EfficientNet-B0 + Custom Classification Head |
| **Input Size** | 224 x 224 x 3 |
| **Output** | 17-class softmax |
| **Framework** | TensorFlow / Keras |
| **Model Format** | `.keras` |
| **Test Accuracy** | ~95% |
| **Training Data** | PlantVillage Dataset |

---

## Deployment

The application is deployed as two independent services:

| Component | Platform | URL |
|-----------|----------|-----|
| **Frontend** | Vercel | [https://dejaas-net.vercel.app](https://dejaas-net.vercel.app) |
| **Backend API** | Render | [https://dejaasnet.onrender.com](https://dejaasnet.onrender.com) |

**Note:** The backend runs on Render's free tier, which spins down after periods of inactivity. The first request after inactivity may take up to 50 seconds while the service restarts.

---

## Tech Stack

**Backend:**
- Python, FastAPI, Uvicorn
- TensorFlow / Keras (EfficientNet-B0)
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
  Built by <strong>Dejaa</strong> — Powered by Deep Learning for Agriculture
</p>
