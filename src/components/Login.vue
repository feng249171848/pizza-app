<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-block btn-success">登陆</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email:"",
      password:"",
      users:[]
    }
  },
  beforeRouteEnter:(to,from,next) => {
    next(vm => vm.$store.dispatch("setUser",null))
  },
  methods:{
    onSubmit(){
      this.$axios.get("/users/")
        .then(res=>{
          // console.log(res);
          this.users=res.data;
          // 实现过滤，查找
          let result = this.users.filter((user)=>{
            return user.email === this.email && user.password === this.password
          })
          //console.log(result);
          if(result != null && result.length > 0){
            this.$store.dispatch("setUser",result[0].email);
            this.$router.push({name:"home"})
          }else{
            alert("账号或密码错误！");
            this.$store.dispatch("setUser",null)
          }
        })
    }
  }
}
</script>

<style scoped>

</style>