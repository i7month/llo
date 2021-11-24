import COMPONENTS from './views'
import VMessage from './views/VMessage'

const install = function (Vue, options) {
  // 按需引入
  if(options && options.components){
    const { components } = options
    components.forEach(component => {
      COMPONENTS.forEach(COMPONENT => {
        if(component === COMPONENT.name){
          Vue.component(COMPONENT.name,COMPONENT)
        }
      })
    })
  }else{ 
    // 全局引入
    COMPONENTS.forEach(COMPONENT =>{
      Vue.component(COMPONENT.name,COMPONENT)
    })
  }
  // 原型方法
  Vue.prototype.$msg = VMessage
}

export default install