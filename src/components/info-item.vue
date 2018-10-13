<template>
    <div  class="fa-box">
        <div class="info-item">
            <div>温度(℃)</div>
            <div>{{nowLife.tmp}}</div>
        </div>
        <div class="info-item">
            <div>体感温度(℃)</div>
            <div>{{nowLife.fl}}</div>
        </div>
        <div class="info-item">
            <div>相对湿度(%)</div>
            <div>{{nowLife.hum}}</div>
        </div>
        <div class="info-item">
            <div>降水量(mm)</div>
            <div>{{nowLife.pcpn}}</div>
        </div>
          <div class="info-item">
            <div>风向</div>
            <div>{{nowLife.wind_dir}}</div>
        </div>
        <div class="info-item">
            <div>风向角度(deg)</div>
            <div>{{nowLife.wind_deg}}</div>
        </div>
        <div class="info-item">
            <div>风力(级)</div>
            <div>{{nowLife.wind_sc}}</div>
        </div>
        <div class="info-item">
            <div>风速(mk/h)</div>
            <div>{{nowLife.wind_spd}}</div>
        </div>
          <div class="info-item">
            <div>能见度(km)</div>
            <div>{{nowLife.vis}}</div>
        </div>
        <div class="info-item">
            <div>气压(mb)</div>
            <div>{{nowLife.pres}}</div>
        </div>
        <div class="info-item">
            <div>云量</div>
            <div>{{nowLife.cloud}}</div>
        </div>
        <div class="info-item">
            <div>星态</div>
            <div>33</div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["nowLife"],
  created() {
  }
};
</script>

<style scoped>
.fa-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.6);
  margin-bottom: 20rpx;
  font-size: 24rpx;
}
.info-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10rpx 0;
  height: 100rpx;
  width: 25%;
  border-right: 1rpx solid rgba(250, 250, 250, 0.2);
  border-bottom: 1rpx solid rgba(250, 250, 250, 0.2);
  box-sizing: border-box;
}
</style>
