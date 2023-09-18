<template>
    <div class="card">

        <img class="img" :src="'http://1.15.138.41:8080/static/image/gooseBlog/' + data.image"
            onerror="src=`http://1.15.138.41:8080/static/image/gooseBlog/404.jpg`" alt="">
        <div class="divd">展示图</div>

        <div class="article" v-html="data.article" v-highlight></div>


    </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'
import { getById } from '../../api/blog'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

let data = ref({})


function _getById() {

    const router = useRouter()
    console.log(router.currentRoute.value.query.id)
    getById({ id: router.currentRoute.value.query.id }).then(res => {
        console.log(res)
        data.value = res.data
        data.value.article = marked(data.value.article)

    })
}


onMounted(() => {



    _getById()

})
</script>

<style scoped>
.card {
    margin-bottom: 20px;
    box-shadow: 0 0 10px #bdbdbd;
    background-color: #fff;
    border-radius: 10px 10px 10px 10px;
    transition: all 0.8s ease 0s;
    padding: 10px 20px 20px 20px;

    .img {
        width: 80%;
        margin-left: 10%;
        margin-top: 10px;
    }

    .article {
        margin-top: 50px;
    }

    .divd {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        color: #ccc;
        position: relative;
        margin-bottom: 15px;

        &::before {
            content: '';
            position: absolute;
            left: -20px;
            top: 19px;
            z-index: 1;
            background-image: linear-gradient(to right,#e66465, #9198e5);
            width: 45%;
            height: 5px;
        }

        &::after {
            content: '';
            position: absolute;
            right: -20px;
            top: 19px;
            z-index: 1;
            background-image: linear-gradient(to right, #9198e5, #e66465);
            width: 45%;
            height: 5px;
        }
    }
}
</style>