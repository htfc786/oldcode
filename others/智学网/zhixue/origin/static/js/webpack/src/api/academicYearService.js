import http from './http';

export default {
  /**
   * 获取学年下拉选项信息
   * */
  getAcademicYear () {
    return http.fetchGet('/zhixuebao/base/common/academicYear');
  }
}



// WEBPACK FOOTER //
// ./src/api/academicYearService.js