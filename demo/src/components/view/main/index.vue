<template>
  <div class="main_container">
    <aucr @aucrEvent="aucrEventHandler"/>
    <top :drawer-visible="borderFrom.visible"/>
    <left :drawer-visible="borderFrom.visible"/>
    <right :drawer-visible="borderFrom.visible"/>
    <bottom :drawer-visible="borderFrom.visible"/>
  </div>
</template>

<script>
  import aucr from '../../AuCR'
  import top from './top'
  import left from './left'
  import right from './right'
  import bottom from './bottom'

  export default {
    name: 'name',
    components: {
      aucr,
      top,
      left,
      right,
      bottom,
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

  .main_container {
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
