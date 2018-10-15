<template>
    <div class="box">
      <div class="guide">
          <div class="item" v-for="(item,index) in weatherInfo" :key='index'>
             <div class="date">{{item.date==0?"周日": item.date == 1 ? "周一":item.date == 2?"周二":item.date == 3?"周三":
               item.date == 4?"周四":item.date == 5?"周五":item.date == 6?"周六":""}}</div>
             <div class="temperature i">{{item.temp}}</div>
             <div class="weather i">🌤{{item.weather}}</div>
             <div class="wind i">{{item.wind}}</div>
          </div>
      </div>
      <div class="livingIndex">
          <div class="item-zhishu">
              <img src="/static/img/lifestyle_comf.png" alt="" class="icon">
              <div class="right">
                  <div class="key">舒适度指数 {{comcrf}}</div>
                  <div class="value">{{comTxt}}</div>
              </div>
          </div>   
          <div class="item-zhishu">
              <img src="/static/img/clothing.png" alt="" class="icon">
              <div class="right">
                  <div class="key">穿衣指数 {{clothInfocrf}}</div>
                  <div class="value">{{clothInfoTxt}}</div>
              </div>
          </div>
           <div class="item-zhishu">
              <img src="/static/img/carwashing.png" alt="" class="icon">
              <div class="right">
                  <div class="key">洗车指数 {{carcrf}}</div>
                  <div class="value">{{carTxt}}</div>
              </div>
          </div>
           <div class="item-zhishu">
              <img src="/static/img/pill.png" alt="" class="icon">
              <div class="right">
                  <div class="key">感冒指数 {{coldcrf}}</div>
                  <div class="value">{{coldTxt}}</div>
              </div>
          </div>
           <div class="item-zhishu">
              <img src="/static/img/running.png" alt="" class="icon">
              <div class="right">
                  <div class="key">运动指数 {{sportcrf}}</div>
                  <div class="value">{{sportTxt}}</div>
              </div>
          </div>
             <div class="item-zhishu">
              <img src="/static/img/lifestyle_trav.png" alt="" class="icon">
              <div class="right">
                  <div class="key">旅游指数 {{aircrf}}</div>
                  <div class="value">{{airTxt}}</div>
              </div>
          </div>
           <div class="item-zhishu">
              <img src="/static/img/sun.png" alt="" class="icon">
              <div class="right">
                  <div class="key">紫外线强度指数 {{linecrf}}</div>
                  <div class="value">{{lineTxt}}</div>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ["weatherInfo","lifeStyle"],
  data(){
     return {
        info:'',
        comTxt:'',
        comcrf:"",
        clothInfoTxt:'',
        clothInfocrf:'',
        carTxt:'',
        carcrf:'',
        coldTxt:"",
        coldcrf:'',
        sportTxt:'',
        sportcrf:"",
        lineTxt:'',
        linecrf:'',
        travTxt:'',
        travcrf:"",
        airTxt:"",
        aircrf:'',
     }
  },
  mounted(){
      this.$nextTick(()=>{

      })
    
  },
  watch:{
      lifeStyle(value){
        this.info = value
        this.comTxt = this.info[0]['txt']
        this.comcrf = this.info[0]['brf']
        this.clothInfoTxt = this.info[1]['txt']
        this.clothInfocrf = this.info[1]['brf']
        this.carTxt = this.info[6]['txt']
        this.carcrf = this.info[6]['brf']
        this.coldTxt = this.info[2]['txt']
        this.coldcrf = this.info[2]['brf']
        this.sportTxt = this.info[3]['txt']
        this.sportcrf =this.info[3]['brf']
        this.lineTxt = this.info[7]['txt']
        this.linecrf =this.info[7]['brf']
        this.travTxt = this.info[4]['txt']
        this.travcrf =this.info[4]['brf']
        this.airTxt = this.info[5]['txt']
        this.aircrf =this.info[5]['brf']
      }

  },
  created(){
  }
};
</script>
<style scoped>
.guide {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 24rpx;
  padding-top: 20rpx;
  background: rgba(0, 0, 0, 0.6);
  margin-bottom: 20rpx;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.i {
  padding-bottom: 20rpx;
}
.key {
  font-size: 30rpx;
}
.livingIndex {
  background: rgba(0, 0, 0, 0.6);
  margin-bottom: 20rpx;
}
.item-zhishu {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1rpx solid rgba(250, 250, 250, 0.2);
  padding: 20rpx 0;
  margin: 0 30rpx;
}
.icon {
  width: 80rpx;
  height: 80rpx;
  padding: 0 24rpx;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
}
.value {
  margin-top: 10rpx;
  font-size: 24rpx;
}
.date{
  font-size: 30rpx;
  line-height: 30px;
}
</style>
