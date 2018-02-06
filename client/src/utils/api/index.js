import services from './services'

const api = {
  extractText: data => {
    return services.post(
      '/extract-text',
      data
    ).then(res => res.data)
  },
  test: () => {
    return services.post(
      '/'
    ).then(res => res.data)
  }
}

export default api
