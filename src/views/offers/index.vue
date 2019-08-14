<template>
  <div class="sign">
    <h1 class="title">服务报价</h1>
    <div class="content">
      <p class="sort">
        <span :class="{ 'active': sort.people === -1 }" @click="sortPeople">最热</span>
        <span :class="{ 'active': sort.time === -1 }" @click="sortTime">最新</span>
      </p>
      <div class="list" v-for="(item,index) in offers" :key="index">
        <div class="item">
          <div class="name">
            <div>套餐名称（价格）</div>
          </div>
          <div class="value">
            <div>{{item.name}}（{{item.minPrice}}~{{item.maxPrice}}元）</div>
            <router-link class="button" :to="`offers/detail?offerId=${item.offerId}`">查看详情</router-link>
            <div class="button" @click="reservation(item)">立即预定</div>
          </div>
        </div>
        <div class="item">
          <span class="name">内容描述</span>
          <span class="value">{{item.detail}}</span>
        </div>
      </div>
      <div class="content action">
        <div :class="{'no-action' : count <= 1}" @click="nextUp()">上一页</div>
        <div :class="{'no-action' : offers.length < pageSize}" @click="nextDown()">下一页</div>
      </div>
    </div>
    <div class="bg-img" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      offers: [],
      pageSize: 5,
      count: 1,
      sort: {}
    }
  },
  mounted() {
    this.getOffers()
  },
  methods: {
    nextUp() {
      if (this.count <= 1) return
      this.count -= 1
      this.getOffers()
    },
    nextDown() {
      if (this.offers.length < this.pageSize) return
      this.count += 1
      this.getOffers()
    },
    getOffers() {
      this.$api.offerPage({
        pageSize: this.pageSize,
        count: this.count,
        sort: JSON.stringify(this.sort)
      }).then((res) => {
        this.offers = res.data.page || []
      })
    },
    exit() {
      this.$api.accountLogout().then(() => {
        this.$store.commit('SET_IS_LOGIN', false)
        this.$store.commit('SET_SHADMIN', {})
        window.localStorage.removeItem('shAdmin')
      })
    },
    reservation(item) {
      if (this.$store.getters.shAdmin.idCard) {
        this.$alert( `是否确认预定${item.name}`, '', '取消', '确定', '', ()=> {
          this.$api.orderAdd({
            idCard: this.$store.getters.shAdmin.idCard,
            offerId: item.offerId,
            userName: this.$store.getters.shAdmin.name,
            offerName: item.name,
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
    },
    sortPeople() {
      if (this.sort.people === -1) {
        this.sort = {}
      } else {
        this.sort = {
          people: -1
        }
      }
      this.count = 1
      this.getOffers()
    },
    sortTime() {
      if (this.sort.time === -1) {
        this.sort = {}
      } else {
        this.sort = {
          time: -1
        }
      }
      this.count = 1
      this.getOffers()
    }
  }
}
</script>
<style lang="less" scoped>
.sort {
  line-height: 0.5rem;
  span {
    margin-right: 0.3rem;
    cursor: pointer;
  }
  .active {
    color: #efdd97;
  }
}
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

