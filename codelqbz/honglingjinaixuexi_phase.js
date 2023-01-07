/**
 * Created by guomin on 2020/10/19.
 */
// var apiUrl = "http://172.25.22.132:8084";

var apiUrl = "https://hljaxx.k618.cn/hljxuexi";
var initialPage = 1;

var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical', // 垂直切换选项
  loop: false, // 循环模式选项
  effect: 'fade',
  initialSlide: initialPage,
  observer: true, //修改swiper自己或子元素时，自动初始化swiper
  observeParents: true //修改swiper的父元素时，自动初始化swiper
});

var loaderimages = {
  init: function () {
    this.preload();
  },
  preload: function () {
    var _this = this;
    _this.preloadAssets(_this.allImages, "", function (e) {
      var percent = Math.floor((e.completedCount / e.totalCount) * 100);
      _this.setPreloaderPercent(percent)
    }, function (e) {
      _this.loaderComplete();
    });
  },

  preloadAssets: function (assets, prefix, progress, complete) {
    var imageTypes = ['jpg', 'png', 'jpeg', 'tiff', 'gif'];
    var loader = new PxLoader();
    for (var i = 0; i < assets.length; i++) {
      var extension = assets[i].substr((assets[i].lastIndexOf('.') + 1));

      if ($.inArray(extension, imageTypes) != -1) {
        loader.add(new PxLoaderImage(assets[i]));
      }
    }
    loader.addProgressListener(progress);
    loader.addCompletionListener(complete);
    loader.start();
  },

  setPreloaderPercent: function (percentage) {
    $('.loading_line_blank').css('width', percentage + '%');
  },
  loaderComplete: function () {
    $('.loading').hide();
    mySwiper.slideTo(initialPage, 1000, false);
    initUserInfo();
  },

  allImages: [
    "../../images/i_jk.gif",
    "../../images/i_jy.gif",
    "images/bg_p3.jpg",
    "images/bg_p4.jpg",
    "images/btn_ks.png",
    "images/bg_p5.jpg",
    "images/bg_p6.jpg",
    "images/bg_p7.jpg",
    "../../images/bg_box.png",
    "../../images/bg_btnon.png",
    "../../images/i_dr.png",
    "../../images/bg_btn.png",
    "../../images/i_dw.png",
    "../../images/btn_qd.png",
    "../../images/i_dtw.png",
    "../../images/i_dtr.png",
    "images/i_fx.png",
    "images/bg_p41.jpg",
    "images/bg_cap3.png",
    "images/bg_cap35.png",
    "images/bg_qk1.png",
    "images/bg_qs.png",
    "images/bg_ft4.png",
    "images/bg_ft41.png"
  ]
};

$(document).ready(function () {
  if (isMobile()) {
    //zhuge load
    // window.zhuge.load('d2020eb0030c4bb8a654ed2806af26fb', {
      //线上
    window.zhuge.load('75334ff465f54c51afceeeb64f447d4c', {
      //配置应用的AppKey
      //change
      superProperty: { //全局的事件属性(选填)
        'number': 'season3_issue3'//代表第3季第3期，每次上新需要修改一下
      }
    });
    var openid = $.cookie("openid");
    if (!openid) {
      //微信授权
      isMobileVisitAndAuthorize(window.location.href);
    }
    var userInfo = getCookie("AXXUserInfo_3");
    if (!userInfo) {
      if (openid != undefined && openid != "") {
        let timestamp =  new Date().getTime()
        let code = hex_md5(timestamp)
        ajaxRequest({
          url: apiUrl + "/user/info",
          type: "GET"
        }, {timestamp, code}, {season: 3}, (res) => {
          if (res.code = 10000  && res.data) {
            setCookie('AXXUserInfo_3', JSON.stringify(res.data));
            var userInfo = res.data;
            if(hasGradeAndSquadron(userInfo)){
              initUserInfo()
            }else{
              toNavSign();
            }
          } else {
            toNavSign()
          }
        }, error => {
          console.log('error -> ', error)
          // todo yue add clear
          setCookie('openid', '');
          isMobileVisitAndAuthorize(window.location.href);
        });
      } else {
        toNavSign()
      }
    } else {
      if(hasGradeAndSquadron(userInfo)){
        initUserInfo()
      }else{
        toNavSign();
      }
    }
    if(openid && getZhugeParams()){
      zhuge.identify(openid,getZhugeParams());
    }
    $(".d_qs2").show();
  } else {
    $(".d_qs").show();
  }

  var url = window.location.href.split('#')[0];
  var r = s = score = rightNo = 0;
  loaderimages.init();

  //微信分享微信分享
  //change
  var wxData = {
    title: '红军中的小战士', // 分享标题
    desc: '我完成了“红领巾爱学习”网上主题队课第三季第三期的课程，快来加入吧！', // 分享描述
    link: "https://hljaxx.k618.cn/se3/ph3/index.html", //分享的链接地址
    imgUrl: "https://hljaxx.k618.cn/se3/ph3/images/wxshare.jpg", // 分享图标
    type: 'link', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {},
    cancel: function () {}
  };
  weixinShare("wx591ea71490e6902b", encodeURIComponent(url), wxData);

  initPage();

});

