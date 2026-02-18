import numpy as np
from tensorflow import keras
from tensorflow.keras.applications.efficientnet import preprocess_input
from pathlib import Path
from app.core.config import settings

# Class labels matching the training dataset (alphabetical order from image_dataset_from_directory)
CLASS_LABELS = [
    "Apple___Apple_scab",
    "Apple___Black_rot",
    "Apple___Cedar_apple_rust",
    "Apple___healthy",
    "Potato___Early_blight",
    "Potato___Late_blight",
    "Potato___healthy",
    "Tomato___Bacterial_spot",
    "Tomato___Early_blight",
    "Tomato___Late_blight",
    "Tomato___Leaf_Mold",
    "Tomato___Septoria_leaf_spot",
    "Tomato___Spider_mites Two-spotted_spider_mite",
    "Tomato___Target_Spot",
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
    "Tomato___Tomato_mosaic_virus",
    "Tomato___healthy",
]


# ── Load model once at module level ──
model_path = Path(settings.MODEL_PATH) / "disease_model.keras"

if model_path.exists():
    model = keras.models.load_model(
        str(model_path),
        custom_objects={"preprocess_input": preprocess_input},
    )
else:
    model = None


def predict(image_array: np.ndarray):
    """Run inference on a preprocessed image array (1, 224, 224, 3)."""
    if model is None:
        return ("no_model_loaded", 0.0)

    predictions = model.predict(image_array, verbose=0)
    predicted_index = int(np.argmax(predictions[0]))
    confidence = float(np.max(predictions[0]))

    label = CLASS_LABELS[predicted_index] if predicted_index < len(CLASS_LABELS) else str(predicted_index)

    return (label, round(confidence, 4))
