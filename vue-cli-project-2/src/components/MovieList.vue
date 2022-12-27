<template>
  <div v-if="movieLists.length > 0" class="list_container">
    <movie-card v-for="item in movieLists" :key="item.id" :movie="item"></movie-card>
  </div>
  <div v-else>
    <null-movie></null-movie>
  </div>

</template>

<script setup lang='ts'>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MovieCard from './MovieCard.vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NullMovie from './NoFilms.vue'
import { computed } from 'vue'
import { useStore } from '../store'

const { getters } = useStore()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const movieLists = computed(() => getters.filterMovie())
console.log('list', movieLists)
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
