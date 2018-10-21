<template>
  <div class="counter-warp">
    <div class="wrap">
      <div class="search">
        <div class="inner">
          <img src="/static/img/search_grey.png" alt="" class="icon">
          <input type="text" placeholder="搜索城市" class="input" @blur="searchCity()" v-model="scity">
        </div>
        <span class="cancle" @click="clear">清空</span>
      </div>
    </div>
    <div class="bottom" v-if="showCityList">
      <div class="fa-city" v-for="(item,index) in cityData" :key='index'>
      <div class="key">{{index}}</div>
      <div class="values">
        <div class="value"  v-for="(it,idx) in item" :key='idx' @click="chooseCity(it.name)">{{it.name}}</div>
      </div>
      </div>
    </div>
    <div class="none" v-else>
       暂无城市信息
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import { obj } from "@/common/js/cityData";
import { inputFilter } from "@/common/js/filter";
export default {
  data() {
    return {
      cityData: "",
      scity: "",
      showCityList:true,
    };
  },
  computed: {
    count() {
      return store.state.count;
    }
  },
  watch:{
      scity:function(){
         if(!this.scity){
            this.showCityList = true
         }
      }
  },
  mounted() {
   
  },
  created() {
     let cities = this.getSortedAreaObj(obj.cities || []);
     this.cityData = cities;
  },
  methods: {
    clear(){
       this.scity = ''
    },
    searchCity() {
     let alternative = {}
     let cities =   this.cityData 
      let scity = this.scity.replace(/\s+/g, "");
      if (scity) {
        for (let i in cities) {
          let items = cities[i];
          for (let j = 0, len = items.length; j < len; j++) {
            let item = items[j];
            if (item.name.indexOf(scity) !== -1) {
              this.cityData = {}
              if (inputFilter(alternative[i])) {
                  alternative[i] = []
                }
                this.cityData[i] = []
                alternative[i].push(item)
                this.cityData[i].push(item)
            }
          }
        }
      }else{
        // this.showCityList = false
      }
    },
    //选择城市
    chooseCity(name) {
      wx.setStorageSync('pickerCity',true)
      wx.setStorage({
        key: "cityName",
        data: name,
        success: res => {
          // console.log(res, "成功了");
          let pages = getCurrentPages();
          let len = pages.length;
          let indexPage = pages[len - 2];
          indexPage.setData({
            cityChange: true
          });
          console.log(indexPage, "indexPage");
          wx.navigateBack({});
        },
        fail: err => {
          console.log(err, "出错啦.");
        },
        complete: res => {
          //  console.log(res,'完成啦')
        }
      });
    },
    // 按照字母顺序生成需要的数据格式
    getSortedAreaObj(areas) {
      // let areas = staticData.areas
      // console.log(areas,'diqu 上面的')
      // return
      areas = areas.sort((a, b) => {
        if (a.letter > b.letter) {
          return 1;
        }
        if (a.letter < b.letter) {
          return -1;
        }
        return 0;
      });
      let obj = {};
      for (let i = 0, len = areas.length; i < len; i++) {
        let item = areas[i];
        delete item.districts;
        let letter = item.letter;
        if (!obj[letter]) {
          obj[letter] = [];
        }
        obj[letter].push(item);
      }
      return obj;
    },
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    }
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "选择城市"
    });
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "#40a7e7"
    });
  }
};
</script>

<style scoped>
.counter-warp {
  background: #f4f6f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.wrap {
  font-size: 0;
  background: #fff;
  padding: 30rpx;
  position: relative;
  height: 128rpx;
  box-sizing: border-box;
}

.search {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.inner {
  background: #f4f6f9;
  font-size: 30rpx;
  padding: 16rpx 0 16rpx 20rpx;
  box-sizing: border-box;
  border-radius: 8rpx;
  flex: 1;
  display: flex;
  align-items: center;
}

.icon {
  width: 28rpx;
  height: 28rpx;
  margin-right: 10rpx;
}

.input {
  display: inline-block;
  background: #f4f6f9;
  font-size: 30rpx;
  height: 38rpx;
  line-height: 38rpx;
  width: 100%;
  box-sizing: border-box;
}

.cancle {
  font-size: 30rpx;
  display: inline-block;
  color: #666;
  width: 2.5em;
  text-align: right;
}

.bottom {
  font-size: 32rpx;
  color: #333;
  background: #fff;
}

.key {
  background: #f4f6f9;
  height: 50rpx;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
}

.value {
  border-bottom: 1rpx solid #efefef;
  height: 104rpx;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
}
.none{
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  padding: 50px 0;
  background: #fff; 
  font-size: 26rpx;
}
</style>
