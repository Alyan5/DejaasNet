# Dejaa'sNet Frontend — React + Vite

The user-facing interface for Dejaa'sNet. Provides chest X-ray upload, real-time pneumonia diagnosis display, a pneumonia information reference, and project details. Communicates with the FastAPI backend for predictions.

## Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

The development server runs at `http://localhost:5173`.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:8000/api` |

For production builds, set this in a `.env.production` file or in your deployment platform's environment settings.

## Project Structure

```
Frontend/
├── index.html
├── package.json
├── vite.config.js
├── .env.production              # Production API URL
└── src/
    ├── App.jsx                  # Main application component
    ├── App.css                  # Application styles
    ├── main.jsx                 # React entry point
    ├── components/
    │   ├── Navbar.jsx           # Navigation bar
    │   ├── Hero.jsx             # Landing section
    │   ├── UploadSection.jsx    # X-ray upload and analysis
    │   ├── ResultCard.jsx       # Diagnosis result display
    │   ├── DiseaseLibrary.jsx   # Pneumonia information reference
    │   ├── About.jsx            # About section
    │   └── Footer.jsx           # Footer
    └── services/
        └── api.js               # Axios client for backend communication
```

## Deployment

Deployed on Vercel with the following configuration:

- **Framework Preset:** Vite
- **Root Directory:** `Frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Environment Variable:** `VITE_API_URL` = `https://dejaasnet.onrender.com/api`
