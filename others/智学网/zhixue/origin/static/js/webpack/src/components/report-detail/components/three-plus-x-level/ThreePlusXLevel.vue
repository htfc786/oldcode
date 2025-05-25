<template>
  <div style="width: 100%" id="threePlusXGrade">
    <div class="container-backgrounde" v-show="rowDatas.length">
      <div class="class-a-title" v-text="textList.title">
      </div>
      <div class="grade-table-container">
        <div class="column-first">
          <ul class="subjects-column">
            <li>科目</li>
            <li v-for="(type,index) in rowDatas"
                :key="index"
                v-text="type.subjectName">
            </li>
          </ul>
        </div>
        <div class="table-fixed" :class="{'shadow': scrollFlag === 'left', 'shadow2': scrollFlag === 'right', 'shadow3': scrollFlag === 'mid'}"
             ref="tableContainer" @scroll="tableScroll()">
          <div class="other-columns">
            <table>
              <thead>
              <tr>
                <th v-for="(data,index) in columnDatas"
                    :key="index"
                    v-if="index > 0"
                    v-text="data.name">
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(type,index) in rowDatas"
                  :key="index">
                <td v-for="(data,index2) in columnDatas"
                    v-if="index2 > 0"
                    v-text="type[data.code]"
                    :key="index2"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./three-plus-x-level.less" lang="less"></style>
<script>
import APIService from '@/api/reportDetailWebServer.js';

export default {
  name: 'three-plus-x-level',
  props: ['examId', 'paperId', 'subjectCode'],
  data () {
    return {
      spaceTime: 300,
      scrollFlag: '',
      throttleFlag: false,
      moduleName: 'threePluxXLevel',
      textList: {
        title: ''
      },
      rowDatas: [],
      columnDatas: []
    };
  },
  created () {
    let that = this;
    that.getThreePlusLevelData(); // 获取数据
  },
  mounted () {
    let that = this;
    that.$nextTick(() => {
      that.tableScroll();
    });
  },
  methods: {
    /**
     * 表格滑动阴影显示控制
     */
    tableScroll () {
      let that = this;
      let scrollLeft = this.$refs.tableContainer.scrollLeft;
      let scrollWidth = this.$refs.tableContainer.scrollWidth;
      let clientWidth = this.$refs.tableContainer.clientWidth;
      if (scrollLeft === 0 || scrollLeft + clientWidth === scrollWidth) {
        that.throttleFlag = false;
      }
      if (that.throttleFlag) {
        return;
      }
      if (scrollLeft === 0) {
        if (scrollLeft + clientWidth !== scrollWidth) {
          this.scrollFlag = 'left';
        } else {
          this.scrollFlag = '';
        }
      } else if (scrollLeft + clientWidth === scrollWidth) {
        this.scrollFlag = 'right';
      } else {
        this.scrollFlag = 'mid';
      }
      that.throttleFlag = true;
      setTimeout(() => {
        that.throttleFlag = false;
      }, that.spaceTime);
    },
    /**
     * 获取等级3+x数据 --edit by jmning 2018/11/30
     */
    getThreePlusLevelData () {
      let that = this;
      let params = {
        examId: that.examId
      };
      APIService.getThreePlusXLevel(params).then(response => {
        if (response.errorCode === 0) {
          that.dataDeal(response.result);
        } else {
          console.log('getThreePlusXLevel errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },
    /**
    * 接口返回数据处理
    * @param res: 接口返回数据
    */
    dataDeal (res) {
      let that = this;
      that.textList.title = res.title;
      if (!res.rowDatas) {
        return
      }
		  that.rowDatas = res.rowDatas;
      that.columnDatas = res.columnDatas;
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/three-plus-x-level/ThreePlusXLevel.vue