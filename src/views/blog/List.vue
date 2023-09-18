<template>
    <div>
        <div class="card" v-for="(item, index) in data" v-key="index">
            <div class="img-box" v-if="index % 2 == 0">
                <img class="image" :src="'http://1.15.138.41:8080/static/image/gooseBlog/' + item.image" onerror="src=`http://1.15.138.41:8080/static/image/gooseBlog/404.jpg`" @click="toArticle(item.id)" alt="">
            </div>
            <div class="text-box">
                <div class="title" @click="toArticle(item.id)">{{ item.title }}</div>
                <div class="info">发表时间：{{ item.createTime }} | {{ item.classification }} > {{ item.tag }}</div>
                <div class="label">
                    {{ item.introduction }}
                </div>
            </div>
            <div class="img-box-r" v-if="index % 2 == 1">
                <img class="image" :src="'http://1.15.138.41:8080/static/image/gooseBlog/' + item.image" onerror="src=`http://1.15.138.41:8080/static/image/gooseBlog/404.jpg`" @click="toArticle(item.id)" alt="">
            </div>
        </div>

        <div class="page-box">
            <div class="page"><i class="iconfont icon-xiangzuo1"></i></div>
            <div class="page" v-show="page.current != 1" @click="_getPage(page.current - 1)">{{ page.current - 1 }}</div>
            <div class="current">{{ page.current }}</div>
            <div class="page" v-show="page.totalPage >= page.current + 1" @click="_getPage(page.current + 1)">{{ page.current + 1 }}</div>
            <div class="page"><i class="iconfont icon-xiangyou1"></i></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getPage } from '../../api/blog'
import { ref, onMounted } from 'vue'
import Message from '../../util/Message'
import { useRouter } from "vue-router"

const router = useRouter()
let page = ref({
    current: 1,
    size: 10,
    total: 0,
    totalPage: 0
})


// 列表
let data = ref([{
    title: ''
}])

function toArticle(id: number) {

    router.push({
        path: '/article',
        query: {
            id: id
        }
    })

}

function _getPage(current: number) {
    const params = {
        current: (current - 1) * 10,
        size: page.value.size
    }
    getPage(params).then(res => {
        if (res.code != 20007) {
            Message({ type: 'error', text: '获取数据失败' })
            return
        }

        console.log(res)
        data.value = res.data.records
        page.value.total = res.data.total
        page.value.current = res.data.current + 1
        page.value.totalPage = Math.ceil(page.value.total / 10)
    })
}

onMounted(() => {
    _getPage(page.value.current)
})
</script>

<style lang="scss" scoped>

.page-box {
    display: flex;
    width: 200px;
    margin: 0 auto;

    .page {
        height: 25px;
        width: 25px;
        color: #3498db;
        line-height: 25px;
        text-align: center;
        margin-left: 5px;
        cursor: pointer;

    }

    .current {
        height: 25px;
        width: 25px;
        color: #fff;
        background-color: #3498db;
        line-height: 25px;
        text-align: center;
        margin-left: 5px;
        border-radius: 5px;
        cursor: pointer;
    }
}

.card {
    margin-bottom: 20px;
    box-shadow: 0 0 10px #bdbdbd;
    background-color: #fff;
    border-radius: 10px 10px 10px 10px;
    transition: all 0.8s ease 0s;
    display: flex;
    height: 310px;

    .img-box {
        width: 45%;
        height: 310px;
        overflow: hidden;
        border-radius: 10px 0 0 10px;

        .image {
            cursor: pointer;
            display: block;
            width: 100%;
            height: 100%;
            transition: all 1s;
            object-fit: cover;
        }

        .image:hover {
            transform: scale(1.4); //放大 倍数随意
        }
    }

    .img-box-r {
        width: 45%;
        height: 310px;
        overflow: hidden;
        border-radius: 0 10px 10px 0;

        .image {
            display: block;
            width: 100%;
            height: 100%;
            transition: all 1s;
            object-fit: cover;
        }


    }


    .text-box {
        height: auto;
        width: 40%;
        margin: auto auto;
        line-height: 30px;

        .icon {
            font-size: 22px;
            position: relative;
            top: 3px;
        }

        .icon1 {
            position: relative;
            top: 1px;
        }

        .title {
            cursor: pointer;
            font-size: 26px;
            color: #000;
            transition: .5s;
        }

        .title:hover {
            color: #3498db;
            transition: .5s;
        }

        .info {
            font-size: 13px;
            color: gray;
        }

        .label {
            font-size: 14px;
            word-break: break-all;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }
}

.card:hover {
    transition: all 0.8s ease 0s;
    box-shadow: 0 0 18px #868484;
    .image {
            transform: scale(1.2); //放大 倍数随意
        }
}
</style>