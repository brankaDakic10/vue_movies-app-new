<template>
    <div class="container">
       <h3>List of Movies</h3>
        <movie-search
      @search-term-change="onSearchTermChanged"
      />
        <section class="container">
        <movie-row v-for="movie in movies" :key="movie.id" :movie="movie"></movie-row>
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
        components:{
            MovieRow,
            MovieSearch
        },
        data(){
            return{
                movies:[]
            }
        },
        methods:{
          onSearchTermChanged(term){
              MoviesService.index(term)
              .then(({ data }) => {
               this.movies = data
              })
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