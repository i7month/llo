import COMPONENTS from './views' // components 组件
import VMessage from './views/VMessage' // toast 
import utils from '../utils' // 工具类（节流 防抖）

const install = function (Vue, options) {
  // 按需引入
  if(options && options.components){
    const { components } = options
    console.log(components);
    console.log(COMPONENTS);
    components.forEach(component => {
      COMPONENTS.forEach(COMPONENT => {
        // console.log(component);
        // console.log(COMPONENT.name);
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
  Vue.prototype.$utils = utils
}

export default install