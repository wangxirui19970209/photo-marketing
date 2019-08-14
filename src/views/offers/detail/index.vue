<template>
  <div class="sign">
    <h1 class="title">{{offer.name}}</h1>
    <div class="content">
      <div class="list">
        <div class="item">
          <span class="name">内容描述</span>
          <span class="value">{{offer.detail}}</span>
        </div>
        <div class="item">
          <span class="name">价格</span>
          <span class="value">{{offer.minPrice}}~{{offer.maxPrice}}</span>
        </div>
        <div class="item">
          <span class="name">已预定会员</span>
          <span class="value">{{offer.people}}人</span>
        </div>
        <div class="item">
          <span class="name">发布时间</span>
          <span class="value">{{offer.time ? $moment(offer.time).format('YYYY-MM-DD hh:mm:ss') : ''}}</span>
        </div>
        <div class="item">
          <span class="name">操作</span>
          <span class="value">
            <div class="button" @click="reservation(offer)">立即预定</div>
          </span>
        </div>
      </div>
    </div>
    <div class="bg-img" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      offerId: this.$route.query.offerId,
      offer: {
        detail: '',
        maxPrice: 0,
        minPrice: 0,
        name: '',
        number: 0,
        people: 0,
        time: 0
      }
    }
  },
  mounted() {
    this.offerDetail()
  },
  methods: {
    offerDetail(item) {
      if (this.offerId) {
        this.$api.offer({
          search: JSON.stringify({
            offerId: this.offerId
          })
        }).then((res) => {
          const offers = res.data.offers || []
          this.offer = offers[0] || {}
        })
      }
    },
    reservation(offer) {
      if (this.$store.getters.shAdmin.idCard) {
        this.$alert( `是否确认预定${offer.name}`, '', '取消', '确定', '', ()=> {
          this.$api.orderAdd({
            idCard: this.$store.getters.shAdmin.idCard,
            offerId: offer.offerId,
            userName: this.$store.getters.shAdmin.name,
            offerName: offer.name,
          }).then((res) => {
            if (res.code === 0) {
              this.$tip('预定成功')
            } else {
              this.$tip(res.msg)
            }
          })
        })
      } else {
        this.$router.push('/login/login')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.no-action {
  opacity: 0.4;
}
.title {
  font-size: 0.5rem;
  font-weight: 800;
  line-height: 1rem;
  text-align: center;
  background-image: -webkit-linear-gradient(top,#f3c68b,#efdd97); 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
}
.action {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.2rem;
  font-size: 0.2rem;
}
.content {
  width: 6rem;
  margin: 0 auto;
  .list {
    border-radius: 0.1rem;
    margin-bottom: 0.4rem;
    font-size: 0.1rem;
    border: 0.002rem solid #efdd97;
    overflow: hidden;
  }
  .item {
    display: flex;
    .name, .value {
      display: flex;
      align-items: center;
      padding: 0.05rem;
      border: 0.001rem solid #efdd97;
      box-sizing: border-box;
    }
    .name {
      width: 1.5rem;
    }
    .value {
      justify-content: space-between;
      flex: 1;
      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1rem;
        height: 0.25rem;
        background-color: rgba(250, 235, 215, 1);
        border-radius: 0.2rem;
        border: 0.01rem solid #fff;
        cursor: pointer;
      }
    }
  }
}
.bg-img {
  position: absolute;
  width: 100%;
  bottom: 1rem;
  left: 0;
  z-index: -1;
  background-color: #efdd97;
}
</style>

