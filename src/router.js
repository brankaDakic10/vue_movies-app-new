import Vue from 'vue'
import VueRouter from 'vue-router'



import AppMovies from './components/AppMovies.vue'
import MovieForm from './components/MovieForm.vue'
import AppLogin from './components/AppLogin.vue'
import AppRegister from './components/AppRegister.vue'

Vue.use(VueRouter)


const routes = [
    { path: '/', redirect: '/movies', name: 'home' },
    { path: '/movies', component: AppMovies, name: 'movies' },
    { path: '/add', component: MovieForm, name: 'movie-form' },
    { path: '/login', component: AppLogin, name: 'login' },
    { path: '/register', component: AppRegister, name: 'register' }
   
  ]
  
  
  export const router = new VueRouter({
    mode: 'history',
    routes
  })