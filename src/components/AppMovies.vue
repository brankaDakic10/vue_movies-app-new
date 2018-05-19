<template>
    <div class="container">
       <h3>List of Movies</h3>
       
    </div>
</template>

<script>
    import MoviesService from './../services/MoviesService'
    export default {
        name: 'AppMovies',

        beforeRouteEnter(to, from, next) {

            MoviesService.index().then(({
                data
            }) => {
                next((context) => {
                    context.movies = data;
                })
            })
        }
    }
</script>

<style>
</style>