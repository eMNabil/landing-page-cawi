import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

// Request interceptor - attach access token if available
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken') || localStorage.getItem('token')
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor - handle 401 (token expired or invalid)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // clear tokens but DO NOT automatically redirect here.
      // Let components/guards handle navigation so we avoid unexpected reloads.
      localStorage.removeItem('accessToken')
      localStorage.removeItem('token')
      localStorage.removeItem('adminUser')
      console.warn('[http] 401 received - tokens cleared')
    }
    return Promise.reject(error)
  }
)

export default api
