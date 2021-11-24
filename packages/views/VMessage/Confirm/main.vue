<template>
  <div class="private-vant-confirm-container">
    <private-dialog v-model="show"
                    :before-close="beforeClose"
                    :show-cancel-button="showCancelButton"
                    :show-confirm-button="showConfirmButton"
                    :close-on-click-overlay="closeOnClickOverlay">
      <section>
        <img :src="getImgUrl(iconClass)"
             :icon-class="iconClass"
             v-if="iconClass"
             class-name="icon"
             style="width:50px;height:50px;">
        <span v-if="
             tips"
              class="tips">{{tips}}</span>
        <span v-if="message"
              class="message">{{message}}</span>
      </section>
    </private-dialog>
  </div>
</template>

<script>
/* 确认弹窗 */
import { Dialog } from 'vant'

export default {
  components: {
    'private-dialog': Dialog.Component
  },
  data () {
    return {
      show: false,
      type: 'success',
      tips: '',
      icon: '',
      message: '',
      showCancelButton: false /* 是否展示取消按钮 */,
      showConfirmButton: false /* 是否展示确认按钮 */,
      closeOnClickOverlay: false /* 是否在点击遮罩层后关闭弹窗 */,
      onClose: null,
      duration: 2000
    }
  },
  watch: {
    show (val) {
      const { showCancelButton, showConfirmButton, duration } = this.$data
      if (val && !showCancelButton && !showConfirmButton) {
        setTimeout(() => {
          this.show = false
          this.handleCallback('close')
        }, duration)
      }
    }
  },
  computed: {
    iconClass () {
      return this.icon || this.type
    },
  },
  methods: {
    getImgUrl(type){
      console.log(type);
      if(type === 'success')return 'https://s3.bmp.ovh/imgs/2021/11/6abd17e957da5bdc.png'
      if(type === 'warning')return 'https://s3.bmp.ovh/imgs/2021/11/c93eb16d80d89633.png'
      if(type === 'errorT')return 'https://s3.bmp.ovh/imgs/2021/11/bce92ace5d9b3a9c.png'
      if(type === 'error')return 'https://s3.bmp.ovh/imgs/2021/11/42acd0fd343830b6.png'
    },
    beforeClose (action, done) {
      this.show = false
      done()
      this.handleCallback(action)
    },
    handleCallback (action) {
      if (typeof this.onClose === 'function') {
        this.onClose(action)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.private-vant-confirm-container {
  section {
    border: 1px solid #ededed;
    max-width: 80vh;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    span {
      margin-top: 10px;
    }
    .tips {
      color: #2c2d2f;
      font-size: 20px;
    }
    .message {
      color: #48494c;
      font-size: 17px;
    }
  }
}
</style>
