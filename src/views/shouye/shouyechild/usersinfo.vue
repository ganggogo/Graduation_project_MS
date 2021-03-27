<template>
  <div class='usersinfo' style="display: flex;justify-content: center;align-items: center">
    <div v-if="this.tableData.length" style="width: 100%">
      <el-table
          :data="tableData"
          style="width: 100%;text-align: center;font-size: 18px;"
          height="574">
        <el-table-column
            fixed
            prop="zhanghao"
            label="用户名"
            style="text-align: center;font-size: 18px;background-color: #0C739A"
            width="150"
        >
        </el-table-column>
        <el-table-column
            prop="password"
            label="密码"
            width="160">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="管理员信息修改" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="管理员用户名:" :label-width="formLabelWidth">
            <el-input disabled v-model="form.zhanghao" autocomplete="on" placeholder="请输入管理员用户名"></el-input>
          </el-form-item>
          <el-form-item label="管理员密码:" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="on" placeholder="请输入管理员密码"></el-input>
          </el-form-item>
          <el-button
              v-loading.fullscreen.lock="fullscreenLoading" @click="tijiao" style="margin-left: 120px">提交</el-button>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div v-else  style="color: #B2B2B2"><center><h1>暂无数据...</h1></center></div>
  </div>
</template>

<script>
  import {Toast} from "vant";

  export default {
    name: 'usersinfo',
    data() {
      return {
        tableData:'',
        fullscreenLoading: false,
        dialogFormVisible:false,
        form:{

        },
        formLabelWidth: '120px',
      }
    },
    created() {
      this.$axiosuserinfo.get('/').then(res=>{
        this.tableData = res.data
      })
    },
    methods:{

      handleEdit(index,obj){
        this.dialogFormVisible = true
        this.form = obj

      },

      tijiao(){
        console.log(this.form);
        this.$axiosuserinfo.post('/edit',this.form).then(res=>{
          console.log(res)
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
          }, 400);
          setTimeout(()=>{
            this.dialogFormVisible = false
            Toast.success('修改成功!')
          },400)
        })
      },

      handleDelete(index,obj){
        var deleteUser = {}
        deleteUser.zhanghao = obj.zhanghao
        this.$axiosuserinfo.post('/delete',deleteUser).then(res=>{
          console.log(res)
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
          }, 300);
          setTimeout(() => {
            this.$router.go(0)
            Toast.success('删除成功!')
          }, 300);
        })

      }
    }
  }
</script>

<style scoped>
  .usersinfo{
    width: 100%;
    height: 100%;
  }
  .el-table th>td{
    text-align: center;
  }
  tr{
    text-align: center;
  }
</style>