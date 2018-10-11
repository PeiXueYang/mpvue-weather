<template>
  <div class="container">
    <img src="/static/img/accomplishment-adventure-clear-sky-585825.jpg" alt="" class="bg-img">
    <div class="search">
      <div class="warpper">
        <img src="/static/img/search.png" alt="" class="search-img">
        <input type="text" class="search-input" placeholder="查询其他城市" selection-start='-1' selection-end='-1' placeholder-style='color:#fff'>
      </div>
    </div>
    <div class="content">
      <div class="avatarInfo">
        <img src="/static/img/down-arrow.png" alt="" class="downArrow">
      </div>
      <div class="info">
        <div class="city">
          <div class="name">上海市</div>
          <span class="time">2018-10-11 14：30 更新</span>
        </div>
        <div class="message">
          天凉了，注意保暖~
        </div>
        <div class="temp">
          20
          <div class="fh">。</div>
        </div>
        <div class="weather">多云</div>
        <div class="pm"> 优 38</div>
      </div>
      <div class="guide">
        <weather></weather>
      </div>
    </div>
    <h1>dsddd</h1>
  </div>
</template>

<script>
import weather from '@/components/weather-info'
export default {
  data() {
    return {};
  },
  components: {
    weather
  },

  methods: {
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  padding-top: 100rpx;
  color: #fff;
  width: 100%;
  box-sizing: 100%;
}

.bg-img {
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.search {
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90rpx;
  background-color: rgba(255, 255, 255, 0);
}

.warpper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 28rpx;
  height: 60rpx;
  margin: 15rpx 50rpx;
  padding: 0 15rpx;
  box-sizing: border-box;
  border: none;
  border-bottom: 1rpx solid #fff;
}

.search-img {
  width: 14px;
  height: 14px;
  display: inline-block;
  overflow: hidden;
}

.search-input {
  display: block;
  height: 1.4rem;
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
  font-family: UICTFontTextStyleBody;
  min-height: 1.4rem;
  color: #fff;
  margin-left: 15rpx;
}

.content {
  position: relative;
  z-index: 2;
  transition: 0.3s ease;
  width: 100%;
}

.avatarInfo {
  display: flex;
  align-items: center;
  padding: 0 50rpx;
  margin-top: 30px;
}

.downArrow {
  width: 30rpx;
  height: 30rpx;
  display: inline-block;
  overflow: hidden;
  margin-left: 50px;
}

.info {
  width: 100%;
  background: transparent;
  margin-bottom: 30rpx;
}

.city {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20rpx 50rpx;
  font-size: 66rpx;
  color: #fff;
}

.name {
  width: 5em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.time {
  display: block;
  text-align: right;
  font-size: 24rpx;
}

.message {
  font-size: 22rpx;
  color: #fff;
  padding: 30rpx 50rpx 0;
  box-sizing: border-box;
}

.temp {
  height: 360rpx;
  font-size: 200rpx;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  box-sizing: border-box;
  overflow: hidden;
}

.weather {
  margin-bottom: 30rpx;
}

.weather {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.pm {
  font-size: 24rpx;
  height: 1em;
  line-height: 1em;
  padding: 10rpx 20rpx;
  border-radius: 20rpx;
  background: rgba(240, 240, 240, 0.2);
  width: 100rpx;
  margin: 0 auto;
  text-align: center;
}

.fh {
  font-size: 55px;
  text-align: top;
  position: absolute;
  top: 10px;
  left: 65vw;
}
</style>