//change
function initPage() {
  /*
    questions参数说明
    index 题目页面序号（swiper页面序号）
    rightNum 正确答案个数
    pauseStart 弹出题目区间开始时间
    pauseEnd 弹出题目区间结束时间
    curTime 题目提交开始播放时间
    sppeed 弹出题目速度
    runCallbacks 弹出题目是否执行回调
    buttonSelector 题目提交按钮选择器 支持元素id、样式名、标签名等
    */
  let _questions = [{
      index: 3,
      rightNum: 1,
      pauseStart: 96.3,
      pauseEnd: 103,
      curTime: 103,
      sppeed: 500,
      runCallbacks: false,
      buttonSelector: "#btn_qd1",
      buttonContinue: "#btn_cont1"
    },
    {
      index: 4,
      rightNum: 3,
      pauseStart: 202.3,
      pauseEnd: 207.7,
      curTime: 207.7,
      sppeed: 500,
      runCallbacks: false,
      buttonSelector: "#btn_qd2",
      buttonContinue: "#btn_cont2"
    }
  ];
  var _optionsQuestionVideo = {
    container: 'v1', //视频容器id
    id: 'video', //播放器id
    pageIndex: 2, //播放页面序号
    showSpeed: 1000, //显示视频播放页面速度
    runCallbacks: false, //显示视频页面是否执行回调
    rightAnswerSelector: '.i_dr', //正确答案选择器支持样式、id、标签名等
    worngAnswerSelector: '.i_dw', //错误答案选择器支持样式、id、标签名等
    answerSelector: '.btn', //答题确定按钮选择器
    selectedAnswerClass: 'btnon', //选中答案样式名
    rightAnswerDataAttribute: 'data-r', //正确答案标志属性名
    hls_url: 'https://media.k618.cn/video/hljaxx_3_3_1_hls/hljaxx_3_3_1.m3u8', //hls流媒体,IOS
    dash_url: 'https://media.k618.cn/video/hljaxx_3_3_1/hljaxx_3_3_1.mpd', //dash流媒体,安卓
    endSlideToIndex: 5, //视频播放完毕切换页面序号，无此参数值则播放完不切换页面。
    endSlideSpeed: 500, //视频播放完毕切换页面速度
    endSlideRunCallbacks: false, //视频播放完毕切换页面执行回调
    controls: true //视屏播放控制条是否开启
    ,isMp4: false,
    mp4_url: '../ph3/images/first.mp4'
  };

  $('.btn_ks').click(function () {
    $(this).hide();
    showSound('../../sound/start.mp3');
    let _axxVideo = new AXXVideo(_optionsQuestionVideo, _questions);
    $('.i_dr').hide();
    $('.i_dw').hide();
    _axxVideo.createVideo().addPlayTimeListener().stopAutoPlayWhenSelectAnswer().initQuestionSelectorsEvent().initQuestionsButtonEvent();
    setTimeout(function () {
      _axxVideo.play();
    }, 1000);
    if(isMobile() && getZhugeParams()){
      zhuge.track("start_learning",getZhugeParams());
    }
  });

  // 修改用户信息
  $("#btn_update").click(function () {
    toNavSign();
  });

  // 领取徽章
  //change
  $('#lqhzInput').click(function () {
    if (rightNo == _questions.length) {
      $('#usern_name').val('');
      $("#huizhang").html(
        `<div class="d d_p7">
      <div class="d d_name2">
        <p class="d">
          <label class="fl">我是少先队员</label>&nbsp;
          <span id="s_name" style="color: #ffcd03; text-align: center; border-bottom: 0.04rem solid #fff; min-width:3.3rem;display: inline-block;" ></span>
          <span class="douhao">，</span>
          <p>
            <span id="s_name_other" style="color: #ffcd03; text-align: center;border-bottom: 0.04rem solid #fff;" ></span>
            <span><span class="douhao1">，</span>我完成了“红领巾爱学习” 第三季第三期的学习！</span>
          </p>
        </p>
      </div>
      <div class="d2 d_hz"> <img src="images/img_hz.png" alt=""></div>
    </div>`);
      mySwiper.slideTo(7, 1000, false);
    } else {
      $.confirm({
        theme: 'my-theme',
        backgroundDismiss: true,
        title: '',
        boxWidth: '80%',
        useBootstrap: false,
        draggable: false,
        content: "亲爱的队员，全部答对才能领取徽章哦，需要再试试吗？",
        buttons: {
          ok: {
            text: "返回重新学习",
            btnClass: 'btn-blue ',
            action: function () {
              _questions.forEach((item, index) => {
                item.isShow = false;
              });
              $(".btnon").removeClass("btnon");
              rightNo = 0;
              $("#" + _optionsQuestionVideo.id).get(0).currentTime = 0;
              $("#" + _optionsQuestionVideo.id).get(0).play();
              mySwiper.slideTo(2, 500, false);
            }
          },
          cancel: {
            text: "下次再说",
            btnClass: 'btn-blue'
          }
        }
      });
    }
  });

  // 领取徽章
  $('#lqhzBtn').click(function () {
    let name = $('#usern_name').val();
    if (name == '') {
      alert('请输入姓名~');
      return false;
    } else if (name.length > 14) {
      alert('最多输入14个字~');
      return false;
    }

    let xzNum = 5;
    if (name.length <= xzNum) {
      $('#s_name').html(name.substring(0, xzNum));
      $('.douhao1').hide();
      $('.douhao').show();

    } else {
      $('#s_name').html(name.substring(0, xzNum));
      $('#s_name_other').html(name.substring(xzNum, name.length));
      $('.douhao1').show();
      $('.douhao').hide();
    }
    $(".goback").show();
    $(".btn_hz").hide();
    var zhugeParams = getZhugeParams();
    if(isMobile() && zhugeParams){
      zhugeParams={ ...zhugeParams, "name": name};
      zhuge.track('get_badge',zhugeParams);
    }
    setTimeout(function () {
      html2canvas(document.getElementById('huizhang'), {
        allowTaint: true,
        useCORS: true
      }).then(canvas => {
        $("#huizhang").empty();
        let oImg = new Image();
        oImg.src = canvas.toDataURL();
        oImg.width = document.body.clientWidth;
        $("#huizhang").html(oImg);
      });
    }, 500);

    mySwiper.slideTo(8, 500, false);
  });

  // 返回扩展阅读
  $('#gobackkzyd').click(function () {
    window.getSelection().removeAllRanges();
    $(".goback").hide();
    $(".btn_hz").show();
    $('#usern_name').val('');
    mySwiper.slideTo(5, 500, false);
  });

  $("#btn_cont1").click(function(){
    if(isMobile() && getZhugeParams()){
      zhuge.track('keep_learning1',getZhugeParams());
    }
  });

  $("#btn_cont2").click(function(){
    if(isMobile() && getZhugeParams()){
      zhuge.track('keep_learning2',getZhugeParams());
    }
  });
}

