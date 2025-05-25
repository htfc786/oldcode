<script>
import Person from "@/components/MeetingList/Person.vue"

export default {
  data() {  //数据
    return {
      //正在说话
      saying: ["htfc786","01错别字","114514"],
      isSaying: false,
    }
  },
  props: {
    
  },
  computed:{
    saying_text: function(){
      return this.saying.join("; ")
    }
  },
  components: { Person, }
}
</script>

<template>
  <!--参会人员列表 无摄像头-->
  <div class="meeting-list">
    <!--说话人列表-->
    <div class="saying-outside">
      <span class="saying" :title="saying_text">正在讲话：{{ saying_text }}</span>
    </div>
    <!--参会人列表-->
    <div class="person-list">
      <Person username="01曹博潇" presenter="main" @click="" />
    </div>
  </div>
</template>

<style scoped>
.meeting-list {
  --saying-height: 36px; /*说话人列表高度 */
  --saying-width: 246px;
}
.meeting-list .saying-outside {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(var(--saying-height) * 2);
}
.meeting-list .saying {
  height: var(--saying-height); /*宽高*/
  width: var(--saying-width);
  border-radius: 4px; /* 圆角 */
  background-color: rgb(217,234,255); /* 背景颜色 */
  color: rgb(87,47,172); /* 文字 */
  font-size: calc(var(--saying-height) / 3);
  line-height: var(--saying-height);
  padding: 0 calc(var(--saying-height) / 3);
  white-space: nowrap; /* 省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: context-menu; /* 鼠标指针 */
}
.meeting-list .person-list {
  height: calc(100vh - var(--header-height) - var(--bottom-height) - calc(var(--saying-height) * 2));
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* align-content: center; 加上这个影响滚动条 */
  margin: 0 12px 0 16px;
  overflow-y: scroll;/* 滚动条 */
  --scrollbar-width: 4px;
}
/* 滚动条整体 */
.meeting-list .person-list::-webkit-scrollbar {
  width: var(--scrollbar-width);
}
/* 滚动条滑块 */
.meeting-list .person-list::-webkit-scrollbar-thumb {
  box-shadow: none;
}
.meeting-list .person-list:hover::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 var(--scrollbar-width) rgba(0, 0, 0, 0.2);
}
</style>