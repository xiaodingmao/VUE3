<template>
  <button type="button" @click="onClick">SEARCH</button>
</template>

<script setup lang='ts'>
import { useStore } from '../store'
const store = useStore()
const props = defineProps({
  searchText: String,
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onClick() {
  store.commit('setSearchText', props.searchText)
}
</script>

<style scoped>
button {
  width: 180px;
  height: 60px;
  line-height: 60px;
  background-color: #f65261;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border-style: none;
  border-radius: 5px;
}
</style>
