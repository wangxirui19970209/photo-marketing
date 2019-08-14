<template>
  <div class="word">
    <div class="bg"></div>
    <div class="content">
      <div class="title"></div>
      <div class="word-img">
        <template v-if="wordNum === 1">
          <img src="./images/1.jpg">
          <img src="./images/2.png">
          <img src="./images/3.png">
          <img src="./images/4.png">
          <img src="./images/5.jpg">
          <img src="./images/6.jpg">
          <img src="./images/7.jpg">
          <img src="./images/8.jpg">
          <img src="./images/9.jpg">
          <img src="./images/10.jpg">
          <img src="./images/11.jpg">
          <img src="./images/12.jpg">
          <img src="./images/13.jpg">
          <img src="./images/14.jpg">
          <img src="./images/15.jpg">
        </template>
        <template v-if="wordNum === 2">
          <img src="./images/16.jpg">
          <img src="./images/17.jpg">
          <img src="./images/18.jpg">
          <img src="./images/19.jpg">
          <img src="./images/20.jpg">
          <img src="./images/21.jpg">
          <img src="./images/22.jpg">
          <img src="./images/23.jpg">
          <img src="./images/24.jpg">
          <img src="./images/25.jpg">
          <img src="./images/26.jpg">
          <img src="./images/27.jpg">
        </template>
        <template v-if="wordNum === 3">
          <img src="./images/28.jpg">
          <img src="./images/29.jpg">
          <img src="./images/30.jpg">
          <img src="./images/31.jpg">
          <img src="./images/32.jpg">
          <img src="./images/6.jpg">
          <img src="./images/7.jpg">
          <img src="./images/8.jpg">
          <img src="./images/9.jpg">
          <img src="./images/10.jpg">
        </template>
        <template v-if="wordNum === 4">
          <img src="./images/7.jpg">
          <img src="./images/8.jpg">
          <img src="./images/9.jpg">
          <img src="./images/10.jpg">
          <img src="./images/11.jpg">
          <img src="./images/7.jpg">
          <img src="./images/8.jpg">
          <img src="./images/9.jpg">
          <img src="./images/10.jpg">
          <img src="./images/11.jpg">
          <img src="./images/12.jpg">
          <img src="./images/13.jpg">
          <img src="./images/14.jpg">
          <img src="./images/15.jpg">
        </template>
        <template v-if="wordNum === 5">
          <img src="./images/32.jpg">
          <img src="./images/6.jpg">
          <img src="./images/7.jpg">
          <img src="./images/8.jpg">
          <img src="./images/9.jpg">
          <img src="./images/10.jpg">
          <img src="./images/6.jpg">
          <img src="./images/7.jpg">
          <img src="./images/8.jpg">
          <img src="./images/9.jpg">
          <img src="./images/10.jpg">
          <img src="./images/11.jpg">
          <img src="./images/12.jpg">
          <img src="./images/13.jpg">
          <img src="./images/14.jpg">
          <img src="./images/15.jpg">
        </template>
        <template v-if="wordNum === 6">
          <img src="./images/30.jpg">
          <img src="./images/31.jpg">
          <img src="./images/32.jpg">
          <img src="./images/6.jpg">
          <img src="./images/22.jpg">
          <img src="./images/23.jpg">
          <img src="./images/24.jpg">
          <img src="./images/25.jpg">
          <img src="./images/26.jpg">
          <img src="./images/27.jpg">
          <img src="./images/8.jpg">
          <img src="./images/9.jpg">
          <img src="./images/15.jpg">
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      wordNum: Number(this.$route.query.wordNum),
      bgUrl: require('./images/bg.png')
    }
  }
}
</script>
<style lang="less" scoped>
.bg {
  position: fixed;
  top:0;
  left: 0;
  height: 100%;
  width: 300px;
  background-image: url(./images/bg.png);
}
.content {
  padding: 70px 0px 80px 80px;
  padding-left: 400px;
  .title {
    width: 415px;
    height: 116px;
    margin-bottom: 30px;
    background: url(./images/power_title.png) no-repeat 0 0;
  }
  .word-img {
    img {
      float: left;
      height: 150px;
      margin: 0px 20px 20px 0px;
    }
  }
  .word-img::before {
    display: block;
    content: '.';
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
</style>
