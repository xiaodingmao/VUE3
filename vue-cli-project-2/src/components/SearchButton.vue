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
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding:10px 50px;
  border-style: none;
  border-radius: 5px;
}
</style>
