<template>
  <div class="overlay" :class="{'close' : close}" v-show="visible">
    <strong>{{ title }}</strong>
  </div>
</template>
<script>
export default {
   props: {
    visible: {
      type: Boolean,
    },
    title: {
      type: String,
    }
  },
  data() {
    return {
      close: false
    }
  },
  watch: {
    visible(val) {
      if (val) {
        setTimeout(() => {
          this.close = true
        }, 500)
        setTimeout(() => {
          this.visible = !this.visible
        }, 3000)
      }
    }
  }
}
</script>
<style lang="less"scoped>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0.6rem;
  right: 0.3rem;
  padding: 0.1rem 0.3rem;
  background-color: #faebd7;
  z-index: 99;
  border-radius: 0.04rem;
  transition: all 3s;
}
.close {
  top: 0.2rem;
  opacity: 0;
}
</style>