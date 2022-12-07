<template>
  <div class="list_container">
    <movie-card v-for="item in movieList" :key="item.id" :movie="item"></movie-card>
  </div>
</template>

<script setup lang='ts'>
import MovieCard from "./MovieCard.vue"
import { FilmItem } from "../assets/filmType"
type FilmList = FilmItem[]
const props = defineProps<{
  movieList: FilmList
}>()
</script>

<style scoped lang="scss">
.list_container{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding:20px;
  background-color: #232323;
}
</style>
