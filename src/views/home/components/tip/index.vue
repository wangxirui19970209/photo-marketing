<template>
  <div class="icon">
    <div>
      <router-link to="/offers">
        <span class="tip">预定套餐</span>
      </router-link>
    </div>
  </div>
</template>
<style lang="less" scoped>
.icon {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  right: 10px;
  top: 40%;
  width: 100px;
  height: 100px;
  padding-bottom: 20px;
  background: url('./images/appointment.png');
  background-size: 100% 100%;
  z-index: 99;
  cursor: pointer;
  animation-name: change;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  .tip {
    color: #fff;
    font-size: 15px;
  }
}
@keyframes change {
  0%{
    transform: scale(1)
  }
  50%{
    transform: scale(0.8)
  }
  100%{
    transform: scale(1)
  }
}
</style>
