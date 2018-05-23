<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark nav-style">
            <router-link class="navbar-brand" :to="{name: 'home'}">CinemaApp</router-link>
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" :to="{name: 'movies'}">Movies</router-link>
                 <router-link class="nav-item nav-link" :to="{name: 'movie-form'}">Add</router-link>
                 <router-link class="nav-item nav-link" :to="{name: 'login'}">Login</router-link>

            </div>
            
        </nav>
    </div>
</template>

<script>
    export default {
       name: 'NavBar',
    }
</script>

<style>
    .nav-style {
        background-color: chocolate;
    }
</style>