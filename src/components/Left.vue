<template>
    <div class="container">
        <div :class="isFixed ? 'left-fix' : ''" ref="fixedLeft">
            <div class="card">
                <div class="ava">
                    <div class="avatar-box">
                        <img class="avatar" src="../static/image/ava.jpg" alt="">
                    </div>
                </div>
                <div class="nickname">utigoose</div>
                <div class="description">A junior at Nantong University.</div>
                <div class="article-info">
                    <div class="item">
                        <div class="title">category</div>
                        <div class="count">{{ userData.categoryNum }}</div>
                    </div>
                    <div class="item">
                        <div class="title">article</div>
                        <div class="count">{{ userData.articleNum }}</div>
                    </div>
                    <div class="item">
                        <div class="title">notes</div>
                        <div class="count">{{ userData.noteNum }}</div>
                    </div>
                </div>

                <a href="https://gitee.com/lin-geese" target="_blank">
                    <button class="btn"> <i class="iconfont icon-github-fill"></i> Follow me</button>
                </a>

                <div class="time">Last updated: 2023-05-21 10:30:01</div>
            </div>
            <div class="card">
                <div class="card-title">
                    <div class="text"><i style="color: orange;" class="iconfont icon-icon_category"></i> category</div>
                    <i class="iconfont icon-xiangyou1"></i>
                </div>

                <div v-for="(classificationItem, classificationIndex) in classificationData" v-key="classificationIndex">
                    <div class="category-f">
                        <i class="iconfont icon-dian dian"></i>
                        <div class="text">{{ classificationItem.name }}</div>
                        <div class="count">{{ classificationItem.num }}</div>
                    </div>

                    <div class="category-s" v-for="(tagItem, tagIndex) in classificationItem.tagList" v-key="tagIndex">
                        <i class="iconfont icon-dian dian"></i>
                        <div class="text">{{ tagItem.name }}</div>
                        <div class="count">{{ tagItem.num }}</div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref, onUnmounted, defineComponent } from 'vue'
import { getClassificationList, getUserInfo } from '../api/blog'
import Message from '../util/Message'

defineComponent({
    name: 'Left'
})
let isFixed = ref(false)
let fixedLeft = ref()
let fixedLeftNum = ref(0)
let classificationData = ref([{
    name: '',
    num: '',
    tagList: [{
        name: '',
        num: ''
    }]
}])
let userData = ref({
    categoryNum: 0,
    articleNum: 0,
    noteNum: 0
})


function _getUserInfo() {
    getUserInfo().then(res => {
        if (res.code != 20007) {
            Message({ type: 'error', text: '获取数据失败' })
            return
        }
        userData.value = res.data
    })
}
function _getClassificationList() {
    getClassificationList().then(res => {
        if (res.code != 20007) {
            Message({ type: 'error', text: '获取数据失败' })
            return
        }
        classificationData.value = res.data
    })
}

onBeforeMount(() => {
    window.addEventListener("beforeunload", () => {
        window.scroll(0, 0);
    });
    window.removeEventListener("beforeunload", () => {
        window.scroll(0, 0);
    });
})
onMounted(() => {
    _getClassificationList()
    _getUserInfo()
    window.addEventListener('scroll', handleScroll)
    fixedLeftNum.value = fixedLeft.value.getBoundingClientRect().top - 120
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
const handleScroll = () => {

    const height: number = fixedLeft.value.getBoundingClientRect().top


    if (document.documentElement.scrollTop < fixedLeftNum.value) {
        isFixed.value = false
        return
    }
    if (height <= 120) {
        isFixed.value = true
    } else {
        isFixed.value = false
    }
}

</script>

<style lang="scss" scoped>
.container {
    margin-left: 15%;
    width: 15%;
    font-family: Nagoda;
}

.left-fix {
    position: fixed;
    width: 15%;
    top: 120px;
    z-index: 8;
}



.card {
    margin-bottom: 20px;
    height: auto;
    width: 100%;
    box-shadow: 0 0 10px #bdbdbd;
    background-color: #fff;
    border-radius: 10px 10px 10px 10px;
    transition: all 0.8s ease 0s;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;


    .category-f {
        display: flex;
        padding-left: 20px;
        padding-right: 30px;
        margin-top: 5px;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        color: gray;

        .dian {
            color: orange;
            font-size: 30px;


        }

        .text {
            text-align: left;
            width: 85%;
        }
    }

    .category-f:hover {
        padding-left: 30px;
        padding-right: 40px;
        background-color: #3498db;
        transition: .5s;
        color: #fff;

    }

    .category-s {
        display: flex;
        padding-left: 30px;
        padding-right: 30px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        color: gray;

        .dian {
            color: #00d463;
            font-size: 30px;


        }

        .text {

            text-align: left;
            width: 85%;
        }
    }

    .category-s:hover {
        padding-left: 40px;
        padding-right: 40px;
        color: #fff;
        background-color: #3498db;
        transition: .5s;
    }

    .card-title {
        display: flex;

        .text {
            margin-left: 20px;
            text-align: left;
            width: 85%;
            color: gray;
        }
    }

    .ava {
        margin: 0 auto;
        height: 100px;
        width: 100px;

        .avatar-box {

            position: relative;
            width: 100%;
            height: 0;
            padding-top: 100%;
            border-radius: 50%;
            overflow: hidden;

            .avatar {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
            }


        }

    }

    .nickname {
        margin-top: 30px;
        font-size: larger;
    }

    .description {
        margin-top: 5px;
        color: gray;
    }

    .article-info {
        display: flex;
        margin-top: 20px;

        .item {
            width: 33.3%;

            .title {
                color: gray;
                font-size: large;
            }

            .count {
                color: gray;
            }
        }
    }

    .btn {
        margin-top: 20px;
        transition: all 1.5s ease 0s;
        position: relative;
        width: 80%;
        padding: 10px;
        text-align: center;
        color: #fff;
        background: #3498db;
        cursor: pointer;
        border-radius: 6px;
        border: none;
    }

    .btn:after,
    .btn:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 100%;
        background: #3498db;
        z-index: -2;
        border-radius: 4px;
    }

    .btn:hover {
        z-index: 1;
        background: transparent;
    }

    .btn:before {
        transition: .3s;
        background: #0b629c;
        z-index: -1;
    }

    .btn:hover:after,
    .btn:hover:before {
        width: 100%;
    }

    .time {
        margin-top: 20px;
        color: gray;
    }
}

.card:hover {
    transition: all 0.8s ease 0s;
    box-shadow: 0 0 18px #9c9c9c;
}
</style>