import api from './api'

export const login = (username: string, password: string) => {
    return api.post('/auth/signin', {
        username,
        password
    }).then(res => {
        localStorage.setItem('token', res.data.accessToken)
    }).catch(err => {
        console.log(err)
    })
}

export const register = (username: string, password: string) => {
    return api.post('/auth/signup', {
        username,
        password
    }).then(res => {
        console.log('user created')
    }).catch(err => {
        console.log(err)
    })
}