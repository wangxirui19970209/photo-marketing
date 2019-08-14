<template>
  <div id="anchor-aboutUs" class="about-us">
    <div class="num">
      <img class="num-icon" src="./images/icon-member.png">
      <div>
        <p>已拥有会员</p>
        <p class="digital">{{ memberNum }}</p>
      </div>
    </div>
    <div class="num">
      <img class="num-icon" src="./images/icon-family.png">
      <div>
        <p>已成功预约</p>
        <p class="digital">{{ orderNum }}</p>
      </div>
    </div>
    <div class="about"  v-swiper:memberSwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in slogans" :key="index">
          <div class="item">
            {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    slogans: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      memberNum: 0,
      orderNum: 0,
      swiperOption: {
        direction: 'vertical',
        autoplay: true,
        loop: true,
        delay: 2000
      }
    }
  },
  mounted () {
    this.$api.aboutInfo().then((res) => {
      this.memberNum = res.data.memberNum
      this.orderNum = res.data.orderNum
    })
  }
}
</script>
<style lang="less" scoped>
.about-us {
  margin-top: 0.5rem;
  display: flex;
  .num {
    display: flex;
    align-items: flex-start;
    width: 2.8rem;
    font-size: 0.12rem;
    color: #848484;
    .num-icon {
      width: 0.2rem;
      margin-right: 0.02rem;
    }
    .digital {
      margin-top: 0.01rem;
      font-size: 0.3rem;
      color: #333;
    }
  }
  .about {
    flex: 1;
    height: 0.5rem;
    font-size: 0.15rem;
    overflow: hidden;
    .item {
      padding: 0.03rem;
    }
  }
}
</style>
