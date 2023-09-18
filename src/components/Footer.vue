<template>
    <!-- Footer -->
    <div class="footer">
        <div class="footer-box">
            <img class="icon" src="../static/image/icon-s.png" alt="">

            <div class="text">转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源，商业媒体及纸媒请先联系：1369362184@qq.com</div>
            <div class="text"><span style="font-size: 15px;">©</span><span>GOOSE NEST, powered by
                    LinShanXian.</span></div>
        </div>
        <div class="connection">
            <div class="btn-group-title">contact with me</div>
            <div class="btn-group">
                <a class="btn" @click="Message({ type: 'warn', text: '暂不提供~' })">
                    <i class="iconfont icon-weixin"></i>
                </a>
                <!-- QQ的 icon 特殊处理 -->
                <a class="btn" @click="Message({ type: 'warn', text: '暂不提供~' })">
                    <i class="iconfont icon-qq" style="position: relative; bottom: 3px;"></i>
                </a>
                <a class="btn" href="https://github.com/UtiGoose" target="_blank">
                    <i class="iconfont icon-github"></i>
                </a>
                <a class="btn" href="https://gitee.com/lin-geese" target="_blank">
                    <i class="iconfont icon-gitee"></i>
                </a>
                <a class="btn" href="https://space.bilibili.com/45310573" target="_blank">
                    <i class="iconfont icon-bilibili"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import Message from '../util/Message'

defineComponent({
    name: 'Footer'
})

</script>

<style lang="scss" scoped>


.footer {
    height: 150px;
    width: 100%;
    background-color: #3498db;
    display: flex;

    .footer-box {

        line-height: 20px;
        margin-left: 22%;
        padding-top: 10px;

        .icon {
            width: 150px;
        }

        .text {
            display: flex;
            font-size: 10px;
            color: #fff;
        }
    }

    .connection {
        position: absolute;
        right: 22%;

        .btn-group-title {
            margin: 10px 10px 0 10px;
            color: #fff;
            font-size: large;
        }

        .btn-group {
            align-items: center;
            display: flex;

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                width: 80px;
                height: 80px;
                background: #f1f1f1;
                margin: 10px;
                border-radius: 30%;
                box-shadow: 0 5px 15px -5px #00000070;
                color: #3498db;
                overflow: hidden;
                position: relative;

                &:before {
                    content: '';
                    position: absolute;
                    width: 120%;
                    height: 120%;
                    background: #3498db;
                    transform: rotate(45deg);
                    left: -110%;
                    top: 90%;
                }

                &:hover::before {
                    animation: social-hover .7s linear;
                    top: -10%;
                    left: -10%;
                }

                i {
                    line-height: 90px;
                    font-size: 26px;
                    transition: .2s linear;
                }

                &:hover i {
                    transform: scale(1.3);
                    color: #f1f1f1;
                }
            }

            @keyframes social-hover {
                0% {
                    left: -110%;
                    top: 90%;
                }

                50% {
                    left: 10%;
                    top: -30%;
                }

                100% {
                    top: -10%;
                    left: -10%;
                }
            }
        }
    }


}</style>