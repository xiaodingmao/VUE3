<template>
  <div class="container">
    <div class="mv_cover">
      <img :src="movieDetail.posterurl" width="100%" height="100%" />
    </div>
    <div class="mv_content">
      <div class="mv_title">{{ movieDetail.title }}<span class="mv_rating">{{ movieDetail.averageRating }}</span></div>
      <div class="mv_time">
        <span class="mv_year">{{ movieDetail.releaseDate }}</span>
        <span class="mv_duration">{{ addSuffix(movieDetail.duration, 'min') }} </span>
      </div>
      <div class="mv_des">{{ movieDetail.storyline }}</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
//import type { PropType } from 'vue';
//import { FilmItem } from '../assets/filmType';
//import { mapGetters } from 'vuex'
import { store } from '@/store';

export default defineComponent({
  /* props: {
    movie: {
      // 提供相对 `Object` 更确定的类型
      type: Object as PropType<FilmItem>,
      required: true,
    },
  }, */
  computed: {
    movieDetail() {
      //console.log(this.$route.query.id,store.getters.getMovieDeatilById(this.$route.query.id))
      return store.getters.getMovieDeatilById(this.$route.query.id)
    },
  },
  methods: {
    addSuffix(value: string, suffix: string) {
      return value + suffix
    }

  },

});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  padding: 50px;
  background-color: #232323;

  .mv_cover img {
    width: 300px;
    height: 400px;
    margin-right: 20px;
  }

  .mv_content {
    padding: 20px;
  }

  .mv_title {
    font-size: 30px;
    color: #fff;
  }

  .mv_rating {
    display: inline-block;
    width: 50px;
    height: 50px;
    font-size: 22px;
    margin-left: 20px;
    color: green;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    border: 1px solid #fff;
  }

  .mv_time {
    font-size: 25px;
    color: #f65261;
    padding: 10px 0;

    .mv_duration {
      margin-left: 20px;
    }
  }

  .mv_des {
    max-width: 800px;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
  }
}
</style>
