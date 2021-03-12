<template>
  <div>
    <border_right :drawer-visible="drawerVisible">

    </border_right>
  </div>
</template>

<script>
  import border_right from '../../../main/border/right'

  export default {
    name: "main-right",
    components: {
      border_right
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
