from pydantic import BaseModel


class PredictionResponse(BaseModel):
    """Schema for chest X-ray prediction API response."""

    label: str
    confidence: float
    diagnosis: str
    is_normal: bool
    risk_level: str
    recommendation: str
