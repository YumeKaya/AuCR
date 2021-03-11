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
      <div class="border_left_body">
        <slot name="body"/>
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
    background: radial-gradient(
      80vh at right,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.8)
    );
  }

  .border_left_body {
    width: 100%;
    height: 100%;
  }
</style>
