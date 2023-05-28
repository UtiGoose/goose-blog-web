<template>
    <div class="card">
        <div class="title">便签</div>
        <div class="item">
            <div class="ava">
                <div class="avatar-box">
                    <img class="avatar" src="http://1.15.138.41:8080/static/image/user.png" alt="">
                </div>
            </div>
            <div class="chat">
                <img class="image" src="../../static/image/bg1.jpg" alt="">
                同乡您好，很高兴能够遇到你！可以跟我聊聊吗？
                <hr class="hr-dashed">
                <div class="time">2023-05-30 10:30:01</div>
            </div>
        </div>
        <div class="item">
            <div class="ava">
                <div class="avatar-box">
                    <img class="avatar" src="http://1.15.138.41:8080/static/image/user.png" alt="">
                </div>
            </div>
            <div class="chat">
                <img class="image" src="../../static/image/bg1.jpg" alt="">
                同乡您好，很高兴能够遇到你！可以跟我聊聊吗？
                <hr class="hr-dashed">
                <div class="time">2023-05-30 10:30:01</div>
            </div>
        </div>
        <div class="item">
            <div class="ava">
                <div class="avatar-box">
                    <img class="avatar" src="http://1.15.138.41:8080/static/image/user.png" alt="">
                </div>
            </div>
            <div class="chat">
                <img class="image" src="../../static/image/bg1.jpg" alt="">
                同乡您好，很高兴能够遇到你！可以跟我聊聊吗？
                <hr class="hr-dashed">
                <div class="time">2023-05-30 10:30:01</div>
            </div>
        </div>
        <div class="item">
            <div class="ava">
                <div class="avatar-box">
                    <img class="avatar" src="http://1.15.138.41:8080/static/image/user.png" alt="">
                </div>
            </div>
            <div class="chat">
                <img class="image" src="../../static/image/bg1.jpg" alt="">
                同乡您好，很高兴能够遇到你！可以跟我聊聊吗？
                <hr class="hr-dashed">
                <div class="time">2023-05-30 10:30:01</div>
            </div>
        </div>
        <div class="add-btn">加载更多</div>
        <div class="add-none">已经到底了哦~</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.card {
    margin-bottom: 20px;
    box-shadow: 0 0 10px #bdbdbd;
    background-color: #fff;
    border-radius: 10px 10px 10px 10px;
    transition: all 0.8s ease 0s;
    padding-bottom: 20px;
    padding-top: 20px;

    .title {
        position: relative;
        top: 10px;
        text-align: center;
        font-size: 24px;
    }

    .add-btn {
        font-size: 14px;
        margin: 40px auto;
        color: #fff;
        background-color: #3498db;
        height: 35px;
        width: 80px;
        text-align: center;
        line-height: 35px;
        border-radius: 5px 5px 5px 5px;
        box-shadow: 3px 3px 3px gray;
        cursor: pointer;
        transition: .5s;
    }
    .add-btn:hover {
        background-color: #FF8C00;
        transition: .5s;
    }
    .add-none {
        margin-top: 40px;
        margin-bottom: 40px;
        color: gray;
        text-align: center;
        font-size: 16px;
    }
    .item:nth-child(odd) {
        display: flex;
        margin-top: 30px;
        margin-left: 20px;

        .ava {
            height: 50px;
            width: 50px;

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

        .chat {
            margin-left: 20px;
            width: 60%;
            padding: 10px 6px;
            border: 2px solid #ccc;
            border-radius: 5px;
            word-break: break-all;
            background-color: #FF8C00;
            color: #000;

            .image {
                width: 100%;
                margin-bottom: 5px;
            }

            .hr-dashed {
                border: 0;
                border-top: 2px dashed #f9f9f9;
            }

            .time {
                font-size: 12px;
                color: #f2f2f2;
                margin-left: 2px;
            }
        }

    }
    .item:nth-child(even) {
        display: flex;
        margin-top: 30px;
        margin-left: 20px;

        .ava {
            height: 50px;
            width: 50px;

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

        .chat {
            margin-left: 20px;
            width: 60%;
            padding: 10px 6px;
            border: 2px solid #ccc;
            border-radius: 5px;
            word-break: break-all;
            background-color: #3498db;
            color: #000;

            .image {
                width: 100%;
                margin-bottom: 5px;
            }

            .hr-dashed {
                border: 0;
                border-top: 2px dashed #f9f9f9;
            }

            .time {
                font-size: 12px;
                color: #f2f2f2;
                margin-left: 2px;
            }
        }



    }


}

.card:hover {
    transition: all 0.8s ease 0s;
    box-shadow: 0 0 18px #868484;
}
</style>