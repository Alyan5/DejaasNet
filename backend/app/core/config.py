from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "Dejaa'sNet - Plant Disease Detection"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    MODEL_PATH: str = "app/models/saved_models"

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()
