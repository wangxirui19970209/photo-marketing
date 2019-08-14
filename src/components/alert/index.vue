<template>
  <div class="overlay" v-show="visible">
    <div class="dialog">
      <p class="title">
        <strong>{{ title }}</strong>
      </p>
      <p class="content" v-html="content" />
      <div class="button">
        <a v-if="positiveHide"
          href="javascript:;"
          @click="$onHide">{{ positiveHide }}</a>
         <a v-if="positiveConfirm"
          href="javascript:;"
          @click="$onConfirm">{{ positiveConfirm }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   props: {
    visible: {
      type: Boolean,
    },
    onPositiveHide: {
      type: Function,
      default() {
      },
    },
    onPositiveConfirm: {
      type: Function,
      default() {
      },
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    positiveHide: {
      type: String,
      default: '',
    },
    positiveConfirm: {
      type: String,
      default: '',
    },
  },
  watch: {
    visible(val) {
      if (val) {
        this.stop()
      } else {
        this.move()
      }
    }
  },
  methods: {
    $onHide() {
      this.onPositiveHide && this.onPositiveHide()
      this.visible = !this.visible
    },
    $onConfirm() {
      this.onPositiveConfirm && this.onPositiveConfirm()
      this.visible = !this.visible
    },
    // 滑动限制
    stop() {
      const mo = (e) => {
        e.preventDefault()
      }
      document.body.style.overflow = 'hidden'
      // 禁止页面滑动
      document.addEventListener('touchmove', mo, false)
    },
    // 取消滑动限制
    move() {
      const mo = (e) => {
        e.preventDefault()
      }
      // 出现滚动条
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', mo, false)
    }
  },
}
</script>
<style lang="less"scoped>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 99;
  .dialog {
    padding: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    font-size: 0.2rem;
    .button {
      display: flex;
      width: 90%;
      margin: 0 auto;
      margin-top: 0.3rem;
      line-height: 0.35rem;
      a {
        flex: 1;
        display: block;
        text-align: center;
        background-color: antiquewhite;
        border-radius: 0.05rem;
      }
      a + a {
        margin-left: 0.1rem;
      }
    }
  }
}
.content {
  font-size: 0.08rem;
}
</style>