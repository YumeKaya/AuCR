<template>
  <div :id="initFrom.renderViewID"></div>
</template>

<script>
  export default {
    name: 'AuCR',
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
      // this.init()
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
      eventHandler(name, data) {
        console.log(name)
        console.log(data)
        this.$emit('aucrEvent', {
          name,
          data
        })
      },
      otherHandler(name, data) {
        console.log(name)
        console.log(data)
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
    }
  }
</script>
