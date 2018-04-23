<template>
  <div class="row">
    <div  id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝PIZZA！</h1>
        <h2>这里有你非常喜欢的PIZZA！</h2>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  methods:{
    goToMenu(){
      //跳转到上一次浏览的页面
      //this.$router.go(-1)
      //this.$router.replace('/menu')
      //this.$router.replace({name:'menu'})
      this.$router.push({name:'menu'})
    }
  }
}
</script>

<style scoped>
.row{ margin: 0;}
#home{
  background: url(../assets/pizza.jpg);
  height: 85vh;
  padding: 10%;
}
h1,h2{ 
  margin: 6%;
}
.background{
  background-color: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>