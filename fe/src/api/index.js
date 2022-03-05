import axios from 'axios'


const serviceBase = axios.create({
    baseURL: 'http://localhost:8080',
    validateStatus: (status) => {
        return status <= 500
    }
})


export const login = (data) => serviceBase.post('/authenticate/login', data)

export const getProfile = (token) => serviceBase.get('/authenticate/', {headers: {
    "Authorization": `Bearer ${token}`
}})

export const register = (data) => serviceBase.post('/authenticate/register', data)