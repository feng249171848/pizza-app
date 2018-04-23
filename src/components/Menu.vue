<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-7 my-2">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.id">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td><button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-5 my-2">
      <div v-if="baskets.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>尺寸</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.name+item.price">
            <tr>
              <td>
                <button @click="decreaseQuantity(item)" class="btn btn-outline-secondary btn-sm">-</button>
                <span>{{item.quantity}}</span>
                <button @click="increaseQuantity(item)" class="btn btn-outline-secondary btn-sm">+</button>
              </td>
              <td>{{item.name}}</td>
              <td>{{item.size}}</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价：{{total+"RMB"}}</p>
        <button class="btn btn-block btn-success">提交</button>
      </div>   
      <div v-else>
        {{basketsText}}
      </div>  
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data(){
    return{
      baskets:[],
      basketsText:"购物车中没有任何商品",
      // getMenuItems:{}
    }
  },
  computed:{
    getMenuItems(){
      // 在vuex中获取数据
      // return this.$store.state.menuItems
      // 通过getters获取数据
      return this.$store.getters.getMenuItems
    },
    total(){
      let totalCost=0;
      for(let index in this.baskets){
        let individualItem = this.baskets[index];
        totalCost += individualItem.quantity * individualItem.price
      }
      return totalCost
    }
  },
  created(){
    // 将请求到的数据存储到vuex中,然后进行集中管理
    this.$axios.get("/menu/")
      .then(res => this.$store.commit("setMenuItems",res.data))
    // axios.get("/menu/")
    //   .then(res => this.getMenuItems=res.data)
    // fetch("http://localhost:3000/menu/")
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(data => {
    //     this.getMenuItems=data;
    //   })
  },
  methods:{
    addToBasket(item,option){
      let basket = {
        name:item.name,
        size:option.size,
        price:option.price,
        quantity:1
      }
      if(this.baskets.length > 0){
        // 过滤,返回baskets里面有相同的产品
        let result = this.baskets.filter((basket)=>{
          return basket.name === item.name && basket.price === option.price
        })
        //如果有相同的，数量+1，没有相同的push,
        //console.log(result.length); //result长度在baskets中有相同产品的情况下都等于1
        if(result != null && result.length > 0){
          result[0].quantity++
        }else{
          this.baskets.push(basket)
        }
      }else{
        this.baskets.push(basket)
      }
      //console.log(this.baskets)
    },
    //购物车中数量的加减
    decreaseQuantity(item){
      item.quantity--
      if(item.quantity <= 0){
        this.removeFromBasket(item)
      }
    },
    removeFromBasket(item){
      this.baskets.splice(this.baskets.indexOf(item),1)
    },
    increaseQuantity(item){
      item.quantity++
    }
  }
}
</script>

<style scoped>

</style>