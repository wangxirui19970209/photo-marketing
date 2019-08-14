import api from '../config'

export const orderAdd = body => api.post('/api/orders/add', body)