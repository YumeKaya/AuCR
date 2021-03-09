import sdk_init from '../../51world/index.vue'
import SuperApi from '../../51world/super-api'

export default {
  methods: {
    init(initObject) {
      return new Promise(((resolve, reject) => {
        try {
          if (!initObject) {
            reject("initObject is null")
            return
          }
          if (!initObject.cloudUrl) {
            reject("cloudUrl is null")
            return
          }
          if (!initObject.projectId) {
            reject("projectID is null")
            return
          }
          if (!initObject.username) {
            reject("username is null")
            return
          }
          if (!initObject.password) {
            reject("password is null")
            return
          }
          if (!initObject.renderViewID) {
            reject("renderViewID is null")
            return
          }
          if (!initObject.playType || initObject.playType < 0) {
            initObject.playType = 0
          }
          sdk_init(initObject).then(() => {
            resolve()
          }).catch(e => {
            reject(e)
          })
        } catch (e) {
          reject(e)
        }
      }))
    },
    stop() {
      return new Promise(((resolve, reject) => {
        SuperApi.methods.StopRenderCloud().then(() => {
          resolve()
        }).catch(e => {
          reject(e)
        })
      }))
    },
    registerEvent(callbackFunction) {
      return new Promise(((resolve, reject) => {
        SuperApi.methods.RegisterCloudResponse(callbackFunction).then(() => {
          resolve()
        }).catch(e => {
          reject(e)
        })
      }))
    }
  }
}
