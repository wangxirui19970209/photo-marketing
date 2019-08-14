<template>
  <div id="anchor-works">
    <div class="title">优秀作品</div>
    <ul class="list">
      <li class="item"><router-link to="/words-detail?wordNum=1"  class="works-link"><img src="./images/1.jpg"></router-link></li>
      <li class="item"><router-link to="/words-detail?wordNum=2"  class="works-link"><img src="./images/2.jpg"></router-link></li>
      <li class="item"><router-link to="/words-detail?wordNum=3"  class="works-link"><img src="./images/3.png"></router-link></li>
      <li class="item"><router-link to="/words-detail?wordNum=4"  class="works-link"><img src="./images/4.png"></router-link></li>
      <li class="item"><router-link to="/words-detail?wordNum=5"  class="works-link"><img src="./images/5.png"></router-link></li>
      <li class="item"><router-link to="/words-detail?wordNum=6"  class="works-link"><img src="./images/6.png"></router-link></li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.title {
  margin-top: 0.5rem;
  font-size: 0.2rem;
  font-weight: 500;
}
.list {
  width: 100%;
  display: flex;
  margin-top: 0.2rem;
  .item {
    flex: 1;
    .works-link {
      display: block;
      transition: all 1s;
      img {
        width: 100%;
      }
    }
    .works-link:hover {
      transform: scale(0.95);
    }
  }
  .item + .item {
    padding-left: 0.2rem;
  }
}
</style>
