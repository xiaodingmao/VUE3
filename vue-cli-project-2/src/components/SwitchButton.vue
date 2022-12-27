<template>
  <div class="switch_container">
    <span :class="{ active: isActive === index }" v-for="(item,index) in nameTags" :key="index"
      @click="setActive(index, item)">
      {{ item }}
    </span>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex'

export default defineComponent({
  props: {
    nameTags: Array,
  },
  data() {
    return {
      isActive: 0,
    };
  },
  methods: {
    ...mapMutations(['setsortBy', 'setSearchBy']),
    setActive(index: number, item: unknown) {
      this.isActive = index;
      switch (item) {
        case 'RELEASE DATE':
          this.setsortBy('release_date');
          break;
        case 'RATING':
          this.setsortBy('vote_count');
          break;
        case 'TITLE':
          this.setSearchBy('title');
          break;
        case 'GENGRE':
          this.setSearchBy('genres');
          break;
      }
    },

  },
  components: {

  },
});
</script>

<style scoped lang="scss">
.switch_container {
  display: flex;
  border-radius: 5px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));

  span {
    flex: auto;
    padding: 10px 30px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    border-radius: inherit;
  }

  .active {
    background-color: #f65251;
  }

}
</style>
