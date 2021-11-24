### 安装
```bash
$ npm install l-public-vue vant --save
$ yarn add l-public-vue vant
```

#### 安装此组件需要[vant](https://youzan.github.io/vant/#/zh-CN/quickstart)样式配合
```javascript
// main.js
import 'vant/lib/index.css';
```

### 按需引入(推荐)
```javascript
// main.js
import lPublic from 'l-public-vue/lib/l-public-vue.umd.min.js'
import 'l-public-vue/lib/l-public-vue.css'
import 'vant/lib/index.css';
Vue.use(lPublic,{
  compontnts:['lButton','lInput' // ...]
})
```

### 全局引入
```javascript
// main.js
import lPublic from 'l-public-vue/lib/l-public-vue.umd.min.js'
import 'l-public-vue/lib/l-public-vue.css'
import 'vant/lib/index.css';
Vue.use(lPublic)
```

>
> 组件都是以l-开始 `l-button` `l-input` 等等...
>

### 消息提示use:
 * 同步用法
 * @param {String} tips 提示
 * @param {String} message 内容
 * @param {String} type success (default) | warning | error
 * @param {Boolean} showCancelButton 是否展示取消按钮 default:false
 * @param {Boolean} showConfirmButton 是否展示确认按钮 default:false
 * @param {Boolean} closeOnClickOverlay 是否在点击遮罩层后关闭弹窗 default: false
 * @param {Number} duration 关闭时间 showCancelButton为false && showConfirmButton为false时 default:2000
```javascript
// type success
this.$msg.Confirm.success({
  message: "提交成功",
  onClose(action) {
    console.log(action, " action");
  },
});
// type warning
this.$msg.Confirm.warning({
  message: "确定同意该申请？",
  tips: "提示",
  showCancelButton: true,
  showConfirmButton: true,
  onClose(action) {
    console.log(action, " action");
  }
});
// async
try {
  const action = await this.$msg.vConfirmSync({
    type: "warning",
    message: "提交成功",
    showCancelButton: true,
    closeOnClickOverlay: false
  });
  console.log(action, " action");
} catch (error) {
  console.log(error, " error");
}
```