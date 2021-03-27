<template>
  <div class='goodsorderinfo' style="display: flex;justify-content: center;align-items: center">
    <div v-if="this.tableData.length" style="width: 100%">
      <el-table
          :data="tableData"
          style="width: 100%;text-align: center;font-size: 18px;"
          height="574">
        <el-table-column
            fixed
            prop="iid"
            label="商品编号"
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
            prop="orderdate"
            label="下单时间"
            width="200">
        </el-table-column>
      </el-table>
    </div>
    <div v-else  style="color: #B2B2B2"><center><h1>暂无数据...</h1></center></div>
  </div>
</template>

<script>
  export default {
    name: 'goodsorderinfo',
    data() {
      return {
        tableData:[],
        fullscreenLoading: false
      }
    },
    created() {
      this.$axiosgoodsorderinfo.get('/').then((res)=>{
        console.log(res.data)
        this.tableData = res.data
      })
    },
    methods:{

    }
  }
</script>

<style scoped>

  .goodsorderinfo{
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