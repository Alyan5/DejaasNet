from app.schemas.prediction import PredictionResponse
from app.models import cnn_model
from app.utils.preprocessing import preprocess_image


def _get_risk_level(confidence: float, is_normal: bool) -> str:
    """Determine risk level based on prediction confidence."""
    if is_normal:
        if confidence >= 0.90:
            return "Low"
        elif confidence >= 0.70:
            return "Low-Moderate"
        else:
            return "Moderate"
    else:
        if confidence >= 0.90:
            return "High"
        elif confidence >= 0.70:
            return "Moderate-High"
        else:
            return "Moderate"


def _get_recommendation(label: str, confidence: float) -> str:
    """Provide a recommendation based on diagnosis."""
    if label == "NORMAL":
        if confidence >= 0.90:
            return "No signs of pneumonia detected. Continue regular health checkups."
        else:
            return "Likely normal, but confidence is moderate. Consider a follow-up if symptoms persist."
    else:
        if confidence >= 0.90:
            return "Strong indicators of pneumonia detected. Consult a healthcare professional immediately for clinical evaluation and treatment."
        elif confidence >= 0.70:
            return "Possible pneumonia detected. A clinical review by a radiologist or physician is recommended."
        else:
            return "Inconclusive result. The image may be unclear. Please upload a higher quality chest X-ray or consult a physician."


def predict(image_bytes: bytes) -> PredictionResponse:
    """Take raw image bytes, preprocess, predict, return result."""
    img_array = preprocess_image(image_bytes)
    label, confidence = cnn_model.predict(img_array)

    is_normal = label == "NORMAL"
    diagnosis = "Normal — No Pneumonia Detected" if is_normal else "Pneumonia Detected"
    risk_level = _get_risk_level(confidence, is_normal)
    recommendation = _get_recommendation(label, confidence)

    return PredictionResponse(
        label=label,
        confidence=confidence,
        diagnosis=diagnosis,
        is_normal=is_normal,
        risk_level=risk_level,
        recommendation=recommendation,
    )
