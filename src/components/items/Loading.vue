<template>
    <div class="mask">
        <div class="loader">
            <div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="tip-text">{{ title }}</div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, defineExpose } from 'vue'

let title = ref('') // 加载提示文字
// 更改加载提示文字
const setTitle = (val) => {
    title.value = val
}

// 暴露出去
defineExpose({
    title,
    setTitle
})

</script>
  
<style lang="less" scoped>
.mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;

    .loader {
        position: absolute;
        top: 50%;
        left: 40%;
        margin-left: 10%;
        transform: translate3d(-50%, -50%, 0);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tip-text {
        color: #3793ff;
        padding-top: 10px;
    }

    .dot {
        width: 18px;
        height: 18px;
        border-radius: 100%;
        display: inline-block;
        animation: slide 1s infinite;
    }

    .dot:nth-child(1) {
        animation-delay: 0.1s;
        background: #1fbfff;
    }

    .dot:nth-child(2) {
        animation-delay: 0.2s;
        background: #2ea4ff;
    }

    .dot:nth-child(3) {
        animation-delay: 0.3s;
        background: #3793ff;
    }

    .dot:nth-child(4) {
        animation-delay: 0.4s;
        background: #3b89ff;
    }

    .dot:nth-child(5) {
        animation-delay: 0.5s;
        background: #4577ff;
    }
}

@-moz-keyframes slide {
    0% {
        transform: scale(1);
    }

    50% {
        opacity: 0.3;
        transform: scale(2);
    }

    100% {
        transform: scale(1);
    }
}

@-webkit-keyframes slide {
    0% {
        transform: scale(1);
    }

    50% {
        opacity: 0.3;
        transform: scale(2);
    }

    100% {
        transform: scale(1);
    }
}

@-o-keyframes slide {
    0% {
        transform: scale(1);
    }

    50% {
        opacity: 0.3;
        transform: scale(2);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes slide {
    0% {
        transform: scale(1);
    }

    50% {
        opacity: 0.3;
        transform: scale(2);
    }

    100% {
        transform: scale(1);
    }
}</style>