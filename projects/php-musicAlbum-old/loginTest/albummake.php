<?php
function getId(){	//获取请求id
    $php_self_name = basename(__FILE__);//php脚本名称
	$meet_php = 0;//False;//是否遇见这个php脚本名称
	$last_path = "";//请求php文件后面写的东西
	$urls = explode("/",$_SERVER['PHP_SELF']);//用“/”分割字符串
	foreach ($urls as $i){
			//echo $i."/";
		if ($meet_php) {	//遇见这个php脚本名称之后添加今路径变量里
			$last_path = $last_path."/".$i;
		}
		if ($i == $php_self_name){//如果遇见这个php脚本名称标记一下
			$meet_php = 1;//True;
		}
	}
    if ($last_path){
        $urls = explode("/",$last_path);//用“/”分割字符串
        return $urls[1];
    }
    return "";
}

// 开启Session
session_start();  

$confIniArray = parse_ini_file("./conf.ini", true); //配置文件
$PrePath = $confIniArray["PrePath"];

if (!isset($_SESSION['islogin'])) {
    // 没有登录
    echo "<h4>需要登录才能访问此页面</h4>";
    header('refresh:0; url='.$PrePath.'login.php');
    echo 'refresh:0; url='.$PrePath.'login.php';
    return;
}
$userid = $_SESSION['userid'];

//配置数据库信息
$dbHost = $confIniArray["dbHost"];
$dbUser = $confIniArray["dbUser"];
$dbPassword = $confIniArray["dbPassword"];
$dbDatabase = $confIniArray["dbDatabase"];
$dbPort = $confIniArray["dbPort"];
$dbEncoding = $confIniArray["dbEncoding"];

//获取id
$aid = getId();
if (!$aid){
    echo "没有此相册";
    return;
}

//获取数据库对象
$db = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbDatabase,$dbPort);
mysqli_query($db,"set names '$dbEncoding'"); //设定字符集

$albumDataQuery = mysqli_query($db,"select albumMreatorId from album where id = $aid");
if (mysqli_num_rows($albumDataQuery)!=1){//获取有多少个
    echo "没有此相册";
    return;
}

