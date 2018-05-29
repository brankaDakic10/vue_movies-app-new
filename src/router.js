import Vue from 'vue'
import VueRouter from 'vue-router'

import {
    requiresAuth,
    guestOnly
} from './guards'

import AppMovies from './components/AppMovies.vue'
import MovieForm from './components/MovieForm.vue'
import AppLogin from './components/AppLogin.vue'
import AppMovie from './components/AppMovie.vue'
import AppRegister from './components/AppRegister.vue'

Vue.use(VueRouter)


const routes = [{
        path: '/',
        redirect: '/movies',
        name: 'home'
    },
    {
        path: '/movies',
        component: AppMovies,
        name: 'movies',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/add',
        component: MovieForm,
        name: 'movie-form',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: AppLogin,
        name: 'login',
        meta: {
            guestOnly: true
        }
    },
    {
        path: '/register',
        component: AppRegister,
        name: 'register',
        meta: {
            guestOnly: true
        }
    },
    {
        path: '/movies/:id',
        component: AppMovie,
        name: 'movie',
        meta: {
            requiresAuth: true
        }
       
    }

]


export const router = new VueRouter({
    mode: 'history',
    routes
})

//////////////////
router.beforeEach((to, from, next) => {


    //lancana provera
    Promise.resolve(to)
        .then(requiresAuth)
        .then(guestOnly)
        .then(() => {
            console.log('router.beforeEach->Promise.resolve(to)', next)
            next()
        })
        .catch(redirect => {
            console.log('router.beforeEach->catch', redirect)
            next(redirect);
        })
})