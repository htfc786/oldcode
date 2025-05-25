
//  === 加载地址栏参数自定义配置 ===
var requestPromise = Promise.resolve();
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
var configFileUrl = getQueryVariable("config");
if (configFileUrl) {
    requestsPromise = fetch(configFileUrl)
        .then(response => response.json())
        .then(data => {
            window.slider_images_url = data?.data?.imageList || slider_images_url;
            window.e_desc = data?.data?.name || e_desc;
            window.words = data?.data?.wordsList || words;
            window.musicList = data?.data?.musicList || musicList;
            window.autoPlay = data?.data?.config?.autoPlay || autoPlay;
            window.showBackBtn = data?.data?.config?.showBackBtn || showBackBtn
        })
}


// 调整页面缩放
function init_viewport(){
    if (/Android ([\d\.]+)/.test(navigator.userAgent)){
        var version = parseFloat(RegExp.$1);
        if (version>2.3){
            var width = window.outerWidth == 0 ? window.screen.width : window.outerWidth;
            var phoneScale = parseInt(width)/500;
            // if(phoneScale < 2) {
                document.write('<meta name="viewport" content="width=500, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
            // } else {
            //     document.write('<meta name="viewport" content="target-densitydpi=320, width=500, min-height:850px, user-scalable=no"/>');
            // }
        } else {
            document.write('<meta name="viewport" content="width=500, target-densitydpi=device-dpi, user-scalable=0">');    
        }
    } else if(navigator.userAgent.indexOf('iPhone') != -1) {
        var phoneScale = parseInt(window.screen.width)/500;
        document.write('<meta name="viewport" content="width=500, min-height=750, initial-scale=' + phoneScale +', maximum-scale='+phoneScale+', user-scalable=0" /> ');         //0.75   0.82
    } else  {
        document.write('<meta name="viewport" content="width=500, height=750, initial-scale=0.64" /> ');         //0.75   0.82
    }
}
init_viewport();


// === 基础框架 === 
var module_inits = [];
// 启动模块
function load_init_modules(){
    for(var i=0;i<module_inits.length; i++){
        module_inits[i]();
    }
}
// 注册模块
function call_me(fun) {
    module_inits.push(fun);
}
// 相册状态相关
var photoend = 0
let end_pic_status = 0
function photo_start_init(func, delay) {
    var fun = func + "()";
    if (1 == photostart)
        console.log("执行：" + func),
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
                    console.log("执行：" + items.method)) : setTimeout(function() {
                        eval(fun),
                        console.log("执行：" + fun)
                    }, items.delay)
                }
            }
        }, 500)
    }
}
function callend(e) {
    0 == photoend && 0 < e && (end_delay_times = parseInt(e / 1e3),
    console.log("end_delay_times:" + end_delay_times)),
    photoend = 1
}

// 启动函数
// window.addEventListener('load', load_init_modules, false);

// === 音乐相关 ===
// 样式相关
function buildMusic() {
    const musicStyle = document.createElement("style");
    musicStyle.innerHTML = `
    @keyframes image-turn {0% {-webkit-transform:rotate(0deg);}100% {-webkit-transform:rotate(360deg);}}
    .soundImage {position: fixed;right: 15px;top: 25px;}
    .soundImageTurn {animation: 3s linear 0s infinite normal none running image-turn;}
    .close-btn{display:block; width: 80px; height: 40px; background-color: rgba(0, 0, 0, 0.3); position: fixed; text-align: center; line-height: 40px; color: #fff; border-radius: 40px; font-size: 21px; left: 10px; top: 30px; border: 1px solid rgba(255,255,255,.4);}
    `

    const soundImage = document.createElement("div");
    soundImage.className = "soundImage";
    const soundImageTurn = document.createElement("img");
    soundImageTurn.src = "../../config/music_note_big.png";
    soundImage.appendChild(soundImageTurn);

    const closeBtn = document.createElement("a");
    closeBtn.className = "close-btn";
    closeBtn.innerText = "返回";
    closeBtn.addEventListener('click', () => {
        history.back()
        // 返回不了上一级，手动返回
        setTimeout(() => {
            window.location.href = '../'
        },100)
    })

    // 音乐相关
    let finishList = [];
    let musicSrc = musicList[Math.floor(Math.random() * musicList.length)]
    const music = document.createElement("audio");
    music.src = musicSrc;
    music.addEventListener('play', () => {
        soundImageTurn.classList.add('soundImageTurn');
    })
    music.addEventListener('pause', () => {
        soundImageTurn.classList.remove('soundImageTurn');
    })
    soundImage.addEventListener('click', () => {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    })
    // 播完下一首
    music.addEventListener('ended', () => {
        // 记录播放完成
        finishList.push(musicSrc);
        // 随机播放
        musicSrc = musicList[Math.floor(Math.random() * musicList.length)]
        if (finishList.length == musicList.length) {
            finishList = []
        }
        while (finishList.indexOf(musicSrc) != -1) {
            musicSrc = musicList[Math.floor(Math.random() * musicList.length)]
        }
        music.src = musicSrc;
        music.play();
    })
    // music.controls = true;
    // init 
    if (showBackBtn) {
        document.body.appendChild(closeBtn);
    }
    document.head.appendChild(musicStyle);
    document.body.appendChild(soundImage);
    if (autoPlay) {
        music.play();
    }
}

requestPromise.then(() => {
    window.addEventListener('load', ()=>{
        load_init_modules();
        buildMusic();
    }, false); 
})