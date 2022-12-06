<template>
  <div class="container">
    <div class="mv_cover">
      <img src="../assets/movie1.jpg" width="100%" height="100%" />
    </div>
    <div class="mv_content">
      <div class="mv_title">Pulp Fiction<span class="mv_rating">4.3</span></div>
      <div class="mv_time">
        <span class="mv_year">1994</span>
        <span class="mv_duration">154 min</span>
      </div>
      <div class="mv_des">
        Pulp Fiction is a 1994 American crime film written and directed by Quentin
         Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, 
         Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman,
          it tells several stories of crime in Los Angeles, California. 
          The title refers to the pulp magazines and hardboiled crime novels 
          popular during the mid-20th century, known for their graphic violence 
          and punchy dialogue
        </div>
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
.container{
  display: flex;
  padding: 50px;
  background-color: #232323;

  .mv_cover{
    width: 300px;
    height: 400px;
    margin-right: 20px;
  }
  .mv_content{
    padding: 20px;
  }
  .mv_title{
    font-size: 30px;
    color: #fff;
  }
  .mv_rating{
    display: inline-block;
    width: 50px;
    height: 50px;
    font-size: 22px;
    margin-left: 20px;
    color: green;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    border:1px solid #fff;
  }
  .mv_time{
    font-size: 25px;
    color:#f65261;
    padding:10px 0;
    .mv_duration{
      margin-left: 20px;
    }
  }
  .mv_des{
    max-width: 800px;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
  }
}

</style>
