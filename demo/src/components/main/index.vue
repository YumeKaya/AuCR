<template>
  <div class="main_cover">
    <aucr @aucrEvent="aucrEventHandler"/>
    <border_top :drawer-visible="borderFrom.visible"/>
    <border_left :drawer-visible="borderFrom.visible"/>
    <border_right :drawer-visible="borderFrom.visible"/>
    <border_bottom :drawer-visible="borderFrom.visible"/>
  </div>
</template>

<script>
  import aucr from './AuCR'
  import border_top from './border/top'
  import border_left from './border/left'
  import border_right from './border/right'
  import border_bottom from './border/bottom'

  export default {
    components: {
      aucr,
      border_top,
      border_left,
      border_right,
      border_bottom,
    },
    data() {
      return {
        borderFrom: {
          visible: true
        }
      }
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      aucrEventHandler(event) {
        console.log(event.name)
        console.log(event.data)
        switch (event.name) {
          case 'OnSuperAPIInputActionStart':
            this.borderFrom.visible = false
            break
          case 'OnSuperAPIInputActionEnd':
            this.borderFrom.visible = true
            break
          case '':
          default:
            this.borderFrom.visible = true
            break
        }
      }
    }
  }
</script>

<style scoped>
  div,
  body,
  span {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }

  /deep/ .span_border_title_small {
    font-size: 12px;
    color: rgba(155, 166, 177, 1);
  }

  .main_cover {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.6);
  }

  /* 边框总样式 */
  /deep/ .el-drawer {
    background: rgba(23, 25, 26, 0.3);
    box-shadow: none;
  }
</style>
