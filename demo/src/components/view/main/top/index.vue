<template>
  <div>
    <border_top :drawer-visible="drawerVisible">

    </border_top>
  </div>
</template>

<script>
  import border_top from '../../../main/border/top'

  export default {
    name: "main-top",
    components: {
      border_top
    },
    props: {
      drawerVisible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
