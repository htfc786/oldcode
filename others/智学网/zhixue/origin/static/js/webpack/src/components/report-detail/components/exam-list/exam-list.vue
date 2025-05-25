<template src="./exam-list.html"></template>
<style src="./exam-list.less" lang="less"></style>

<script>
import Vue from 'vue';
import APIservice from '@/api/reportDetailWebServer.js';
import {Bus} from '@/components/bus/bus.js';
import { Select, Option } from 'element-ui';
Vue.use(Select);
Vue.use(Option);

export default {
  props: ['beginTime', 'endTime'], // 从父组件接收日期
  watch: {
    beginTime:{
      handler(newVal,oldVal){
        if(oldVal&&newVal!==oldVal){
          this.pageIndex = 1;
          this.optionList =[];
          this.value ="";
          this.getExamList(true);
        }else{
          this.getExamList(false);
        }
      },
    }
  },
  data () {
    return {
      moduleName: 'examList',
      actualPosition: 0, // 实际索引位置
      pageIndex: 1, // 起始索引
      pageSize: 10, // 分页大小
      hasNextPage: '', // 是否有下一页
      optionList: [],
      value: '', // select框回显数据
      selectedInput: '' // 下拉框回显input标签
    };
  },
  // created () {
  //   this.getExamList();
  // },
  mounted () {
    this.getselectedInput();
  },
  methods: {
    getNextPageExamList(){
      if(!this.hasNextPage){
        return;
      }
      this.pageIndex += 1;
      this.getExamList();
    },
    onDateChanged () {
      this.getExamList();
    },
    /**
     * 获取下拉框回显input标签
     */
    getselectedInput () {
      let that = this;
      that.$nextTick(() => {
        that.selectedInput = document.querySelector('.el-input__inner');
      });
    },
    /**
     * 选取考试名称处理
     * @param examId: 考试id
     */
    selectedOption (examId) {
      Bus.$emit('changedExam', examId);
      sessionStorage.setItem('zxbReportExamId', examId);
    },
    /**
     * 获取考试列表，一次获取10场
     */
    getExamList (flag) {
      let that = this;
      let params = {
        actualPosition: that.actualPosition,
        pageIndex: that.pageIndex,
        pageSize: that.pageSize
      };
      if (that.beginTime && that.endTime) {
        params.startSchoolYear = that.beginTime
        params.endSchoolYear = that.endTime
      }
      APIservice.getPageExamList(params).then(response => {
        if (response.errorCode === 0) {
          that.dealData(response.result,flag);
        } else {
          that.value = '';
          that.optionList = [];
          this.selectedOption(that.value);
          console.log('errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },
    /**
     * 接口返回考试数据处理
     * @param res: 接口成功返回数据result
     */
    dealData (res,flag) {
      let that = this;
      that.hasNextPage = res.hasNextPage;
      // if (that.hasNextPage) { // 若还有下一页数据，更新接口请求参数值
      //   that.actualPosition = res.pagination.actualPosition;
      //   that.pageIndex = res.pagination.pageIndex;
      // }
      for (let i = 0, len = res.examInfoList.length; i < len; i++) { // 过滤返回数据，筛选有用值，判断考试名长度是否展示tips
        let examOption = res.examInfoList[i];
        let examName = examOption.examName.trim();
        that.optionList.push({
          examId: examOption.examId,
          examName: examName
        });
      }
      if (that.pageIndex === 1) { // 若为首次获取考试列表，判断这10条数据是否包含当前考试，是则默认选中当前考试
        that.getCurrentExamName(res.examInfoList,flag);
      }
    },
    /**
     * 判断这10条数据是否包含当前考试，是则默认选中当前考试
     * @param examList: 接口成功返回数据中的examInfoList
     */
    getCurrentExamName (examList,flag) {
      // 切换学年的状态下，当前考试不在列表中，默认选中列表中的第一场考试
      if(flag){
        if(examList.length>0){
          this.value = examList[0].examName || '';
          sessionStorage.setItem('zxbReportExamId',examList[0].examId||"")
          this.selectedOption(examList[0].examId||"")
        }
      }else{
        let currExamId = sessionStorage.getItem('zxbReportExamId');
        if(currExamId){
          for (let i = 0, len = examList.length; i < len; i++) {
            if (currExamId === examList[i].examId) {
              this.value = examList[i].examName;
              break;
            }
          }
          this.selectedOption(currExamId);
        }else{
          this.value = examList[0].examName || '';
          sessionStorage.setItem('zxbReportExamId',examList[0].examId||"")
          this.selectedOption(examList[0].examId||"")
        }
      }
     
    },
    /**
     * 下拉框收起时设置回显框失去焦点
     * @param optionListShow: 考试下拉框显示状态
     */
    changeListShow (optionListShow) {
      if (!optionListShow) {
        this.selectedInput.blur();
      }
    }
  }
};
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/exam-list/exam-list.vue