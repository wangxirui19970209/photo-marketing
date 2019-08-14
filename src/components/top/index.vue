<template>
  <div class="box">
    <div class="location">
      <ul class="list">
        <div class="logo">
          <img class="logo-icon" src="@/assets/logo.jpeg">
          <span>{{ name }}</span>|
          <span>婚纱摄影中心</span>
          <a class="kufu" href="tel:15716657547">
            <img class="tel" src="./images/phone-icon.png">
            {{ phone }}
          </a>
        </div>
        <li><a href="javascript:void(0)" v-anchor="'homePage'">首页</a></li>
        <li><a href="javascript:void(0)" v-anchor="'aboutUs'">关于我们</a></li>
        <li><a href="javascript:void(0)" v-anchor="'works'">优秀作品</a></li>
        <li><a href="javascript:void(0)" v-anchor="'packages'">人气套餐</a></li>
        <li><a href="javascript:void(0)" v-anchor="'offers'">服务报价</a></li>
        <li><router-link to="/login/signIn">有奖注册</router-link></li>
        <template v-if="shAdminName">
          <li><a href="javascript:void(0)" @click="changeInfo">修改资料</a></li>
          <li>
            <select v-model="option" @change="exit()">
              <option value="name">{{ shAdminName }}</option>
              <option value="exit">退出</option>
            </select>
          </li>
        </template>
        <li v-else><router-link to="/login/login">会员登录</router-link></li>
      </ul>
    </div>
    <infoDialog :visible="visible" :onPositiveConfirm="confirm" :info="info" />
  </div>
</template>
<script>
import infoDialog from './components/infoDialog'
export default {
  components: {
    infoDialog
  },
  name: 'top',
  props: {
    name: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      option: 'name',
      visible: false,
      info: {
        name: '',
        sex: '',
        age: '',
        phone: '',
        idCard: ''
      }
    }
  },
  computed:{
    shAdminName() {
      return this.$store.getters.shAdmin.name
    }
  },
  methods: {
    exit() {
      if (this.option === 'exit') {
        this.$api.accountLogout().then(() => {
          this.$store.commit('SET_IS_LOGIN', false)
          this.$store.commit('SET_SHADMIN', {})
          window.localStorage.removeItem('shAdmin')
        })
      }
    },
    changeInfo() {
      this.info = {
        name: this.$store.getters.shAdmin.name || '',
        sex: this.$store.getters.shAdmin.sex || '',
        age: this.$store.getters.shAdmin.age || '',
        phone: this.$store.getters.shAdmin.phone || '',
        idCard: this.$store.getters.shAdmin.idCard || '',
      }
      this.visible = true
    },
    confirm() {
      this.$api.upDate(this.info).then((res) => {
        if (res.code === 0) {
          this.$tip(res.data)
          this.$store.commit('SET_SHADMIN', this.info)
          window.localStorage.setItem('shAdmin', JSON.stringify(this.info))
        }
      })
    }
  }
}
</script>
<style lang="less">
.top-info{
  width: 3rem;
  margin-top: 0.08rem;
  .alert-name {
    display: inline-block;
    width: 0.4rem;
  }
  input {
    width: 2rem;
    padding: 0.05rem;
  }
}
</style>

<style lang="less" scoped>
select{
  font-family: "微软雅黑";
  background: rgba(0,0,0,0);
  font-size: 0.111rem;
  width: 0.7rem;
  text-align: center;
  border: 1px #1a1a1a solid;
  border-radius: 5px;
  outline: none;
}
option{
  color: black;
  line-height: 20px;
  outline: none;
}
.box {
  .location {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 0.8rem;
    background-color: rgba(250, 235, 215, 0.8);
    z-index: 99;
  }
}
.list {
  display: flex;
  font-size: 0.111rem;
  line-height: 0.5rem;
  li {
    flex: 1;
    text-align: center;
    a {
      display: inline-block;
      height: 100%;
      border-bottom: 0.01rem solid antiquewhite;
      box-sizing: border-box;
    }
    a:hover {
      border-bottom: 0.01rem solid red;
    }
  }
  .logo {
    display: flex;
    align-items: center;
    flex: none;
    width: 4rem;
    text-align: left;
    .logo-icon {
      width: 0.18rem;
      height: 0.18rem;
      margin-right: 0.03rem;
      border-radius: 80% 0 55% 50%;
    }
    .kufu {
      display: flex;
      align-items: center;
      margin-left: 0.1rem;
      .tel {
        width: 0.11rem;
        height: 0.11rem;
        margin-right: 0.01rem;
      }
    }
  }
}
</style>
