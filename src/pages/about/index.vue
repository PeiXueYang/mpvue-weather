<template>
  <div class="box">
    <div class="header">
      <img src="/static/img/mw.jpg" class="img-item" />
    </div>
    <div class="sec">
      <div class="blue st">代码已经开源</div>
      <div class="st">可随意start</div>
      <div class="st">12345678</div>
    </div>
    <div class="third">
      <div class="blue st">联系开发者</div>
      <div class="st">通过Github反馈</div>
      <div class="st">123456</div>
       <div class="st">通过Github反馈</div>
      <div class="st">123456</div>
       <div class="st">通过Github反馈</div>
      <div class="st">123456</div>
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
  }
  
  .sec {
    height: 120px;
    background: #fff;
    margin-top: 10px;
    padding: 0 20px;
  }
  
  .third {
    height: 220px;
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
  .blue{
    color: #40a7e7;
    font-size: 16px;
  }
  .st{
    height: 30px;
    line-height: 30px;
  }
</style>
