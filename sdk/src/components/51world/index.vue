<script>
  import SuperApi from './super-api'

  /**
   * 51world SDK 初始化
   * @param initObject {
   *   cloudUrl: 云渲染服务地址（必填）
   *   projectId: 项目ID，在云渲染客户端上获得（必填）
   *   username: 用户名，在云渲染客户端上获得（必填）
   *   password: 云渲染服务地址（必填）
   *   renderViewID: 渲染3D场景窗口的Dom节点，Dom控件的id（必填）
   *   playType: 固定参数（选填）
   *   keyboard: 是否开启WASD方向键事件（选填）
   *   width: 初始化云渲染固定分辨率输出宽度（选填）
   *   height: 初始化云渲染固定分辨率输出高度（选填）
   * }
   * @returns {Promise<unknown>}
   */
  const init = function(initObject) {
    return new Promise(((resolve, reject) => {
      init_(initObject).then(renderUrl => {
        SuperApi.methods.StartRenderCloud(initObject.renderViewID, initObject.playType, renderUrl, initObject.keyboard)
          .then(() => {
            resolve()
          })
          .catch(e => {
            reject(e)
          })
      }).catch(e => {
        reject(e)
      })
    }))
  }

  /**
   * 获取云渲染地址（renderUrl）
   * @param initObject
   * @returns {Promise<any>}
   * @private
   */
  const init_ = function (initObject) {
    return new Promise(((resolve, reject) => {
      fetch(initObject.cloudUrl + '/autoLogin', {
        method: "POST",
        body: 'username=' + initObject.username + '&pwd=' + initObject.password,
        headers: { "Content-type": "application/x-www-form-urlencoded" }
      }).then(res => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      }).then(json => {
        if (json.error) {
          reject(json.error)
        } else if (json.token) {
          fetch(initObject.cloudUrl + '/Renderers/Any/' + initObject.projectId, {
            method: "POST",
            headers: {
              "Content-type": "application/x-www-form-urlencoded",
              "Authorization": 'Bearer ' + json.token
            },
            //初始化云渲染固定分辨率输出, 可选, 默认以云渲染客户端设置的分辨率输出
            body: 'width=' +
              (initObject.width || document.getElementById(initObject.renderViewID).offsetWidth || window.innerWidth) +
              '&height=' +
              (initObject.height || document.getElementById(initObject.renderViewID).offsetHeight || window.innerHeight)
          }).then(res => {
            if (!res.ok) {
              throw Error(res.statusText)
            }
            return res.json()
          }).then(json => {
            if (json.error) {
              reject(json.error)
            } else if (json.url) {
              resolve(json.url)
            }
          }).catch(e => {
            reject(e)
          })
        }
      }).catch(e => {
        reject(e)
      })
    }))
  }
  export default init
</script>
