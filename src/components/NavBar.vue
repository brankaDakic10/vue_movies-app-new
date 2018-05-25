<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark nav-style">
            <router-link class="navbar-brand" :to="{name: 'home'}">CinemaApp</router-link>
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" :to="{name: 'movies'}">Movies</router-link>
                <router-link class="nav-item nav-link" :to="{name: 'movie-form'}">Add</router-link>
                <router-link class="nav-item nav-link" :to="{name: 'login'}">Login</router-link>
                <a href="#" class="nav-item nav-link" @click="logout" v-if="isAuthenticated">LogOut</a>
            </div>

        </nav>
    </div>
</template>

<script>
    import {
        authService
    } from '../services/AuthService'
    export default {
        name: 'NavBar',
        data() {
            return {
                isAuthenticated: authService.isAuthenticated()
            }
        },
        methods: {
            logout() {
                authService.logout()
                this.isAuthenticated = false
            }
        }
    }
</script>

<style>
    .nav-style {
        background-color: chocolate;
    }
</style>