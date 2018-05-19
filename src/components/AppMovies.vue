<template>
    <div class="container">
        <h3>List of Movies</h3>
        <div v-if="selectedMoviesIds.length">Selected: {{ selectedMoviesCounter }}</div>
        <movie-search @search-term-change="onSearchTermChanged" />
        <section class="container">
            <movie-row v-for="movie in movies" 
            :key="movie.id" :movie="movie" 
            @on-selected-movie="onSelectedMovie"></movie-row>
            <div v-if="!movies.length">
                No Movies
            </div>
        </section>
    </div>
</template>

<script>
    import MoviesService from './../services/MoviesService'
    import MovieRow from './MovieRow.vue'
    import MovieSearch from './MovieSearch.vue'
    export default {
        name: 'AppMovies',
        components: {
            MovieRow,
            MovieSearch
        },
        data() {
            return {
                movies: [],
                selectedMoviesIds: []
            }
        },
        methods: {
            onSearchTermChanged(term) {
                MoviesService.index(term)
                    .then(({
                        data
                    }) => {
                        this.movies = data
                    })
            },
            onSelectedMovie(movie) {
                if (this.selectedMoviesIds.indexOf(movie.id) > -1) {
                    return;
                }
                this.selectedMoviesIds.push(movie.id)
            }


        },
        computed: {
            selectedMoviesCounter() {
      return this.selectedMoviesIds.length
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