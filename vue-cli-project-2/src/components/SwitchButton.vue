<template>
  <div class="switch_container">
    <span 
    :class="{ active: isActive===index }"
     @click="setActive(index)"
     v-for="(item,index) in nameTags" :key="index">
  
     {{item}}
    </span>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default {
  props:{
    nameTags: Array
  },
  data() {
    return {
      isActive:0
    }
  },
  methods: {
    setActive(index:number){
     this.isActive= index
    }

  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.switch_container{
  display: flex;
  border-radius: 5px;
  background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.2));
    span{
    flex: auto;
    padding: 10px 30px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    border-radius: inherit;
  }
  .active{
    background-color: #f65251;
  }
  

}

</style>
