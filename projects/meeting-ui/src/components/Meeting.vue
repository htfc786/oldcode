<script>
import MeetingList from "@/components/MeetingList/MeetingList.vue"
import MeetingList2 from "@/components/MeetingList2/MeetingList2.vue"

export default {
  data() {  //数据
    return {
      // 显示
      show: true,
    }
  },
  computed:{
  },
  methods:{
    
  },
  props: {

  },
  components: { MeetingList, MeetingList2 }
}
</script>

<template>
  <div 
    class="meeting"
    :class="{'hide': !show}"
  >
    <div class="header">
      <div class="header__left">
        <span class="info">信息</span>
        <span class="safe">会议已加密</span>
        <span class="qos">3</span>
      </div>
      <div class="header__right">
        <span class="big">大</span>
        <span class="layout">演讲者视图</span>
        <span class="time">2:24:57(3小时)</span>
      </div>
    </div>
    <div class="main">
      <MeetingList />

    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<style scoped>
.meeting{
  width: 100%;
  height: 100%;
  --header-height: 30px;
  --bottom-height: 50px;
}
.hide {
  --header-height: 0px;
  --bottom-height: 0px;
}
.header {
  --header-border-size: 1px;
  display: flex;
  height: calc(var(--header-height) - var(--header-border-size));
  width: 100%;
  border-bottom: var(--header-border-size) inset rgb(235,237,242);
  justify-content: space-between;
}
.header > .header__left {
  display: flex;
  flex-direction: row;
}
.header > .header__right {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end
}
.header > .header__left * ,
.header > .header__right * {
  margin: 4px;
  height: calc(var(--header-height) - 8px);
  min-width: calc(var(--header-height) - 8px);
  border-radius: 5px;
}
.header > .header__left *:hover ,
.header > .header__right *:hover {
  background-color: rgb(235,237,242);
}
.main {
  /* background-color: rgb(45, 48, 51); */
  height: calc(100vh - var(--header-height) - var(--bottom-height));
  width: 100%;
}


.bottom {
  --bottom-border-size: 1px;
  height: calc(var(--bottom-height) - var(--bottom-border-size));
  border-top: var(--bottom-border-size) outset rgb(235,237,242);
}

</style>
