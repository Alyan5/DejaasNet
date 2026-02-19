# Dejaa'sNet Backend — FastAPI

REST API service for plant disease classification. Accepts leaf images via a multipart upload endpoint and returns disease predictions with confidence scores using an EfficientNet-B0 model.

**Deployed at:** [https://dejaasnet.onrender.com](https://dejaasnet.onrender.com)

## Project Structure

```
backend/
├── main.py                       # Application entry point (Uvicorn)
├── requirements.txt              # Python dependencies
├── .python-version               # Python version constraint for deployment
└── app/
    ├── __init__.py               # App factory with CORS configuration
    ├── core/
    │   └── config.py             # Application settings (Pydantic)
    ├── api/
    │   ├── router.py             # API route registry
    │   └── routes/
    │       ├── health.py         # Health check endpoint
    │       └── prediction.py     # Disease prediction endpoint
    ├── schemas/
    │   └── prediction.py         # Pydantic response models
    ├── services/
    │   └── prediction_service.py # Prediction business logic
    ├── models/
    │   ├── cnn_model.py          # Model loading and inference
    │   └── saved_models/
    │       └── disease_model.keras
    └── utils/
        └── preprocessing.py      # Image preprocessing pipeline
```

## Setup

```bash
# Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # Linux / macOS

# Install dependencies
pip install -r requirements.txt

# Start the server
python main.py
```

The API will be available at `http://localhost:8000`.
Interactive documentation (Swagger UI) is at `http://localhost:8000/docs`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Service health check |
| POST | `/api/predict/` | Upload a leaf image for disease classification |

## Example

```bash
curl -X POST "http://localhost:8000/api/predict/" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@leaf_image.jpg"
```

Response:

```json
{
  "label": "Tomato___Late_blight",
  "confidence": 0.9742,
  "plant": "Tomato",
  "disease": "Late blight",
  "is_healthy": false
}
```

## Deployment

The backend is deployed on Render with the following configuration:

- **Runtime:** Python 3.11 (set via `.python-version`)
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
- **Root Directory:** `backend`
