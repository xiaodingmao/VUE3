<template>
  <div class="container">
    <input type="text" v-model="searchText" />
  </div>
</template>

<script lang='ts'>
export default {
  data() {
    return {
      searchText:'',
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="scss">
input{
  padding:10px;
  min-width: 400px;
  background-color: rgba(0,0,0,0.8);
  color: #fff;
  font-size: 14px;
  outline: 0;
  border: 0;
  border-radius: 5px;
  box-shadow: inset 0px 0px 2px 1px;
}

</style>
