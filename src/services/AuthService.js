import axios from 'axios'

export default class AuthService {

    login(email, password) {
        return axios.post('http://localhost:8000/api/login', {
            email,
            password
        }).then(data => {
            //   console.log(response.data.token);

            window.localStorage.setItem('loginToken', data.data.token)
            this.setAxiosDefaultAuthorizationHeader()
        })
    }


    setAxiosDefaultAuthorizationHeader() {
        const TOKEN = window.localStorage.getItem('loginToken')
        axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`
    }

    logout() {
        window.localStorage.removeItem('loginToken')
        delete axios.defaults.headers.common['Authorization']
    }


    isAuthenticated() {
        return !!window.localStorage.getItem('loginToken');
    }

///////
    register(user) {
        return axios.post(`http://localhost:8000/api/register`,user)
         
    }
    


}

export const authService = new AuthService()