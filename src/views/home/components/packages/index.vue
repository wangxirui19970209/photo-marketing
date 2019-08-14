<template>
  <div id="anchor-packages">
    <div class="title">人气套餐</div>
    <div class="notice">
      <div class="btn-box">
        <div class="btn notice__btn-prev"></div>
      </div>
      <div class="list" v-swiper:noticeSwiper="swiperOption">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item, index) in packages" :key="index">
            <div class="info item">
              <div class="title">
                <div class="title__name">{{item.name}}</div>
              </div>
              <div class="tips">
                <div class="tips__pay">套餐价格{{item.minPrice}}~{{item.maxPrice}}元</div>
                <div class="tips__obtain">共计{{item.number}}组拍摄</div>
              </div>
              <div class="desc">{{item.detail}}</div>
              <div class="notice-info">
                <div class="info-element">
                  <!-- <div class="info-element__title">{{item.time}}推出此套餐</div> -->
                  <div class="info-element__title">{{item.time ? $moment(item.time).format('YYYY-MM-DD hh:mm:ss') : ''}}推出此套餐</div>
                </div>
                <div class="info-element">
                  <div class="info-element__title">目前已有{{item.people}}位会员预定</div>
                </div>
                <div class="info-element">
                  <div class="info-element__title active" @click="reservation(item)">立即预定</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="btn-box">
        <div class="btn notice__btn-next have-more"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    packages: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        navigation: {
          prevEl: '.notice__btn-prev',
          nextEl: '.notice__btn-next'
        }
      }
    }
  },
  methods: {
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
.title {
  margin-top: 0.5rem;
  font-size: 0.2rem;
  font-weight: 500;
}
.notice {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .list {
    overflow: hidden;
    width: 5.28rem;
  }
  .btn-box {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
  }
  .btn {
    outline: none;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 0.7rem;
    border:0.007rem solid #e5e5e5;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .8s ease;
    &:after {
      content: '';
      display: block;
      width: 0.119rem;
      height: 0.119rem;
      border-top: 0.028rem #848484 solid;
      border-right: 0.028rem #848484 solid;
    }
    cursor: pointer;
  }
  .notice__btn-prev {
    &:after {
      transform: rotate(-135deg);
    }
    &:hover {
      .have-more-hover()
    }
  }
  .notice__btn-next {
    &:after {
      transform: rotate(45deg);
    }
    &:hover {
      .have-more-hover()
    }
  }
  .have-more-hover() {
    border: none;
    background:#faebd7c9;
    box-shadow: 0 0.14rem 0.211rem antiquewhite;
    &:after {
      content: '';
      display: block;
      width: 0.119rem;
      height: 0.119rem;
      border-top: 0.028rem #fff solid;
      border-right: 0.028rem #fff solid;
    }
  }
}

.swiper-wrapper > .item {
  width: 5.28rem !important;
  display: flex;
  align-items: center;
  padding: 30px;
  // width: 650px;
  // margin: auto;
  .avatar {
    width: 0.281rem;
    height: 0.281rem;
    overflow: hidden;
    border-radius: 0.281rem 0 0.281rem 0.281rem;
    background: #e5e5e5;
    margin-right: 17px;
    align-self: flex-start;
    img {
      width: 0.281rem;
      height: 0.281rem;
    }
  }
  .message {
    cursor: pointer;
    width: 0.774rem;
    padding: 0.035rem;
    box-shadow: 0 0.035rem 0.105rem rgba(0, 0, 0, 0.3);
    margin-left: 0.07rem;
    img {
      width: 100%;
      display: block;
    }
  }
}

.info {
  flex: 1;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    &__name {
      font-size:16px;
      color:#333333;
      margin-right: 5px;
    }
    &__plan {
      font-size:12px;
      color:#848484;
    }
  }

  .tips {
    display: inline-block;
    background:rgba(18,110,248,0.90);
    border-radius:0.704rem;
    height:0.211rem;
    font-size:0.084rem;
    color:#ffffff;
    &__pay {
      padding: 0 0.08rem;
      display: inline-block;
      background:rgba(194,218,255,0.90);
      height: 100%;
      line-height: 0.211rem;
      border-radius:0.704rem 0 0 0.704rem;
    }
    &__obtain {
      padding: 0 0.08rem;
      display: inline-block;
      height: 100%;
      line-height: 0.211rem;
    }
  }

  .desc {
    font-size:0.098rem;
    color:#848484;
    margin: 0.14rem 0 0.07rem;
    line-height: 1.4;
  }

  .notice-info {
    .info-element {
      display: inline-block;
      border-right: 0.007rem #848484 solid;
      height: 0.098rem;
      line-height: 0.098rem;
      padding: 0 0.105rem;
      .active {
        cursor: pointer;
      }
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        border: none;
      }
      &__data {
        font-size:0.112rem;
        color:#333333;
        font-weight: 800;
      }
      &__title {
        font-size:0.098rem;
        color:#848484;
      }
    }
  }
}
</style>
