import io
from PIL import Image
from app.schemas.prediction import PredictionResponse
from app.models import cnn_model
from app.utils.preprocessing import preprocess_image


def predict(image_bytes: bytes) -> PredictionResponse:
    """Take raw image bytes, preprocess, predict, return result."""
    image = Image.open(io.BytesIO(image_bytes))
    img_array = preprocess_image(image)
    label, confidence = cnn_model.predict(img_array)

    # Parse label like "Apple___Black_rot" into plant and disease
    parts = label.split("___")
    plant = parts[0] if len(parts) > 0 else "Unknown"
    disease_raw = parts[1] if len(parts) > 1 else "Unknown"
    is_healthy = disease_raw.lower() == "healthy"
    disease = "Healthy" if is_healthy else disease_raw.replace("_", " ")

    return PredictionResponse(
        label=label,
        confidence=confidence,
        plant=plant,
        disease=disease,
        is_healthy=is_healthy,
    )
