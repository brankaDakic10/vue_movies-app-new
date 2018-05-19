<template>
    <div class="container">

        <movie-search @search-term-change="onSearchTermChanged" />
         <div class="pt-3">
      <div class="row mb-2">
        <div class="col-md">
          <b-badge
            pill
            variant="success"
            v-if="selectedMoviesIds.length"
          >
            Selected: {{ selectedMoviesCounter }}
          </b-badge>
        </div>
        <div class="col-md">
          <b-button
            size="sm"
            variant="warning"
            class="float-right"
            @click="deselectAll"
          >
            Deselect All
          </b-button>

          <b-button
            size="sm"
            variant="primary"
            class="float-right mr-1"
            @click="selectAll"
          >
              Select All
          </b-button>
        </div>
</div>


      <movie-row
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
         :selected-movies-ids="selectedMoviesIds"
        @on-selected-movie="onSelectedMovie"
      />

      <b-alert
        show
        variant="warning"
        v-if="!movies.length"
      >
        No Movies
      </b-alert>
    </div>
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
            },
            
            selectAll(){
                this.selectedMoviesIds = this.movies.map((movie) => movie.id); 
            },
            deselectAll(){
             this.selectedMoviesIds = [];
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