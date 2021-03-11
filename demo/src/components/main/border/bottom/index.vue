<template>
  <div>
    <el-drawer
      class="border_down_drawer"
      direction="btt"
      size="100%"
      :modal="false"
      :with-header="false"
      :visible.sync="drawerVisible"
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
    name: "border-bottom",
    props: {
      drawerVisible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      click() {
        console.log(this.name)
      }
    }
  }
</script>

<style scoped>
  /* 下边框样式 */
  .border_down_drawer {
    margin: auto;
    top: 77%;
    height: 23%;
    width: 60%;
    background: radial-gradient(
      80vw at top,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 1)
    );
  }
</style>
