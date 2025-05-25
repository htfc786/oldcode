<script>
import vResizeOb from '../../../utils/vResizeObserver.js'
export default {
  props: {
    username: { type: String, required: true }, //用户名
    userimage: { type: String }, //头像url
    score: { type: Number }, //分数
    presenter: { type: Boolean, default: false }, //是否主持人
  },
  computed:{
    userimage_text: function(){
      return this.username.slice(-2);
    },
    userimage_show_text: function(){
      return !this.userimage ? this.userimage_text : '';
    },
    userimage_image: function(){
      return !this.userimage ? '' : 'url('+ this.userimage +')';
    },
    presenter_show: function(){
      return this.presenter;
    },
  },
  data(){
    return {
      main_widthMax: false,
    }
  },
  methods:{
    main_widthMax_change({ width }) { if(width>=80) this.main_widthMax = true; else this.main_widthMax = false; },
  },
  directives: {
    resizeOb: vResizeOb,
  }
}
</script>

<template>
  <div class="player-info-area"
    :style="{ '--person-userimage-size' : main_widthMax ? '60px' : null, '--person-width': main_widthMax ? '80px' : null }"
    v-resize-ob="main_widthMax_change"
    >
    <div class="userimage" :style="{ '--userimage-image-url': userimage_image }">{{ userimage_show_text }}</div>
    <div class="presenter" v-if="presenter_show">
      <svg style="display:block;" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M15 13H9c-2.761 0-6 1.931-6 5.4V20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-1.6c0-3.471-3.239-5.4-6-5.4ZM7 7a5 5 0 1 0 10 0A5 5 0 0 0 7 7Z"></path></svg>
    </div>
    <div class="info">
      <div class="name">{{ username }}</div>
    </div>
    <div class="score">{{ score ? (score + '分') : '' }}</div>
  </div>
</template>

<style scoped>
.player-info-area {
  --person-height: 110px;
  --person-width: 80px;
  --person-userimage-size: 60px;
  --person-userimage-top: 6px;
  --person-userimage-bottom: 6px;
  --info-height: 12px;
  position: relative;
  background-color: rgba(0, 0, 0, .3);
  border-radius: 10px;
  height: var(--person-height);
  width: var(--person-width);
  overflow: hidden;
  user-select: none;
}
.player-info-area .userimage {
  height: var(--person-userimage-size);
  width: var(--person-userimage-size);
  border-radius: calc(var(--person-userimage-size) / 2);
  margin: 0 auto;
  margin-top: var(--person-userimage-top);
  margin-bottom: var(--person-userimage-bottom);
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
  user-select: none;
}
.player-info-area .presenter {
  --presenter-size: 15px;  /* 宽高 */
  height: calc(var(--presenter-size) * 3 / 4); /* 3:4 */
  width: calc(var(--presenter-size) * 3 / 4);
  padding: calc((var(--presenter-size) * 1 / 4 ) / 2); /* 左右padding共占1:4 ,然后÷2只算一边 */
  border-radius: calc(var(--presenter-size) / 2);
  background-color: rgb(255,128,26); /* 颜色 */
  position: absolute; /* 位置 */
  /* top： 头像上面的margin + 头像大小（头像高度）+ 主持人图标大小（高度） 的2/3 */
  top: calc(var(--person-userimage-size) + var(--person-userimage-top) - (var(--presenter-size) * 2 / 3));
  /* left 容器总宽的一半 - 主持人图标大小（宽度） 的一半 */
  left: calc((var(--person-width) / 2) - (var(--presenter-size) / 2));
}
.player-info-area .info {
  height: var(--info-height);
  line-height: var(--info-height);
  font-size: calc(var(--info-height) * 3 / 4); /* 3:4 */
  /* 居中 */
  margin: 0 auto;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  --name-margin-size: 2px;
  --info-white-space: 6px;
}

.player-info-area .info .name {
  display: inline-block;
  vertical-align: top;
  margin: 0px var(--name-margin-size);
  max-width: calc(var(--person-width) - var(--name-margin-size) * 2 - var(--info-white-space));
  white-space: nowrap; /* 省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: context-menu;
  color: white;
}
.player-info-area .score{
  display: table;
  margin: 0 auto;
  padding-top: 4px;
  font-size: calc(var(--info-height) * 3 / 3.5);
  color: white;
}
</style>