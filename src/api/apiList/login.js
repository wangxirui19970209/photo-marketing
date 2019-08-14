import api from '../config'

export const submit = body => api.post('/api/users/submit', body)
export const register = body => api.post('/api/users/register', body)
export const accountLogout = body => api.post('/api/users/accountLogout', body)