<template>
  <div class='shouye'>
    <div class="container" style="position: relative">
      <div><center><h1>寻游户外后台管理系统</h1></center></div>
      <span class="welcome">管理员 <span style="color: red;font-size: 26px">{{username}}</span>已登录</span>
      <span class="loginout" @click="loginOut">退出登录</span>
      <div class="xiamian">
        <celan class="celan"></celan>
        <div class="Rmain">
          <router-link to="/shouye/xingchenginfo"></router-link>
          <router-link to="/shouye/goodsinfo"></router-link>
          <router-link to="/shouye/xingchengorderinfo"></router-link>
          <router-link to="/shouye/goodsorderinfo"></router-link>
          <router-link to="/shouye/usersinfo"></router-link>
          <router-link to="/shouye/admininfo"></router-link>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Dialog } from 'vant';
  import celan from 'views/shouye/shouyechild/celan.vue';
  export default {
    name: 'shouye',
    components: {
      celan,
    },
    data() {
      return {
        username:'',
      }
    },
    created() {
      this.username =localStorage.getItem('guanliyuan').split('.')[1]
    },
    methods:{

      loginOut(){
        Dialog.confirm({
          title: '管理员网站提示',
          message: '确定退出吗？',
        })
        .then(() => {
          // this.username = ''
          localStorage.removeItem('guanliyuan')
          localStorage.removeItem('shouyecelan')
          this.$router.replace('/login')
        })
        .catch(() => {
          // on cancel
        });

      }
    },
    activated() {
      this.username =localStorage.getItem('guanliyuan').split('.')[1]

      this.$bus.$on('refresh',()=>{
        this.$router.go(0)
      })
    }
  }
</script>

<style scoped>
  .shouye{
    width: 100%;
    height: 100%;
  }
  .shouye h1{
    background-color: #0C739A;
    color: white;
    height: 50px;
    line-height: 50px;
  }
  .container{
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    box-shadow: 0 0 20px 0 #EDEDED;
  }
  .welcome{
    position: absolute;
    top:17px;
    left: 690px;
    color: white;
    font-size: 14px;
  }
  .loginout{
    position: absolute;
    top:26px;
    left:930px;
    font-size: 14px;
    color: white;
    cursor: pointer;
  }
  .loginout:hover{
    color: red;
  }

  .xiamian{
    width: 100%;
    height: 574px;
    display: flex;
  }
  .celan{
    width: 20%;
    height: 100%;
  }
  .Rmain{
    width: 80%;
    height: 100%;
    background-color: #ECECEC;
    overflow: auto;
  }
</style>