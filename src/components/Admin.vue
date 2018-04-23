<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza'
export default {
  data(){
    return{
      name:"Henry",
      //getMenuItems:[]
    }
  },
  components:{
    'app-new-pizza':NewPizza
  },
  computed:{
    getMenuItems:{
      // 在vuex中获取数据
      get(){
        // return this.$store.state.menuItems
        // 通过getters获取数据
        return this.$store.getters.getMenuItems
      },
      set(){

      }
    }
  },
  created(){
    this.$axios.get("/menu/")
      // 数据同步
      .then(res => this.$store.commit('setMenuItems',res.data))
    // fetch("http://localhost:3000/menu/")
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(data => {
    //     this.getMenuItems=data;
    //     //console.log(this.getMenuItems)
    //   })
  },
  methods:{
    deleteData(item){
      this.$axios.delete("/menu/"+item.id)
      // .then(res => this.$router.push({name:"menu"}))
        .then(res => this.$store.commit('removeMenuItems',item))
      // fetch("http://localhost:3000/menu/"+item.id,{
      //   method:"DELETE",
      //   headers:{
      //     'Content-type':'application/json'
      //   }
      // })
      // .then(res => res.json())
      // .then(data => this.$router.push({name:"menu"}))
      // .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>