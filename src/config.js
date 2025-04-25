const config = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://your-backend-url.vercel.app/api'  // This will be updated with your actual backend URL
    : 'http://localhost:5001/api'
};

export default config;
