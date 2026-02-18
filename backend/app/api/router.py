from fastapi import APIRouter
from app.api.routes import prediction, health

api_router = APIRouter()

api_router.include_router(health.router, tags=["Health"])
api_router.include_router(prediction.router, prefix="/predict", tags=["Prediction"])
