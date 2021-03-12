<template>
  <div>
    <el-drawer
      class="border_top_drawer"
      direction="ttb"
      size="100%"
      :modal="false"
      :with-header="false"
      :visible.sync="drawerVisible"
    >
      <div class="border_top_row">
        <div class="border_top_model" style="justify-content:start;">
          <div>
            <el-image style="height: 40px" :src="img_src"></el-image>
          </div>
        </div>
        <div class="border_top_model" style="justify-content:center;">
          <div>
            <el-tabs v-model="tags.activeName" @tab-click="tagsClickHandler">
              <el-tab-pane label="数据概述" name="data"/>
              <el-tab-pane label="车场运营" name="park"/>
              <el-tab-pane label="安全防控" name="security"/>
            </el-tabs>
          </div>
        </div>
        <div class="border_top_model" style="justify-content:flex-end;color: white;">
          <div v-if="todayData.date" style="display: flex;">
            <div style="margin: auto; text-align:right; font-size: 15px;">
              <div>
                {{ todayData.date }}&nbsp;{{ todayData.week || '-' }}
              </div>
              <div v-if="todayData.city">
                {{ todayData.city }}&nbsp;{{ todayData.weather }}&nbsp;{{ todayData.temperature }}
              </div>
              <div v-else>
                暂无天气信息
              </div>
            </div>
            <div style="font-size:40px; display: inline-flex; justify-content: center;">
              <div style="margin: auto auto auto 5px;">{{ todayData.time }}</div>
            </div>
          </div>
          <div v-else>
            日期数据加载中……
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
  import {getByDateTimeWeek} from '../../../../util/date'
  import {getWeatherByCity} from "../../../../util/weather";

  export default {
    name: "border-top",
    props: {
      drawerVisible: {
        type: Boolean,
        default: true,
      }
    },
    data() {
      return {
        img_src: require('../../../../assets/img/logo.png'),
        tags: {
          activeName: 'data'
        },
        todayData: {
          date: undefined,
          time: undefined,
          week: undefined,
          city: undefined,
          weather: undefined,
          temperature: undefined,
        },
        dateTimer: undefined,
      }
    },
    mounted() {
      this.initTodayData()
    },
    beforeDestroy() {
      this.dateTimerStop()
    },
    methods: {
      tagsClickHandler(tab, event) {
        console.log(tab)
        console.log(event)
      },
      initTodayData() {
        this.dateTimerStart()
        this.setWeather()
      },
      dateTimerStart() {
        this.dateTimer = setInterval(this.setDateTimeWeek, 1000)
      },
      dateTimerStop() {
        clearInterval(this.dateTimer)
      },
      setDateTimeWeek() {
        const dateTimeWeek = getByDateTimeWeek()
        this.todayData.date = dateTimeWeek.date
        this.todayData.time = dateTimeWeek.time
        this.todayData.week = dateTimeWeek.week
      },
      setWeather() {
        getWeatherByCity(this.$store.getters.GetInitInfo.city)
          .then(weatherData => {
            this.todayData.city = weatherData.city
            this.todayData.weather = weatherData.weather
            this.todayData.temperature = weatherData.temperature
          })
          .catch(() => {
            this.todayData.city = undefined
            this.todayData.weather = undefined
            this.todayData.temperature = undefined
          })
      }
    }
  }
</script>

<style scoped>
  /* 上边框样式 */
  .border_top_drawer {
    height: 8%;
    vertical-align: center;
    background: radial-gradient(
      80vw at bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 1)
    );
  }

  /* 上边框flex全局布局 */
  .border_top_row {
    padding: 0 15px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  /* 上边框flex各元素通用布局 */
  .border_top_model {
    margin: auto;
    width: 33.3%;
    display: inline-flex;
  }

  /* 标签页横条隐藏 */
  /deep/ .el-tabs__nav-wrap::after {
    opacity: 0;
  }

  /* 上边框文字样式 */
  .text,
  /deep/ .el-tabs__item {
    min-width: 7.25rem;
    font-size: 18px;
    padding: 0 38px;
    font-weight: bold;
    font-style: oblique;
    background: linear-gradient(to right, white, #1e90ff);
    -webkit-background-clip: text;
    color: transparent;
  }

  /*标签位置样式*/
  /deep/ .el-tabs__header {
    margin: 0 0 5px 0;
  }

  /*选定标签样式*/
  /deep/ .el-tabs__item.is-active {
    color: white;
  }

  /*标签下划线样式*/
  /deep/ .el-tabs__active-bar {
    height: 4px;
  }
</style>
