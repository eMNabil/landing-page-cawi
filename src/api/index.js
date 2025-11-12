import axios from 'axios'
import respondenApi from './respondenApi'

const mainApi  = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
})

mainApi.interceptors.request.use((config) => {
  // prefer accessToken (backend returns access_token), fallback to token
  const token = localStorage.getItem('accessToken') || localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// response interceptor to catch 401 and clear stored auth
mainApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('token')
      localStorage.removeItem('adminUser')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export {mainApi, respondenApi}