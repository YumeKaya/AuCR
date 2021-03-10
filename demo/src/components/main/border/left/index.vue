<template>
  <div>
    <el-drawer
      class="border_left_drawer"
      direction="ltr"
      size="100%"
      :modal="false"
      :with-header="false"
      :visible.sync="drawerVisible"
    >
      <div>
        <span class="span_border_left_test">左边的内容</span>
        <button v-on:click="click()">left</button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
  export default {
    name: "border-left",
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
  /* 左侧边框样式 */
  .border_left_drawer {
    width: 20%;
    top: 8%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.8),
      rgba(255, 255, 255, 0)
    );
  }
</style>
