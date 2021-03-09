import store from '../store'
import router from './routers'

const whiteList = ['/start'];// no redirect whitelist

router.beforeEach((to, from, next) => {
  if (store.getters.GetInit) {
    if (to.path === '/start') {
      next({path: '/main'})
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/start?redirect=' + to.path) // 否则全部重定向到登录页
    }
  }
});


