import Vue from 'vue'
import Main from './main.vue'
let ConfirmConstructor = Vue.extend(Main)

const Confirm = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let instance = new ConfirmConstructor({
    data: options
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.show = true

  return instance
};

['success', 'warning', 'error'].forEach((type) => {
  Confirm[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Confirm(options)
  }
})

export default Confirm
