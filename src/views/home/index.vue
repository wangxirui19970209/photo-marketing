<template>
  <div>
    <top :name="introduction.name" :phone="introduction.phone" />
    <homePage />
    <div class="content">
      <aboutUs :slogans="introduction.slogans" />
      <works />
      <packages :packages="packages" />
      <offers :offers="offers" />
    </div>
    <div class="guarantee">
      <div class="title">
        <p>Service guarantee</p>
        <p>服务保障</p>
      </div>
      <ul class="detail">
        <li class="item" v-for="(item, index) in info" :key="index">
          <div class="top">
            <div class="info">
              <div>
                <h1 class="tip">{{ item.titleCH }}</h1>
                <p>{{ item.detail1CH }}</p>
                <p>{{ item.detail2CH }}</p>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="info">
              <div>
                <p>{{ item.detail1EN }}</p>
                <p>{{ item.detail2EN }}</p>
                <p>{{ item.detail3EN }}</p>
                <p>{{ item.detail4EN }}</p>
                <h1>
                  <p>{{ item.title1EN }}</p>
                  <p>{{ item.title2EN }}</p>
                </h1>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <bottom />
    <tip />
  </div>
</template>
<script>
import top from 'components/top'
import homePage from './components/homePage'
import works from './components/works'
import offers from './components/offers'
import packages from './components/packages'
import aboutUs from './components/aboutUs'
import bottom from 'components/bottom'
import tip from './components/tip'
export default {
  components: {
    homePage,
    top,
    works,
    offers,
    packages,
    aboutUs,
    bottom,
    tip
  },
  data() {
    return {
      info: [
        {
          titleCH: '坚持口碑营销',
          detail1CH: '高品质打造强劲品牌口碑',
          detail2CH: '成就魅力营销',
          title1EN: 'WORD-OF-MOUTH',
          title2EN: 'MARKETIN',
          detail1EN: 'Insist in building',
          detail2EN: 'quality service',
          detail3EN: 'for constant',
          detail4EN: 'growth'
        },
        {
          titleCH: '消费主张',
          detail1CH: '绝无任何隐形消费',
          detail2CH: '绝不收取任何额外费用',
          title1EN: 'CONSUMPTION',
          title2EN: 'PROPOSITION',
          detail1EN: 'No catch',
          detail2EN: 'in our quotation, ',
          detail3EN: 'Transparency is the key',
          detail4EN: 'to our service'
        },
        {
          titleCH: '拍摄保障',
          detail1CH: '拍摄不满意无条件重拍',
          detail2CH: '重拍不满意退款',
          title1EN: 'SHOOTING',
          title2EN: 'GUARANTEE',
          detail1EN: 'if not satisfied with our shooting,',
          detail2EN: 'We provide you with unconditional',
          detail3EN: 'remake If still not satisfied,',
          detail4EN: 'We do unconditional refund.'
        }
      ],
      offers: [],
      packages: [],
      introduction: {
        name: '',
        phone: '',
        slogans: []
      }
    }
  },
  mounted () {
    this.$api.offerSort({
      sort: JSON.stringify({
        people: -1
      })
    }).then((res) => {
      this.packages = res.data.offers
    })
    this.$api.offerPage({
      pageSize: 5,
      count: 1, 
    }).then((res) => {
      this.offers = res.data.page
    })
    this.$api.introduction().then((res) => {
      this.introduction = res.data
    })
  }
}
</script>
<style lang="less" scoped>
.content {
  padding: 0 0.3rem;
}
.guarantee {
  margin-top: 1rem;
  padding: 0 0.3rem;
  color: #fff;
  background-color: #503c03a6;
  .title {
    font-style: italic;
    text-align: center;
    font-size: 0.2rem;
    line-height: 0.4rem;
  }
  .detail {
    margin-top: 0.2rem;
    padding-bottom: 0.3rem;
    overflow: auto;
    zoom: 1;
    .item {
      float: left;
      width: 33.33%;
      font-size: 0.13rem;
      line-height: 0.2rem;
      font-weight: 800;
      box-sizing: border-box;
      .top {
        height: 2rem;
        padding: 0.07rem;
        background-color: #afa487;
      }
      .bottom {
        height: 2rem;
        padding: 0.07rem;
        margin-top: -0.2rem;
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border: 0.001rem solid #fff;
        h1 {
          font-size: 0.2rem;
          line-height: 0.3rem;
        }
      }
    }
    .item + .item {
      padding-left: 0.2rem;
    }
  }
}
</style>
