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
session_start(); // 开启Session
if (!isset($_SESSION['islogin'])) {
    // 没有登录
    header('refresh:0; url=/users/login.php');
    $title = '请先登录';
    echo "<h4 id='page-title'>您还没有登录,请登录,3秒后自带跳转</h4>";
}else {
    // 已经登录
    //配置数据库
    $confIniArray = parse_ini_file("./conf.ini", true);
    //print_r($confIniArray);
    $dbHost = $confIniArray["dbHost"];
    $dbUser = $confIniArray["dbUser"];
    $dbPassword = $confIniArray["dbPassword"]; // 请在此修改数据库密码
    $dbDatabase = $confIniArray["dbDatabase"];
    $dbPort = $confIniArray["dbPort"];
    //连接数据库
    $db = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbDatabase,$dbPort);    //连接数据库  
    //mysql_select_db("my_test");  //选择数据库  
    mysqli_query($db,"set names 'utf-8'"); //设定字符集 
    //-------
    $username = $_SESSION['username'];//用户名
    $aid = getId(); //获取id
    $title = '编辑相册'; //title

}    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
</head>
<body>
    <div id="mian">
        <div style="position: fixed; top: 100%; left: 0px; width: 100%; height: 70px; display: -webkit-flex; margin-top: -70px; ">
            <div onclick="window.toTemplate()" style="background-image: url(/img/make/make-model.png); position: relative; width: 20%; height: 100%; background-size: 100% 100%;"></div>
            <div onclick="window.toMusic()" style="background-image: url(/img/make/make-music.png); position: relative; width: 20%; height: 100%; background-size: 100% 100%;"></div>
            <div onclick="window.toPhoto()" style="background-image: url(/img/make/make-pic.png); position: relative; width: 20%; height: 100%; background-size: 100% 100%;"></div>
            <div onclick="window.toWrite()" style="background-image: url(/img/make/make-write.png); position: relative; width: 20%; height: 100%; background-size: 100% 100%;"></div>
            <div onclick="window.open('/showalbum.php/<?php echo $aid; ?>');" style="background-image: url(/img/make/make-save.png); position: relative; width: 20%; height: 100%; background-size: 100% 100%;"></div>
        </div>
        <div onclick="window.location.href='/'" style='display:block; width: 80px; height: 40px; background-color: rgba(0, 0, 0, 0.3); position: fixed; text-align: center; line-height: 40px; color: #fff; border-radius: 40px; font-size: 21px; left: 10px; top: 30px; border: 1px solid rgba(255,255,255,.4);'>返回</div>
        <iframe id="showalbumFrame" name="ifd" onload="this.height=ifd.document.body.scrollHeight+100" width="100%" frameborder="0" src="/showalbum.php/<?php echo $aid ?>"></iframe>
    </div>
    <div id="templat" style="display:none;">
        <div style="position: fixed; top: 100%; left: 0px; width: 100%; height: 70px; display: -webkit-flex; margin-top: -70px; ">
            <div onclick="window.toMain()" style="width: 200px; height: 50px; line-height: 48px; text-align: center; font-size: 18pt; border-radius: 25px; border: 2px solid #444; color: #FFFFFF; background-color: #444; position: relative; margin-left: 33px; margin-top: 10px; display: inline-block; vertical-align: middle;">保存 & 退出</div>
        </div>
    </div>
    <div id="music" style="display:none;">
        <div style="position: fixed; top: 100%; left: 0px; width: 100%; height: 70px; display: -webkit-flex; margin-top: -70px; ">
            <div onclick="window.toMain()" style="width: 200px; height: 50px; line-height: 48px; text-align: center; font-size: 18pt; border-radius: 25px; border: 2px solid #444; color: #FFFFFF; background-color: #444; position: relative; margin-left: 33px; margin-top: 10px; display: inline-block; vertical-align: middle;">保存 & 退出</div>
        </div>
    </div>
    <div id="photo" style="display:none;">
        <iframe name="ifd2" onload="this.height=window.innerHeight-20;this.width=window.innerWidth-15;" frameborder="0" src="/make/addimg.php?aid=<?php echo $aid ?>"></iframe>
    </div>
    <div id="write" style="display:none;">
        <iframe name="ifdWrite" onload="this.height=window.innerHeight-20;this.width=window.innerWidth-15;" frameborder="0" src="/make/write.php?aid=<?php echo $aid ?>"></iframe>
    </div>
    <script>
        window.height = window.innerHeight;
        //window.width = window.documentElement.clientWidth;
        window.toMain = function () {
            document.getElementById("mian").style.display="block";
            document.getElementById("templat").style.display="none";
            document.getElementById("music").style.display="none";
            document.getElementById("photo").style.display="none";
            document.getElementById("write").style.display="none";
            document.getElementById('showalbumFrame').contentWindow.location.reload(true);
        }
        window.toTemplate = function () {
            document.getElementById("mian").style.display="none";
            document.getElementById("templat").style.display="block";
            document.getElementById("music").style.display="none";
            document.getElementById("photo").style.display="none";
            document.getElementById("write").style.display="none";
        }
        window.toMusic = function () {
            document.getElementById("mian").style.display="none";
            document.getElementById("templat").style.display="none";
            document.getElementById("music").style.display="block";
            document.getElementById("photo").style.display="none";
            document.getElementById("write").style.display="none";
        }
        window.toPhoto = function () {
            document.getElementById("mian").style.display="none";
            document.getElementById("templat").style.display="none";
            document.getElementById("music").style.display="none";
            document.getElementById("photo").style.display="block";
            document.getElementById("write").style.display="none";
        }
        window.toWrite = function () {
            document.getElementById("mian").style.display="none";
            document.getElementById("templat").style.display="none";
            document.getElementById("music").style.display="none";
            document.getElementById("photo").style.display="none";
            document.getElementById("write").style.display="block";
        }
        
        // 文件上传
        

    </script>
</body>
</html>