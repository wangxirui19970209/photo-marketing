import api from '../config'

export const aboutInfo = body => api.post('/api/about-info', body)
export const upDate = body => api.post('/api/users/up-date', body)

export const introduction = body => api.post('/api/introductions/get-detail', body)
