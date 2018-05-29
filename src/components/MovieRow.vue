<template>
     <div class="row" :class="{ 'highlighted text-white': selected  }" >
    <div class="col-sm" v-text="movie.id"></div>
    <router-link :to="{ name: 'movie', params: {id: movie.id}}"><div class="col-sm" v-text="movie.title"></div></router-link>
    <div class="col-sm" v-text="movie.director"></div>
    <div class="col-sm" v-text="movie.genre"></div>
    <div class="col-sm" v-text="movie.releaseDate"></div>
    <div class="col-sm" v-text="movie.duration"></div>
    <div class="col-sm">
     <b-button
       type="submit"
       variant="success"
       @click="onSelected">
        Select
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
   name:'MovieRow',
    props:{
      movie:{
      type: Object,
      required:true
      },
      selectedMoviesIds: {
      type: Array,
      required: true,
      default: () => []
    }
    
  },
  // see more
   computed: {
    selected() {
      return this.selectedMoviesIds
        .indexOf(this.movie.id) > -1;
    }
  },
  methods:{
    onSelected() {
     this.selected = true
     this.$emit('on-selected-movie', this.movie,!this.selected)
   }
   
  }
}
</script>

<style>
.highlighted {
  background: rgb(57, 122, 243);
}
</style>
