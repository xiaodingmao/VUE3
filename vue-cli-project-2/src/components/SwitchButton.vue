<template>
  <div class="container">
    <span :class="{ active: isActive }" @click="setActive">TITLE</span>
    <span :class="{ active: !isActive }" @click="setActive">GENGRE</span>
  </div>
</template>

<script lang='ts'>
export default {
  data() {
    return {
      isActive:true

    }
  },
  methods: {
    setActive(){
     this.isActive= !this.isActive
    }

  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container{
  display: flex;
  border-radius: 5px;
  background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.2));
    span{
    flex: auto;
    padding: 10px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    border-radius: inherit;
  }
  .active{
    background-color: #f65251;
  }
  

}

</style>
