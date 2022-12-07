<template>
  <div class="home">
    <movie-header></movie-header>
    <sort-tool></sort-tool>
    <movie-list :movieList="movieList"></movie-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MovieHeader from '../components/SearchHeader.vue'; // @ is an alias to /src
import SortTool from '../components/SortTool.vue';
import MovieList from '../components/MovieList.vue';
export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      movieList: [{
        id: "11",
        title: "PULP FICTION",
        rate: "4.3",
        type: "ACTION",
        description: "HFJHGJKGJTKHOPTKHPO",
        duration: "150MIN",
        coverUrl: "https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
        releaseYear: "2013",
      },
      {
        id: "11",
        title: "PULP FICTION",
        rate: "4.3",
        type: "ACTION",
        description: "HFJHGJKGJTKHOPTKHPO",
        duration: "150MIN",
        coverUrl: "https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
        releaseYear: "2013",
      },
      {
        id: "11",
        title: "PULP FICTION",
        rate: "4.3",
        type: "ACTION",
        description: "HFJHGJKGJTKHOPTKHPO",
        duration: "150MIN",
        coverUrl: "https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
        releaseYear: "2013",
      },
      {
        id: "11",
        title: "PULP FICTION",
        rate: "4.3",
        type: "ACTION",
        description: "HFJHGJKGJTKHOPTKHPO",
        duration: "150MIN",
        coverUrl: "https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
        releaseYear: "2013",
      }, {
        id: "11",
        title: "PULP FICTION",
        rate: "4.3",
        type: "ACTION",
        description: "HFJHGJKGJTKHOPTKHPO",
        duration: "150MIN",
        coverUrl: "https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
        releaseYear: "2013",
      },
      {
        id: "11",
        title: "PULP FICTION",
        rate: "4.3",
        type: "ACTION",
        description: "HFJHGJKGJTKHOPTKHPO",
        duration: "150MIN",
        coverUrl: "https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
        releaseYear: "2013",
      }]

    }
  },
  components: {
    MovieHeader,
    SortTool,
    MovieList
  },
});
</script>
<style scoped lang="scss">
.home{
  max-width: 1280px;
  margin: 30px auto;
}
</style>
