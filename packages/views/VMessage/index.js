/* 确认弹窗 */
import Confirm from './Confirm/main'

/**

  使用示例
  this.$vConfirm.success({
    message: "提交成功",
    onClose(action) {
      console.log(action, " action");
    }
  });

  this.$vConfirm.warning({
    message: "确定同意该申请？",
    tips: "提示",
    showCancelButton: true,
    showConfirmButton: true,
    onClose(action) {
      console.log(action, " action");
    }
  });

  try {
    const action = await this.$vConfirmSync({
      type: "warning",
      message: "提交成功",
      showCancelButton: true,
      closeOnClickOverlay: false
    });
    console.log(action, " action");
  } catch (error) {
    console.log(error, " error");
  }

*/

/**
 * 同步用法
 * @param {String} tips 提示
 * @param {String} message 内容
 * @param {String} type success (default) | warning
 * @param {Boolean} showCancelButton 是否展示取消按钮 default:false
 * @param {Boolean} showConfirmButton 是否展示确认按钮 default:false
 * @param {Boolean} closeOnClickOverlay 是否在点击遮罩层后关闭弹窗 default: false
 * @param {Number} duration 关闭时间 showCancelButton为false && showConfirmButton为false时 default:2000
 */
function vConfirmSync (options) {
  return new Promise((resolve, reject) => {
    Confirm({
      ...options,
      onClose (action) {
        if (action === 'confirm') resolve(action)
        else reject(action)
      }
    })
  })
}

export default {
  Confirm,
  vConfirmSync
}
