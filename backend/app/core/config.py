from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "Dejaa'sNet - Pneumonia Detection"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    MODEL_PATH: str = "app/models/saved_models"
    CONFIDENCE_THRESHOLD: float = 0.5

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()
