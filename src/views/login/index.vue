<template>
  <div class="sign">
    <h1 class="title">{{ type === 'signIn' ? '注册有奖' : '登录' }}</h1>
    <p v-if="type === 'signIn'" class="tip">新用户注册可赠送一次证件照套餐</p>
    <div class="content">
      <div>
        <div v-if="type === 'signIn'" class="label-input">
          <label class="label" for="name">姓名</label>
          <input v-model="info.name" class="input" id="name" />
        </div>
        <div class="label-input">
          <label class="label" for="idCard">身份证号</label>
          <input v-model="info.idCard" class="input" id="idCard" />
        </div>
        <div v-if="type === 'signIn'" class="label-input">
          <label class="label" for="phone">手机号</label>
          <input v-model="info.phone" class="input" id="phone" />
        </div>
        <div class="sumbit" @click="sumbit">提交</div>
        <router-link v-if="type === 'signIn'" class="login-tip" to="/login/login">已有账号，点击此处登录</router-link>
        <router-link v-if="type === 'login'" class="login-tip" to="/login/signIn">点击注册账号</router-link>
      </div>
    </div>
    <img class="bg-img" src="./images/bg.png">
  </div>
</template>
<script>
export default {
  beforeCreate() {
    if (this.$route.params.type === 'signIn') return
    const shAdmin = window.localStorage['shAdmin'] ? JSON.parse(window.localStorage['shAdmin']) : null
    const isLogin = !!shAdmin
    if (isLogin) {
      alert('你已登录')
      this.$router.push('/home')
      this.$store.commit('SET_IS_LOGIN', true)
      this.$store.commit('SET_SHADMIN', shAdmin)
    } else {
      this.$api.accountLogout(shAdmin).then(() => {
        this.$store.commit('SET_IS_LOGIN', false)
        this.$store.commit('SET_SHADMIN', {})
        window.localStorage.removeItem('shAdmin')
        this.$tip('请登录')
      })
    }
  },
  data() {
    return {
      type: this.$route.params.type,
      info: {
        name: '',
        idCard: '',
        phone: ''
      }
    }
  },
  watch: {
  '$route' (to, from) {
      // 刷新参数放到这里里面去触发就可以刷新相同界面了
      this.type = this.$route.params.type
    }
  },
  methods: {
    sumbit() {
      if (this.type === 'signIn') {
        this.$api.register(this.info).then((res) => {
          if (res.code === 0) {
            this.$tip('注册成功')
          } else {
            this.$tip(res.msg || res.data)
          }
        })
      } else {
        this.$api.submit({ idCard: this.info.idCard }).then((res) => {
          if (res.code === 0) {
            let data = {
              name: res.data.name,
              age: res.data.age,
              phone: res.data.phone,
              sex: res.data.sex,
              idCard: res.data.idCard,
              token: res.data.token
            }
            this.$store.commit('SET_IS_LOGIN', true)
            this.$store.commit('SET_SHADMIN', data)
            window.localStorage.setItem('shAdmin', JSON.stringify(data))
            this.$router.push('/home')
          } else {
            this.$tip(res.msg || res.data)
          }
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.sign {
  height: 100%;
  background: linear-gradient(rgba(250, 235, 215, 1), #fff);
  .title {
    font-size: 0.6rem;
    font-weight: 800;
    line-height: 1rem;
    text-align: center;
    background-image: -webkit-linear-gradient(top,#f3c68b,#efdd97); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
  }
  .tip {
    font-size: 0.1rem;
    text-align: center;
  }
  .content {
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    font-size: 0.2rem;
    z-index: 9;
    .login-tip {
      margin-top: 0.23rem;
      display: block;
      font-size: 0.15rem;
      text-align: center;
      color: #8a7833;
    }
    .label-input {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      .label {
        width: 1rem;
      }
      .input {
        font-size: 0.12rem;
        width: 3rem;
        padding: 0 0.08rem;
        line-height: 0.3rem;
        border-radius: 0.04rem;
        border: 0;
      }
    }
    .sumbit {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;
      width: 100%;
      height: 0.5rem;
      font-size: 0.2rem;
      background-color: rgba(250, 235, 215, 1);
      border-radius: 0.2rem;
      border: 0.01rem solid #fff;
      cursor: pointer;
    }
  }
}
.bg-img {
  position: absolute;
  width: 100%;
  bottom: 1rem;
  left: 0;
}
</style>

