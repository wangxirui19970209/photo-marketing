import api from '../config'

export const offer = body => api.post('/api/offers/offer', body)
export const offerPage = body => api.post('/api/offers/offer/page', body)
export const offerSort = body => api.post('/api/offers/offer/sort', body)