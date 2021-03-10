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
        <div class="border_top_model" style="justify-content:start;margin:auto">
          <div>
            <span class="text" style="font-size:24px">///&nbsp;</span>
            <span class="text" style="font-size:24px">数字社区综合管理中心&nbsp;</span>
            <div class="border_top_title_english">Digital Community Integrated Management Center</div>
          </div>
        </div>
        <div class="border_top_model" style="justify-content:center;">
          <div>
            <el-tabs v-model="tags.activeName" @tab-click="tagsClickHandler">
              <el-tab-pane label="数据概述" name="data" />
              <el-tab-pane label="车场运营" name="park" />
              <el-tab-pane label="安全防控" name="security" />
              <el-tab-pane label="服务概况" name="service" />
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
              <div style="margin: auto;">{{ todayData.time }}</div>
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
  import { getByDateTimeWeek } from '../../../../util/date'
  import { getWeatherByCity } from "../../../../util/weather";

  export default {
    name: "border-top",
    props: {
      drawerVisible: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
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
      click() {
        console.log(this.name)
      },
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
        const dateTimeWeek =  getByDateTimeWeek()
        this.todayData.date = dateTimeWeek.date
        this.todayData.time = dateTimeWeek.time
        this.todayData.week = dateTimeWeek.week
      },
      setWeather() {
        getWeatherByCity(this.$store.getters.GetInitInfo.city)
          .then(weatherData => {
            console.log(weatherData)
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
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4)
    );
  }

  /*上边框英文文字样式 */
  .border_top_title_english {
    text-align: left;
    margin-top: -2px;
    font-size: 8px;
    color: rgba(248, 248, 255, 0.5);
    font-style: oblique;
  }

  /* 上边框flex全局布局 */
  .border_top_row {
    padding: 0 15px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* 上边框flex各元素通用布局 */
  .border_top_model {
    width: 33.3%;
    display: inline-flex;
    margin: auto;
  }

  /* 标签页横条隐藏 */
  /deep/ .el-tabs__nav-wrap::after {
    opacity: 0;
  }

  /* 上边框文字样式 */
  .text,
  /deep/ .el-tabs__item {
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
    /*text-fill-color会覆盖color所定义的字体颜色： */
    -webkit-text-fill-color: transparent;
  }
</style>
