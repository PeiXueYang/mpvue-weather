<template>
    <div class="box">
      <div class="guide">
          <div class="item">
             <div class="date">今天</div>
             <div class="temperature i">21 ~ 15℃</div>
             <div class="weather i">🌤多云</div>
             <div class="wind i">北风3-4级</div>
          </div>
          <div class="item">
             <div class="date">周五</div>
             <div class="temperature i">21 ~ 15℃</div>
             <div class="weather i">🌤小雨</div>
             <div class="wind i">北风3-4级</div>
          </div>
          <div class="item">
             <div class="date">周六</div>
             <div class="temperature i">21 ~ 15℃</div>
             <div class="weather i">⛅晴</div>
             <div class="wind i">北风3-4级</div>
           </div>
           <div class="item">
             <div class="date">周日</div>
             <div class="temperature i">21 ~ 15℃</div>
             <div class="weather i">🌤多云</div>
             <div class="wind i">北风3-4级</div>
          </div>
      </div>
      <div class="livingIndex">
          <div class="item-zhishu">
              <img src="/static/img/clothing.png" alt="" class="icon">
              <div class="right">
                  <div class="key">穿衣指数 较舒适</div>
                  <div class="value">建议着薄外套、开衫牛仔衫裤等服装。年老体弱者应适当添加衣物，宜着夹克衫、薄毛衣等。</div>
              </div>
          </div>
           <div class="item-zhishu">
              <img src="/static/img/carwashing.png" alt="" class="icon">
              <div class="right">
                  <div class="key">洗车指数 较适宜</div>
                  <div class="value">较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。</div>
              </div>
          </div>
           <div class="item-zhishu">
              <img src="/static/img/pill.png" alt="" class="icon">
              <div class="right">
                  <div class="key">感冒指数 较易发</div>
                  <div class="value">天气较凉，较易发生感冒，请适当增加衣服。体质较弱的朋友尤其应该注意防护。</div>
              </div>
          </div>
           <div class="item-zhishu">
              <img src="/static/img/running.png" alt="" class="icon">
              <div class="right">
                  <div class="key">运动指数 较适宜</div>
                  <div class="value">天气较好，但因风力稍强，户外可选择对风力要求不高的运动，推荐您进行室内运动。</div>
              </div>
          </div>
           <div class="item-zhishu">
              <img src="/static/img/sun.png" alt="" class="icon">
              <div class="right">
                  <div class="key">紫外线强度指数 弱</div>
                  <div class="value">紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。</div>
              </div>
          </div>
      </div>
     
    </div>
</template>
<script>
export default {
  props: ["text"]
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
.key{
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
</style>
