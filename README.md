### 安装
```bash
$ npm install llo vant --save
$ yarn add llo vant
```

#### 安装此组件需要[vant](https://youzan.github.io/vant/#/zh-CN/quickstart)样式配合
```javascript
// main.js
import 'vant/lib/index.css';
```

### 按需引入(推荐)
```javascript
// main.js
import lPublic from 'llo'
import 'llo/lib/llo.css'
import 'vant/lib/index.css';
Vue.use(lPublic,{
  compontnts:['lButton','lInput' // ...]
})
```

### 全局引入
```javascript
// main.js
import lPublic from 'llo'
import 'llo/lib/llo.css'
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

### 节流

>
> `throttle` 内有回调函数 2秒只能触发第一次 `props` 完事返回 `end`
>

```vue
<template>
  <button @click="submit">提交</button>
</template>

<script>
import _ from 'llo/utils'
export default {
  methods: {
    submit: _.throttle(props => {
      console.log(props)
    },2000)
  }
}
</script>
```

### 防抖

>
> `debounce` 内有回调函数 1秒只能触发最后一次 完事后`props`返回 `end` 
>

```vue
<template>
  <button @click="submit">提交</button>
</template>

<script>
import _ from 'llo/utils'
export default {
  methods: {
    submit: _.debounce(props => {
      console.log(props)
    },1000)
  }
}
</script>
```

### 防抖(优化)
>
> `debounce` 内有回调函数 1秒只能触发最后一次 (如用户一直触发此函数无论是否到2s props都会返回`auto`) 完事后`props`返回`end` 
>

```vue
<template>
  <div>
    <button @click="submit" v-for="item in 300" :key="item">提交</button>
  </div>
</template>

<script>
import _ from 'llo/utils'
export default {
  mounted () {
    // 监听滚动条滚动
    window.addEventListener("scroll", _.betterDebounce(props => {
      // props === 'auto' 为1秒强制触发 props === 'end' 结束了(用户没有在操作)
      console.log(props);
    }, 1000));
  },
  destroyed () {
    // 删除滚动条监听
    window.removeEventListener("scroll", _.betterDebounce);
  }
}
</script>
```
