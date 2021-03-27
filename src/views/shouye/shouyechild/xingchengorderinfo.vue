<template>
  <div class='xingchengorderinfo' style="display: flex;justify-content: center;align-items: center">
    <div v-if="this.tableData.length" style="width: 100%">
      <el-table
          :data="tableData"
          style="width: 100%;text-align: center;font-size: 18px;"
          height="574">
        <el-table-column
            fixed
            prop="iid"
            label="行程编号"
            style="text-align: center;font-size: 18px;background-color: #0C739A"
            width="150"
        >
        </el-table-column>
        <el-table-column
            prop="img"
            label="图片路径"
            width="160">
        </el-table-column>
        <el-table-column
            fit=true
            prop="title"
            label="标题"
            width="150">
        </el-table-column>
        <el-table-column
            prop="price"
            label="价格"
            width="100">
        </el-table-column>
        <el-table-column
            prop="chuxingdate"
            label="出行时间"
            width="120">
        </el-table-column>
        <el-table-column
            prop="orderdate"
            label="报名时间"
            width="200">
        </el-table-column>
        <el-table-column
            width="150"
            label="待处理订单"
            fixed="right"
        >
          <template slot-scope="scope">
            <el-button
                v-loading.fullscreen.lock="fullscreenLoading"
                v-if="scope.row.status === 'false'"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">接受订单</el-button>

            <el-button
                v-else
                size="mini"
                >已处理</el-button>

          </template>

        </el-table-column>
      </el-table>
    </div>
   <div v-else  style="color: #B2B2B2"><center><h1>暂无数据...</h1></center></div>

  </div>
</template>

<script>
  export default {
    name: 'xingchengorderinfo',
    data() {
      return {
        tableData:[],


        fullscreenLoading: false
      }
    },
    created() {
      this.$axiosxingchengorderinfo.get('/').then((res)=>{
        this.tableData = res.data
      })

    },
    methods:{
      handleEdit(a,b){
        var editdata = {}
        editdata.iid = b.iid
        this.$axiosxingchengorderinfo.post('/editstatus',editdata)
        this.fullscreenLoading = true;
        this.$router.go(0)
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      }
    }
  }
</script>

<style scoped>

  .xingchengorderinfo{
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