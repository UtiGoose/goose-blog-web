
<template>
  <div id="app">
    <Banner ></Banner>
    <div class="main-box">
      <div class="bgPulse">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Left></Left>
      <div class="right">
        <div class="card">

        </div>
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
import Banner from './components/Banner.vue'
import Left from './components/Left.vue'


</script>

<style lang="scss" scoped>
@import './static/font.css';
@import './static/iconfont.css';

.bgPulse span {
  position: fixed;
  width: 80px;
  height: 80px;
  background: #3498db;

}

.bgPulse span:nth-child(3n+1) {
  background: transparent;
  border: 5px solid #3498db;
}

.bgPulse span:nth-child(1) {
  top: 50%;
  left: 10%;
  animation: animate 10s linear infinite;
}

.bgPulse span:nth-child(2) {
  top: 60%;
  left: 5%;
  animation: animate 6s linear infinite;
}

.bgPulse span:nth-child(3) {
  top: 10%;
  left: 95%;
  animation: animate 13s linear infinite;
}

.bgPulse span:nth-child(4) {
  top: 50%;
  left: 89%;
  animation: animate 15s linear infinite;
}

.bgPulse span:nth-child(5) {
  top: 10%;
  left: 90%;
  animation: animate 7s linear infinite;
}

.bgPulse span:nth-child(6) {
  top: 90%;
  left: 95%;
  animation: animate 10s linear infinite;
}

.bgPulse span:nth-child(7) {
  top: 80%;
  left: 5%;
  animation: animate 14s linear infinite;
}

.bgPulse span:nth-child(8) {
  top: 5%;
  left: 5%;
  animation: animate 15s linear infinite;
}

.bgPulse span:nth-child(9) {
  top: 25%;
  left: 90%;
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    transform: scale(0) translateY(0) rotate(0deg);
    opacity: 1;
  }

  100% {
    transform: scale(1) translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

.main-box {

  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  overflow: visible;

  .right {
    margin-left: 5%;
    width: 50%;
  }


}
</style>
