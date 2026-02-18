from pydantic import BaseModel
from typing import Optional


class PredictionResponse(BaseModel):
    """Schema for prediction API response."""

    label: str
    confidence: float
    plant: Optional[str] = None
    disease: Optional[str] = None
    is_healthy: bool = False
