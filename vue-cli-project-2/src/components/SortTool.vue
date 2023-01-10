<template>
  <div class="sort_container">
    <div class="search_counts" data-test="sort-count">{{ getMoviesCounts }} movies found</div>
    <div class="sort_button" data-test="sort-button">
      <span>SORT BY</span>
      <search-sort :name-tags="tags"></search-sort>
    </div>
  </div>
</template>

<script lang='ts'>
import SearchSort from './SwitchButton.vue';
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      tags: ['RELEASE DATE', 'RATING'],
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'getMoviesCounts',
    ])
  },
  components: {
    SearchSort,
  },
};
</script>

<style scoped lang="scss">
.sort_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
  font-size: 16px;
  color: #fff;
  background-color: #555;

  .search_counts {
    font-weight: bold;
  }

  .sort_button {
    display: flex;
    align-items: center;

    .switch_container {
      margin-left: 20px;
    }
  }
}
</style>
