import numpy as np
from PIL import Image


def preprocess_image(image: Image.Image) -> np.ndarray:
    """
    Preprocess a PIL Image for the plant disease CNN model.
    Steps: force RGB -> resize 224x224 -> float32 -> add batch dim.
    """
    image = image.convert("RGB")
    image = image.resize((224, 224), Image.Resampling.LANCZOS)
    img_array = np.array(image)
    img_array = img_array.astype(np.float32)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array
