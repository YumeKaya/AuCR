import store from '../../store'
import cloudRenderer from "superapi-51world"

export default {
  name: "super-api",
  methods: {
    /**
     * 查询SuperAPI info, 控制台输出 ( 3.2.0 及以上版本适用 )
     * @constructor
     */
    SuperAPIInfo() {
      store.getters.GetSDK.SuperAPI("superAPIinfo")
    },
    /**
     * 开启/关闭 SuperAPI 日志
     * @param mode true/false
     * @returns {Promise<unknown>}
     * @constructor
     */
    SetLogMode(mode) {
      return new Promise(((resolve, reject) => {
        try {
          store.getters.GetSDK.SuperAPI("SetLogMode", (mode ? true : false))
          resolve()
        } catch (e) {
          reject(e)
        }
      }))
    },
    /**
     * 启动云渲染
     * @param renderViewID 渲染3D场景窗口的Dom节点
     * @param playType 固定参数
     * @param renderUrl 云渲染地址
     * @param keyboard 是否开启WASD方向键事件
     * @constructor
     */
    StartRenderCloud(renderViewID, playType, renderUrl, keyboard) {
      return new Promise(((resolve, reject) => {
        try {
          const cloudRender = new cloudRenderer(renderViewID, playType)
          if (keyboard) {
            cloudRender.SuperAPI("StartRenderCloud", renderUrl, "keyboard")
          } else {
            cloudRender.SuperAPI("StartRenderCloud", renderUrl)
          }
          store.commit('SetSDK', cloudRender)
          resolve()
        } catch (e) {
          reject(e)
        }
      }))
    },
    /**
     * 关闭云渲染
     * @constructor
     */
    StopRenderCloud() {
      return new Promise(((resolve, reject) => {
        try {
          store.getters.GetSDK.SuperAPI("StopRenderCloud")
          store.commit('SetSDK', undefined)
          resolve()
        } catch (e) {
          reject(e)
        }
      }))
    },
    /**
     * 事件注册
     * @param callbackFunction 回调方法
     * @returns {Promise<unknown>}
     * @constructor
     */
    RegisterCloudResponse(callbackFunction) {
      return new Promise(((resolve, reject) => {
        try {
          store.getters.GetSDK.SuperAPI("RegisterCloudResponse", callbackFunction)
          resolve()
        } catch (e) {
          reject(e)
        }
      }))
    },
  }
}
