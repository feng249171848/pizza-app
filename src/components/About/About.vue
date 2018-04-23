<template>
  <div class="row mb-5">
    <div class="col-4">
      <div class="list-group mb-5">
        <router-link tag="li" :to="{name:'history'}" class="nav-link">
          <a class="list-group-item list-group-item-action">历史订单</a>
        </router-link>
        <router-link tag="li" :to="{name:'contact'}" class="nav-link">
          <a class="list-group-item list-group-item-action">联系我们</a>
        </router-link>
        <router-link tag="li" :to="{name:'orderingGuide'}" class="nav-link">
          <a class="list-group-item list-group-item-action">点餐文档</a>
        </router-link>
        <router-link tag="li" :to="{name:'delivery'}" class="nav-link">
          <a class="list-group-item list-group-item-action">快递信息</a>
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .col-8{ margin-top: 0.5rem}
</style>
