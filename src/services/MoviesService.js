import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:8000/api'
})

const ENDPOINTS = {
  MOVIES: '/movies'
}

export default {
  store: function (movie) {
    return axios.post(ENDPOINTS.MOVIES, movie)
  },
  index(term = '') {
    return axios.get(ENDPOINTS.MOVIES, {
      params: {
        term
      }
    })
  },

  getMovie(id){
    return axios.get(`/movies/${id}`)
  }
}