<template>
  <div class="header_container">
    <div class="search_title">FIND YOUR MOVIE</div>
    <div class="search_tool">
      <search-input v-model="searchText"></search-input>
      <search-button :searchText="searchText"></search-button>
    </div>
    <div class="search_filter">
      <span>SREACH BY</span>
      <search-sort :nameTags="tags"></search-sort>
    </div>

  </div>
</template>

<script lang='ts'>
import SearchInput from './SearchInput.vue';
import SearchButton from './SearchButton.vue';
import SearchSort from './SwitchButton.vue';

export default {
  data() {
    return {
      tags: ['TITLE', 'GENGRE'],
      searchText:''

    };
  },
  components: {
    SearchInput,
    SearchButton,
    SearchSort,
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
.header_container {
  height: 300px;
  padding: 60px 100px;
  font-size: 18px;
  color: #fff;
  background: linear-gradient(rgba(45, 45, 47, 0.6), rgba(16, 16, 13, 0.8)), url("../assets/bg.jpeg");
}

.search_title {
  font-size: 40px;
  padding-bottom: 40px;
}

.search_tool {
  display: flex;
  padding-bottom: 30px;
  button {
    margin-left: 20px;
  }
}
.search_filter {
  display: flex;
  align-items: center;
  .switch_container{
    margin-left:20px;
  }
}
</style>
