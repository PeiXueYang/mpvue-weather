<template>
  <div class="box">
    <div class="header">
      <img src="/static/img/mw.jpg" class="img-item" />
    </div>
    <div class="sec">
      <div class="blue st">代码已经开源</div>
      <div class="st sflex">
        <div class="fa-ic"><img src="/static/img/github.png" alt="" class="icons"></div>
        <div>欢迎 start</div>
      </div>
      <div class="st">https://github.com/PeiXueYang/mpvue-weather</div>
    </div>
    <div class="third">
      <div class="blue st">联系开发者</div>
      <div class="st sflex">
        <div class="fa-ic"><img src="/static/img/github.png" alt="" class="icons"></div>
        <div>通过Github反馈</div>
      </div>
      <div class="st">https://github.com/PeiXueYang/mpvue-weather</div>
      <div class="st sflex">
        <div class="fa-ic"><img src="/static/img/email.png" alt="" class="icons"></div>
        <div>通过Email反馈</div>
      </div>
      <div class="st">pxy@pxy.com</div>
      <div class="st sflex">
        <div class="fa-ic"><img src="/static/img/qq.png" alt="" class="icons"></div>
        <div>通过QQ反馈</div>
      </div>
      <div class="st">88888888</div>
    </div>
    <div class="bottom">
      <div class="blue st">鸣谢</div>
      <div class="st">和风天气</div>
    </div>
  </div>
</template>

<script>
  import {
    formatTime
  } from "@/utils/index";
  export default {
    data() {
      return {};
    },
  
    created() {},
    onLoad: function(options) {
      wx.setNavigationBarTitle({
        title: "关于"
      });
      wx.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: "#40a7e7"
      });
    }
  };
</script>

<style scoped>
  .box {
    min-height: 100vh;
    background-color: #f4f6f9;
    font-size: 14px;
    font-family: Microsoft YaHei;
  }
  
  .header {
    height: 130px;
    background: #fff;
    text-align: center;
  }
  
  .img-item {
    width: 100px;
    height: 100px;
    margin-top: 10px;
  }
  
  .sec {
    height: 110px;
    background: #fff;
    margin-top: 10px;
    padding: 0 20px;
  }
  
  .third {
    height: 240px;
    background: #fff;
    margin-top: 10px;
    padding: 0 20px;
  }
  
  .bottom {
    padding: 0 20px;
    height: 100px;
    background: #fff;
    margin-top: 10px;
  }
  
  .blue {
    color: #40a7e7;
    font-size: 16px;
  }
  
  .st {
    height: 30px;
    line-height: 30px;
  }
  
  .sflex {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    padding-bottom: 16rpx;
  }
  
  .fa-ic {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2.2em;
  }
  
  .icons {
    width: 32rpx;
    height: 32rpx;
    margin-right: 20rpx;
  }
</style>
