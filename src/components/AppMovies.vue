<template>
    <div class="container">
       <h3>List of Movies</h3>
       
        <movie-row v-for="movie in movies" :key="movie.id" :movie="movie"></movie-row>
    </div>
</template>

<script>
    import MoviesService from './../services/MoviesService'
    import MovieRow from './MovieRow.vue'

    export default {
        name: 'AppMovies',
        components:{
            MovieRow
        },
        data(){
            return{
                movies:[]
            }
        },

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