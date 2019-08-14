<template>
  <div id="anchor-homePage" class="box">
    <div class="animation">
      <img class="banner" src="./images/banner.png">
    </div>
  </div>
</template>
<style lang="less" scoped>
.banner {
  width: 100%;
}
.animation {
  overflow: hidden;
  animation-name: change;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes change {
  0%{
    border-bottom-right-radius: 0% 1rem;
    border-bottom-left-radius: 0% 1rem;
  }
  10%{
    border-bottom-right-radius: 5% 1rem;
    border-bottom-left-radius: 5% 1rem;
  }
  20%{
    border-bottom-right-radius: 15% 1rem;
    border-bottom-left-radius: 15% 1rem;
  }
  30%{
    border-bottom-right-radius: 20% 1rem;
    border-bottom-left-radius: 20% 1rem;
  }
  40%{
    border-bottom-right-radius: 25% 1rem;
    border-bottom-left-radius: 25% 1rem;
  }
  50%{
    border-bottom-right-radius: 30% 1rem;
    border-bottom-left-radius: 30% 1rem;
  }
  60%{
    border-bottom-right-radius: 35% 1rem;
    border-bottom-left-radius: 35% 1rem;
  }
  70%{
    border-bottom-right-radius: 40% 1rem;
    border-bottom-left-radius: 40% 1rem;
  }
  80%{
    border-bottom-right-radius: 45% 1rem;
    border-bottom-left-radius: 45% 1rem;
  }
  90%{
    border-bottom-right-radius: 50% 1rem;
    border-bottom-left-radius: 50% 1rem;
  }
  100%{
    border-bottom-right-radius: 50% 1rem;
    border-bottom-left-radius: 50% 1rem;
  }
}
</style>
