<template>
    <Header></Header>
    <div class="container">
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import Header from './Header.vue'



defineComponent({
    name: 'BannerThum'
})


</script>

<style lang="scss" scoped>
@import '../static/iconfont.css';

.container {
    height: 30%;
    position: relative;
    width: 100%;
    z-index: 7;
    background-image: url('../static/image/bg1.jpg');

}
</style>