<template>
  <div class="container">
    <div class="mv_image"><img src="../assets/movie1.jpg" width="100%" height="100%" /></div>
    <div class="mv_content">
      <div class="mv_flex"><span class="mv_title">Four Rooms</span><span class="mv_date">2004</span></div>
      <div class="mv_type">Action&Adventure</div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container {
  width: 300px;
  background-color: #232323;
}

.mv_image {
  width: 100%;
  height: 400px;
}

.mv_content {
  padding: 10px 0px;
  color: #ddd;
  font-size: 14px;
  .mv_flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .mv_date {
      padding: 2px 9px;
      text-align: center;
      font-size: 12px;
      border: 1px solid #eee;
    }
  }
  .mv_type {
    padding-top:10px;
    color: #eee;
    font-size: 12px;
  }
}
</style>
