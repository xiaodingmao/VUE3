<template>
  <div class="sort_container">
    <div class="search_counts">7 movies found</div>
    <div class="sort_button">
      <span>SORT BY</span>
      <search-sort :name-tags="tags"></search-sort>
    </div>
  </div>
</template>

<script lang='ts'>
import SearchSort from "./SwitchButton.vue"
export default {
  data() {
    return {
      tags: ['RELEASE DATE', 'RATING']
    }
  },
  methods: {

  },
  components: {
    SearchSort
  }
}
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
