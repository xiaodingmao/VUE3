<template>
  <button type="button" @click="onClick">SEARCH</button>

</template>

<script lang='ts'>
export default {

  data() {
    return {

    };
  },
  methods: {
    onClick() {
      alert("search")
    }

  },
  components: {

  },
};
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
