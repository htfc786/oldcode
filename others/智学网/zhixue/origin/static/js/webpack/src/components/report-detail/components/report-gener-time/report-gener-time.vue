<!--
 * @Author: peijin peijin@iflytek.com
 * @Date: 2024-11-08 16:25:46
 * @LastEditors: peijin peijin@iflytek.com
 * @LastEditTime: 2024-11-15 15:11:54
 * @FilePath: \srv-pt-report-zxb\htm-web-report\src\components\report-detail\components\report-gener-time\report-gener-time.vue
 * @Description: 时间
-->
<template src="./report-gener-time.html"></template>
<style src="./report-gener-time.less" lang="less"></style>

<script>
import Vue from 'vue';
import {Bus} from '@/components/bus/bus.js';
import { Select, Option } from 'element-ui';
import APIService from '../../../../api/academicYearService.js';
import {mapState,mapMutations} from "vuex"
Vue.use(Select);
Vue.use(Option);

export default {
  props: ['isLinkage'],
  data () {
    return {
      optionList: [],
      selectedName: '', // select框回显数据
      selectedBeginTime: '', // select框回显数据
      selectedEndTime: '' // select框回显数据
      // selectedInput: '' // 下拉框回显input标签
    };
  },
  computed:{
    ...mapState({
      reportTimeInfo: state => state.reportTimeInfo,
    }),
  },
  watch:{
    reportTimeInfo:{
      handler(newVal,oldVal){
        if(newVal.name &&this.isLinkage){
          this.selectedName = newVal.name
          let currentYear= this.optionList.find(item=>{
            return item.name === newVal.name
          })
          this.$emit('date-changed', currentYear.beginTime || '', currentYear.endTime || '')
        }
      },
      deep:true
    }

  },
  async created () {
    await this.getAcademicYearInfo();
  },
  methods: {
    ...mapMutations(["setReportTimeInfo"]),
    /**
     * 获取时间下拉选项
     */
    async getAcademicYearInfo () {
      this.selectedName = '';
      this.selectedBeginTime = '';
      this.selectedEndTime = '';
      const resp = await APIService.getAcademicYear();
      if (resp && resp.errorCode === 0) {
        this.optionList = resp.result || [];
        if (this.optionList.length) {
          if(this.reportTimeInfo.beginTime && this.isLinkage){
            this.selectedName  =  this.optionList.find(item=> item.beginTime === this.reportTimeInfo.beginTime).name;
            this.$emit('date-changed', this.reportTimeInfo.beginTime || '', this.reportTimeInfo.endTime || '')
          }else{
            this.selectedName = this.optionList[0].name || '';
            // 向父组件触发事件
            this.$emit('date-changed', this.optionList[0].beginTime || '', this.optionList[0].endTime || '')
            this.setReportTimeInfo({
              beginTime:this.optionList[0].beginTime,
              endTime:this.optionList[0].endTime,
              name:this.selectedName
            })
          }
        }
      } else {
        this.optionList = [];
      }
    },
    /**
     * 时间下拉变化
     */
    selectedOption (beginTime, endTime,name) {
      // 向父组件触发事件
      this.$emit('date-changed', beginTime || '', endTime || '')
      this.setReportTimeInfo({
        beginTime,
        endTime,
        name
      })
    }
  }
};
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/report-gener-time/report-gener-time.vue