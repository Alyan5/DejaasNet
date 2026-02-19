# Dejaa'sNet Frontend — React + Vite

The user-facing interface for Dejaa'sNet. Provides image upload, real-time disease diagnosis display, a disease reference library, and project information. Communicates with the FastAPI backend for predictions.

**Deployed at:** [https://dejaas-net.vercel.app](https://dejaas-net.vercel.app)

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
    │   ├── UploadSection.jsx    # Image upload and analysis trigger
    │   ├── ResultCard.jsx       # Diagnosis result display
    │   ├── DiseaseLibrary.jsx   # Searchable disease reference
    │   ├── About.jsx            # About section
    │   └── Footer.jsx           # Footer
    ├── data/
    │   └── diseaseInfo.js       # Disease information database (17 classes)
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
