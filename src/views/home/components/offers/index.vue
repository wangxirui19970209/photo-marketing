<template>
  <div id="anchor-offers">
    <div class="title">
      <div>服务报价</div>
      <router-link to="/offers">查看更多</router-link>
    </div>
    <div class="box">
      <ul class="list info">
        <li class="item" v-for="(item,index) in offers" :key="index" @mouseenter="hoverItem(index)">
          <router-link class="action" :to="`offers/detail?offerId=${item.offerId}`">
            <div class="name">{{ item.name }}</div>
            <p class="detail">
              {{ item.detail }}
            </p>
          </router-link>
        </li>
        <!-- <li class="item" @mouseenter="hoverItem(1)">
          <router-link class="action" to="/offers/detail/1">
            <div class="name">套餐1</div>
            <p>
              新郎拍照提供礼服6套，新娘拍照提供礼服6套（VIP区、主题区任选；晶钻区内景2套）。
              专业摄影师全程创意主题拍摄6组 专业造型师全程化妆、造型设计6款 VIP助理全程贴心服务 拍摄全程随时补妆服务。
              拍摄地点为所在城市市区内任选景点（推荐或自选）
            </p>
          </router-link>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
// 显示的item个数
const listLength = 5
export default {
  props: {
    offers: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      listDom: ''
    }
  },
  computed: {
    scrollWidth() {
      if (this.offers.length > 0) {
        const clientWidth = document.querySelector('#anchor-offers .item').clientWidth * listLength - document.querySelector('#anchor-offers .box').clientWidth
        return clientWidth / (listLength - 1)
      }
    }
  },
  mounted() {
    this.listDom = document.querySelector('#anchor-offers .list')
  },
  methods: {
    hoverItem(index) {
      this.listDom.style.transform = 'translateX(-' + this.scrollWidth * index + 'px)'
    }
  }
}
</script>
<style lang="less" scoped>
// 显示的item个数
@list_length: 5;
.title {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.2rem;
  font-weight: 500;
}
.box {
  margin-top: 0.2rem;
  overflow-x: hidden;
}
.list {
  width: calc(3rem * @list_length);
  padding-bottom: 0.14rem;
  transition: all 1s;
  overflow: auto;
  zoom: 1;
  .item {
    float: left;
    width: 3rem;
    font-size: 0.1rem;
  }
}
.info {
  .action {
    display: block;
    padding: 0.1rem;
    width: 2.6rem;
    background-color: rgba(250, 235, 215, 1);
    border-radius: 0.1rem;
    transition: all 0.5s;
  }
  .action:hover {
    box-shadow: 0px 0.07rem 0.14rem rgba(0, 0, 0, 0.2);
  }
  .name {
    font-size: 0.13rem;
    line-height: 0.4rem;
  }
  .detail {
    display: block;
    display: -webkit-box;
    height: 180px;
    margin: 0 auto;
    font-size: 12px;
    line-height: 18px;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
