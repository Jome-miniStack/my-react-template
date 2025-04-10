// example
import { BASE_API_URL } from '@/constants/env'
import axios from 'axios'

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  res => res.data,
  err => {
    console.error('request error：', err.response?.data || err.message)
    return Promise.reject(err)
  },
)
