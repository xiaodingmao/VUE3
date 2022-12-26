<template>
  <div class="list_container">
    <movie-card v-for="item in movieLists" :key="item.id" :movie="item"></movie-card>
  </div>
</template>

<script setup lang='ts'>
import MovieCard from './MovieCard.vue';
import { computed } from 'vue'
import { useStore } from '../store'

const { state } = useStore()


const movieLists = computed(()=>state.movieList )
</script>

<style scoped lang="scss">
.list_container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px;
  background-color: #232323;
}
</style>
