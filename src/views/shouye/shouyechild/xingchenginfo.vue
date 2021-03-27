<template>
  <div class='xingchenginfo'>
    <div style="display: flex">
      <h2 style="color: #0C739A;margin-top: 15px">一二三天活动</h2>
      <h3 style="margin-top: 20px;margin-left: 50px"><el-link @click="add1" style="font-size: 16px" type="primary">(添加行程)</el-link></h3>
    </div>
    <el-dialog title="添加行程信息" :visible.sync="dialogFormVisible4">
      <el-form :model="form4">
        <el-form-item label="行程标题:" label-width="120px">
          <el-input  v-model="form4.text" autocomplete="on" placeholder="请输入行程标题"></el-input>
        </el-form-item>
        <el-form-item label="图片路径:" label-width="120px">
          <el-input v-model="form4.src" autocomplete="on" placeholder="请输入图片路径"></el-input>
        </el-form-item>
        <el-form-item label="行程地址:" label-width="120px">
          <el-input  v-model="form4.localname" autocomplete="on" placeholder="请输入行程地址"></el-input>
        </el-form-item>
        <el-form-item label="行程价格:" label-width="120px">
          <el-input  v-model="form4.price" autocomplete="on" placeholder="请输入行程价格"></el-input>
        </el-form-item>
        <el-button
            v-loading.fullscreen.lock="fullscreenLoading4" @click="tijiao4" style="margin-left: 120px">提交</el-button>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible4 = false">确 定</el-button>
      </div>
    </el-dialog>
    <div class='xingchengorderinfo' style="display: flex;justify-content: center;align-items: center">
      <div v-if="this.yiliangtianData.length" style="width: 100%">
        <el-table
            :data="yiliangtianData"
            style="width: 100%;text-align: center;font-size: 18px;"
            height="574">
          <el-table-column
              fixed
              prop="text"
              label="行程标题"
              style="text-align: center;font-size: 18px;background-color: #0C739A"
              width="150"
          >
          </el-table-column>
          <el-table-column
              prop="src"
              label="图片路径"
              width="160">
          </el-table-column>
          <el-table-column
              prop="localname"
              label="地址"
              width="150">
          </el-table-column>
          <el-table-column
              prop="price"
              label="行程价格"
              width="100">
          </el-table-column>
          <el-table-column label="操作">
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
    <el-dialog title="行程信息修改" :visible.sync="dialogFormVisible1">
      <el-form :model="form1">
        <el-form-item label="行程标题:" label-width="120px">
          <el-input  v-model="form1.text" autocomplete="on" placeholder="请输入行程标题"></el-input>
        </el-form-item>
        <el-form-item label="图片路径:" label-width="120px">
          <el-input v-model="form1.src" autocomplete="on" placeholder="请输入图片路径"></el-input>
        </el-form-item>
        <el-form-item label="行程地址:" label-width="120px">
          <el-input  v-model="form1.localname" autocomplete="on" placeholder="请输入行程地址"></el-input>
        </el-form-item>
        <el-form-item label="行程价格:" label-width="120px">
          <el-input  v-model="form1.price" autocomplete="on" placeholder="请输入行程价格"></el-input>
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
      <h2 style="color: #0C739A;margin-top: 15px">经典长线活动</h2>
      <h3 style="margin-top: 20px;margin-left: 50px"><el-link @click="add2" style="font-size: 16px" type="primary">(添加行程)</el-link></h3>
    </div>
    <el-dialog title="添加行程信息" :visible.sync="dialogFormVisible5">
      <el-form :model="form5">
        <el-form-item label="行程标题:" label-width="120px">
          <el-input  v-model="form5.text" autocomplete="on" placeholder="请输入行程标题"></el-input>
        </el-form-item>
        <el-form-item label="图片路径:" label-width="120px">
          <el-input v-model="form5.src" autocomplete="on" placeholder="请输入图片路径"></el-input>
        </el-form-item>
        <el-form-item label="行程地址:" label-width="120px">
          <el-input  v-model="form5.localname" autocomplete="on" placeholder="请输入行程地址"></el-input>
        </el-form-item>
        <el-form-item label="行程价格:" label-width="120px">
          <el-input  v-model="form5.price" autocomplete="on" placeholder="请输入行程价格"></el-input>
        </el-form-item>
        <el-button
            v-loading.fullscreen.lock="fullscreenLoading5" @click="tijiao5" style="margin-left: 120px">提交</el-button>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible4 = false">确 定</el-button>
      </div>
    </el-dialog>
      <div class='xingchengorderinfo' style="display: flex;justify-content: center;align-items: center">
        <div v-if="this.jingdianchangxianData.length" style="width: 100%">
          <el-table
              :data="jingdianchangxianData"
              style="width: 100%;text-align: center;font-size: 18px;"
              height="574">
            <el-table-column
                fixed
                prop="text"
                label="行程标题"
                style="text-align: center;font-size: 18px;background-color: #0C739A"
                width="150"
            >
            </el-table-column>
            <el-table-column
                prop="src"
                label="图片路径"
                width="160">
            </el-table-column>
            <el-table-column
                prop="localname"
                label="地址"
                width="150">
            </el-table-column>
            <el-table-column
                prop="price"
                label="行程价格"
                width="100">
            </el-table-column>
            <el-table-column label="操作">
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
        <el-form-item label="行程标题:" label-width="120px">
          <el-input  v-model="form2.text" autocomplete="on" placeholder="请输入行程标题"></el-input>
        </el-form-item>
        <el-form-item label="图片路径:" label-width="120px">
          <el-input v-model="form2.src" autocomplete="on" placeholder="请输入图片路径"></el-input>
        </el-form-item>
        <el-form-item label="行程地址:" label-width="120px">
          <el-input  v-model="form2.localname" autocomplete="on" placeholder="请输入行程地址"></el-input>
        </el-form-item>
        <el-form-item label="行程价格:" label-width="120px">
          <el-input  v-model="form2.price" autocomplete="on" placeholder="请输入行程价格"></el-input>
        </el-form-item>
        <el-button
            v-loading.fullscreen.lock="fullscreenLoading2" @click="tijiao2" style="margin-left: 120px">提交</el-button>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
      </div>
    </el-dialog>





    <div style="display: flex">
      <h2 style="color: #0C739A;margin-top: 15px">赏春活动</h2>
      <h3 style="margin-top: 20px;margin-left: 50px"><el-link @click="add3" style="font-size: 16px" type="primary">(添加行程)</el-link></h3>
    </div>
    <el-dialog title="添加行程信息" :visible.sync="dialogFormVisible6">
      <el-form :model="form6">
        <el-form-item label="行程标题:" label-width="120px">
          <el-input  v-model="form6.text" autocomplete="on" placeholder="请输入行程标题"></el-input>
        </el-form-item>
        <el-form-item label="图片路径:" label-width="120px">
          <el-input v-model="form6.src" autocomplete="on" placeholder="请输入图片路径"></el-input>
        </el-form-item>
        <el-form-item label="行程地址:" label-width="120px">
          <el-input  v-model="form6.localname" autocomplete="on" placeholder="请输入行程地址"></el-input>
        </el-form-item>
        <el-form-item label="行程价格:" label-width="120px">
          <el-input  v-model="form6.price" autocomplete="on" placeholder="请输入行程价格"></el-input>
        </el-form-item>
        <el-button
            v-loading.fullscreen.lock="fullscreenLoading6" @click="tijiao6" style="margin-left: 120px">提交</el-button>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible4 = false">确 定</el-button>
      </div>
    </el-dialog>
        <div class='xingchengorderinfo' style="display: flex;justify-content: center;align-items: center">
          <div v-if="this.shangchunhuodongData.length" style="width: 100%">
            <el-table
                :data="shangchunhuodongData"
                style="width: 100%;text-align: center;font-size: 18px;"
                height="574">
              <el-table-column
                  fixed
                  prop="text"
                  label="行程标题"
                  style="text-align: center;font-size: 18px;background-color: #0C739A"
                  width="150"
              >
              </el-table-column>
              <el-table-column
                  prop="src"
                  label="图片路径"
                  width="160">
              </el-table-column>
              <el-table-column
                  prop="localname"
                  label="地址"
                  width="150">
              </el-table-column>
              <el-table-column
                  prop="price"
                  label="行程价格"
                  width="100">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                      size="mini"
                      @click="handleEdit3(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete3(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div v-else  style="color: #B2B2B2"><center><h1>暂无数据...</h1></center></div>
          <el-dialog title="行程信息修改" :visible.sync="dialogFormVisible3">
            <el-form :model="form3">
              <el-form-item label="行程标题:" label-width="120px">
                <el-input  v-model="form3.text" autocomplete="on" placeholder="请输入行程标题"></el-input>
              </el-form-item>
              <el-form-item label="图片路径:" label-width="120px">
                <el-input v-model="form3.src" autocomplete="on" placeholder="请输入图片路径"></el-input>
              </el-form-item>
              <el-form-item label="行程地址:" label-width="120px">
                <el-input  v-model="form3.localname" autocomplete="on" placeholder="请输入行程地址"></el-input>
              </el-form-item>
              <el-form-item label="行程价格:" label-width="120px">
                <el-input  v-model="form3.price" autocomplete="on" placeholder="请输入行程价格"></el-input>
              </el-form-item>
              <el-button
                  v-loading.fullscreen.lock="fullscreenLoading3" @click="tijiao3" style="margin-left: 120px">提交</el-button>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible3 = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
            </div>
          </el-dialog>





        </div>
  </div>
