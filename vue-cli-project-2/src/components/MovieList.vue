<template>
  <div v-if="movieLists.length > 0" class="list_container">
    <movie-card v-for="item in movieLists" :key="item.id" :movie="item" data-test="list"></movie-card>
  </div>
  <div v-else data-test="list-null">
    <router-view></router-view>
  </div>

</template>

<script setup lang='ts'>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MovieCard from './MovieCard.vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import NullMovie from './NoFilms.vue'
import { computed, watch } from 'vue'
import { useStore } from '../store'
import router from '@/router';


const { getters } = useStore()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const movieLists = computed(() => getters.filterMovie())
console.log('list', movieLists)
watch(movieLists, (newMovieList) => {
  if (newMovieList.length <= 0) router.push({ name: 'notFound' })

})
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
