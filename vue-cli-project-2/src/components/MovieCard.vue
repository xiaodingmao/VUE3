<template>
  <div class="container" data-test="movie-card" @click="goToDetail(movie.id)">
    <div class="mv_image"><img v-slazy="movie.posterurl" width="100%" height="100%" /></div>
    <div class="mv_content">
      <div class="mv_flex">
        <span class="mv_title">{{ movie.title }}</span>
        <span class="mv_date">{{ movie.releaseDate }}</span>
      </div>
      <div class="mv_type">{{ movie.genres.join('&') }}</div>
    </div>
  </div>
</template>

<script  setup lang='ts'>
import { useRouter } from 'vue-router'
import { FilmItem } from '../assets/filmType'
const router=useRouter()
defineProps<{
  movie: FilmItem
}>();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function goToDetail(id:number){
  // console.log('id22',id)
  router.push({path:'/movieDetail',query:{id}})
}
</script>

<style scoped lang="scss">
.container {
  width: 280px;
  margin-right: 30px;
  background-color: #232323;
}

.mv_image img{
  width: 100%;
  height: 400px;
}

.mv_content {
  padding: 10px 0px;
  color: #ddd;
  font-size: 14px;

  .mv_flex {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .mv_date {
      padding: 2px 9px;
      text-align: center;
      font-size: 12px;
      border: 1px solid #eee;
    }
  }

  .mv_type {
    padding-top: 10px;
    color: #eee;
    font-size: 12px;
  }
}
</style>
