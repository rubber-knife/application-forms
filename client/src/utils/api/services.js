import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://donaldgeddes.ca'
  : 'http://localhost:3001/services'

const services = axios.create({
  baseURL,
  headers: {'Content-Type': 'form-data'}
})

export default services
