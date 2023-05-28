<template>
    <transition name="space">
        <div class="header-space" v-if="isTop">
        </div>
    </transition>
    <transition name="head">
        <div class="header" v-if="isShow">
            <img src="../static/image/icon-s.png" class="icon" alt="">
            <div class="nav">
                <ul>
                    <li><a href="/list"><i class="iconfont icon-shouye"></i> 首页</a></li>
                    <li><a href="/timeline"><i class="iconfont icon-timeline-fill"></i> 时间轴</a></li>
                    <li><a href="/note"><i class="iconfont icon-shouye"></i> 便签</a></li>
                    <li><a href="/message"><i class="iconfont icon-icon_category"></i> 留言</a></li>
                    <li><a href="#"><i class="iconfont icon-shouye"></i> 友链</a></li>
                    <li><a href="/mine"><i class="iconfont icon-shouye"></i> 关于我</a></li>
                    <div class="nav-box"></div>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from "vue"

let isShow = ref(false)
let oldScroll = ref(0)
let isTop = ref(false)

defineComponent({
    name: 'Header'
})

onMounted(() => {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll === 0) {
        isShow.value = true
    }
    window.addEventListener('scroll', scrollTop, true)
})

const scrollTop = () => {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop
    if (!isShow.value && scroll < oldScroll.value) {
        isShow.value = true
        isTop.value = true
    } else if (isShow.value && scroll > 60 && scroll > oldScroll.value) {
        isShow.value = false
        isTop.value = false
    }

    if (scroll === 0) {
        isTop.value = false
    }
    oldScroll.value = scroll
    //   console.log(scroll)
    //   if (scroll === 0) {
    //     isShow.value = true
    //   } else if (scroll >= 60) {
    //     isShow.value = false
    //   }
}
</script>

<style lang="scss" scoped>

.head-enter-from,
.head-leave-to {
    opacity: 0;
}

.head-enter-to,
.head-leave-from {
    opacity: 1;
}

.head-enter-active {
    transition: opacity 1.5s ease;
}

.head-leave-active {
    transition: opacity 1s ease;
}

.header {
    z-index: 10;
    position: fixed;
    top: 0;
    height: 80px;
    display: flex;
    line-height: 80px;
    width: 100%;

    .icon {
        height: 70px;
        margin-left: 3%;
        margin-top: 5px;
        margin-right: 50%;
    }

    .nav {
        width: 600px;
        height: 70px;
        position: absolute;
        right: 3%;
        top: -10px;
    }

    .nav ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        list-style: none;
        padding-left: 0;
    }

    .nav ul .nav-box {
        position: absolute;
        bottom: 0;
        left: 0;
        /* 如果导航栏就六个导航，那么每个导航的宽度都是整个导航
            的六分之一 */
        width: calc((100% / 6)*1);
        height: 6px;
        border-radius: 2px;
        transition: .5s;
    }

    .nav ul li {
        width: 100%;
        text-align: center;
        z-index: 10;
    }

    .nav ul li a {
        color: #fff;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 70px;
        text-decoration: none;
    }

    .nav ul li:nth-child(1):hover~.nav-box {
        left: calc(100% / 6 *0);
        background-color: rgb(250, 190, 250);
    }

    .nav ul li:nth-child(2):hover~.nav-box {
        left: calc(100% / 6 *1);
        background-color: red;
    }

    .nav ul li:nth-child(3):hover~.nav-box {
        left: calc(100% / 6 *2);
        background-color: #d18df8;
    }

    .nav ul li:nth-child(4):hover~.nav-box {
        left: calc(100% / 6 *3);
        background-color: #ffb1b1;
    }

    .nav ul li:nth-child(5):hover~.nav-box {
        left: calc(100% / 6 *4);
        background-color: #8da1f8;
    }

    .nav ul li:nth-child(6):hover~.nav-box {
        left: calc(100% / 6 *5);
        background-color: #7df88e;
    }

}

.space-enter-from,
.space-leave-to {
    opacity: 0;
}

.space-enter-to,
.space-leave-from {
    opacity: 1;
}

.space-enter-active {
    transition: opacity 1s ease;
}

.space-leave-active {
    transition: opacity 2s ease;
}


.header-space {
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    background-color: #b3b3b3;
    box-shadow: 1px 1px 1px 1px #d3d1d1;

    z-index: 9;
}</style>