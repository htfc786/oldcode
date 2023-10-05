var e_desc = title;
var slider_images_url = images_list;
var slider_images_urlmin = images_list;
function id(i) {
    return document.getElementById(i)
}
function showtitle() {
    id("pagetitle").style.webkitAnimation = "title_in 1s ease-out both",
    id("titlecontent").innerHTML = e_desc
}
function liangziyun_kawa() {
    id("pagetitle").style.webkitAnimation = "title_out 1s ease-in both",
    timeout10 = setTimeout(show1, 500)
}
call_me(loading);
var timeout0, timeout1, timeout2, timeout3, timeout4, timeout5, timeout6, timeout7, timeout8, timeout9, timeout10, image_size_width = [], image_size_height = [], image_url_index = 0, have_num = 0, error_num = 0, canshow = !0, reshow = !1, delaytime = 4e3;
function loading() {
    div1 = id("div1"),
    div1_view = id("div1_view"),
    div2 = id("div2"),
    div2_view = id("div2_view"),
    view_box = id("view_box"),
    div_box = id("div_box"),
    load_images()
}
var bl_keepload = "first"
  , step_loadnum = 5;
function step_load() {
    var i = 0;
    if (0 == image_url_index && "first" == bl_keepload) {
        console.log("loading continue"),
        bl_keepload = slider_images_url.length > step_loadnum ? (i = step_loadnum,
        "next") : (i = slider_images_url.length,
        "end");
        for (var e = 0; e < i; e++)
            (t = new Image).index = e,
            t.src = slider_images_url[e],
            t.onload = image_onload,
            t.onerror = image_onerror,
            Onload_imgs_url[e] = "loading"
    } else if ("end" != bl_keepload) {
        console.log("loading continue"),
        slider_images_url.length - image_url_index > 2 * step_loadnum ? i = step_loadnum : (i = slider_images_url.length - image_url_index - step_loadnum,
        bl_keepload = "end");
        for (var t, e = image_url_index + step_loadnum; e < image_url_index + step_loadnum + i; e++)
            (t = new Image).index = e,
            t.src = slider_images_url[e],
            t.onload = image_onload,
            t.onerror = image_onerror,
            Onload_imgs_url[e] = "loading"
    }
}
function load_images() {
    reshow = !1,
    image_size_width = [],
    image_size_height = [],
    Onload_imgs_url = [],
    error_num = have_num = image_url_index = 0,
    begin_titletime = (begin_titletime = new Date).getTime(),
    canshow = !0,
    photo_start_init("showtitle", 0),
    bl_keepload = "first",
    step_load()
}
function image_onerror(i) {
    var i = i.target.index;
    i < step_loadnum && error_num++,
    Onload_imgs_url[i] = "not find",
    (step_loadnum <= have_num + error_num || slider_images_url.length == have_num + error_num) && 1 == canshow && (canshow = reshow = !1,
    0 != have_num && (i = (i = new Date).getTime(),
    i = Math.abs(i - begin_titletime),
    delaytime < i ? photo_start_init("liangziyun_kawa", delaytime) : timeout0 = setTimeout(function() {
        photo_start_init("liangziyun_kawa", delaytime)
    }, i = delaytime - i)))
}
function image_onload(i) {
    var e;
    1 != reshow && ((e = (i = i.target).index) < step_loadnum && have_num++,
    Onload_imgs_url[e] = i.src,
    image_size_height[e] = i.height,
    image_size_width[e] = i.width,
    console.log(Onload_imgs_url[e]),
    (step_loadnum <= have_num + error_num || slider_images_url.length == have_num + error_num) && 1 == canshow && (canshow = reshow = !1,
    0 != have_num && (i = (i = new Date).getTime(),
    e = Math.abs(i - begin_titletime),
    delaytime < e ? photo_start_init("liangziyun_kawa", delaytime) : timeout0 = setTimeout(function() {
        photo_start_init("liangziyun_kawa", delaytime)
    }, e = delaytime - e))))
}
var get_pid = function(i) {
    var e;
    return null != i ? (i = -1 != (e = i.indexOf("?")) ? i.substr(0, e) : i).toString().substr(i.lastIndexOf("/") + 1) : ""
};
function insertEnter(i, e) {
    var t = i.length;
    return e < t ? i.substring(0, e) + "\n" + (i = i.substring(e, t)) : i
}
function show1() {
    setImageindex(),
    view_box.style.webkitAnimation = "moving_left 5s linear both",
    div_box.style.webkitAnimation = "moving_up 5s linear both",
    div1.style.backgroundImage = "url('" + Onload_imgs_url[image_url_index] + "')",
    div1_view.style.backgroundImage = "url('" + Onload_imgs_url[image_url_index] + "')";
    var i, e = id("word1"), t = words[get_pid(Onload_imgs_url[image_url_index])], t = (null != t ? (4 < (i = (t = t.replace(/[\n]/gi, "")).length) ? (e.style.fontSize = "25px",
    10 < i && (t = insertEnter(t, 5))) : e.style.fontSize = "28px",
    e.innerText = t) : e.innerText = "",
    (i = 1 < (img_bili = image_size_width[image_url_index] / image_size_height[image_url_index]) ? 440 : img_bili < .625 ? 400 : 420) / img_bili);
    div1.style.backgroundSize = i + "px " + t + "px",
    div1_view.style.backgroundSize = i + "px " + t + "px",
    div1.style.width = i + "px",
    div1_view.style.width = i + "px",
    div1.style.left = (500 - i) / 2 + "px",
    div1_view.style.left = (500 - i) / 2 + "px",
    img_bili < .625 ? (div1.style.backgroundPosition = "0px " + (640 - t) / 2 + "px",
    console.log("-0px " + (640 - t) / 2 + "px"),
    div1_view.style.backgroundPosition = "0px " + (640 - t) / 2 + "px",
    div1.style.height = "640px",
    div1_view.style.height = "640px",
    div1.style.top = "90px",
    div1_view.style.top = "90px") : (div1.style.backgroundPosition = "-0px -0px",
    div1_view.style.backgroundPosition = "0px 0px",
    div1.style.height = t + "px",
    div1_view.style.height = t + "px",
    div1.style.top = (780 - t) / 2 + "px",
    div1_view.style.top = (780 - t) / 2 + "px"),
    div1.style.webkitAnimation = "div1_in 1.5s ease-in-out both",
    div1_view.style.webkitAnimation = "div1_view_in 1.5s ease-in-out both",
    timeout1 = setTimeout(show2, 5e3)
}
function show2() {
    image_url_index++,
    setImageindex(),
    div1.style.webkitAnimation = "div1_out 1s linear both",
    div1_view.style.webkitAnimation = "div1_view_out 1s linear both",
    div2.style.backgroundImage = "url('" + Onload_imgs_url[image_url_index] + "')",
    div2_view.style.backgroundImage = "url('" + Onload_imgs_url[image_url_index] + "')";
    var i, e = id("word2"), t = words[get_pid(Onload_imgs_url[image_url_index])], t = (null != t ? (4 < (i = (t = t.replace(/[\n]/gi, "")).length) ? (e.style.fontSize = "25px",
    10 < i && (t = insertEnter(t, 5))) : e.style.fontSize = "28px",
    e.innerText = t) : e.innerText = "",
    (i = 1 < (img_bili = image_size_width[image_url_index] / image_size_height[image_url_index]) ? 440 : img_bili < .625 ? 400 : 420) / img_bili);
    div2.style.backgroundSize = i + "px " + t + "px",
    div2_view.style.backgroundSize = i + "px " + t + "px",
    div2.style.width = i + "px",
    div2_view.style.width = i + "px",
    div2.style.left = (500 - i) / 2 + "px",
    div2_view.style.left = (500 - i) / 2 + "px",
    img_bili < .625 ? (div2.style.backgroundPosition = "-0px " + (640 - t) / 2 + "px",
    div2_view.style.backgroundPosition = "0px " + (640 - t) / 2 + "px",
    div2.style.height = "640px",
    div2_view.style.height = "640px",
    div2.style.top = "90px",
    div2_view.style.top = "90px") : (div2.style.backgroundPosition = "-0px -0px",
    div2_view.style.backgroundPosition = "0px 0px",
    div2.style.height = t + "px",
    div2_view.style.height = t + "px",
    div2.style.top = (780 - t) / 2 + "px",
    div2_view.style.top = (780 - t) / 2 + "px"),
    div2.style.webkitAnimation = "div2_in 1.5s 1s ease-in-out both",
    div2_view.style.webkitAnimation = "div2_view_in 1.5s 1s ease-in-out both",
    view_box.style.webkitAnimation = "moving_right 5s linear both",
    div_box.style.webkitAnimation = "moving_down 5s linear both",
    timeout2 = setTimeout(show3, 5e3)
}
function show3() {
    image_url_index++,
    setImageindex(),
    div2.style.webkitAnimation = "div2_out 1s linear both",
    div2_view.style.webkitAnimation = "div2_view_out 1s linear both",
    div1.style.backgroundImage = "url('" + Onload_imgs_url[image_url_index] + "')",
    div1_view.style.backgroundImage = "url('" + Onload_imgs_url[image_url_index] + "')";
    var i, e = id("word1"), t = words[get_pid(Onload_imgs_url[image_url_index])], t = (null != t ? (4 < (i = (t = t.replace(/[\n]/gi, "")).length) ? (e.style.fontSize = "25px",
    10 < i && (t = insertEnter(t, 5))) : e.style.fontSize = "28px",
    e.innerText = t) : e.innerText = "",
    (i = 1 < (img_bili = image_size_width[image_url_index] / image_size_height[image_url_index]) ? 440 : img_bili < .625 ? 400 : 420) / img_bili);
    div1.style.backgroundSize = i + "px " + t + "px",
    div1_view.style.backgroundSize = i + "px " + t + "px",
    div1.style.width = i + "px",
    div1_view.style.width = i + "px",
    div1.style.left = (500 - i) / 2 + "px",
    div1_view.style.left = (500 - i) / 2 + "px",
    img_bili < .625 ? (div1.style.backgroundPosition = "-0px " + (640 - t) / 20 + "px",
    div1_view.style.backgroundPosition = "0px " + (640 - t) / 2 + "px",
    div1.style.height = "640px",
    div1_view.style.height = "640px",
    div1.style.top = "90px",
    div1_view.style.top = "90px") : (div1.style.backgroundPosition = "-0px -0px",
    div1_view.style.backgroundPosition = "0px 0px",
    div1.style.height = t + "px",
    div1_view.style.height = t + "px",
    div1.style.top = (760 - t) / 2 + "px",
    div1_view.style.top = (760 - t) / 2 + "px"),
    div1.style.webkitAnimation = "div3_in 1.5s 1s ease-in-out both",
    div1_view.style.webkitAnimation = "div3_view_in 1.5s 1s ease-in-out both",
    view_box.style.webkitAnimation = "moving_left 5s linear both",
    div_box.style.webkitAnimation = "moving_up 5s linear both",
    timeout3 = setTimeout(show4, 5e3)
}
function show4() {
    div1.style.webkitAnimation = "div3_out 1s linear both",
    div1_view.style.webkitAnimation = "div3_view_out 1s linear both",
    image_url_index++,
    setImageindex(),
    div2.style.backgroundImage = "url('" + Onload_imgs_url[image_url_index] + "')",
    div2_view.style.backgroundImage = "url('" + Onload_imgs_url[image_url_index] + "')";
    var i, e = id("word2"), t = words[get_pid(Onload_imgs_url[image_url_index])], t = (null != t ? (4 < (i = (t = t.replace(/[\n]/gi, "")).length) ? (e.style.fontSize = "25px",
    10 < i && (t = insertEnter(t, 5))) : e.style.fontSize = "28px",
    e.innerText = t) : e.innerText = "",
    (i = 1 < (img_bili = image_size_width[image_url_index] / image_size_height[image_url_index]) ? 440 : img_bili < .625 ? 400 : 420) / img_bili);
    div2.style.backgroundSize = i + "px " + t + "px",
    div2_view.style.backgroundSize = i + "px " + t + "px",
    div2.style.width = i + "px",
    div2_view.style.width = i + "px",
    div2.style.left = (500 - i) / 2 + "px",
    div2_view.style.left = (500 - i) / 2 + "px",
    img_bili < .625 ? (div2.style.backgroundPosition = "-0px " + (640 - t) / 2 + "px",
    div2_view.style.backgroundPosition = "0px " + (640 - t) / 2 + "px",
    div2.style.height = "640px",
    div2_view.style.height = "640px",
    div2.style.top = "90px",
    div2_view.style.top = "90px") : (div2.style.backgroundPosition = "-0px -0px",
    div2_view.style.backgroundPosition = "0px 0px",
    div2.style.height = t + "px",
    div2_view.style.height = t + "px",
    div2.style.top = (780 - t) / 2 + "px",
    div2_view.style.top = (780 - t) / 2 + "px"),
    div2.style.webkitAnimation = "div1_in 1.5s 1s ease-in-out both",
    div2_view.style.webkitAnimation = "div1_view_in 1.5s 1s ease-in-out both",
    view_box.style.webkitAnimation = "moving_right 5s linear both",
    div_box.style.webkitAnimation = "moving_down 5s linear both",
    timeout4 = setTimeout(show5, 6e3)
}
function show5() {
    div2.style.webkitAnimation = "div1_out 1s linear both",
    div2_view.style.webkitAnimation = "div1_view_out 1s linear both",
    image_url_index++,
    setImageindex(),
    div1.style.backgroundImage = "url('" + Onload_imgs_url[image_url_index] + "')",
    div1_view.style.backgroundImage = "url('" + Onload_imgs_url[image_url_index] + "')";
    var i, e = id("word1"), t = words[get_pid(Onload_imgs_url[image_url_index])], t = (null != t ? (4 < (i = (t = t.replace(/[\n]/gi, "")).length) ? (e.style.fontSize = "25px",
    10 < i && (t = insertEnter(t, 5))) : e.style.fontSize = "28px",
    e.innerText = t) : e.innerText = "",
    (i = 1 < (img_bili = image_size_width[image_url_index] / image_size_height[image_url_index]) ? 440 : img_bili < .625 ? 400 : 420) / img_bili);
    div1.style.backgroundSize = i + "px " + t + "px",
    div1_view.style.backgroundSize = i + "px " + t + "px",
    div1.style.width = i + "px",
    div1_view.style.width = i + "px",
    div1.style.left = (500 - i) / 2 + "px",
    div1_view.style.left = (500 - i) / 2 + "px",
    img_bili < .625 ? (div1.style.backgroundPosition = "-0px " + (640 - t) / 2 + "px",
    div1_view.style.backgroundPosition = "0px " + (640 - t) / 2 + "px",
    div1.style.height = "640px",
    div1_view.style.height = "640px",
    div1.style.top = "90px",
    div1_view.style.top = "90px") : (div1.style.backgroundPosition = "-0px -0px",
    div1_view.style.backgroundPosition = "0px 0px",
    div1.style.height = t + "px",
    div1_view.style.height = t + "px",
    div1.style.top = (780 - t) / 2 + "px",
    div1_view.style.top = (780 - t) / 2 + "px"),
    div1.style.webkitAnimation = "div1_in 1.5s 1s ease-in-out both",
    div1_view.style.webkitAnimation = "div1_view_in 1.5s 1s ease-in-out both",
    view_box.style.webkitAnimation = "moving_left 5s linear both",
    div_box.style.webkitAnimation = "moving_up 5s linear both",
    timeout5 = setTimeout(show2, 6e3)
}
function setImageindex() {
    for (image_url_index >= Onload_imgs_url.length && (end_pic_status = 1,
    image_url_index = 0,
    callend(1)); "not find" == Onload_imgs_url[image_url_index] || "loading" == Onload_imgs_url[image_url_index] || null == Onload_imgs_url[image_url_index]; )
        image_url_index % step_loadnum == 0 && step_load(),
        1 == end_pic_status && 0 == image_url_index && callend(1),
        ++image_url_index >= Onload_imgs_url.length && (end_pic_status = 1,
        image_url_index = 0);
    console.log("setimg:" + Onload_imgs_url[image_url_index]),
    image_url_index % step_loadnum == 0 && step_load()
}
function reload_scene() {
    clearnode(),
    reshow = !0,
    setTimeout(load_images, 100)
}
function clearnode() {
    div1.style.webkitAnimation = "",
    div2.style.webkitAnimation = "",
    div1_view.style.webkitAnimation = "",
    div2_view.style.webkitAnimation = "",
    view_box.style.webkitAnimation = "",
    div_box.style.webkitAnimation = "",
    id("pagetitle").style.webkitAnimation = "",
    clearTimeout(timeout0),
    clearTimeout(timeout1),
    clearTimeout(timeout2),
    clearTimeout(timeout3),
    clearTimeout(timeout4),
    clearTimeout(timeout5),
    clearTimeout(timeout10)
}
