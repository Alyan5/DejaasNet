# Dejaa'sNet Backend — FastAPI

REST API service for chest X-ray pneumonia classification. Accepts X-ray images via a multipart upload endpoint and returns binary diagnosis (Normal / Pneumonia) with confidence scores, risk assessment, and recommendations using a DenseNet-121 model.

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
    │       └── prediction.py     # Prediction endpoint
    ├── schemas/
    │   └── prediction.py         # Pydantic response models
    ├── services/
    │   └── prediction_service.py # Prediction business logic
    ├── models/
    │   ├── cnn_model.py          # Model loading and inference
    │   └── saved_models/
    │       └── chest_check.keras
    └── utils/
        └── preprocessing.py      # X-ray preprocessing pipeline
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
| POST | `/api/predict/` | Upload a chest X-ray for pneumonia classification |

## Example

```bash
curl -X POST "http://localhost:8000/api/predict/" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@chest_xray.jpg"
```

Response:

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

## Deployment

The backend is deployed on Render with the following configuration:

- **Runtime:** Python 3.11 (set via `.python-version`)
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
- **Root Directory:** `backend`
