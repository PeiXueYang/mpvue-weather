<template>
  <div class="container">
    <img :src="initbgImg" alt="" class="bg-img"  >
    <div v-if="showSelectImg">
      <div class="search">
        <div class="warpper">
          <img src="/static/img/search.png" alt="" class="search-img">
          <input type="text" class="search-input" placeholder="查询其他城市" 
          selection-start='-1' selection-end='-1'
           placeholder-style='color:#fff' maxlength='20' confirm-type='search'
           @blur="search()"
           v-model="searchInfo">
        </div>
      </div>
      <div class="content">
        <div class="avatarInfo">
          <img src="/static/img/down-arrow.png" alt="" class="downArrow" @click="showSelImg">
        </div>
        <div class="info">
          <div class="city">
            <div class="name">{{currentCity}}</div>
            <span class="time">{{date}} 更新</span>
          </div>
          <div class="message">
            {{message}}
          </div>
          <div class="temp">
            {{curWeather.tmp_max}}
            <div class="fh">。</div>
          </div>
          <div class="weather">{{curWeather.cond_txt_d}}</div>
          <div class="pm"> 优 38</div>
        </div>
        <div class="guide">
          <weather :weatherInfo='weather_data'></weather>
        </div>
      </div>
    </div>
    <div v-else class="changeBacground">
       <div class="bg-txt">更换背景</div>
       <div class="selc-img">
          <div class="img-box" v-for="(item,index) in bcgImgList" :key='index' @click="changebgUrl(item.src,item.topColor)">
              <img :src="item.src" alt="" class="sel-img">
          </div>
       </div>
       <img src="/static/img/up-arrow.png" alt="" class="arrow-up" @click="hideSelImg">
    </div>
    <!-- menu -->
    <div class="menus">
        <img class="menu " src="/static//img/location.png" style="transition: transform 200ms ease-out 0ms, opacity; transform: translate(0px, 0px) rotateZ(0deg); transform-origin: 50% 50% 0px; opacity: 0;"> 
        <img class="menu" src="/static//img/setting.png" style="transition: transform 200ms ease-out 0ms, opacity; transform: translate(0px, 0px) rotateZ(0deg); transform-origin: 50% 50% 0px; opacity: 0;"> 
        <img class="menu" src="/static//img/info.png" style="transition: transform 200ms ease-out 0ms, opacity; transform: translate(0px, 0px) rotateZ(0deg); transform-origin: 50% 50% 0px; opacity: 0;"> 
        <img class="menu main" src="/static//img/menu.png" style="transition: transform 200ms ease-out 0ms; transform: rotateZ(0deg); transform-origin: 50% 50% 0px;"> 
    </div>
  </div>
</template>
<script>
import weather from "@/components/weather-info";
import { messages } from "@/common/js/message";
import { formatNumber, formatTime } from "@/utils/index";

export default {
  data() {
    return {
      message: "",
      date: "",
      initbgImg: "/static/img/accomplishment-adventure-clear-sky-585825.jpg",
      bcgImgList: [
        {
          src: "/static/img/beach-bird-birds-235787.jpg",
          topColor: "#393836"
        },
        {
          src: "/static/img/clouds-forest-idyllic-417102.jpg",
          topColor: "#0085e5"
        },
        {
          src: "/static/img/backlit-dawn-dusk-327466.jpg",
          topColor: "#2d2225"
        },
        {
          src: "/static/img/accomplishment-adventure-clear-sky-585825.jpg",
          topColor: "#004a89"
        },
        {
          src: "/static/img/fog-himalayas-landscape-38326.jpg",
          topColor: "#b8bab9"
        },
        {
          src: "/static/img/asphalt-blue-sky-clouds-490411.jpg",
          topColor: "#009ffe"
        },
        {
          src: "/static/img/aerial-climate-cold-296559.jpg",
          topColor: "#d6d1e6"
        },
        {
          src: "/static/img/beautiful-cold-dawn-547115.jpg",
          topColor: "#ffa5bc"
        }
      ],
      showSelectImg: true,
      currentCity: "上海",
      weather_data: [],
      curWeather: {},
      searchInfo: ""
    };
  },
  components: {
    weather
  },
  methods: {
    search() {
      this.currentCity = this.searchInfo;
      this.getWeather();
    },
    changebgUrl(src, color) {
      this.initbgImg = src;
      wx.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: color
      });
    },
    showSelImg() {
      this.showSelectImg = false;
    },
    hideSelImg() {
      this.showSelectImg = true;
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    },
    getLocation() {
      wx.getLocation({
        type: "wgs84",
        success: res => {
          // console.log(res, "res");
          
        },
        fail: err => {
          console.log(err, "err");
        }
      });
    },
    //获取天气数据
    getWeather(lat,lnt) {
      let that = this;
      that.weather_data = [];
      wx.showLoading({
        title: "加载中...",
        mask: true
      });
      wx.request({
        method: "get",
        url:
          "https://free-api.heweather.com/s6/weather?location=" +
          `${that.currentCity}` +
          "&key=5aeaeee5b8ad4a658b963c722ddfc645",
        success: res => {
          wx.hideLoading();
          this.searchInfo = "";
          console.log(res.data.HeWeather6, "res");
          this.curWeather = res.data.HeWeather6[0]["daily_forecast"][0];
          console.log(this.curWeather, "==");
          let data = res.data.HeWeather6[0]["daily_forecast"];
          for (let i in data) {
            that.weather_data.push({
              date: new Date(data[i]["date"]).getDay(),
              temp: data[i]["tmp_min"] + "~" + data[i]["tmp_max"] + "℃",
              weather: data[i]["cond_txt_d"],
              wind: data[i]["wind_dir"] + data[i]["wind_sc"] + "级"
            });
          }
        },
        fail: err => {
          wx.showToast({
            title: "加载失败.",
            duration: 1000
          });
        }
      });
    }
  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getLocation();
    this.getWeather();
  },
  mounted() {
    //不同时刻的  提示信息
    this.message = messages();
    this.date = formatTime(new Date());
  },

  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "轻天气"
    });
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "#004a89"
    });
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
  font-size: 26rpx;
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
.changeBacground {
  position: relative;
  z-index: 20;
  width: 100%;
  top: -45px;
}
.bg-txt {
  width: 90%;
  margin: 0 auto;
}
.selc-img {
  width: 90%;
  margin: 5px auto;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
}
.sel-img {
  width: 140rpx;
  height: 230rpx;
  display: inline-block;
}
.img-box {
  margin: 6px;
}
.arrow-up {
  width: 64rpx;
  height: 64rpx;
  display: block;
  margin: 10px auto;
}
.menus {

}
.menu {
  height: 40px;
  width: 40px;
  position: fixed;
  z-index: 100220;
  bottom: 150rpx;
  right: 70rpx;
  opacity: 1;
}

</style>
