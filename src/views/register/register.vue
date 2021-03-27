<template>
  <div style="position: relative">
    <div class='box'></div>
    <div class="content">
      <div class="logo">
        <img src="~assets/img/login/logo.png" alt="">
      </div>
      <div class="right">
        <center><span class="title1"><b>寻游户外后台管理系统</b></span></center>
        <center><span class="title2"><b>管理员身份注册</b></span></center>

        <div class="xiamian">
          <!--登录框-->
          <div class="inputbox"  style="position: relative">
            <span v-if="!this.isName" style="position: absolute;color: red;font-size: 12px;top:40px;left: 30px">*用户名格式错误</span>
            <span v-if="!this.isPassword" style="position: absolute;color: red;font-size: 12px;top:96px;left: 30px">*密码格式错误</span>

            <el-tooltip class="item" effect="light" content="用户名为4-10位数字或字母组合" placement="right">
              <div class="inputbox1">
                <img src="~assets/img/login/guanliyuan.svg" alt="">
                <el-input v-model="guanliyuan" placeholder="请输入管理员用户名"></el-input>
              </div>

            </el-tooltip>

            <el-tooltip  class="item" effect="light" content="密码为6-12位数字和字母组合" placement="right">
              <div class="inputbox2">
                <img src="~assets/img/login/mima.svg" alt="">
                <el-input type="password" v-model="password" placeholder="请输入管理员密码"></el-input>
              </div>
            </el-tooltip>


            <div class="zhucubox">
<!--              <span class="wangjimima"><a href="javascript:void(0)">忘记密码</a></span>-->
              <span @click="toLogin" class="zhuce"><el-link type="primary">已有账号,去登录</el-link></span>
            </div>
            <div class="loginbtnbox">
              <el-button @click="doRegister" class="loginbnt" type="primary">注册</el-button>
            </div>
          </div>
          <div class="dibu">温馨提示:建议使用谷歌浏览器，火狐浏览器，360浏览器请切换成极速模式</div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'vant'
  export default {
    name: 'register',
    data() {
      return {
        guanliyuan:'',
        password:'',
        isName:true,
        isPassword:true
      }
    },
    methods:{
      toLogin(){
        this.$router.replace('/login')
      },

      doRegister(){
        //保存注册信息
        const guanliyuanData = {}
        guanliyuanData.username = this.guanliyuan
        guanliyuanData.password = this.password
        this.$axiosguanliyuan.post('/register',guanliyuanData).then(res=>{
          console.log(res.data)
          this.guanliyuan = ''
          this.password = ''
          Toast.success('恭喜成功注册!')
          this.$router.replace('/login')
        })

      }
    },
    watch:{
      guanliyuan(){
        let namereg = /^[A-Za-z0-9]{4,10}$/  //4到10位数字或字母组合
        if (namereg.test(this.guanliyuan)){
          // console.log('nameyes')
          this.isName = true
        }else {
          // console.log('nameno')
          this.isName = false
        }
      },
      password(){
        console.log(999)
        let pswreg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$///6-12为数字字母组合
        if (pswreg.test(this.password)){
          // console.log('pswyes')
          this.isPassword = true
        }else {
          // console.log('pswno')
          this.isPassword = false
        }
      }
    },
    deactivated() {
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