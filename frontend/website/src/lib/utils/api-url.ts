let apiBaseUrl: string;

if (import.meta.env.DEV) {
  apiBaseUrl = import.meta.env.VITE_DEV_API_URL;
} else {
  apiBaseUrl = import.meta.env.VITE_PROD_API_URL;
}

export default apiBaseUrl;
