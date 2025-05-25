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
    
    if (!getId()) {
        $title = 'aid参数出错';
        echo "<h4 id='page-title'>aid参数出错</h4>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>提取图片_音乐相册</title>
    <style>
        body {
            background: #f3f3f3;
        }
        #big-border {
            background: #fff;
            margin: 0 auto;
            padding: 10px;
        }
		#page-title {
			text-align: center;
		}
        #little-page-title{
            text-align: right;
        }
        .margin5{
            margin-top:5xp;
        }
        .down_btn_a:hover {
            background-color: #ccc;
            color: #000;
        }
        .down_btn_a{
            display: inline-block; position: absolute; right: 0; width: 100px; height: 40px; line-height: 40px; background-color: #20b1aa; text-decoration: none; text-align: center; color: #fff; margin-top: 10px; margin-right: 27px;
        }
    </style>
</head>
<body>
    <div id="big-border">
        <h2 id="page-title">提取图片</h2>
        <h6 id="little-page-title">by--htfc786</h6>
        <div id="msg"></div>
        <hr>
    <div style="width: 320px; height: 100%;">
    <?php 
        if (isset($_SESSION['islogin'])) {
            if (getId()){
                $aid = getId();
                $sql=" select id,photoUrl,originalName from photos where albumId = $aid";
                $rs = mysqli_query($db,$sql);  //执行sql！！！
                if(mysqli_num_rows($rs)) { 
                    //$row = mysqli_fetch_array($rs);  //将数据以索引方式储存在数组中  
                    $i=0;
                    while ($row=mysqli_fetch_assoc($rs)){
                        $i++;
                        $photoId = $row['id'];
                        $photoUrl = $row['photoUrl'];
                        $originalName = $row["originalName"];
                        echo <<<END
                        <div class="card" style="width: 100%; position: relative;">
                            <div style="width: 40px; height: 30px; background-color: #FF9800; border-radius: 15px; color: #fff; line-height: 30px; text-align: center; position: relative; float: left; margin-top: 10px; margin-left: 8px; font-size: 20px; font-weight: bold;">$i</div>
                            <img src="$photoUrl" style="width: 80%; position: relative; margin-top: 10px; margin-left: 5px; box-shadow: 2px 3px 3px #656565;">
                            <a href="$photoUrl" download="$originalName" class="down_btn_a">点击下载</a>
                        </div>
                        END;
                    }
                } else {
                    echo "此相册没有图片！";
                }
            }
        }
        ?>
        
    </div>
    <div onclick="window.location.href='/'" style='display:block; width: 80px; height: 40px; background-color: rgba(0, 0, 0, 0.3); position: fixed; text-align: center; line-height: 40px; color: #fff; border-radius: 40px; font-size: 21px; left: 10px; top: 30px; border: 1px solid rgba(255,255,255,.4);'>返回</div>
</body>
</html>