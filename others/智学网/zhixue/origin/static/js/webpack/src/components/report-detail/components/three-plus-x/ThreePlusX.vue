<template>
  <div style="width: 100%" id="threePlusX">
    <div class="container-backgrounde" v-show="rowDatas.length">
      <div class="class-a-title" v-text="textList.title">
      </div>
      <div class="table-container">
        <div class="column-con">
          <ul class="subject-column">
            <li>科目</li>
            <li v-for="(type,index) in rowDatas"
                :key="index"
                v-text="type.subjectName">
            </li>
          </ul>
        </div>
        <div class="t-fixed" :class="{'current': scrollFlag === 'left', 'current2': scrollFlag === 'right', 'current3': scrollFlag === 'mid'}"
             ref="tableContainer" @scroll="tableScroll()">
          <div class="other-column">
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
                    v-text="transfromRatio(data.code, index)"
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
<style src="./three-plus-x.less" lang="less"></style>
<script>
import APIService from '@/api/reportDetailWebServer.js';

export default {
  name: 'three-plus-x',
  props: ['examId', 'paperId', 'subjectCode'],
  data () {
    return {
      spaceTime: 300,
      scrollFlag: '',
      throttleFlag: false,
      moduleName: 'threePluxX',
      textList: {
        title: ''
      },
      rowDatas: [],
      columnDatas: []
    }
  },
  created () {
    this.getCacheData();
  },
  mounted () {
    this.$nextTick(() => {
      this.tableScroll();
    })
  },
  methods: {
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
      }, that.spaceTime)
    },
    // 数据转换
    transfromRatio (code, index) {
      let data = this.rowDatas[index][code];
      if (data === 0 && code !== 'scoreLevel') {
        return '前1%'
      } else if (parseInt(data) === -1) {
        return '-';
      } else if (!!+data && code !== 'scoreLevel') {
        return `前${data}%`
      } else {
        return data;
      }
    },
    // 默认先读取缓存数据，然后请求接口数据 请求到数据后刷新视图
    getCacheData () {
      this.updateThreePlusData();
    },
    /**
     * 获取3+X数据 --edit by jmning 2018/11/30
     */
    updateThreePlusData () {
      let that = this;
      let params = {
        examId: that.examId
      };
      APIService.getThreePlusXList(params).then(response => {
        if (response.errorCode === 0) {
          that.textList.title = response.result.title;
          if (!response.result.rowDatas) {
            return
          }
          that.rowDatas = response.result.rowDatas;
          that.columnDatas = response.result.columnDatas;
        } else {
          console.log('getThreePlusXList errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/three-plus-x/ThreePlusX.vue