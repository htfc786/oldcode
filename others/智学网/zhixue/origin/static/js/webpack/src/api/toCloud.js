import reportCloudUrl from "./reportCloudUrl";
import ReportRouter from "@zx/report-route-js-sdk";

const toCloud = async (config) => {
  if (reportCloudUrl.some((s) => config.url.indexOf(s) > -1)) {
    const res = await ReportRouter.getRouteInfo();
    res && res.host && (config.baseURL = res.host);
    if (process.env.NODE_ENV === 'development' && res.host === 'https://test-ali-bg.zhixue.com') {
      config.baseURL = '/to-cloud-base'
    }
    config.headers.role = res.role || '';
    // config.headers.ReportRouterVersion = ReportRouter.__version__;
    const token = localStorage.getItem("xToken");
    config.headers.token = token;
  }
  return config;
};

export default toCloud;


// WEBPACK FOOTER //
// ./src/api/toCloud.js