# CNN Backend — FastAPI

## Project Structure

```
backend/
├── main.py                    # Application entry point
├── requirements.txt           # Python dependencies
├── .env                       # Environment variables
├── .gitignore
└── app/
    ├── __init__.py             # App factory (create_app)
    ├── core/
    │   ├── __init__.py
    │   └── config.py           # Settings & environment config
    ├── api/
    │   ├── __init__.py
    │   ├── router.py           # API router aggregation
    │   └── routes/
    │       ├── __init__.py
    │       ├── health.py       # Health check endpoint
    │       └── prediction.py   # Image prediction endpoint
    ├── schemas/
    │   ├── __init__.py
    │   └── prediction.py       # Pydantic response models
    ├── services/
    │   ├── __init__.py
    │   └── prediction_service.py  # Business logic
    ├── models/
    │   ├── __init__.py
    │   ├── cnn_model.py        # CNN model definition & loader
    │   └── saved_models/       # Place trained .pth files here
    ├── utils/
    │   ├── __init__.py
    │   └── preprocessing.py    # Image preprocessing pipeline
    └── uploads/                # Temporary uploaded images
```

## Setup

```bash
# Create virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # Linux/Mac

# Install dependencies
pip install -r requirements.txt

# Run the server
python main.py
```

The API will be available at `http://localhost:8000`.  
Swagger docs at `http://localhost:8000/docs`.

## API Endpoints

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| GET    | /api/health       | Health check             |
| POST   | /api/predict/     | Upload image & predict   |

## Usage

1. Place your trained model file as `app/models/saved_models/model.pth`
2. Update `SimpleCNN` in `app/models/cnn_model.py` with your actual architecture
3. Update class labels in `CNNModelLoader` as needed
4. Start the server and send images via the `/api/predict/` endpoint
