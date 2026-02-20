import numpy as np
from tensorflow import keras
from pathlib import Path
from app.core.config import settings

# Binary classification labels
CLASS_LABELS = ["NORMAL", "PNEUMONIA"]


# ── Load model once at module level ──
model_path = Path(settings.MODEL_PATH) / "chest_check.keras"

if model_path.exists():
    model = keras.models.load_model(str(model_path))
else:
    model = None


def predict(image_array: np.ndarray):
    """Run inference on a preprocessed X-ray image array (1, 224, 224, 3).
    
    The model uses sigmoid activation (binary classification).
    Output is a single value between 0 and 1:
      - Close to 0 → NORMAL
      - Close to 1 → PNEUMONIA
    """
    if model is None:
        return ("no_model_loaded", 0.0)

    prediction = model.predict(image_array, verbose=0)
    probability = float(prediction[0][0])

    if probability > settings.CONFIDENCE_THRESHOLD:
        label = "PNEUMONIA"
        confidence = probability
    else:
        label = "NORMAL"
        confidence = 1.0 - probability

    return (label, round(confidence, 4))
