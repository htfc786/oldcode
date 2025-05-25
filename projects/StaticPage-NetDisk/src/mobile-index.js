//函数定义专区
//是否手机
function isPhone() {
    //获取浏览器navigator对象的userAgent属性（浏览器用于HTTP请求的用户代理头的值）
    var info = navigator.userAgent;
    //通过正则表达式的test方法判断是否包含“Mobile”字符串
    var isPhone = /mobile/i.test(info);
    //如果包含“Mobile”（是手机设备）则返回true
    return isPhone;
}
//获取get请求参数
function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数值
    if(r != null) {
        return decodeURI(r[2]);
    }
    return null;
}
//设置(top)html标签的font-size参数
function setfontSize(){
    windowWidth = window.innerWidth;
    fontSize = windowWidth/7.5;
	//console.log(windowWidth,fontSize);
    document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';
}

//监听事件专区
//窗口大小改变时
window.addEventListener('resize', ()=>{
    //设置font-size参数
    setfontSize();
});
//加载完成后执行的代码
window.onload = ()=>{
    //不是手机页面跳转到电脑页面
    if (!isPhone()){
        window.location.href="./";
    }
    //设置font-size参数
    setfontSize();
}

//常量定义专区




//主函数
function main(e) {
    filedata = JSON.parse(e.currentTarget.responseText) 
    console.log(filedata)
    document.getElementById("title").innerText = filedata.title;
    document.getElementById("little-title").innerText = filedata.little_title;
}
// 获取地址栏fileid
var fileid = getUrlParam("fileid");
console.log(fileid);

// 发送请求
let xhr = new XMLHttpRequest();
xhr.open("get", "../filedata.json", true);
xhr.onload = main;  //
xhr.send();


