<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
//import HomeView from './views/HomeView.vue';

export default defineComponent({
  name: 'APP',
  components: {
    //HomeView,
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #555;
}

</style>
