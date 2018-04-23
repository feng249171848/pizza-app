<template>
  <form>
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price1">
      </div>
    </div>
    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size2">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price2">
      </div>
    </div>
    <div class="form-group row">
      <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return{
      newPizza:{}
    }
  },
  methods:{
    addMenuItem(){
      //console.log(this.newPizza)
      let data={
        name:this.newPizza.name,
        description:this.newPizza.description,
        options:[
          {
            size:this.newPizza.size1,
            price:this.newPizza.price1
          },
          {
            size:this.newPizza.size2,
            price:this.newPizza.price2
          }
        ]
      }
      data.id=Math.random().toString(36).substr(2); //随机创建一个id，防止store更新数据找不到id
      // axios fetch
      this.$axios.post("/menu/", data)
        // .then(res => this.$router.push({name:"menu"}))
        // 数据同步到vuex中
        .then(res => this.$store.commit("pushToMenuItem", data))
      // fetch("http://localhost:3000/menu/",{
      //   method:"POST",
      //   headers:{
      //     "Content-type":"application/json"
      //   },
      //   body:JSON.stringify(data)
      // })
      //   .then(res => res.json())
      //   .then(data => this.$router.push({name:"menu"}))
      //   .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>