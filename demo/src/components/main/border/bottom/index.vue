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
      <div class="border_down_body">
        <slot name="body"/>
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
    width: 50%;
    background: radial-gradient(
      100vw at top,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 1)
    );
  }

  .border_down_body {
    width: 100%;
    height: 100%;
  }
</style>
