// example
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error),
)

api.interceptors.response.use(
  res => res.data,
  error => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  },
)
