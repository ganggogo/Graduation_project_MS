<template>
  <div class='goodsinfo'>
    <div style="display: flex">
      <h2 style="color: #0C739A;margin-top: 15px">常用装备</h2>
      <h3 style="margin-top: 20px;margin-left: 50px"><el-link @click="add1" style="font-size: 16px" type="primary">(添加商品)</el-link></h3>
    </div>
    <el-dialog title="添加商品信息" :visible.sync="dialogFormVisible4">
      <el-form :model="form4">
        <el-form-item label="商品标题:" label-width="120px">
          <el-input  v-model="form4.title" autocomplete="off" placeholder="请输入商品标题"></el-input>
        </el-form-item>
        <el-form-item label="商品价格:" label-width="120px">
          <el-input v-model="form4.price" autocomplete="off" placeholder="请输入商品价格"></el-input>
        </el-form-item>
        <el-form-item label="收藏数:" label-width="120px">
          <el-input  v-model="form4.shoucang"  autocomplete="off" placeholder="此项初始值默认为0"></el-input>
        </el-form-item>
        <el-form-item label="商品图片:" label-width="120px">
          <el-input  v-model="form4.src" autocomplete="off" placeholder="请输入商品图片路径"></el-input>
        </el-form-item>
        <el-form-item label="原价格:" label-width="120px">
          <el-input  v-model="form4.oldprice" autocomplete="off" placeholder="请输入商品原价格"></el-input>
        </el-form-item>
        <el-form-item label="商品详情:" label-width="120px">
          <el-input  v-model="form4.dsc" autocomplete="off" placeholder="请输入商品详情"></el-input>
        </el-form-item>
        <el-form-item label="商品参数:" label-width="120px">
          <el-input  v-model="form4.arg" autocomplete="off" placeholder="请输入商品参数"></el-input>
        </el-form-item>
        <el-button
            v-loading.fullscreen.lock="fullscreenLoading4" @click="tijiao3" style="margin-left: 120px">提交</el-button>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible4 = false">确 定</el-button>
      </div>
    </el-dialog>
    <div class='xingchengorderinfo' style="display: flex;justify-content: center;align-items: center">
      <div v-if="this.changyongzhuangbeiData.length" style="width: 100%">
        <el-table
            :data="changyongzhuangbeiData"
            style="width: 100%;text-align: center;font-size: 18px;"
            height="574">
          <el-table-column
              fixed
              prop="title"
              label="商品标题"
              style="text-align: center;font-size: 18px;background-color: #0C739A"
              width="150"
          >
          </el-table-column>
          <el-table-column
              prop="price"
              label="商品价格"
              width="160">
          </el-table-column>
          <el-table-column
              prop="shoucang"
              label="收藏数"
              width="150">
          </el-table-column>
          <el-table-column
              prop="src"
              label="图片链接"
              width="100">
          </el-table-column>
          <el-table-column
              prop="oldprice"
              label="原价格"
              width="100">
          </el-table-column>
          <el-table-column
              prop="cell"
              label="销量"
              width="100">
          </el-table-column>
          <el-table-column
              prop="dsc"
              label="商品详情"
              width="100">
          </el-table-column>
          <el-table-column
              prop="arg"
              label="商品参数"
              width="100">
          </el-table-column>

          <el-table-column label="操作" width="150" fixed="right">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  @click="handleEdit1(scope.$index, scope.row)">编辑</el-button>
              <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete1(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-else  style="color: #B2B2B2"><center><h1>暂无数据...</h1></center></div>
    </div>
    <el-dialog title="商品信息修改" :visible.sync="dialogFormVisible1">
      <el-form :model="form1">
        <el-form-item label="商品标题:" label-width="120px">
          <el-input  v-model="form1.title" autocomplete="on" placeholder="请输入商品标题"></el-input>
        </el-form-item>
        <el-form-item label="商品价格:" label-width="120px">
          <el-input v-model="form1.price" autocomplete="on" placeholder="请输入商品原价格"></el-input>
        </el-form-item>
        <el-form-item label="收藏数:" label-width="120px">
          <el-input  v-model="form1.shoucang" autocomplete="off" placeholder="此项默认值为0"></el-input>
        </el-form-item>
        <el-form-item label="图片路径:" label-width="120px">
          <el-input  v-model="form1.src" autocomplete="on" placeholder="请输入商品图片路径"></el-input>
        </el-form-item>
        <el-form-item label="商品原价格:" label-width="120px">
          <el-input  v-model="form1.oldprice" autocomplete="on" placeholder="请输入商品原价格"></el-input>
        </el-form-item>
        <el-form-item label="商品销量:" label-width="120px">
          <el-input  v-model="form1.cell" autocomplete="on" placeholder="请输入商品销量"></el-input>
        </el-form-item>
        <el-form-item label="商品详情:" label-width="120px">
          <el-input  v-model="form1.dsc" autocomplete="on" placeholder="请输入商品详情"></el-input>
        </el-form-item>
        <el-form-item label="商品参数:" label-width="120px">
          <el-input  v-model="form1.arg" autocomplete="on" placeholder="请输入商品参数"></el-input>
        </el-form-item>
        <el-button
            v-loading.fullscreen.lock="fullscreenLoading1" @click="tijiao1" style="margin-left: 120px">提交</el-button>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
      </div>
    </el-dialog>


    <div style="display: flex">
      <h2 style="color: #0C739A;margin-top: 15px">能量饮料</h2>
      <h3 style="margin-top: 20px;margin-left: 50px"><el-link @click="add2" style="font-size: 16px" type="primary">(添加商品)</el-link></h3>
    </div>
    <el-dialog title="添加商品信息" :visible.sync="dialogFormVisible5">
      <el-form :model="form5">
        <el-form-item label="商品标题:" label-width="120px">
          <el-input  v-model="form5.title" autocomplete="off" placeholder="请输入商品标题"></el-input>
        </el-form-item>
        <el-form-item label="商品价格:" label-width="120px">
          <el-input v-model="form5.price" autocomplete="off" placeholder="请输入商品价格"></el-input>
        </el-form-item>
        <el-form-item label="收藏数:" label-width="120px">
          <el-input  v-model="form5.shoucang"  autocomplete="off" placeholder="此项初始值默认为0"></el-input>
        </el-form-item>
        <el-form-item label="商品图片:" label-width="120px">
          <el-input  v-model="form5.src" autocomplete="off" placeholder="请输入商品图片路径"></el-input>
        </el-form-item>
        <el-form-item label="原价格:" label-width="120px">
          <el-input  v-model="form5.oldprice" autocomplete="off" placeholder="请输入商品原价格"></el-input>
        </el-form-item>
        <el-form-item label="商品详情:" label-width="120px">
          <el-input  v-model="form5.dsc" autocomplete="off" placeholder="请输入商品详情"></el-input>
        </el-form-item>
        <el-form-item label="商品参数:" label-width="120px">
          <el-input  v-model="form5.arg" autocomplete="off" placeholder="请输入商品参数"></el-input>
        </el-form-item>
        <el-button
            v-loading.fullscreen.lock="fullscreenLoading5" @click="tijiao4" style="margin-left: 120px">提交</el-button>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible5 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible5 = false">确 定</el-button>
      </div>
    </el-dialog>
    <div class='xingchengorderinfo' style="display: flex;justify-content: center;align-items: center">
      <div v-if="this.nengliangyinliaoData.length" style="width: 100%">
        <el-table
            :data="nengliangyinliaoData"
            style="width: 100%;text-align: center;font-size: 18px;"
            height="574">
          <el-table-column
              fixed
              prop="title"
              label="商品标题"
              style="text-align: center;font-size: 18px;background-color: #0C739A"
              width="150"
          >
          </el-table-column>
          <el-table-column
              prop="price"
              label="商品价格"
              width="160">
          </el-table-column>
          <el-table-column
              prop="shoucang"
              label="收藏数"
              width="150">
          </el-table-column>
          <el-table-column
              prop="src"
              label="图片链接"
              width="100">
          </el-table-column>
          <el-table-column
              prop="oldprice"
              label="原价格"
              width="100">
          </el-table-column>
          <el-table-column
              prop="cell"
              label="销量"
              width="100">
          </el-table-column>
          <el-table-column
              prop="dsc"
              label="商品详情"
              width="100">
          </el-table-column>
          <el-table-column
              prop="arg"
              label="商品参数"
              width="100">
          </el-table-column>
          <el-table-column label="操作" width="150" fixed="right">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  @click="handleEdit2(scope.$index, scope.row)">编辑</el-button>
              <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete2(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-else  style="color: #B2B2B2"><center><h1>暂无数据...</h1></center></div>

    </div>
    <el-dialog title="行程信息修改" :visible.sync="dialogFormVisible2">
      <el-form :model="form2">
        <el-form-item label="商品标题:" label-width="120px">
          <el-input  v-model="form2.title" autocomplete="on" placeholder="请输入商品标题"></el-input>
        </el-form-item>
        <el-form-item label="商品价格:" label-width="120px">
          <el-input v-model="form2.price" autocomplete="on" placeholder="请输入商品原价格"></el-input>
        </el-form-item>
        <el-form-item label="收藏数:" label-width="120px">
          <el-input  v-model="form2.shoucang" autocomplete="off" placeholder="此项默认值为0"></el-input>
        </el-form-item>
        <el-form-item label="图片路径:" label-width="120px">
          <el-input  v-model="form2.src" autocomplete="on" placeholder="请输入商品图片路径"></el-input>
        </el-form-item>
        <el-form-item label="商品原价格:" label-width="120px">
          <el-input  v-model="form2.oldprice" autocomplete="on" placeholder="请输入商品原价格"></el-input>
        </el-form-item>
        <el-form-item label="商品销量:" label-width="120px">
          <el-input  v-model="form2.cell" autocomplete="on" placeholder="请输入商品销量"></el-input>
        </el-form-item>
        <el-form-item label="商品详情:" label-width="120px">
          <el-input  v-model="form2.dsc" autocomplete="on" placeholder="请输入商品详情"></el-input>
        </el-form-item>
        <el-form-item label="商品参数:" label-width="120px">
          <el-input  v-model="form2.arg" autocomplete="on" placeholder="请输入商品参数"></el-input>
        </el-form-item>
        <el-button
            v-loading.fullscreen.lock="fullscreenLoading2" @click="tijiao2" style="margin-left: 120px">提交</el-button>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import {Toast} from "vant";

  export default {
    name: 'goodsinfo',
    data() {
      return {
        changyongzhuangbeiData:[],
        nengliangyinliaoData:[],

        form1:{},
        form2:{},

        form4:{},
        form5:{},

        fullscreenLoading1:false,
        fullscreenLoading2:false,

        fullscreenLoading4:false,
        fullscreenLoading5:false,

        dialogFormVisible1:false,
        dialogFormVisible2:false,

        dialogFormVisible4:false,
        dialogFormVisible5:false,
      }
    },
    created() {
      this.$axioschangyongzhuangbei.get('/').then(res=>{
        this.changyongzhuangbeiData = res.data
      })

      this.$axiosnengliangyinliao.get('/').then(res=>{
        this.nengliangyinliaoData = res.data
      })


    },
    methods:{

      handleEdit1(index,obj){
        this.dialogFormVisible1 = true
        this.form1 = obj

      },

      handleEdit2(index,obj){
        this.dialogFormVisible2 = true
        this.form2 = obj

      },



      tijiao1(){
        console.log(this.form1);
        this.$axioschangyongzhuangbei.post('/edit',this.form1).then(res=>{
          console.log(res)
          this.fullscreenLoading1 = true;
          setTimeout(() => {
            this.fullscreenLoading1 = false;
          }, 400);
          setTimeout(()=>{
            this.dialogFormVisible1 = false
            this.$router.go(0)
            Toast.success('修改成功!')
          },400)
        })
      },

      tijiao2(){
        console.log(this.form2);
        this.$axiosnengliangyinliao.post('/edit',this.form2).then(res=>{
          console.log(res)
          this.fullscreenLoading2 = true;
          setTimeout(() => {
            this.fullscreenLoading2 = false;
          }, 400);
          setTimeout(()=>{
            this.dialogFormVisible2 = false
            this.$router.go(0)
            Toast.success('修改成功!')
          },400)
        })
      },

      tijiao3(){
        console.log(this.form4);
        this.$axioschangyongzhuangbei.post('/register',this.form4).then(res=>{
          console.log(res)
          this.fullscreenLoading4 = true;
          setTimeout(() => {
            this.fullscreenLoading4 = false;
          }, 400);
          setTimeout(()=>{
            this.dialogFormVisible4 = false
            this.$router.go(0)
            Toast.success('添加成功!')
          },400)
        })
      },


      tijiao4(){
        console.log(this.form5);
        this.$axiosnengliangyinliao.post('/register',this.form5).then(res=>{
          console.log(res)
          this.fullscreenLoading5 = true;
          setTimeout(() => {
            this.fullscreenLoading5 = false;
          }, 400);
          setTimeout(()=>{
            Toast.success('添加成功!')
            this.dialogFormVisible5 = false
            this.$router.go(0)
          },400)
        })
      },


      handleDelete1(index,obj){
        var deleteUser = {}
        deleteUser._id = obj._id
        this.$axioschangyongzhuangbei.post('/delete',deleteUser)
        this.fullscreenLoading1 = true;
        setTimeout(() => {
          this.fullscreenLoading1 = false;
        }, 300);
        setTimeout(() => {
          this.$router.go(0)
          Toast.success('删除成功!')
        }, 300);
      },

      handleDelete2(index,obj){
        var deleteUser = {}
        deleteUser._id = obj._id
        this.$axiosnengliangyinliao.post('/delete',deleteUser)
        this.fullscreenLoading2 = true;
        setTimeout(() => {
          this.fullscreenLoading2 = false;
        }, 300);
        setTimeout(() => {
          this.$router.go(0)
          Toast.success('删除成功!')
        }, 300);
      },



      add1(){
        this.dialogFormVisible4 = true
      },
      add2(){
        this.dialogFormVisible5 = true
      },
    }

  }
</script>

<style scoped>

</style>