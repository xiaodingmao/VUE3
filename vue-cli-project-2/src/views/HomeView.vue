<template>
  <div class="home">
    <movie-header></movie-header>
    <sort-tool></sort-tool>
   <!--  <movie-list :movieList="movieList"></movie-list> -->
    <movie-list></movie-list>
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
     /*  movieList: [{
        id: '11',
        title: 'PULP FICTION',
        rate: '4.3',
        type: 'ACTION',
        description: 'HFJHGJKGJTKHOPTKHPO',
        duration: '150MIN',
        coverUrl: 'https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg',
        releaseYear: '2013',
      },
      {
        id: '11',
        title: 'PULP FICTION',
        rate: '4.3',
        type: 'ACTION',
        description: 'HFJHGJKGJTKHOPTKHPO',
        duration: '150MIN',
        coverUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-best-disney-movies-zootopia-everett-1587424586.jpg',
        releaseYear: '2013',
      },
      {
        id: '11',
        title: 'PULP FICTION',
        rate: '4.3',
        type: 'ACTION',
        description: 'HFJHGJKGJTKHOPTKHPO',
        duration: '150MIN',
        coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_tw88QEQEq4bw2mIw85iolPRapmw0ghgZQ&usqp=CAU',
        releaseYear: '2013',
      },
      {
        id: '11',
        title: 'PULP FICTION',
        rate: '4.3',
        type: 'ACTION',
        description: 'HFJHGJKGJTKHOPTKHPO',
        duration: '150MIN',
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        releaseYear: '2013',
      }, {
        id: '11',
        title: 'PULP FICTION',
        rate: '4.3',
        type: 'ACTION',
        description: 'HFJHGJKGJTKHOPTKHPO',
        duration: '150MIN',
        coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnvt34mv-b3Pk84O0IZAaFboxa7W1bmB-Q1A&usqp=CAU',
        releaseYear: '2013',
      },
      {
        id: '11',
        title: 'PULP FICTION',
        rate: '4.3',
        type: 'ACTION',
        description: 'HFJHGJKGJTKHOPTKHPO',
        duration: '150MIN',
        coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF41kHSkePZOI7oSnCISKmQ7aEuPUREBvzcg&usqp=CAU',
        releaseYear: '2013',
      }], */

    };
  },
  components: {
    MovieHeader,
    SortTool,
    MovieList,
  },
});
</script>
<style scoped lang="scss">
.home{
  max-width: 1280px;
  margin: 30px auto;
}
</style>