</template>

<script>
  import {Toast} from "vant";

  export default {
    name: 'xingchenginfo',
    data() {
      return {
        yiliangtianData:[],
        jingdianchangxianData:[],
        shangchunhuodongData:[],

        form1:{},
        form2:{},
        form3:{},

        form4:{},
        form5:{},
        form6:{},

        fullscreenLoading1:false,
        fullscreenLoading2:false,
        fullscreenLoading3:false,

        fullscreenLoading4:false,
        fullscreenLoading5:false,
        fullscreenLoading6:false,

        dialogFormVisible1:false,
        dialogFormVisible2:false,
        dialogFormVisible3:false,

        dialogFormVisible4:false,
        dialogFormVisible5:false,
        dialogFormVisible6:false,
      }
    },
    created() {
      this.$axiosyiliangsan.get('/').then(res=>{
        this.yiliangtianData = res.data
      })

      this.$axiosjingdianchangxian.get('/').then(res=>{
        this.jingdianchangxianData = res.data
      })

      this.$axiosshangchunhuodong.get('/').then(res=>{
        this.shangchunhuodongData = res.data
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

      handleEdit3(index,obj){
        this.dialogFormVisible3 = true
        this.form3 = obj

      },


      tijiao1(){
        console.log(this.form1);
        this.$axiosyiliangsan.post('/edit',this.form1).then(res=>{
          console.log(res)
          this.fullscreenLoading1 = true;
          setTimeout(() => {
            this.fullscreenLoading1 = false;
          }, 400);
          setTimeout(()=>{
            this.dialogFormVisible1 = false
            Toast.success('修改成功!')
          },400)
        })
      },

      tijiao2(){
        console.log(this.form2);
        this.$axiosjingdianchangxian.post('/edit',this.form2).then(res=>{
          console.log(res)
          this.fullscreenLoading2 = true;
          setTimeout(() => {
            this.fullscreenLoading2 = false;
          }, 400);
          setTimeout(()=>{
            this.dialogFormVisible2 = false
            Toast.success('修改成功!')
          },400)
        })
      },

      tijiao3(){
        console.log(this.form3);
        this.$axiosshangchunhuodong.post('/edit',this.form3).then(res=>{
          console.log(res)
          this.fullscreenLoading3 = true;
          setTimeout(() => {
            this.fullscreenLoading3 = false;
          }, 400);
          setTimeout(()=>{
            this.dialogFormVisible3 = false
            Toast.success('修改成功!')
          },400)
        })
      },


      tijiao4(){
        console.log(this.form4);
        this.$axiosyiliangsan.post('/register',this.form4).then(res=>{
          console.log(res)
          this.fullscreenLoading4 = true;
          setTimeout(() => {
            this.fullscreenLoading4 = false;
          }, 400);
          setTimeout(()=>{
            Toast.success('添加成功!')
            this.dialogFormVisible4 = false
            this.$router.go(0)
          },400)
        })
      },

      tijiao5(){
        console.log(this.form5);
        this.$axiosjingdianchangxian.post('/register',this.form5).then(res=>{
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

      tijiao6(){
        console.log(this.form6);
        this.$axiosshangchunhuodong.post('/register',this.form6).then(res=>{
          console.log(res)
          this.fullscreenLoading6 = true;
          setTimeout(() => {
            this.fullscreenLoading6 = false;
          }, 400);
          setTimeout(()=>{
            Toast.success('添加成功!')
            this.dialogFormVisible6 = false
            this.$router.go(0)
          },400)
        })
      },

      handleDelete1(index,obj){
        var deleteUser = {}
        deleteUser._id = obj._id
        this.$axiosyiliangsan.post('/delete',deleteUser)
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
        this.$axiosjingdianchangxian.post('/delete',deleteUser)
        this.fullscreenLoading2 = true;
        setTimeout(() => {
          this.fullscreenLoading2 = false;
        }, 300);
        setTimeout(() => {
          this.$router.go(0)
          Toast.success('删除成功!')
        }, 300);
      },

      handleDelete3(index,obj){
        var deleteUser = {}
        deleteUser._id = obj._id
        this.$axiosshangchunhuodong.post('/delete',deleteUser)
        this.fullscreenLoading3 = true;
        setTimeout(() => {
          this.fullscreenLoading3 = false;
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
      add3(){
        this.dialogFormVisible6 = true
      }
    }

  }
</script>

<style scoped>

</style>