<template>
  <div class="main_cover">
    <div :id="initFrom.renderViewID"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        initFrom: {
          renderViewID: 'test_renderViewID',
          playType: 0,
          keyboard: true,
          width: '',
          height: '',
        },
      }
    },
    mounted() {
      this.initStyle()
      this.init()
    },
    beforeDestroy() {
      this.stop()
    },
    methods: {
      init() {
        this.$aucr_api.init(Object.assign(this.initFrom, this.$store.getters.GetInitInfo))
          .then(() => {
            this.registerEvent()
          })
          .catch(e => {
            this.$notify.error({
              title: '错误',
              message: e
            })
            this.$store.commit('SetInit', false)
            this.$router.push('/start')
          })
      },
      stop() {
        this.$aucr_api.stop()
          .then(res => {
            console.log(res)
            this.$store.commit('SetInit', false)
          })
          .catch(e => {
            this.$notify.error({
              title: '错误',
              message: e
            })
          })
      },
      registerEvent() {
        this.$aucr_api.registerEvent(this.responseHandler)
      },
      eventHandler(eventName, args) {
        console.log(eventName)
        console.log(args)
      },
      otherHandler(otherName, args) {
        console.log(otherName)
        console.log(args)
      },
      responseHandler(responseJson) {
        const response = JSON.parse(responseJson)
        switch (response.command) {
          case 'event':
            this.eventHandler(response.func_name, response.args)
            break
          case '':
          default:
            this.otherHandler(response.func_name, response.args)
        }
      },
      initStyle() {
        document.getElementsByTagName('body')[0].style.margin = '0px'
      },
    }
  }
</script>

<style scoped>
  html,
  body,
  .main_cover {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