function getZhugeParams(){
  var userInfo = getCookie("AXXUserInfo_3");
  if (userInfo) {
    userInfo = JSON.parse(userInfo);
    var city = userInfo.city;
    if(city == '市辖区'){
      city = userInfo.province+city;
    }
    var zhugeTrackParams = {
      'province':userInfo.province,
      'city':city,
      'county':userInfo.district,
      'school':userInfo.school && userInfo.school,
      'grade':userInfo.grade && userInfo.grade,
      'squadron':userInfo.squadron && userInfo.squadron
    };
    return zhugeTrackParams;
  }
  return null;
}

function initUserInfo() {
  if (isMobile()) {
    var userInfo = getCookie("AXXUserInfo_3");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      let params = {
        province: userInfo.province,
        city: userInfo.city,
        district: userInfo.district,
        keywords: userInfo.school
      };
      // 判断学校和省市区的是否一致
      ajaxRequest({
        url: apiUrl + "/api/search/school/check.do",
        type: "POST",
        contentType: 'application/x-www-form-urlencoded'
      }, {}, params, (res) => {
        if (res.code = 10000  && res.data) {
          var showCnt = userInfo.province + userInfo.city;
          if (userInfo.district) {
            showCnt += userInfo.district;
          }
          if(userInfo.school){
            showCnt += userInfo.school;
          }
          $("#userShow").html(showCnt);
          $("#userInfo").show();
        } else {
          setCookie("AXXUserInfo_3", "");
          toNavSign()
        }
      });
    }
  }
}

//change
function toNavSign() {
  location.replace('../sign/sign.html?phase=3')
}

function hasGradeAndSquadron(userInfo){
  if(typeof userInfo == 'string'){
    userInfo = JSON.parse(userInfo);
  }
  return !!userInfo.grade && !!userInfo.squadron;
}
