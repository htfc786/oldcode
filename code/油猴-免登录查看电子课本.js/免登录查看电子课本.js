// ==UserScript==
// @name         国家中小学智慧教育平台 免登录查看电子课本
// @namespace    https://gist.github.com/htfc786/3b8a7b79c927ceefc6ebc1c56eb839ce
// @version      0.2
// @description  国家中小学智慧教育平台免登录查看电子课本 by htfc786
// @author       htfc786
// @match        https://basic.smartedu.cn/tchMaterial/*
// @icon         https://basic.smartedu.cn/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    console.log("script run...")

    const INFOAPI = "https://s-file-2.ykt.cbern.com.cn/zxx/ndrs/resources/tch_material/details/";
    var if_big = false;

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
    var contentId = getQueryVariable("contentId");
    var requests_url = INFOAPI + contentId + ".json";

    var xhr = new XMLHttpRequest();
    xhr.open("get", requests_url, true);

    xhr.onload = function (e) {
        //转换json
        var data = JSON.parse(e.currentTarget.responseText);
        var PdfUrl = data.ti_items[1].ti_storages[0];
        //获取到PdfUrl
        console.log("PdfUrl:",PdfUrl);

        document.querySelector(".fish-modal-root").innerHTML = ""
        let pdfShow = document.querySelector("#main-content > div.content > div.index-module_special-edu-detail_aH1Nr > div > div > div.imageList-module_special-edu-image-list-wrapper_18zfs > div > div");
        if (!pdfShow){
            pdfShow = document.querySelector("#main-content > div.content > div.index-module_special-edu-detail_aH1Nr > div");
            pdfShow.style.cssText = "padding: 0; position: relative; z-index: 1200;"
            document.querySelector("#main-content > div.content > div.index-module_special-edu-detail_aH1Nr").style.cssText = " height: 600px;";
            document.body.style.cssText = "";
        }
        pdfShow.innerHTML = '<embed id="pdfWatch" src="'+ PdfUrl +'" style="height: 100%; width: 100%; " />'
        pdfShow.innerHTML += '<a id="pdfBig" target="_blank" style="width: 60px;height: 20px;background-color: rgba(102,204,255,0.5);position: absolute;text-align: center;line-height: 20px;color: #fff;font-size: 5px;left: 0;top: 0;z-index: 100000;">网页全屏</a>'

        document.body.innerHTML += '<a href="'+PdfUrl+'" target="_blank" style="width: 70px; height: 60px; background-color: red; position: fixed; text-align: center; line-height: 30px; color: #fff; font-size: 20px; left: 0; bottom: 0; z-index: 1100;">新页面打开</a>'

        let bodycssbak = "";
        //监听全屏按钮
        var pdfBig = document.querySelector("#pdfBig");
        var pdfWatch = document.querySelector("#pdfWatch");
        pdfBig.onclick = function (){
            if (if_big){
                pdfWatch.style.cssText = "height: 100%; width: 100%;";
                pdfBig.style.cssText = "width: 60px;height: 20px;background-color: rgba(102,204,255,0.5);position: absolute;text-align: center;line-height: 20px;color: #fff;font-size: 5px;left: 0;top: 0;z-index: 100000;";
                pdfBig.text = '网页全屏';
                document.body.style.cssText = bodycssbak
                if_big = false;
            } else {
                pdfWatch.style.cssText = `width: 100%;height: 100%;position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: 100000;`;
                pdfBig.style.cssText = "width: 60px;height: 20px;background-color: rgba(102,204,255,0.5);position: fixed;text-align: center;line-height: 20px;color: #fff;font-size: 5px;left: 0;top: 0;z-index: 1000000;";
                pdfBig.text = "取消全屏";
                bodycssbak = document.body.style.cssText
                document.body.style.cssText+="overflow: hidden;"
                if_big = true;
            }
        }
    }

    let waittime = 0;
    let wait = () => {
        if (waittime>500){
            console.log("wait too many times!!!")
            console.log("exit")
            return;
        }
        if(!document.querySelector("#main-content > div.content > div.index-module_special-edu-detail_aH1Nr > div > div > div.imageList-module_special-edu-image-list-wrapper_18zfs > div > div")
          && !document.querySelector("#main-content > div.content > div.index-module_special-edu-detail_aH1Nr > div")){
            waittime++;
            console.log("wait...")
            setTimeout(wait, 100)
            return;
        }
        console.log("send request")
        xhr.send();
    }
    wait()
})();