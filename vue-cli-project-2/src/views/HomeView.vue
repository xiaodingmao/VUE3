<template>
  <div class="home" data-test="home">

    <movie-header></movie-header>
    <sort-tool></sort-tool>
    <!--  <movie-list :movieList="movieList"></movie-list> -->
    <suspense>
      <movie-list></movie-list>
      <template #fallback>
        Loading...
      </template>
    </suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MovieHeader from '../components/SearchHeader.vue'; // @ is an alias to /src
import SortTool from '../components/SortTool.vue';
import MovieList from '../components/MovieList.vue';
import { store } from '@/store';
export default defineComponent({
  name: 'HomeView',
  data() {
    return {
    };
  },
  mounted() {
    store.dispatch('getInitalMovieList')
  },
  components: {
    MovieHeader,
    SortTool,
    MovieList,
  },
});
</script>
<style scoped lang="scss">
.home {
  max-width: 1280px;
  margin: 30px auto;
}
</style>