$albumData = mysqli_fetch_array($albumDataQuery);
$albumMreatorId = $albumData["albumMreatorId"];
if($userid!=$albumMreatorId){//不是主人
    echo "提示：您不是此相册的主人";
    return;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>制作相册</title>
    <link rel="stylesheet" href="../src/css/main-albummake.css">
</head>
<body>
    <div id="main">
        <div class="main-footer">
            <div onclick="chengePage(1)" class="main-footer-btn" style="background-image: url(/src/image/make-model.png);"></div>
            <div onclick="chengePage(2)" class="main-footer-btn" style="background-image: url(/src/image/make-music.png);"></div>
            <div onclick="chengePage(3)" class="main-footer-btn" style="background-image: url(/src/image/make-pic.png);"></div>
            <div onclick="chengePage(3)" class="main-footer-btn" style="background-image: url(/src/image/make-write.png);"></div>
            <div onclick="window.open('/showalbum.php/<?php echo $aid; ?>');" class="main-footer-btn" style="background-image: url(/src/image/make-save.png);"></div>
        </div>
        <div onclick="window.history.back();" class="back">返回</div>
        <iframe id="showalbumFrame" name="ifd" onload="this.height=ifd.document.body.scrollHeight+100" width="100%" frameborder="0" src="/albumshow.php/<?php echo $aid ?>?from=albummake-iframe"></iframe>
    </div>
    <div id="template" style="display: none;">
        <div id="template-header">
            <div class="template-close" onclick="chengePage(0)">返 回</div>
            <div id="template-menu">
                <div class="template-menu-btn template-menu-btnon" onclick="chengeTemplateGroup('all',this)">全部</div>
                <?php
                $templatesGroupQuery = mysqli_query($db,"SELECT id,groupName FROM templatesgroup");
                while ($templatesGroupRow=mysqli_fetch_assoc($templatesGroupQuery)){//$row=mysqli_fetch_assoc($rs)){
                    $groupId = $templatesGroupRow["id"];
                    $groupName = $templatesGroupRow["groupName"];
                    echo "<div class=\"template-menu-btn\" onclick=\"chengeTemplateGroup('$groupId',this)\">$groupName</div>";
                }
                ?>
                
            </div>
        </div>
        <div id="template-box">    
            
        </div>
    </div>
    <div id="music" style="display: none;">
        <div id="music-header">
            <div id="music-search-btn" onclick="search_musicshow()">搜索</div>
            <div class="music-close" onclick="chengePage(0)">返回</div>
            <div id="music-menu">
                <div class="music-menu-btnon" onclick="">热门</div>
                <div class="music-menu-btn" onclick="">节日</div>
                <div class="music-menu-btn" onclick="">榜单</div>
            </div>
        </div>

        <div class="music-list">
            <div class="music-item">
                <div class="music-item-img">
                    <img src="https://s2.kagirl.cn/template/new/yinfu1.png">
                </div>
                <div class="music-item-title" onclick="">boot</div>
                <div class="music-item-ok" onclick="">确定</div>
            </div>
        </div>
    </div>
    <div id="image" style="display: none;">
        <div id="music-header">
            <div class="music-close" onclick="chengePage(0)">返回</div>
        </div>
        
    </div>
    <div id="write" style="display: none;">
        <div id="music-header">
            <div class="music-close" onclick="chengePage(0)">返回</div>
        </div>

    </div>
</body>
<script>
var aid = <?php echo $aid; ?>;
// 各个页面的div
let pageDivList = [];
pageDivList.push([document.getElementById("main")]); 
pageDivList.push([document.getElementById("template"),'all',0]);//操作的对象，当前分类，当前页面
pageDivList.push([document.getElementById("music")]);
pageDivList.push([document.getElementById("image")]);
pageDivList.push([document.getElementById("write")]);

//当前页面 div的
let nowPage;
nowPage=0;

// 改变页面
function chengePage(id){
    nowPage = id;
    for(var i=0;i<pageDivList.length;i++){
        pageDivList[i][0].style.display = "none";
    }
    pageDivList[id][0].style.display = "block";
}

// 改变模板组
function chengeTemplateGroup(groupId,btnObj){
    if(pageDivList[1][1] == groupId) {
        return;
    }
    pageDivList[1][1] = groupId;
    //改横线的位置
    templateMenuBtn = document.getElementsByClassName("template-menu-btn")
    for(var i=0;i<templateMenuBtn.length;i++){
        templateMenuBtn[i].className = "template-menu-btn";
    }
    btnObj.className = "template-menu-btn template-menu-btnon";
    //请求
    let xhr = new XMLHttpRequest();
    xhr.open("get", "../api/albummake.php?do=getTemplate&groupId="+groupId, true);
    // 请求成功
    xhr.onload = function (e) {
        try {var data = JSON.parse(e.currentTarget.responseText)["data"];}
        catch(err) {alert(e.currentTarget.responseText);return;}
        //console.log(data)
        templateBox = document.getElementById("template-box");
        templateBox.innerHTML = "";
        for(var i=0;i<data.length;i++){
            templateData = data[i];
            templateMainHtml = `
            <div class="template-item" onclick="changeTemplate(${templateData.templateId})">
                <img src="${templateData.templateIMG}">
                <span>${templateData.templateName}</span>
                <p>分类：${templateData.templateGroup}</p>
            </div>
            `
            templateBox.innerHTML += templateMainHtml;
        }
    }
    // 请求失败
    xhr.onerror = function (e) {
        //uploadMsg.innerHTML = "上传失败：" + e
        alert("请求失败");
    }
    xhr.send();
}
function changeTemplate(templateId){
    // 用FormData传输
    var fd = new FormData();

    fd.add("aid",aid);
    fd.add("templateId",templateId);

    //发送请求
    let xhr = new XMLHttpRequest();
    xhr.open("post", "../api/albummake.php?do=changeTemplate", true);
    
    //发生错误
    xhr.onerror = function (e) {
        alert("请求发生错误");
    }
    //请求成功 等返回结果
    xhr.onload = function (e) {
        alert(e.currentTarget.responseText);
    }

    xhr.send(fd);//发送请求！！！
}

window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;  //滚动条滚动时，距离顶部的距离
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;  //可视区的高度
    var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;  //滚动条的总高度
    
    //console.log(scrollTop+windowHeight>=scrollHeight,scrollTop+windowHeight,scrollTop,windowHeight,scrollHeight)
    //滚动到底部了
    if(scrollTop+windowHeight>=scrollHeight){
        //console.log("滚动到底部了！！！")
    }
    
}
window.onscroll()
</script>
</html>
