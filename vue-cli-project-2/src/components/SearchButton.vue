<template>
  <button type="button"  @click="onClick" >SEARCH</button>

</template>

<script lang='ts'>
export default {

  data() {
    return {

    };
  },
  methods: {
    onClick(){
      alert("search")
    }

  },
  components: {

  },
};
</script>

<style scoped>
button{
  background-color: #f65261;
  color:white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  padding:10px 20px;
  border: none;
}

</style>
