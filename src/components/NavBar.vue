<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark nav-style">
            <router-link class="navbar-brand" :to="{name: 'home'}">CinemaApp</router-link>
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" :to="{name: 'movies'}">Movies</router-link>

            </div>
        </nav>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .nav-style {
        background-color: chocolate;
    }
</style>