<?php
session_start(); // 开启Session 

if (!isset($_SESSION['islogin'])) {
    // 没有登录
    header('refresh:0; url=/users/login.php');
    echo '请先登录';
    //echo "<h4 id='page-title'>您还没有登录,请登录,3秒后自带跳转</h4>";
}else if (isset($_SESSION['islogin'])) {
    //配置信息
    $confIniArray = parse_ini_file("../conf.ini", true); //配置文件
    //配置数据库信息
    $dbHost = $confIniArray["dbHost"];
    $dbUser = $confIniArray["dbUser"];
    $dbPassword = $confIniArray["dbPassword"];
    $dbDatabase = $confIniArray["dbDatabase"];
    $dbPort = $confIniArray["dbPort"];
    // 已经登录
    $userid = $_SESSION['userid'];//用户id
    $username = $_SESSION['username'];//用户名
    
    $db = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbDatabase,$dbPort);    //连接数据库  
    //mysqli_select_db("my_test");  //选择数据库  
    mysqli_query($db,"set names 'utf-8'"); //设定字符集  
    //获取时间(名称)
    $alnumName = "新相册_".date("YmdHis");
    //运行sql
    $sql=" INSERT INTO album (albumName,albumMreatorId) values('$alnumName',$userid)";
    $res_insert = mysqli_query($db,$sql);
    //判断是否成功
    if($res_insert)  {
        echo "新建成功";  
    } else {  
        echo "系统繁忙，请稍后";  
    }
}
?>