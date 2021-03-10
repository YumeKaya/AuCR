<template>
  <div>
    <el-button
      @click="drawer = (drawer? false:true)"
      type="primary"
      style="left: 16px;margin-top:20%"
    >点我打开</el-button>
    <div>{{date}}&nbsp;{{week}}</div>
    <div>{{time}}</div>
    <el-drawer
      class="top_drawer"
      direction="ttb"
      size="100%"
      :with-header="false"
      :close-on-press-escape="true"
      :wrapperClosable="false"
      :visible="true"
      :before-close="handleClose"
      :modal="false"
    >
      <div>
        <el-row style="top:8px" :gutter="160">
          <el-col :span="8" style="margin-left:20px;">
            <div style="text-align: left;vertical-align: middle;">
              <span class="text" style="font-size:24px">///&nbsp;</span>
              <span class="text" style="font-size:24px">数字社区综合管理中心&nbsp;</span>
            </div>
            <div style="text-align: left;margin-top:-5px">
              <span
                style="font-size:8px;color:rgba(248,248,255,0.5);font-style: oblique;"
              >Digital Community Integrated Management Center</span>
            </div>
          </el-col>
          <el-col :span="12">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="数据概述" name="first">数据概述</el-tab-pane>
              <el-tab-pane label="车场运营" name="second">车场运营</el-tab-pane>
              <el-tab-pane label="安全防控" name="third">安全防控</el-tab-pane>
              <el-tab-pane label="服务概况 " name="fourth">服务概况&nbsp;</el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="6">
          </el-col>
        </el-row>
      </div>
    </el-drawer>
    <el-drawer
      class="right_drawer"
      direction="rtl"
      size="100%"
      :modal="false"
      :with-header="false"
      :visible.sync="drawer"
      :before-close="handleClose"
    >
      <div>
        右边的内容
        <button v-on:click="click()">left</button>
      </div>
    </el-drawer>
    <el-drawer
      class="left_drawer"
      direction="ltr"
      size="100%"
      :with-header="false"
      :visible.sync="drawer"
      :before-close="handleClose"
      :modal="false"
    >
      <div>
        左边的内容
        <button v-on:click="click()">left</button>
      </div>
    </el-drawer>
    <el-drawer
      class="down_drawer"
      direction="btt"
      size="100%"
      :with-header="false"
      :visible.sync="drawer"
      :before-close="handleClose"
      :modal="false"
    >
      <div>
        下面的内容
        <button v-on:click="click()">left</button>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      drawer: false,
      time: '',
      date: '',
      week: ''
    }
  },
  mounted () {
    // 获取时间
    this.getDate()
  },
  methods: {
    /* 关闭弹出层 */
    handleClose (done) {
      done()
    },
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    click () {
      console.log(1)
    },
    getDate () {
      /* 日期处理 */
      let _this = this // 声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(() => {
        let myDate = new Date()
        let wk = myDate.getDay()
        let yy = String(myDate.getFullYear())
        let mm = myDate.getMonth() + 1
        let dd = String(
          myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
        )
        let hou = String(
          myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()
        )
        let min = String(
          myDate.getMinutes() < 10
            ? '0' + myDate.getMinutes()
            : myDate.getMinutes()
        )
        let sec = String(
          myDate.getSeconds() < 10
            ? '0' + myDate.getSeconds()
            : myDate.getSeconds()
        )
        let weeks = [
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六'
        ]
        // 获取当前年月日
        _this.date = yy + '年' + mm + '月' + dd + '日'
        // 获取当前为周几
        _this.week = weeks[wk]
        // 获取当前时分秒
        _this.time = hou + ':' + min + ':' + sec // 修改时分秒数据
      }, 1000)
    }
  }
}
</script>
<style>
  body {
    width: 100%;
    height: 100%;
    background-color: #14d87c;
    /* background-image: ""; */
  }

  /* 上边框样式 */
  .top_drawer {
    height: 6%;
    /* min-height: 70px; */
    vertical-align: center;
    background-color:rgba(0, 0, 14, 0.4);
  }

  /* 下边框样式 */
  .down_drawer {
    margin: auto;
    top: 77%;
    height: 23%;
    width: 60%;
    background-color:rgba(0, 0, 14, 0.4);
  }

  /* 左侧边框样式 */
  .left_drawer {
    width: 20%;
    top: 6%;
    background-color:rgba(0, 0, 14, 0.4);
  }

  /* 右侧边框样式 */
  .right_drawer {
    left: 80%;
    width: 20%;
    top: 6%;
    background-color:rgba(0, 0, 14, 0.4);
  }

  /* 上边框文字样式 */
  .text,
  .el-tabs__item {
    font-size: 18px;
    font-weight: bold;
    font-style: oblique;
    background-image: -webkit-gradient(
      linear,
      left 0,
      right 20,
      from(white),
      to(#1e90ff)
    );
    /*必需加前缀 -webkit- 才支持这个text值 */
    -webkit-background-clip: text;
    background-clip: text;
    /*text-fill-color会覆盖color所定义的字体颜色： */
    -webkit-text-fill-color: transparent;
  }

  /* 边框总样式 */
  .el-drawer {
    background: rgba(23, 25, 26, 0.3);
    box-shadow: none;
  }

  /* 标签页横条隐藏 */
  .el-tabs__nav-wrap::after {
    opacity: 0;
  }

</style>
