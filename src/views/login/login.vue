<template>
  <div style="position: relative">
    <div class='box'></div>
    <div class="content">
      <div class="logo">
        <img src="~assets/img/login/logo.png" alt="">
      </div>
      <div class="right">
        <center><span class="title1"><b>寻游户外后台管理系统</b></span></center>
        <center><span class="title2"><b>管理员身份认证</b></span></center>

        <div class="xiamian">
          <!--登录框-->
          <div class="inputbox">
            <div class="inputbox1">
              <img src="~assets/img/login/guanliyuan.svg" alt="">
              <el-input v-model="guanliyuan" placeholder="请输入管理员用户名"></el-input>
            </div>
            <div class="inputbox2">
              <img src="~assets/img/login/mima.svg" alt="">
              <el-input type="password" v-model="password" placeholder="请输入管理员密码"></el-input>
            </div>
            <div class="zhucubox">
              <span class="wangjimima"><el-link type="primary">忘记密码</el-link></a></span>
              <span @click="toRegister" class="zhuce"><el-link type="primary">没有账号?去注册</el-link></span>
            </div>
            <div class="loginbtnbox">
              <el-button @click="doLogin" class="loginbnt" type="primary">登录</el-button>
            </div>
          </div>
          <div class="dibu">温馨提示:建议使用谷歌浏览器，火狐浏览器，360浏览器请切换成极速模式</div>

        </div>

      </div>
    </div>
    <div style="position: absolute;top:516px;left: 40%;color: white;font-size: 14px">版权所有 © 2021 寻游户外 21届电商毕业设计</div>
  </div>
</template>

<script>
  import {Toast} from "vant";

  export default {
    name: 'login',
    data() {
      return {
        guanliyuan:'',
        password:''
      }
    },
    methods:{
      //加载遮罩层
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 1000);


      },


      toRegister(){
        this.$router.replace('/register')
      },
      doLogin(){
        const guanliyuanData = {}
        guanliyuanData.username = this.guanliyuan
        guanliyuanData.password = this.password
        this.$axiosguanliyuan.post('/login',guanliyuanData).then(res=>{
          this.guanliyuan = ''
          this.password = ''
          console.log(res.data)

          this.openFullScreen2()

          setTimeout(()=>{
            this.$router.replace('/shouye/xingchenginfo')
            Toast.success('恭喜成功登入系统!')
            this.$bus.$emit('refresh')
            localStorage.setItem('guanliyuan','Bearer'+res.data)
          },2000)
        })

      },

    },
    activated() {
      this.guanliyuan = ''
      this.password = ''
    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/img/login/backimg.jpg");
    background-size: cover;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    position: relative;

  }
  .content{
    background-color: white;
    width: 700px;
    height: 384px;
    position: absolute;
    display: flex;
    top: 20%;
    left: 25%;
    /*margin-top: -192px;*/
    /*margin-left: -350px;*/
    border-radius: 6px;
    box-shadow: 0 14px 10px 4px rgba(0, 0, 0, .2), -1px 1px 6px rgba(0, 0, 0, .4);
  }
  .logo{
    width: 60%;
    height: 100%;
  }
  .logo img{
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
  .right{
    height: 100%;
    width: 40%;
    box-shadow: 0 10px 20px 3px  rgba(138,185,238, .3) inset;
  }
  .title1{
    display: block;
    padding: 5px 0;
    margin: 38px 0 8px 0;
    color: #4D9EFA;
    font-size: 26px;
  }
  .title2{
    display: block;
    padding: 5px 0;
    margin: 8px 0;
    color: #4D9EFA;
    font-size: 24px;
  }
  .xiamian{
    padding: 4px 15px;
  }
  .inputbox img{
    width: 34px;
    /*border: 1px solid #4D9EFA;*/
  }
  .inputbox1,.inputbox2{
    display: flex;
  }
  .inputbox1{
    margin-top: 16px;
  }
  .inputbox2{
    margin-top: 16px;
  }
  .inputbox input{
    border-left: none;
  }
  .loginbtnbox{
    /*padding: 0 0 0 34px;*/
  }
  .loginbnt{
    width: 100%;
    margin-top: 20px;
  }
  .zhucubox{
    font-size: 12px;
    width: calc(100% - 34px);
    height: 18px;
    padding: 0 0 0 34px;
    margin-top: 8px;
  }
  .zhuce{
    float: right;
  }
  .dibu{
    margin-top: 6px;
    font-size: 12px;
    color: red;
  }
</style>