import cv2
import numpy as np


def is_xray_image(image_bytes: bytes, max_saturation: float = 35.0) -> bool:
    """Check if an image is likely an X-ray by measuring color saturation.
    X-ray images — even in RGB — have very low saturation (near-grayscale).
    Natural/color images (leaves, photos, etc.) have much higher saturation.
    """
    img_array = np.frombuffer(image_bytes, dtype=np.uint8)
    img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
    if img is None:
        return False
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    mean_saturation = hsv[:, :, 1].mean()
    return mean_saturation <= max_saturation


def preprocess_image(image_bytes: bytes) -> np.ndarray:
    """Preprocess raw image bytes for the chest X-ray CNN model."""
    img_array = np.frombuffer(image_bytes, dtype=np.uint8)
    img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
    img = cv2.resize(img, (224, 224))
    img = np.expand_dims(img, axis=0)
    return img
