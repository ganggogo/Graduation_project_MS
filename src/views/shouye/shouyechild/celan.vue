<template>
  <div class='celan'>
    <van-sidebar v-model="activeKey" @change="onChange" class="box">
      <router-link to="/shouye/xingchenginfo"> <van-sidebar-item class="sidebar-item" title="行程信息管理" /></router-link>
      <router-link to="/shouye/goodsinfo"> <van-sidebar-item class="sidebar-item" title="商品信息管理" /></router-link>
      <router-link to="/shouye/xingchengorderinfo"><van-sidebar-item class="sidebar-item" title="行程订单管理" /></router-link>
      <router-link to="/shouye/goodsorderinfo"><van-sidebar-item class="sidebar-item" title="商品订单管理" /></router-link>
      <router-link to="/shouye/usersinfo"><van-sidebar-item class="sidebar-item" title="用户信息管理" /></router-link>
      <router-link to="/shouye/admininfo"><van-sidebar-item class="sidebar-item" title="管理员信息管理" /></router-link>
    </van-sidebar>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: 'celan',
    data() {
      return {
        activeKey: 0,
      }
    },
    created() {
      if(localStorage.getItem('shouyecelan')){
        this.activeKey = localStorage.getItem('shouyecelan')
      }else{
        this.activeKey = 0
      }
    },
    methods:{
      onChange(index) {
        localStorage.setItem('shouyecelan',index)
      },
    }
  }
</script>

<style scoped>
.celan{
  background-color: #F7F8FA;
  border-right: 1px solid #CDCDCD;
}
  .box{
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .router-link-exact-active a{
    color: #EE0A24;
    font-size: 18px;
  }
  .sidebar-item{
    border-bottom: 1px solid #A0A0A0;
  }
</style>