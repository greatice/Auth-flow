import axios from 'axios';

export function login(email, password) {
    return axios.post('/auth', {email, password})
    .then(res => {
        const token = res.data.data.token;
        localStorage.setItem('jwt_token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwt_token}`;
        return token;
    });
}

export function logout() {
    localStorage.removeItem('jwt_token');
}

export function isLogin() {
    let token = localStorage.jwt_token;
    //you can check token expire here
    // jwt_decode(token).exp
    if(token ) { 
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwt_token}`;
    }
    return !!token;
}