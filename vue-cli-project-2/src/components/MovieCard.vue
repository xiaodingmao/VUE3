<template>
  <div class="container">
    <div class="mv_image"><img :src="movie.coverUrl" width="100%" height="100%" /></div>
    <div class="mv_content">
      <div class="mv_flex">
        <span class="mv_title">{{ movie.title }}</span>
        <span class="mv_date">{{ movie.releaseYear }}</span>
      </div>
      <div class="mv_type">{{ movie.type }}</div>
    </div>
  </div>
</template>

<script  setup lang='ts'>
import { FilmItem } from '../assets/filmType';

const props = defineProps<{
  movie: FilmItem
}>();
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
