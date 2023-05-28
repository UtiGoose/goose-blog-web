<template>
    <Header></Header>
    <div class="container">
        <div class="head">
            <div class="word">
                <div class="title">Goose Nest 鹅窝</div>
                <div ref="text" class="typed"></div>
            </div>
            <div class="bottom-icon">
                <i class="iconfont icon-xiangxia icon" @click="scrollTo"></i>
            </div>
        </div>
        <div class="main-box" name="scrollItem">
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { defineComponent } from 'vue'
import TypeIt from 'typeit'
import Header from './Header.vue'

defineComponent({
    name: 'Banner'
})
const text = ref("")

onMounted(() => {
    new (TypeIt as any)(text.value, {
        strings: ["Welcome to Goose Nest", "我是模拟大鹅，我是一名宝可梦训练家", "夏日炎炎，进来喝一杯吗？", "大鹅状态：Coding..."],
        cursorChar: "<span class='cursorChar'>|<span>",//用于光标的字符。HTML也可以
        speed: 200,
        lifeLike: true,// 使打字速度不规则
        cursor: true,//在字符串末尾显示闪烁的光标
        breakLines: false,// 控制是将多个字符串打印在彼此之上，还是删除这些字符串并相互替换
        loop: true,//是否循环
    }).go()


})

function scrollTo() {
    let jumpitem = document.getElementsByName("scrollItem") //得到所有的title，包括游戏，音乐，番剧这些
    jumpitem[0].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

</script>

<style lang="scss" scoped>
@import '../static/iconfont.css';

.container {
    height: auto;
    position: relative;
    width: 100%;
    z-index: 7;
    .head {
        background-image: url('../static/image/bg1.jpg');
        /* 背景图垂直、水平均居中 */
        background-position: center center;
        /* 背景图不平铺 */
        background-repeat: no-repeat;
        /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
        background-attachment: fixed;
        /* 让背景图基于容器大小伸缩 */
        background-size: cover;
        height: 100vh;
        width: 100%;
        display: flex;

        .word {
            margin: auto;
            line-height: 50px;
            display: inline-block;

            .title {
                text-align: center;
                font-size: 2.5rem;
                color: #fff;
            }

            .typed {
                text-align: center;
                font-size: 2rem;
                color: #fff;

            }
        }

        .bottom-icon {
            color: #fff;

            position: absolute;
            bottom: 5%;
            left: 50%;
            animation: jumpBoxHandler 2.5s infinite;

            .icon {
                font-size: 25px;
                cursor: pointer;
            }

        }



        @keyframes jumpBoxHandler {

            /* css事件 */
            0% {
                transform: translate(0px, 0px);

                transform: scale(1.2);

            }

            50% {
                transform: translate(0px, 10px);

            }

            100% {
                transform: translate(0px, 0px);
                transform: scale(1.2);
            }
        }
    }

    .main-box {
        width: 100%;
        height: 0.5px;
    }
}
</style>