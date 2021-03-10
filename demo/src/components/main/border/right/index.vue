<template>
  <div>
    <el-drawer
      class="border_right_drawer"
      direction="rtl"
      size="100%"
      :modal="false"
      :with-header="false"
      :visible.sync="drawerVisible"
    >
      <div>
        <span class="span_border_right_test">右边的内容</span>
        <button v-on:click="click()">left</button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
  export default {
    name: "border-right",
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
  /* 右侧边框样式 */
  .border_right_drawer {
    left: 80%;
    width: 20%;
    top: 8%;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.8),
      rgba(255, 255, 255, 0)
    );
  }
</style>
