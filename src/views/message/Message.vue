<template>
    <div class="card">
        <div class="title">留言</div>
        <div class="comments">

            <div class="comment-wrap">

                <div class="comment-block">
                    <form action="">
                        
                        <textarea style="resize: vertical" name="" id="" cols="30" rows="4" placeholder="Say somthing..."></textarea>
                
                        
                    </form>
                    <button class="sub-btn">submit</button>
                </div>
            </div>


            <div class="comment-wrap" v-for="(item, index) in messageData" v-key="index">
                <div class="photo">
                    <div class="avatar" style="background-image: url('http://1.15.138.41:8080/static/image/user.png')"></div>
                </div>
                <div class="comment-block">
                    <p class="comment-text">{{ item.article }}</p>
                    <div class="bottom-comment">
                        <div class="comment-date">{{ DateFormatPipe(item.createTime, 'yyyy-MM-dd HH:mm:ss') }}</div>
                        <ul class="comment-actions">
                            <li class="reply">属地：{{ item.city }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div class="page-box">
            <div class="page"><i class="iconfont icon-xiangzuo1"></i></div>
            <div class="page" v-show="page.current != 2" @click="_getPage()">{{ page.current - 2 }}</div>
            <div class="current">{{ page.current - 1 }}</div>
            <div class="page" v-show="page.totalPage >= page.current + 1" @click="_getPage(page.current)">{{ page.current + 1 }}</div>
            <div class="page"><i class="iconfont icon-xiangyou1"></i></div>
        </div>
</template>

<script setup lang="ts">
import { getUserIp, getPage } from '../../api/message'
import { onMounted, ref } from 'vue'
import Message from '../../util/Message'
import DateFormatPipe from '../../util/DateFormat'

let messageData = ref([])
let userIp = ref('')
let page = ref({
    current: 1,
    size: 20,
    total: 0,
    totalPage: 0
})

function _getUserIp() {
    getUserIp().then(res => {
        console.log(res)
        userIp = res.message
    })
}

function _getPage() {
    getPage(page.value).then(res => {
        console.log(res)
        if (res.code != 20007) {
            Message({ type: 'error', text: '获取数据失败' })
            return
        }
        messageData.value = res.data.records
        page.value.total = res.data.total
        page.value.current = res.data.current + 1
        page.value.totalPage = Math.ceil(page.value.total / 120)
    })
}

onMounted(() => {
    _getUserIp()
    _getPage()
})
</script>

<style scoped>
.card {
    margin-bottom: 20px;
    box-shadow: 0 0 10px #bdbdbd;
    background-color: #fff;
    border-radius: 10px 10px 10px 10px;
    transition: all 0.8s ease 0s;
    padding-bottom: 20px;

    .title {
        position: relative;
        top: 10px;
        text-align: center;
        font-size: 24px;
    }
}

.card:hover {
    transition: all 0.8s ease 0s;
    box-shadow: 0 0 18px #868484;
}
input,
textarea {
    outline: none;
    border: none;
    display: block;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    font-family: "PT Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
    font-size: 1rem;
    color: #555f77;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: #ced2db;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
    color: #ced2db;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
    color: #ced2db;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    color: #ced2db;
}

p {
    line-height: 1.3125rem;
}

.comments {
    margin: 2.5rem auto 0;
    max-width: 60.75rem;
    padding: 0 1.25rem;
}

.comment-wrap {
    margin-bottom: 4rem;
    display: table;
    width: 100%;
    min-height: 5.3125rem;
}
.comment-wrap:hover {
    transition: all 0.8s ease 0s;
    box-shadow: 0 0 18px #868484;
}

.photo {
    padding-top: 0.625rem;
    display: table-cell;
    width: 3.5rem;
}

.photo .avatar {
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 50%;
    background-size: contain;
    margin: 0 auto;
}

.comment-block {
    padding: 1rem;
    background-color: #fff;
    display: table-cell;
    vertical-align: top;
    border-radius: 0.1875rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);

    .sub-btn {
        float: center;
        background: #3498db;
        color: #fff;
        border: none;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        cursor: pointer;
        transition: 1s;
    }
    .sub-btn:hover {
        background: #0b629c;
    }
}

.comment-block textarea {
    width: 100%;
    max-width: 100%;
}

.comment-text {
    margin-bottom: 1.25rem;
}

.bottom-comment {
    color: #acb4c2;
    font-size: 0.875rem;
}

.comment-date {
    float: left;
}

.comment-actions {
    float: right;
}

.comment-actions li {
    display: inline;
}

.comment-actions li.complain {
    padding-right: 0.625rem;
    border-right: 1px solid #e1e5eb;
}

.comment-actions li.reply {
    padding-left: 0.625rem;
}

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
</style>