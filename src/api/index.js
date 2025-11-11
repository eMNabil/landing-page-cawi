import axios from 'axios'
import respondenApi from './respondenApi'

const mainApi  = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
})

mainApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

export {mainApi, respondenApi}