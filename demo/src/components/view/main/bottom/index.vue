<template>
  <div>
    <border_bottom :drawer-visible="drawerVisible">

    </border_bottom>
  </div>
</template>

<script>
  import border_bottom from '../../../main/border/bottom'

  export default {
    name: "main-bottom",
    components: {
      border_bottom
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
