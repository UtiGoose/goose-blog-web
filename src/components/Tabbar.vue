<template>
    <div class="tabbar" :style="{ '--left': lef, '--width': wid }">
        <p class="item" v-for="(item, index) of listArr" :key="index" @click="onHandleClick($event, index)"
            :class="{ active: activeIndex == index }">{{ item }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineComponent } from 'vue'

defineComponent({
    name: 'Tabbar'
})

let listArr = ref(['信息', '工作', '项目', 'c++', 'php'])
let activeIndex = ref(0)
let lef = ref("0px")
let wid = ref("69px")

function onHandleClick(e: Event, index: number) {
    const target = e.target as HTMLElement
    lef.value = target.offsetLeft + "px"
    wid.value = target.offsetWidth + "px"
    setTimeout(() => {
        activeIndex.value = index
    }, 200)
}

</script>

<style lang="scss" scoped>
.tabbar {

    margin: 0 auto;
    display: flex;
    background-color: #fff;
    border-radius: 24px;
    position: relative;
    border: 4px solid #fff;



    .item {
        color: #3498db;
        margin: 0px;
        padding: 10px 20px;
        z-index: 10;
        cursor: pointer;

    }

    .active {
        color: #fff;
    }
}

.tabbar::before {
    content: "";
    width: var(--width);
    height: 100%;
    position: absolute;
    background-color: #3498db;
    border-radius: 24px;
    left: var(--left);
    transition: all 0.4s;
    transition-timing-function: ease-in-out;
}
</style>