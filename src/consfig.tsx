interface consfig {
  isProd: boolean;
}

const obj: consfig = { isProd: true };

export const BACKEND_URL = obj.isProd
  ? "https://inbrain-app-backend.onrender.com"
  : "http://localhost:8000";
