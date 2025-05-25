
var module_inits = [];
var load_flag = true;

function load_init_modules(){
    if(!load_flag) return;

    for(var i=0;i<module_inits.length; i++){
        module_inits[i]();
    }
    load_flag = false;
}

function call_me(fun)
{
    module_inits.push(fun);
}

var ua = navigator.userAgent.toLowerCase();

function e(){

    if(ua.match(/MicroMessenger/i) != 'micromessenger'){
        load_init_modules();
        return;
    }
    const time = 2000;
    const timer = setTimeout(load_init_modules,time);
}
window.addEventListener('load', e, false);
photostart = 1;
shipin_selectd_pid = JSON.parse([]),
sharePicInfo = JSON.parse([]),
spmembers = eval("(" + spmembers + ")");
var guid = getGuid() + "_" + shipin_config.scene, isalert = !1, get_pid = function(e) {
    var i;
    return null != e ? -1 != (i = (e = (e = -1 != (i = e.indexOf("?")) ? e.substr(0, i) : e).toString().substr(e.lastIndexOf("/") + 1)).indexOf(".jpg")) ? e.substr(0, i) : e : ""
}, objid;
function random(e, i) {
    return Math.floor(e + Math.random() * (i - e))
}
function share_url(e) {
    var i = window.location.href
      , o = (-1 == i.indexOf("hidden") && -1 == i.indexOf("noshow") || (objid("guanzhu_container").style.display = "none"),
    -1 != i.indexOf("more=true") && (objid("notice").style.display = "block",
    objid("guanzhu_container").style.display = "block",
    objid("backtomore").style.display = "block"),
    "")
      , o = ("undefined" != typeof getQueryStr && (o = (o = getQueryStr("chanel")) ? "&chanel=" + o : ""),
    "wxid=" + wxid + "&bookid=" + e_bookid + "&olwxid=" + olwxid + "&shareflag=1&onmake=" + onmake + o)
      , i = ((-1 != i.indexOf("more=true") && !tbssaveoff || -1 < i.indexOf("gcshare=1")) && (o += "&gcshare=1"),
    "" != shareid && (o += "&shareid=" + shareid),
    fsource && "" != fsource && (o += "&fsource=" + fsource),
    1 == sharePicInfo.spOwner && 0 != editmode && (o += "&inviteshare=1"),
    ["goshow2.php", "showalbum.php", "goalbum.php", "albumshow.php", "seealbum.php"])
      , i = i[random(0, i.length)]
      , t = (i.length < 1 && (i = "gotobook2.php"),
    share_domain)
      , n = "";
    return void 0 !== (t = "timeline" == e && "" != share_timeline_domain ? share_timeline_domain : t) && "" != t ? n = location.protocol + "//" + t : (n = location.protocol + "//" + window.location.host + "/kphoto/" + i,
    console.log(n)),
    n + "?" + o
}
function share_img() {
    var e = slider_images_url[0]
      , i = e.indexOf("?");
    return -1 != i ? e.substr(0, i) : e
}
function on_weixin_share() {
    if (window.wx)
        try {
            window.wx.hideAllNonBaseMenuItem(),
            window.wx.showMenuItems({
                menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:QZone", "menuItem:favorite", "menuItem:profile", "menuItem:addContact", "menuItem:refresh", "menuItem:copyUrl"]
            });
            var e, i = e_desc.replace("<br>", "\n").replace("<br/>", "\n"), o = isLitixc ? "å¥½çœ‹çš„ç«‹ä½“ç›¸å†Œï¼Œé€ç»™ä½ ï¼" : "è¿™ä¸ªç›¸å†Œï¼Œé€ç»™ä½ ";
            "" != vid && (o = "è¿™ä¸ªè§†é¢‘ï¼Œé€ç»™ä½ ",
            i = (e = ["æˆ‘åˆ¶ä½œçš„ç²¾å½©è§†é¢‘ï¼Œæ‰“å¼€çœ‹çœ‹å§ï¼", "è¶…çº§ç‚«é…·çš„è§†é¢‘ï¼Œæ¥çœ‹çœ‹å§ï¼", "ç‚¹å‡»è¿›æ¥çœ‹çœ‹æˆ‘åšçš„ç²¾å½©è§†é¢‘", "è¶…ç¾Žçš„è§†é¢‘ï¼Œå€¼å¾—ä¸€çœ‹ï¼", "åœ¨å—ï¼Ÿé€ä½ ä¸€ä¸ªå¥½çœ‹çš„è§†é¢‘"])[Math.round(Math.random() * (e.length - 1))]),
            isSharePhoto && (o = 1 == sharePicInfo.spOwner ? (i = "" != headimgurl ? "@" + nickname + " é‚€è¯·ä½ åŠ å…¥æˆ‘çš„å¤šäººç›¸å†Œ" : "æˆ‘åˆ›å»ºäº†ä¸ªè¶…èµžçš„å¤šäººç›¸å†Œï¼Œå¿«æ¥åŠ å…¥æˆ‘ä»¬å§~ã€",
            "åŠ å…¥æˆ‘çš„ç›¸å†Œï¼Œè®©æˆ‘ä»¬å…±åˆ›ç¾Žå¥½å›žå¿†") : (i = "" != headimgurl ? "@" + nickname + " åˆ›å»ºäº†ä¸€ä¸ªè¶…èµžçš„å¤šäººç›¸å†Œï¼Œå¿«ç‚¹æ¥çœ‹ï¼" : "æˆ‘å’Œå¥½å‹åˆ›å»ºäº†ä¸ªè¶…ç¾Žçš„å¤šäººç›¸å†Œï¼Œå¿«æ¥çœ‹çœ‹å§~",
            "è¿™ä¸ªç›¸å†Œï¼Œé€ç»™ä½ ")),
            window.wx.onMenuShareAppMessage({
                title: i,
                desc: o,
                link: share_url("message"),
                imgUrl: share_img(),
                type: "link",
                dataUrl: "",
                success: function() {
                    share_callback("message")
                },
                cancel: function() {}
            }),
            window.wx.onMenuShareTimeline({
                title: i,
                link: share_url("timeline"),
                imgUrl: share_img(),
                success: function() {
                    share_callback("timeline")
                },
                cancel: function() {}
            }),
            window.wx.onMenuShareQQ({
                title: "éŸ³ä¹ç›¸å†Œ",
                desc: i,
                link: share_url("link"),
                imgUrl: share_img(),
                type: "link",
                success: function() {
                    share_callback("message")
                },
                cancel: function() {}
            }),
            window.wx.onMenuShareQZone({
                title: "éŸ³ä¹ç›¸å†Œ",
                desc: i,
                link: share_url("link"),
                imgUrl: share_img(),
                type: "link",
                success: function() {
                    share_callback("message")
                },
                cancel: function() {}
            })
        } catch (e) {}
}
function share_callback(e) {
    "function" == typeof closeallmask && closeallmask("msg-mask"),
    url = "adpv.php?click=" + e + "&openid=" + e_openid + "&bookid=" + e_bookid + "&wxid=" + wxid + "&fm=" + fm,
    XMLHttp.sendReq("GET", url, "", function() {
        callback_next(e)
    }),
    "undefined" != typeof lzyStatistics && ((new lzyStatistics).call(wxid, "sceneShare", e_scene),
    1 == isMina && (new lzyStatistics).call(wxid, "mina", "h5showShare"),
    "" != vid && (new lzyStatistics).call(wxid, "videophoto", "detailshare"),
    1 == isSharePhoto && ((new lzyStatistics).call(wxid, "sharephoto", "photoshare"),
    1 == sharePicInfo.spOwner && (new lzyStatistics).call(wxid, "sharephoto", "qunzhushare")),
    -1 !== location.href.indexOf("more=true") && (new lzyStatistics).call(wxid, "moreBook2", "photoShare")),
    0 != editmode && XMLHttp.sendReq("GET", "tongjiscene.php?scene=" + e_scene + "&type=edit&olwxid=" + olwxid, "", function() {})
}
function callback_next(e) {
    location.href;
    e = "editbook.php?type=" + e + "&bookid=" + e_bookid + "&wxid=" + wxid + "&shareid=" + shareid + "&edit=" + editmode + "&olwxid=" + olwxid,
    e = (e = null != e_openid ? e + "&openid=" + e_openid : e) + "&scene=" + e_scene;
    "aiche" == wxid && "" == shareid || isMina ? (e += "&notjump=1",
    XMLHttp.sendReq("GET", e, "", function() {})) : "undefined" != typeof shareCallUrl && "" != shareCallUrl ? location.href = shareCallUrl : 1 == editmode && 0 == onmake ? (XMLHttp.sendReq("GET", e, "", function() {}),
    visit_guangchang()) : location.href = e
}
function on_wx_music_init() {
    "" != e_desc ? document.title = e_desc.replace("<br>", "\n").replace("<br/>", "\n") : document.title = "éŸ³ä¹ç›¸å†Œ",
    create_music(),
    on_weixin_share(),
    "yes" == isfinish && read_localstorage();
    var e, i = window.location.href;
    check_cookie(),
    1 == editmode && (objid("footer").style.display = "none"),
    "0" != e_gz_make ? (objid("guanzhu_container").classList.add("guanzhu_special"),
    objid("guanzhu_container").classList.add("guanzhu_special_position"),
    objid("notice").classList.add("notice_special")) : "" != article_wxid ? (objid("guanzhu_container").classList.add("guanzhu_special"),
    objid("notice").classList.add("notice_special")) : (objid("guanzhu_container").classList.add("guanzhu_normal"),
    objid("notice").classList.add("notice_normal")),
    1 == isSharePhoto && "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "sharephoto", "visitpv"),
    0 == editmode && (e = document.getElementById("guanzhu_container"),
    i = window.location.href,
    e.style.visibility = "visible",
    null == navigator.userAgent.match(/MicroMessenger/) && -1 == i.indexOf("debug=1") && (e.style.display = "none"),
    objid("jubao-click").style.display = "block"),
    -1 != i.indexOf("hidden") && (objid("guanzhu_container").style.display = "none"),
    -1 != i.indexOf("noshow") && (objid("guanzhu_container").style.display = "none"),
    0 == editmode && "xdxj" == app && (objid("guanzhu_container").style.display = "block"),
    checkletter(),
    "woa" != fm && "woam" != fm && "videoplay" != videofm || "Fpx5HcVlzcq5TJ2sLvlMOBzFQZ9Kg90T" != e_bookid && (objid("like_div").style.top = "80px",
    objid("backtomake").style.display = "block"),
    1 != editmode && (-1 != i.indexOf("noshow=true") || null == navigator.userAgent.match(/MicroMessenger/) ? objid("add_same").style.display = "none" : 0 == editmode && -1 == i.indexOf("noshow=true") && "make" == gotomake && (objid("guanzhu_container").style.display = "block",
    objid("notice").style.display = "block",
    1 == gcshare && (objid("gotomore").style.display = "block",
    objid("like_div").style.top = "80px",
    "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "photoEditButton", "gotomoreshow"))),
    id("mengban").style.display = "block",
    1 == isMina && null != navigator.userAgent.match(/MicroMessenger/) && (objid("mina_share").style.display = "block",
    objid("guanzhu_container").style.display = "block"),
    1 == isSharePhoto && -1 == i.indexOf("fm=woa") && (objid("notice").style.display = "none",
    objid("guanzhu_container").style.display = "none",
    e = "share-make-photo",
    -1 !== i.indexOf("inviteshare=1") && (e = "share-upload-photo",
    objid("finishnotice").innerHTML = "åŠ å…¥è¯¥ç›¸å†Œï¼Œä¸Žå¥½å‹å…±åŒåˆ¶ä½œç²¾å½©ç›¸å†Œ",
    objid("finishnotice").style.webkitAnimation = "finish-show 1s linear both"),
    objid(e).style.display = "block")),
    -1 != i.indexOf("printmodule=true") && (objid("guanzhu_container").style.display = "none",
    (e = objid("morexiangce")).style.display = "block",
    e.style.backgroundImage = "",
    e.innerText = "ç«‹å³æ‰“å°",
    e.onclick = function() {
        event.stopPropagation(),
        location.href = "hzprint.php?wxid=" + wxid + "&bookid=" + e_bookid + "&scene=" + e_scene
    }
    ),
    "aiche" == wxid && "" == shareid && (objid("notice").style.display = "none"),
    article_wxid && (objid("notice").style.display = "none"),
    "undefined" != typeof isactive && isactive && (objid("notice").style.display = "none",
    objid("guanzhu_container").style.display = "block"),
    -1 === i.indexOf("authredirect=1") || checksendflower() || write_localstorage(),
    -1 !== i.indexOf("authredirect=1") && !checksendflower() && -1 == i.indexOf("fm=woa") && isShowGiftAccess && open_gift_block(),
    handleHeadimg(like_user_list),
    1 != notbtn && -1 === i.indexOf("notbtnmusic=1") || (objid("jubao-click").style.display = "none",
    objid("backtomake").style.display = "none",
    objid("like_div").style.display = "none",
    objid("cardsound").style.display = "none",
    objid("guanzhu_container").style.display = "none",
    objid("notice").style.display = "none",
    objid("kgCD") && -1 === i.indexOf("notbtnmusic=1") && (objid("kgCD").style.display = "none")),
    "undefined" != typeof lzyStatistics && fsource && "" != fsource && (new lzyStatistics).call(statwxid, "gotoshow", fsource)
}
function set_cookie(e) {
    -1 != window.location.href.indexOf("kawabody") ? document.cookie = "books=" + e + ";domain=.kawabody.cn" : document.cookie = "books=" + e + ";domain=.kagirl.cn"
}
function get_cookie(e) {
    if (0 < document.cookie.length) {
        var i = document.cookie.indexOf(e + "=");
        if (-1 != i)
            return i = i + e.length + 1,
            -1 == (e = document.cookie.indexOf(";", i)) && (e = document.cookie.length),
            unescape(document.cookie.substring(i, e))
    }
    return ""
}
function check_cookie() {
    var e = e_bookid + "&" + wxid
      , i = (books = get_cookie("books"),
    console.log("cookie:" + books),
    window.location.href);
    if (1 == editmode || -1 != i.indexOf("hidden")) {
        if (objid("guanzhu_container").style.display = "none",
        objid("guanzhubtn") && (objid("guanzhubtn").style.display = "none",
        objid("reshowbtn").style.left = "163px"),
        cookie_str = "",
        null != books && "" != books && -1 == books.indexOf(e))
            cookie_str = books + ":" + e;
        else {
            if (-1 != books.indexOf(e))
                return;
            null != books && "" != books || (cookie_str = e)
        }
        set_cookie(cookie_str)
    } else
        null != books && "" != books && -1 != books.indexOf(e) ? (objid("guanzhu_container").style.display = "none",
        objid("guanzhubtn") && (objid("guanzhubtn").style.display = "none",
        objid("reshowbtn").style.left = "163px")) : objid("guanzhu_container").style.display = "block"
}
function getMemberLevel(e) {
    return 1 == isSharePhoto && (1 == e && 1 == sharePicInfo.spOwner || (2 == e && 1 != sharePicInfo.spOwner || 3 == e && 1 == sharePicInfo.spMembers))
}
void 0 === objid && (objid = function(e) {
    return document.getElementById(e)
}
);
var videoready = !1
  , music_header = (call_me(on_wx_music_init),
"http://sound.kagirl.net/sound/")
  , e_music_player = new Audio
  , kgplay = null;
function play_music() {
    if ("" != e_music_url) {
        if (sound_image_init(),
        kugou_music_check(e_music_url))
            return kugou_play_music(e_music_url);
        mymusic = -1 != e_music_url.indexOf("qqmusic") ? "https://s2.kagirl.cn/template/music/688042.m4a" : e_music_url,
        void 0 === e_music_player && "undefined" != typeof onerror_tips && (onerror_tips = "typof Audio: " + typeof Audio),
        e_music_player.src = mymusic,
        e_music_player.loop = "loop",
        console.log(e_music_player.src),
        e_music_player.onerror = function() {
            mymusic = mymusic.replace(".mp4", ".mp3"),
            e_music_player.src = mymusic,
            e_music_player.play(),
            e_music_player.onerror = null
        }
        ,
        e_music_player.play(),
        -1 === window.location.href.indexOf("debug=1") && (checkMusicBufferTimer = window.setInterval("checkMusicBuffer()", 1e3)),
        sound_image_init(),
        bplay = 1,
        "dongganmtv12020lyric" != e_scene && "hetangyuese2020" != e_scene && "luwei2021" != e_scene && "kuailemeiyitian2021" != e_scene || open_lyric()
    }
}
var checkMusicBufferTimer = "";
function checkMusicBuffer() {
    var e = 1 == bplay && e_music_player.paused;
    console.log("music:1"),
    (isNaN(1) || e) && (objid("sound_image").style.webkitAnimation = "",
    e_music_player.play(),
    show_shouzhi()),
    1 != bplay || e_music_player.paused || (objid("sound_image").style.webkitAnimation = "zhuan 3s linear infinite",
    window.clearInterval(checkMusicBufferTimer))
}
var bplay = 0;
function create_music() {
    "" != e_music_url && (sound_image_init(),
    play_music())
}
function stop_music() {
    kugou_music.isActive && kugou_stop_music(),
    console.log(e_music_player),
    null != e_music_player && e_music_player.pause(),
    null != e_try_player && e_try_player.pause(),
    objid("sound_image") && (objid("sound_image").style.webkitAnimation = "")
}
function switchsound() {
    var e = objid("sound_image")
      , i = e_music_player
      , o = objid("music_txt");
    i.paused ? (bplay = 1,
    i.play()) : (bplay = 0,
    i.pause()),
    1 == bplay ? (e.style.webkitAnimation = "zhuan 3s linear infinite",
    o.innerHTML = "æ‰“å¼€") : (e.style.webkitAnimation = "",
    o.innerHTML = "å…³é—­"),
    o.style.webkitAnimation = "fadeout 2.5s steps(1)",
    setTimeout(function() {
        o.style.webkitAnimation = ""
    }, 2500)
}
function getGuid() {
    return (Math.random().toString().substr(3, 23) + "_" + Date.now()).toString(36)
}
function visit_more() {
    "undefined" != typeof lzyStatistics && ((new lzyStatistics).call(wxid, "photoShareButton", "visitMore"),
    shareid && (new lzyStatistics).call(wxid, "moreBookVisitMore", e_bookid)),
    location.href = "makebook.php?wxid=" + wxid + "&olwxid=" + olwxid
}
function visit_guanzhu() {
    if ("undefined" != typeof lzyStatistics && ((new lzyStatistics).call(wxid, "photoShareButton", "visit_guanzhu"),
    article_wxid && (new lzyStatistics).call(wxid, "photoShareButton", "article_visit_guanzhu"),
    "" != vid && (new lzyStatistics).call(wxid, "videophoto", "detailfreemake"),
    "Fpx5HcVlzcpGDR4_qc0g3_s5AL4redHF" == e_bookid && (new lzyStatistics).call(wxid, "photoshowup", "photomake")),
    1 == isMina && "" != mineJump)
        return "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "mina", "h5showMakeBtn"),
        location.href = mineJump,
        !1;
    var e, i = "";
    -1 === location.href.indexOf("fm=woa") && setCookie("nextaction", "make", 1),
    "" != xcx_unionid_en && (i += "&xcx_unionid=" + xcx_unionid_en),
    "undefined" != typeof e_scene && -1 < location.href.indexOf("copysceneflag=1") && (i += "&copyscene=" + e_scene),
    -1 !== location.href.indexOf("article_wxid=") && (i += "&fmtype=article"),
    fsource && "" != fsource && (i += "&fsource=" + fsource),
    "undefined" != typeof e_gz_make && 0 < e_gz_make && "" == vid && -1 === location.href.indexOf("more=true") && -1 === location.href.indexOf("fm=woa") ? (e = "traceland.php?type=make&wxid=" + wxid + "&olwxid=" + olwxid + "&bookid=" + e_bookid,
    -1 !== location.href.indexOf("bydqcs=1") && (e += "&bydqcs=1"),
    -1 !== location.href.indexOf("shareflag=1") && (e += "&shareflag=1"),
    XMLHttp.sendReq("GET", e, "", function(e) {
        e = JSON.parse(e.responseText).url;
        e.indexOf(!0) && (e += i),
        location.href = e
    })) : "make" == gotomake && "" != vid && 1 == shareflag ? location.href = "makebook.php?wxid=" + wxid + "&olwxid=" + olwxid + "&videofm=videoshowshare" : -1 !== location.href.indexOf("enterfrom=qun") || "no" == istiaozhuan ? location.href = guanzhu_url + i : "hide" != istiaozhuan && (-1 !== location.href.indexOf("more=true") && (new lzyStatistics).call(wxid, "moreBook2", "photoFreeMake"),
    "make" == gotomake && (article_wxid || -1 !== location.href.indexOf("replaywxid=") ? location.href = guanzhu_url + i : 1 == is_in_xcx ? location.href = "makebook.php?wxid=xqqy&olwxid=" + olwxid + i : "" == shareid ? location.href = "makebook.php?wxid=" + wxid + "&olwxid=" + olwxid + i : (e = shareid || "xqqy",
    location.href = "makebook.php?from=shareid&wxid=" + e + i)))
}
function gotoguanzhu() {
    var e;
    "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "photoShareButton", "gotoguanzhu"),
    -1 !== location.href.indexOf("more=true") ? ("undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "moreBook2", "photoMore"),
    XMLHttp.sendReq("GET", "xiangceSqApi.php?wxid=" + wxid + "&action=getnotvisite", "", function(e) {
        e = JSON.parse(e.responseText);
        return window.location.href = e.url,
        !1
    })) : "aiche" == shareid ? location.href = "makebook.php?wxid=aiche" : (e = "traceland.php?type=more&wxid=" + wxid + "&olwxid=" + olwxid,
    -1 !== location.href.indexOf("bydqcs=1") && (e += "&bydqcs=1"),
    -1 !== location.href.indexOf("shareflag=1") && (e += "&shareflag=1"),
    "undefined" != typeof e_gz_group && 0 < e_gz_group && -1 === location.href.indexOf("fm=woa") ? XMLHttp.sendReq("GET", e, "", function(e) {
        e = JSON.parse(e.responseText);
        return window.location.href = e.url,
        !1
    }) : location.href = "xiangcemore.php?wxid=" + wxid + "&olwxid=" + olwxid)
}
function gotomore() {
    "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "photoEditButton", "gotomore"),
    location.href = "./xiangcemore.php?wxid=" + wxid
}
function gotosharephoto() {
    var e = "?wxid=" + wxid;
    -1 !== location.href.indexOf("inviteshare=1") ? (e += "&bookid=" + e_bookid,
    "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "sharephoto", "uploadpic")) : "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "sharephoto", "freemake"),
    setCookie("nextshareaction", "make", 1),
    location.href = "./sharebooks.php" + e
}
function close_searchmusic() {
    objid("search_music").style.display = "none",
    objid("search_music_result_div").innerHTML = "",
    e_music_player.play(),
    reflush()
}
function search_musicshow() {
    objid("search_music").style.display = "block";
    var e = 500 / (document.body.clientWidth / document.body.clientHeight);
    null !== objid("search_music_result") && (objid("search_music_result").style.height = e - 190 + "px")
}
function submit_addmusic() {
    var e = objid("music_name").value;
    null == e || "" == e ? alert("éŸ³ä¹åç§°ä¸èƒ½ä¸ºç©ºï¼") : (add_music_xml.open("GET", "music_feedback.php?musicname=" + e, !0),
    add_music_xml.onreadystatechange = add_music_callback,
    add_music_xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    add_music_xml.send(null))
}
function trim(e) {
    return e.replace(/(^\s*)|(\s*$)/g, "")
}
function add_music_callback() {
    var e;
    4 == add_music_xml.readyState && 200 == add_music_xml.status && (e = add_music_xml.responseText,
    console.log(e),
    e.indexOf("1") ? objid("add_music_result").style.display = "block" : alert("æäº¤å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•ã€‚"))
}
function search_music() {
    objid("search_music_result_div").innerHTML = "",
    objid("search_music_notice").style.display = "block";
    var e = objid("search_musicname").value;
    "" != (e = trim(e)) && null != e && null != e || alert("è¾“å…¥ä¸èƒ½ä¸ºç©º"),
    e = encodeURIComponent(e),
    url = "/kphoto/kugou_api.php?action=kugou_search_music&music=" + e,
    music_xml.open("GET", url, !0),
    music_xml.onreadystatechange = SearchMusic_onCallback,
    music_xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    music_xml.send(null)
}
function SearchMusic_onCallback() {
    if (4 == music_xml.readyState)
        if (200 == music_xml.status) {
            var e = music_xml.responseText
              , e = JSON.parse(e)
              , i = objid("search_music_result_div");
            if (1 != e.code) {
                var o = trim(objid("search_musicname").value);
                i.innerHTML = '<div style="line-height:30px;margin:50px 10px 10px 10px;font-size:16px;"><p style="font-size:22px;line-height30px;">æ‰¾ä¸åˆ°ä¸Ž<b>"' + o + '"</b>ç›¸å…³éŸ³ä¹ï¼Œè¯·æ‚¨æ£€æŸ¥æ‚¨è¾“å…¥çš„æ­Œæ›²åç§°æ˜¯å¦æœ‰è¯¯<br></p></div>',
                i.style.display = "block"
            } else {
                for (var t = "", n = e.data, s = 0; s < n.length; s++) {
                    var a = JSON.stringify(n[s].kugou_music)
                      , l = JSON.stringify(n[s].kugou_music);
                    t += '<div class="e-mp3box-item"><div class="e-mp3box-item-img"><img src="https://tu.kagirl.cn/icon/yinfu.png"></div><div id="search_music_result_text" class="e-mp3box-item-title" onclick=\'search_music_title_click(' + a + "," + s + ")'>" + n[s].title + " - " + n[s].singer_name + '</div><div id="search_music_btn' + s + '" class="search-mp3box-item-ok" id="search-music-ok-' + s + "\" onclick='e_music_select(" + l + ")'>ç¡®å®š</div></div>"
                }
                i.innerHTML = t,
                i.style.display = "block"
            }
        } else
            console.log("Error: " + music_xml.status);
    objid("search_music_result_div").style.display = "block",
    objid("search_music_notice").style.display = "none"
}
function search_music_title_click(e, i) {
    for (var o, t = document.getElementsByClassName("search-mp3box-item-ok"), n = objid("e-player"), s = 0; s < t.length; s++)
        t[s].style.display = "none";
    null !== objid("search_music_btn" + i) && (objid("search_music_btn" + i).style.display = "block"),
    stop_music(),
    "object" == typeof e ? (n && n.pause && n.pause(),
    kugou_music.kgVersion = 1,
    kugou_play_music(music_url = kugou_music.tag + e.id + "_" + e.hash + "_" + kugou_music.kgVersion)) : null == n ? ((o = document.createElement("audio")).id = "e-player",
    o.src = e,
    o.loop = "loop",
    o.play(),
    o.onerror = function() {
        o.src = e.replace(".mp4", ".mp3"),
        o.play(),
        o.onerror = null
    }
    ,
    document.body.appendChild(o)) : n.src == e ? n.paused ? n.play() : (n.pause(),
    objid("e-music-img-" + i).style.webkitAnimation = "") : (n.src = e,
    n.play())
}
function search_music_select(e) {
    objid("search_music").style.display = "none",
    e_music_url = e,
    "undefined" == typeof reload_scene ? (e = "editbook.php?",
    e = (e = (e = (e = (e += "type=set_music") + "&openid=" + e_openid) + "&bookid=" + e_bookid) + "&music=" + encodeURIComponent(e_music_url)) + "&wxid=" + wxid,
    XMLHttp.sendReq("GET", e, "", function() {
        location.reload()
    })) : (tool_close(),
    e_music_player ? (objid("cardsound") || objid("e-player") || (create_music(),
    e_music_player.play()),
    sound_image_init(),
    e_music_player.src = objid("e-player").src,
    e_music_player.play()) : create_music(),
    e_close_wind(),
    editBookSong(e_music_url),
    kugou_music_empty())
}
function editBookSong(e, i) {
    e = "editbook.php?type=set_music" + "&openid=" + e_openid + "&bookid=" + e_bookid + "&music=" + encodeURIComponent(e) + "&name=" + encodeURIComponent(i) + "&wxid=" + wxid,
    XMLHttp.sendReq("GET", e, "", function() {})
}
add_music_xml = new XMLHttpRequest,
music_xml = new XMLHttpRequest;
var bjubao_type = !0;
function showjubaoimg(e) {
    e = objid("jubaoimg-" + e);
    if ("none" == e.style.display) {
        for (var i = document.getElementsByClassName("jubao-radio"), o = 0; o < i.length; o++)
            i[o].style.display = "none";
        e.style.display = "block",
        5 <= objid("jubao-detail").value && (objid("jubao-submit").style.display = "block"),
        bjubao_type = !0
    } else
        e.style.display = "none",
        objid("jubao-submit").style.display = "none",
        bjubao_type = !1
}
function showjubaoimg2() {
    5 <= objid("jubao-detail").value.length && bjubao_type ? objid("jubao-submit").style.display = "block" : objid("jubao-submit").style.display = "none"
}
function showjubao() {
    "1" == localStorage.getItem(e_bookid + wxid) ? alert("æ‚¨å·²ç»åé¦ˆè¿‡è¿™ä¸ªç›¸å†Œäº†") : objid("jubao-content").style.display = "block"
}
function hidejubao() {
    objid("jubao-content").style.display = "none"
}
function submitjubao() {
    if (objid("jubao-detail").value.length < 5)
        alert("é—®é¢˜æè¿°å­—æ•°å¤ªå°‘ï¼");
    else {
        for (var e = document.getElementsByClassName("jubao-radio"), i = 0; e[i] && "none" == e[i].style.display; )
            i++;
        alert("åé¦ˆæäº¤æˆåŠŸï¼"),
        id("jubao-content").style.display = "none",
        localStorage.setItem(e_bookid + wxid, 1);
        var o = location.protocol + "//photo1.kagirl.cn/kphoto/jubao.php?bookid=" + e_bookid + "&wxid=" + wxid + "&type=" + i + "&detail=" + encodeURIComponent(objid("jubao-detail").value);
        XMLHttp.sendReq("get", o, "", function(e) {})
    }
}
function visit_sousuo() {}
function show_like_toast(e, i, o) {
    objid("likebg_text").innerHTML = e,
    objid("likebg").style.display = "flex",
    "" != o ? (objid("likebg_icon").className = o,
    objid("likebg_icon").style.display = "block") : objid("likebg_icon").style.display = "none",
    setTimeout(function() {
        objid("likebg").style.display = "none",
        objid("likebg_icon").className = ""
    }, i)
}
var authclick = getCookie("isAuthmmnew6_" + wxid);
function write_localstorage() {
    if (checksendflower())
        return havesonghua(),
        !1;
    if (isShowGiftAccess && -1 == location.href.indexOf("fm=woa") && -1 == location.href.indexOf("edit=") && open_gift_block(),
    1 == visistatus && -1 == location.href.indexOf("authredirect=1") && !authclick) {
        authclick = 1;
        var e = (i = window.location.href).match(/\/\/([.0-9a-zA-Z\/]+)\?(.*?)$/);
        if (setCookie("isAuthmmnew6_" + wxid, 1, 1),
        e)
            return e = "wxauthredict.php?domain=" + e[1] + "&" + e[2],
            window.location = e,
            !1
    }
    "function" == typeof write_localstorage_gift && write_localstorage_gift(),
    objid("like_div").onclick = havesonghua;
    var i = "submit_like.php?bookid=" + e_bookid + "&wxid=" + wxid + "&openid=" + e_openid;
    !e_openid && -1 === location.href.indexOf("fm=woa") || (i += "&myzan=1"),
    XMLHttp.sendReq("GET", i, "", function(e) {
        e = JSON.parse(e.responseText);
        if (1 == e.status) {
            var i = e.data.like_users;
            if (0 < i.length) {
                for (var o = [], t = 0; t < i.length; t++)
                    o.push(i[t].headimgurl);
                handleHeadimg(o)
            }
            show_like_toast("æ„Ÿè°¢æ‚¨çš„èµžèµ", 3e3, "likebg-active"),
            zan_num += 1,
            objid("like_num").innerHTML = getliketext(zan_num);
            var n, e = e_bookid + wxid + date;
            50 == (n = null == localStorage || null == localStorage.likestr ? [] : JSON.parse(localStorage.likestr)).length && n.pop(),
            n.unshift(e),
            likestr = JSON.stringify(n),
            localStorage.likestr = likestr
        }
    })
}
function get_user_list_for_like() {
    var e = "submit_like_user.php?bookid=" + e_bookid + "&wxid=" + wxid + "&openid=" + e_openid;
    XMLHttp.sendReq("GET", e, "", function(e) {
        var i = JSON.parse(e.responseText);
        if (1 == i.status) {
            for (var e = i.data.user_info, o = i.data.like_users, t = o.length, n = (void 0 === e.headimgurl || "" == e.headimgurl ? (objid("my-user-img").style.display = "none",
            objid("my-user-name").innerHTML = e_desc.substr(0, 12)) : (objid("my-user-img").src = e.headimgurl,
            objid("my-user-name").innerHTML = e.nickname,
            objid("my-user-img").style.display = "block"),
            objid("my-user-flower-num").innerHTML = zan_num,
            ""), s = 0; s < zan_num; s++) {
                var a = i.data.default;
                n += "<img class='user-list-img' src='" + (a = s < t ? o[s].headimgurl : a) + "'>"
            }
            objid("user-list-block").innerHTML = n,
            objid("like-user-block").style.display = "block",
            objid("like-mask").style.display = "block"
        }
    })
}
function nottofeedback() {
    0 == bjubao_type ? alert("æ‚¨å·²ç»åé¦ˆè¿‡è¿™ä¸ªç›¸å†Œäº†") : alert("åé¦ˆå¿…é¡»ä¸å°‘äºŽ5ä¸ªå­—")
}
function read_localstorage() {
    if (objid("like_div").style.display = "block",
    null == localStorage || null == localStorage.likestr)
        objid("like_div").onclick = write_localstorage;
    else
        for (var e = JSON.parse(localStorage.likestr), i = e_bookid + wxid + date, o = 0; o < e.length; o++) {
            if (e[o] == i) {
                objid("like_div").onclick = havesonghua;
                break
            }
            o == e.length - 1 && (objid("like_div").onclick = write_localstorage)
        }
    var t = getliketext(zan_num);
    objid("like_num").innerHTML = t
}
function getliketext(e) {
    return e < 1 ? (liketext = "é€èŠ±ç»™æˆ‘",
    !e_openid && -1 === location.href.indexOf("fm=woa") || (liketext = "å‘ç»™å¥½å‹æ”¶èŠ±"),
    objid("like_heart").style.display = "inline-block",
    liketext) : (objid("like_heart").style.display = "none",
    "æ”¶åˆ°<span style='color: red'>" + e + "</span>æœµèŠ±")
}
function checksendflower() {
    var e = !1;
    if (null != localStorage && null != localStorage.likestr)
        for (var i = JSON.parse(localStorage.likestr), o = e_bookid + wxid + date, t = 0; t < i.length; t++)
            if (i[t] == o) {
                e = !0;
                break
            }
    return e
}
function havesonghua() {
    "function" == typeof havesonghua_gift && havesonghua_gift(),
    e_openid || -1 !== location.href.indexOf("fm=woa") ? (isShowGift ? get_user_list_for_like_gift : get_user_list_for_like)() : isShowGiftAccess || show_like_toast("å·²é€èŠ±<br />æ˜Žå¤©å¯ä»¥å†é€", 3e3, "likebg-default")
}
function visit_guangchang() {
    return "" != videoUrl ? (location.href = videoUrl,
    !1) : "" != newyearUrl ? (location.href = newyearUrl,
    !1) : void ("" != shareid && null != shareid ? location.href = "/kphoto/xiangcemore.php?sfrom=xiangce&wxid=" + shareid : location.href = "/kphoto/xiangcemore.php?sfrom=xiangce&wxid=" + wxid)
}
function checkletterbtn() {
    XMLHttp.sendReq("get", "tongjiscene.php?type=baoguang", "", function(e) {})
}
function clickbtn() {
    XMLHttp.sendReq("get", "tongjiscene.php?type=click", "", function(e) {})
}
function openletter() {
    objid("letterdiv").style.display = "block",
    objid("letter").src = "https://s1.kagirl.cn/template/guangchang/letter1.png",
    objid("letter").style.height = "120px",
    objid("letter").style.top = "-40px",
    objid("letternotice").style.display = "block",
    clickbtn(),
    objid("letternotice").style.display = "none",
    setletter()
}
function closeletter() {
    objid("letterdiv").style.display = "none",
    objid("letterpicdiv").style.display = "none",
    objid("letter").src = "https://s2.kagirl.cn/template/guangchang/letter.jpg",
    objid("letter").style.height = "80px",
    objid("letter").style.top = "0px"
}
var newletter = "20160919";
function checkletter() {}
function setletter() {
    get_cookie("letterid") != newletter && (document.cookie = "letterid=" + newletter + ";domain=.kagirl.cn")
}
function saveoff() {
    location.href = "saveoffstat.php?type=guangchang&bookid=" + e_bookid + "&wxid=" + wxid + "&shareid=" + shareid
}
function savepic() {
    "undefined" != typeof lzyStatistics && ((new lzyStatistics).call(wxid, "photoShareButton", "savepic"),
    shareid && (new lzyStatistics).call(wxid, "moreBookSavePic", e_bookid));
    var e = location.href
      , i = e.match(/\/([a-zA-Z0-9]+).php\?/)
      , o = "psinfo1.php?wxid=" + wxid + "&bookid=" + e_bookid;
    i && (o = e.replace(i[1], "psinfo1")),
    location.href = o
}
function backtomore() {
    "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "photoEditButton", "backtomore"),
    location.href = "xiangcemore.php?wxid=" + shareid
}
function openma() {
    objid("madiv").style.display = "block",
    objid("erweima").src = "https://s1.kagirl.cn/template/newma/" + wxid + ".png"
}
function closema() {
    objid("madiv").style.display = "none"
}
function hideguanzhu() {
    hidejubao(),
    objid("guanzhu_container").style.display = "none",
    objid("notice").style.display = "none"
}
function kugou_loadScript(e, i) {
    "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "lzyKugou", "retry"),
    "undefined" != typeof onerror_tips && (onerror_tips = "kugou_loadScript");
    var o = document.createElement("script");
    o.type = "text/javascript",
    o.readyState ? o.onreadystatechange = function() {
        "complete" != this.readyState && "loaded" != this.readyState || (i && i(),
        o.onreadystatechange = o = i = null)
    }
    : o.onload = function() {
        i && i(),
        o.onload = o = i = null
    }
    ,
    o.onerror = function() {
        "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "lzyKugou", "retry_error"),
        o.onerror = null
    }
    ,
    o.src = e,
    document.getElementsByTagName("head")[0].appendChild(o)
}
function kugou_retry_play(e) {
    void 0 === window.playSong ? kugou_loadScript("https://pc.service.kugou.com/apps/kawaweika/js/message.js", function() {
        e()
    }) : e()
}
function showCardsound() {
    var e = objid("cardsound")
      , i = objid("sound_image")
      , o = document.querySelectorAll(".sound_tips");
    if (kugou_music.isActive)
        return e.style.display = "none",
        "undefined" != typeof lzyStatistics && (new lzyStatistics).once(wxid, "lzyKugou", "show"),
        !1;
    [].forEach.call(o, function(e) {
        e.style = ""
    }),
    i.style.webkitAnimation = "zhuan 3s linear infinite",
    e.style.display = "block",
    i.src = "https://tu.kagirl.cn/pic/music_note_big.png?v=1"
}
function setMusic(e) {
    "object" == typeof (window.e_music_url = e) ? kugou_play_music(kugou_music.tag + e.id + "_" + e.hash + "_1") : (kugou_music_empty(),
    e_music_player ? (sound_image_init(),
    e_music_player.src = e,
    e_music_player.play()) : create_music()),
    showCardsound()
}
function sound_image_init() {
    var e = objid("cardsound");
    720 === window.innerWidth && (e.className = "cardsound_720"),
    showCardsound()
}
var showShouzhi = !1;
function show_shouzhi() {
    "undefined" == typeof anMusicSt || 1 != anMusicSt || showShouzhi || 1 == notbtn || (showShouzhi = !0,
    objid("sound_shouzhi").style.display = "block",
    objid("sound_shouzhi").style.webkitAnimation = "shangshuo 5s 2s linear both",
    editmode || 1 == videostatus || (objid("music_play_mask_container").style.display = "block",
    objid("music_play_mask_container").style.webkitAnimation = "widgets_fadeIn 0.1s 0.5s linear forwards",
    objid("music_play_select_container").style.display = "block",
    objid("music_play_select_container").style.webkitAnimation = "widgets_fadeIn 0.1s 0.5s linear forwards"))
}
function kugou_play_music(e) {
    e = kugou_music_check(e);
    return !!e && (kugou_music.play_time = (new Date).getTime(),
    kugou_music.id = e.id,
    kugou_music.hash = e.hash,
    kugou_music.isActive = 1,
    kugou_music.kgVersion = e.kgVersion,
    kugou_loadLyric(),
    kugou_init_play_music(kugou_music.hash, kugou_music.id, kugou_music.kgVersion),
    showCardsound(),
    bplay = 1,
    !0)
}
function kugou_init_play_music(e, i, o) {
    kgplayer_init(),
    1 == o ? kgplay.player.playSong({
        hash: e,
        album_audio_id: i,
        noClimax: !0,
        fullSong: !0
    }) : kgplay.player.playAudioSong({
        hash: e,
        album_audio_id: i,
        noClimax: !0,
        fullSong: !0
    })
}
function kgplayer_init() {
    var e;
    kgplay || void 0 === window.kgPlayerV3 || (kgplay = window.kgPlayerV3,
    e = "lzyKugou_" + kugou_music.id + "_" + kugou_music.hash + "_" + kugou_music.kgVersion,
    kgplay.player.initPlayer({
        appid: "10013",
        url: "kugou_api.php?action=getsong&wxid=" + wxid + "&bookid=" + e_bookid + "&kugou_replace=" + kugou_replace + "&music_url=" + e,
        loadTime: 9e3,
        playTime: 5e3
    }),
    show_shouzhi(),
    "undefined" != typeof lzyStatistics && (new lzyStatistics).once(wxid, "lzyKugou", "loadTimes"),
    kgplay.listener.listen("audioPlayFail", function(e) {
        "undefined" != typeof lzyStatistics && (new lzyStatistics).once(wxid, "lzyKugou", "audioPlayFail")
    }),
    kgplay.listener.listen("playSongFail", function(e) {
        "undefined" != typeof lzyStatistics && (new lzyStatistics).once(wxid, "lzyKugou", "playSongFail")
    }),
    kgplay.listener.listen("loadSongTimeout", function(e) {
        "undefined" != typeof lzyStatistics && (new lzyStatistics).once(wxid, "lzyKugou", "loadSongTimeout")
    }),
    kgplay.listener.listen("loadSongFail", function(e) {
        console.log(e);
        var e = e.error;
        if (-1 === ["èŽ·å–èµ„æºå¤±è´¥", "èµ„æºéœ€ä»˜è´¹", "ç¦æ­¢èŽ·å–èµ„æº"].indexOf(e))
            return !1;
        1 == editmode && (objid("kugou_unactive_hint").style.display = "block"),
        "uncheck" == kugou_unactive_flag && (e = "kugou_unactive_flag.php?wxid=" + wxid + "&e_bookid=" + e_bookid + "&music_url=" + e_music_url,
        XMLHttp.sendReq("GET", e, "", function(e) {
            kugou_unactive_flag = "checked"
        })),
        objid("music_play_mask_container").style.display = "none",
        objid("music_play_select_container").style.display = "none"
    }),
    kgplay.listener.listen("childChoiceSongCallback", function(e) {
        kugou_search_choice(e)
    }),
    kgplay.listener.listen("childPlaySongCallback", function(e) {
        console.log("childPlaySongCallback"),
        null != e_music_player && e_music_player.pause(),
        null != e_try_player && e_try_player.pause()
    }),
    kgplay.listener.listen("closeSearchCallback", function(e) {
        kugou_search_close()
    }),
    kgplay.player.addEvent("play", function(e) {
        objid("sound_shouzhi").style.display = "none",
        objid("music_play_mask_container").style.display = "none",
        objid("music_play_select_container").style.display = "none"
    }))
}
function kugou_unactive_musics() {
    objid("kugou_unactive_hint").style.display = "none",
    "undefined" != typeof e_musics && e_musics(2)
}
function kugou_music_check(e) {
    if (void 0 !== e)
        if ("object" == typeof e) {
            if (e.id && e.hash)
                return e
        } else {
            var i, e = e.split("_");
            if (e[0] + "_" == kugou_music.tag)
                return i = {
                    id: e[1],
                    hash: e[2]
                },
                e.length < 3 ? i.kgVersion = 0 : i.kgVersion = e[3],
                i
        }
    return !1
}
function kugou_stop_music() {
    kgplay && kgplay.player.pause()
}
function kugou_music_empty() {
    kugou_stop_music(),
    kgplay && kgplay.player.destroy(),
    kugou_music.hash = "",
    kugou_music.id = "",
    kugou_music.isActive = 0
}
function kugou_search_close() {
    e_close_wind(),
    kugou_music.isActive ? kugou_play_music(music_url = kugou_music.tag + kugou_music.id + "_" + kugou_music.hash + "_" + kugou_music.kgVersion) : (kgplay && kgplay.player.destroy(),
    e_music_player.play()),
    objid("sound_image") && (objid("sound_image").style.webkitAnimation = "zhuan 3s linear infinite")
}
function kugou_music_restart() {
    kugou_music.isActive ? kugou_play_music(music_url = kugou_music.tag + kugou_music.id + "_" + kugou_music.hash + "_" + kugou_music.kgVersion) : e_music_player.play(),
    objid("sound_image") && (objid("sound_image").style.webkitAnimation = "zhuan 3s linear infinite")
}
function kugou_search_choice(e) {
    kugou_music.kgVersion = 1,
    music_url = kugou_music.tag + e.album_audio_id + "_" + e.hash + "_" + kugou_music.kgVersion,
    e_close_wind(),
    stop_music();
    e = null != (e = e.name) ? e.replace(/\(/g, "").replace(/\)/g, "").replace(/\'/g, "").replace(/amp;/g, "").replace(/!/g, "").replace(/\*/g, "") : "";
    editBookSong(music_url, e),
    kugou_play_music(music_url)
}
function kugou_loadLyric() {
    var e = !1;
    for (i in words)
        if (0 < words[i].length) {
            e = !0;
            break
        }
    var t = id("kugou_music_lyric")
      , n = '<div class="lyric" id="lyricDefault">èƒŒæ™¯éŸ³ä¹æ¥è‡ªé…·ç‹—éŸ³ä¹</div>';
    t.innerHTML = n,
    kugou_music.lyricShow && "1FC25317391E29F29BA65D815A9CE6B4" == kugou_music.hash && !e ? (t.style.webkitAnimation = "lyric_show 0.1s linear both",
    XMLHttp.sendReq("GET", "https://s1.kagirl.cn/js/iwantyou.lrc", "", function(e) {
        kugou_music.lyric = function(e) {
            for (var i = e.split("\n"), o = /\[\d{2}:\d{2}.\d{2}\]/g, t = []; !o.test(i[0]); )
                i = i.slice(1);
            for (step in 0 === i[i.length - 1].length && i.pop(),
            i) {
                var n = i[step]
                  , s = n.indexOf("]")
                  , a = n.substring(0, s + 1)
                  , n = n.substring(s + 1)
                  , s = a.substring(1, a.length - 2).split(":");
                t.push([60 * parseInt(s[0], 10) + parseFloat(s[1]), n])
            }
            return t.sort(function(e, i) {
                return e[0] - i[0]
            }),
            t
        }(e.responseText),
        kugou_music.lyricStep = 0;
        var o = n;
        for (i in kugou_music.lyric)
            o = o + '<div class="lyric" id="lyric' + i + '">' + kugou_music.lyric[i][1] + "</div>";
        t.innerHTML = o,
        id("lyricDefault").style.webkitAnimation = "lyric_out 0.1s 2s linear both"
    })) : (t.innerHTML = "",
    kugou_music.lyric = !1,
    kugou_music.lyricStep = 0)
}
function add_same() {
    "undefined" != typeof lzyStatistics && ((new lzyStatistics).call(wxid, "photoShareButton", "addSame"),
    "Fpx5HcVlzcpGDR4_qc0g3_s5AL4redHF" == e_bookid && (new lzyStatistics).call(wxid, "photoshowup", "photosame")),
    location.href = guanzhu_url + "&type=add_same&bookid=" + e_bookid + "&bookwx=" + wxid
}
function backtobooks() {
    return "undefined" != typeof lzyStatistics && (new lzyStatistics).call(wxid, "photouser", "backtobooks"),
    gomanage(),
    !1
}
function setCookie(e, i, o) {
    var t = new Date;
    t.setTime(t.getTime() + 24 * o * 60 * 60 * 1e3),
    document.cookie = e + "=" + escape(i) + ";expires=" + t.toGMTString()
}
function getCookie(e) {
    var e = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
    return (e = document.cookie.match(e)) ? unescape(e[2]) : null
}
function gomanage() {
    var e;
    -1 != location.href.indexOf("fm=woam") || -1 != location.href.indexOf("onmake=true") ? window.location = "makebook.php?&wxid=" + wxid + "&olwxid=" + olwxid : e_openid ? window.location = "mybooks.php?openid=" + e_openid + "&wxid=" + wxid + "&olwxid=" + olwxid : (e = document.referrer,
    window.location.href = e)
}
function handleHeadimg(e) {
    htm = "";
    for (var i = e.length, o = i - 1; 0 <= o; o--) {
        var t = 10 + 22 * (i - 1 - o);
        htm += "<img class='headimg'  style='left: " + t + "px;z-index: " + (i - o) + ";' src='" + e[o] + "'>"
    }
    var n = t + 30;
    "" != htm && (objid("headimg-block").style.width = n + "px",
    objid("headimg-block").innerHTML = htm)
}
function close_lick_user() {
    objid("like-user-block").style.display = "none",
    objid("like-mask").style.display = "none"
}
!function(e, i) {
    i.addEventListener("DOMContentLoaded", function() {
        "720" == e.innerWidth && (i.getElementById("like_div").className = "like_div_720",
        i.getElementById("footer").className = "footer-720")
    })
}(window, document);
var share_photo_tips = []
  , share_photo_is_play = !1;
function get_share_photo_tips() {
    if (share_photo_is_play)
        return !1;
    share_photo_is_play = !0;
    var e = "share_photo_tips.php?wxid=" + wxid + "&bookid=" + e_bookid;
    XMLHttp.sendReq("GET", e, "", function(e) {
        var i, o, t, n, s, e = JSON.parse(e.responseText);
        1 == e.status && (i = e.data.user_list,
        o = getCookie(e = e.data.bookkey),
        -1 !== location.href.indexOf("inviteshare=1") && (o = null),
        t = {},
        null != o && o.split("|").forEach(function(e, i) {
            e = e.split(",");
            1 < e.length && (t[e[0]] = e[1])
        }),
        n = "",
        i.forEach(function(e, i) {
            n += e.key + "," + e.num + "|",
            t.hasOwnProperty(e.key) ? e.num > t[e.key] && (e.num = e.num - t[e.key],
            share_photo_tips.push(e)) : share_photo_tips.push(e)
        }),
        setCookie(e, n, 30),
        (s = 0) < share_photo_tips.length && (objid("share-photo-tips-block").style.display = "block",
        share_photo_tips.forEach(function(e, i) {
            var o = document.createElement("div")
              , i = "share-photo-tips-an" + i % 2 + " 1.5s " + s + "ms linear both";
            o.className = "share-photo-item",
            o.style.webkitAnimation = i,
            o.innerHTML = '<div class="share-photo-headimg" style="background: url(' + e.headimgurl + ');background-size: 100% 100%;"></div><div class="share-photo-text"><div class="share-photo-text1">' + e.nickname + '</div><div class="share-photo-text2">æ–°ä¸Šä¼ ' + e.num + "å¼ ç…§ç‰‡</div></div>",
            s += 750,
            objid("share-photo-tips-block").appendChild(o)
        }),
        setTimeout(function() {
            objid("share-photo-tips-block").style.display = "none"
        }, s + 750)))
    })
}
function musicPlayMaskCloseTouch() {
    event.preventDefault(),
    kugou_music.isActive && kugou_stop_music(),
    null != e_music_player && (bplay = 0,
    e_music_player.pause()),
    objid("music_play_mask_container").style.display = "none",
    objid("music_play_select_container").style.display = "none",
    objid("sound_shouzhi").style.display = "none"
}
var musicPlayMaskisTouch = !1;
function musicPlayMaskTouch(e) {
    console.log(2222),
    e.preventDefault(),
    musicPlayMaskisTouch || (objid("music_play_mask_container").style.display = "none",
    objid("music_play_select_container").style.display = "none",
    musicPlayMaskisTouch = !0,
    play_music())
}
function IsAppleStore() {
    var e = navigator.userAgent
      , i = (navigator.appVersion,
    !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
      , o = -1 < e.indexOf("iPad")
      , e = -1 < e.indexOf("iPhone") || -1 < e.indexOf("Mac");
    return i || o || e
}
objid("music_play_mask_container").addEventListener("touchstart", musicPlayMaskTouch, {
    passive: !1
}),
objid("music_play_select_container").addEventListener("click", musicPlayMaskTouch, {
    passive: !1
});
var startInter = ""
  , startFunc = [];
function photo_start_init(func, delay) {
    var fun = func + "()";
    if (1 == photostart)
        console.log("func:" + func),
        eval(fun);
    else {
        var isinsert = !1, index;
        for (index in startFunc) {
            var item = startFunc[index];
            if (item.method == func) {
                isinsert = !0;
                break
            }
        }
        isinsert || (delay = parseInt(delay),
        startFunc.push({
            method: func,
            delay: delay
        })),
        startInter = startInter || setInterval(function() {
            if (1 == photostart) {
                clearInterval(startInter);
                for (var i = 0; i < startFunc.length; i++) {
                    var items = startFunc[i];
                    fun = items.method + "()",
                    0 == items.delay ? (eval(fun),
                    console.log("æ‰§è¡Œï¼š" + items.method)) : setTimeout(function() {
                        eval(fun),
                        console.log("æ‰§è¡Œï¼š" + fun)
                    }, items.delay)
                }
            }
        }, 500)
    }
}
var end_pic_status = 0
  , photoend = 0
  , end_delay_times = 7;
function callend(e) {
    0 == photoend && 0 < e && (end_delay_times = parseInt(e / 1e3),
    console.log("end_delay_times:" + end_delay_times)),
    photoend = 1
}
function get_url_params() {
    var e = window.location.search.substr(1);
    if ("" == e)
        return !1;
    for (var i = e.split("&"), o = {}, t = 0; t < i.length; t++) {
        var n = i[t].split("=");
        o[n[0]] = n[1]
    }
    return o
}
function params_urlencode(e) {
    var i, o = "";
    for (i in e)
        o += "&" + i + "=" + e[i];
    return o.substr(1)
}
0 != photoloading && 1 != notbtn || (objid("loading") && (objid("loading").style.display = "none",
objid("loading").style.height = 0),
objid("photo_load") && (objid("photo_load").style.display = "none"));
