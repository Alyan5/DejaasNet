from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services import prediction_service
from app.schemas.prediction import PredictionResponse

router = APIRouter()


@router.post("/", response_model=PredictionResponse)
async def predict(file: UploadFile = File(...)):
    """Accept an image and return prediction result."""
    allowed_types = ["image/jpeg", "image/png", "image/jpg", "image/webp"]
    if file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Only image files (jpg, png, webp) are allowed.")

    try:
        contents = await file.read()
        result = prediction_service.predict(contents)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
