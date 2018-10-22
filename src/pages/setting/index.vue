<template>
  <div class="setting">
      <div class="item-top">
         <div class="title">
            <div>自定义</div>
         </div>
         <div class="item-top-content">
           <div class="item">
               <div>打开顶部城市天气快捷搜索</div>
               <switch checked="" color="#40a7e7" data-switchparam="hiddenSearch"></switch>
           </div>
           <div class="item">
               <div>显示生活指数</div>
               <switch checked="" color="#40a7e7" data-switchparam="hiddenSearch"></switch>
           </div>
         </div>
      </div>
      <div class="fa-sec">
         <div class="title">
            <div>检查更新</div>
         </div>
        <div class="item">
          <div class="nfc">打开首页更新提醒</div>
          <switch checked="" color="#40a7e7" data-switchparam="hiddenSearch"></switch>
        </div>
      </div>
      <div class="bottom-item" >
         <div class="title">
            <div>小工具</div>
         </div>
         <div class="cont">
              <div class="nfc">NFC</div>
              <div class="item" @click="checked">
                <div>检测是否支持NFC</div>
                <img src="/static/img/arrow.png" alt="" class="arrow" >
              </div>
         </div>
         <div class="cont">
            <div>屏幕亮度</div>
            <div class="item">
                <div>当前屏幕亮度</div>
                <div class="tip">范围0~100，0 最暗，100 最亮</div>
                <div>44</div>
            </div>
            <div class="item">
                <div>
                  <div>设置屏幕亮度</div>
                </div>
            </div>
             <div>
                <slider  class="slider" active-color="#40a7e7" block-color="#40a7e7" block-size="12" 
                     max="100" min="0" show-value="" step="1" value="44" @bindchanging='slideChange($event)'>
                </slider>
             </div>
             <div class="item">
               <div>保持常亮</div>
               <switch checked="" color="#40a7e7" data-switchparam="hiddenSearch"></switch>
             </div>
              <div class="item" @click="checkedsInfo">
                <div>检查系统信息</div>
                <img src="/static/img/arrow.png" alt="" class="arrow">
              </div>
         </div>
      </div>
  </div>
</template>

<script>
// Use Vuex
export default {
  data() {
    return {};
  },
  computed: {
    count() {}
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
     slideChange(e){
      console.log('slider', e.detail.value)
    },
    checkedsInfo() {
      wx.getSystemInfo({
        success: res => {
          console.log(res, "res");
          wx.showModal({
            title: "当前机型",
            content: res.model,
            showCancel: false
          });
        },
        fail: err => {
          console.log(err);
        }
      });
    },
    checked() {
      wx.getHCEState({
        success: res => {
          if (res.errCode == 0) {
            wx.showModal({
              title: "提示",
              content: "您的设备支持NFC功能.",
              showCancel: false
            });
          }
        },
        fail: err => {
          console.log(err, "erer");
        }
      });
    }
  },
 
  onLoad: function(options) {
  }
};
</script>

<style scoped>
.setting {
  font-size: 28rpx;
  color: #666;
  min-height: 100vh;
  background: #e9e9e9;
}
.item-top {
  overflow: hidden;
  padding: 0 40rpx;
  background: #fff;
  margin-bottom: 20rpx;
}
.title {
  font-size: 32rpx;
  color: #40a7e7;
  margin: 26rpx 0;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100rpx;
}
.fa-sec,
.bottom-item {
  overflow: hidden;
  padding: 0 40rpx;
  background: #fff;
  margin-bottom: 20rpx;
}
.nfc {
  font-size: 28rpx;
  color: #40a7e7;
}
.arrow {
  width: 32rpx;
  height: 32rpx;
  display: inline-block;
  overflow: hidden;
}
.tip {
  font-size: 22rpx;
  color: #999;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.slider {
  width: 100%;
  margin: 0;
}
</style>
