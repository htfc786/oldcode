<script>
import Presenter from "@/components/icons/Presenter.vue"
import Microphone from "@/components/icons/Microphone.vue"

export default {
  props: {
    username: { type: String, required: true }, //用户名
    userimage: { type: String }, //头像url
    saying: { type: Boolean, default: false }, //是否说话 true false
    presenter: { type: String, default: "none" }, //主持人类型 none:无 main:主持人 secondary:副主持人(联席主持人)

  },
  components: { Presenter, Microphone, },
  computed:{
    userimage_text: function(){
      return this.username.slice(-2);
    },
    userimage_show_text: function(){
      return !this.userimage ? this.userimage_text : '';
    },
    person_border_color: function(){
      return this.saying ? '--saying-color' : '--silence-color';
    },
    presenter_show: function(){
      return this.presenter==='main' || this.presenter==='secondary';
    },
    presenter_border_color: function(){
      return (this.presenter=='main') ? '--presenter-main-color' : '--presenter-secondary-color';
    },
    
  },
}
</script>

<template>
  <div class="person" :style="{ '--border-color': 'var('+ ( person_border_color ) +')' }">
    <div class="userimage" :style="{ '--userimage-image-url': 'url('+ userimage +')' }">{{ userimage_show_text }}</div>
    <div class="presenter" v-if="presenter_show" :style="{ '--presenter-color': 'var('+ ( presenter_border_color ) +')' }">
      <Presenter fill="#fff"></Presenter>
    </div>
    <div class="info">
      <div class="name">{{ username }}</div>
      <div class="microphone">
        <Microphone fill="#fff"></Microphone>
      </div>
    </div>
  </div>
</template>

<style scoped>
.person {
  --person-height: 120px;
  --person-width: 150px;
  --person-userimage-size: 74px;
  --person-userimage-top: 10px;
  --person-userimage-bottom: 10px;
  --saying-color: rgba(0,204,102,1);
  --silence-color: rgba(0,204,102,0);
  --border-color: var(--silence-color); /*默认*/
  position: relative;
  height: var(--person-height);
  width: var(--person-width);
  border: 4px solid var(--border-color);
}
.person .userimage {
  height: var(--person-userimage-size);
  width: var(--person-userimage-size);
  border-radius: calc(var(--person-userimage-size) / 2);
  margin-top: var(--person-userimage-top);
  margin-bottom: var(--person-userimage-bottom);
  margin-left: calc((var(--person-width) - var(--person-userimage-size)) / 2);
  margin-right: calc((var(--person-width) - var(--person-userimage-size)) / 2);
  background-position: center;
  background-size: cover;
  background-image: var(--userimage-image-url);
  background-color: rgb(62,109,186);
  color: rgb(255,255,255);
  line-height: var(--person-userimage-size);
  font-size: calc(var(--person-userimage-size) * 2 / 5);
  text-align: center;
  overflow: hidden;
  cursor: context-menu;
}
.person .presenter {
  --presenter-size: 16px;  /* 宽高 */
  --presenter-main-color: rgb(255,128,26);
  --presenter-secondary-color: rgb(0,111,255);
  --presenter-color: var(--presenter-main-color);
  height: calc(var(--presenter-size) * 3 / 4); /* 3:4 */
  width: calc(var(--presenter-size) * 3 / 4);
  padding: calc((var(--presenter-size) * 1 / 4 ) / 2); /* 左右padding共占1:4 ,然后÷2只算一边 */
  border-radius: calc(var(--presenter-size) / 2);
  background-color: var(--presenter-color); /* 颜色 */
  position: absolute; /* 位置 */
  /* top： 头像上面的margin + 头像大小（头像高度）+ 主持人图标大小（高度） 的2/3 */
  top: calc(var(--person-userimage-size) + var(--person-userimage-top) - (var(--presenter-size) * 2 / 3));
  /* left 容器总宽的一半 - 主持人图标大小（宽度） 的一半 */
  left: calc((var(--person-width) / 2) - (var(--presenter-size) / 2));
}
.person .info {
  --info-height: 16px;
  height: var(--info-height);
  line-height: var(--info-height);
  font-size: calc(var(--info-height) * 3 / 4); /* 3:4 */
  /* 居中 */
  margin: 0 auto;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  --microphone-icon-size: var(--info-height);  /* 麦克风图标宽高 */
  --name-margin-size: 2px;
  --info-white-space: 6px;
}

.person .info .name {
  display: inline-block;
  vertical-align: top;
  margin: 0px var(--name-margin-size);
  max-width: calc(var(--person-width) - var(--microphone-icon-size) - var(--name-margin-size) * 2 - var(--info-white-space));
  white-space: nowrap; /* 省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: context-menu;
}
.person .info .microphone {
  height: calc(var(--microphone-icon-size) * 3 / 4); /* 3:4 */
  width: calc(var(--microphone-icon-size) * 3 / 4);
  padding: calc((var(--microphone-icon-size) * 1 / 4 ) / 2); /* 左右padding共占1:4 ,然后÷2只算一边 */
  border-radius: calc(var(--microphone-icon-size) / 2);
  background-color: rgb(46,137,255); /* 颜色 */
  display: inline-block;
}
</style>