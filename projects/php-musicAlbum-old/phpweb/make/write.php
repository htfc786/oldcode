<?php
session_start(); // 开启Session
if (!isset($_SESSION['islogin'])) {
    // 没有登录
    header('refresh:0; url=/users/login.php');
    $title = '请先登录';
    echo "<h4 id='page-title'>您还没有登录,请登录,3秒后自带跳转</h4>";
}else {
    // 已经登录
    //配置数据库
    $confIniArray = parse_ini_file("../conf.ini", true);
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
    
    if (isset($_GET["aid"])&&$_GET["aid"]){
        $aid=$_GET["aid"];
        $res = mysqli_query($db," select albumName from album where id = $aid");  //执行sql！！！
        $num = mysqli_num_rows($res);  //获取有多少个
        if ($num==1){   //相册是否存在
            $row = mysqli_fetch_array($res);
            $albumName = $row["albumName"];
        }
    } else {
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
    <title>Document</title>
    <style>
        #albumnewname {
            line-height: 33px;
            width: 350px;
            padding: 6px 12px;
            background: #e4e4e4;
            font-size: 18pt;
            resize: none;
            outline: none;
            margin: 6px 3px;
            border: 1px solid rgba(0,0,0,0.12);
            -webkit-appearance: none;
        }
    </style>
</head>
<body>
    <div>
        <div>
            <textarea id="albumnewname" maxlength="40" rows="3" placeholder="点击这里给相册写标题（限40字）"></textarea>
        </div>
        <hr> 
    </div>
    <div style="position: fixed; top: 100%; left: 0px; width: 100%; height: 70px; display: -webkit-flex; margin-top: -70px; ">
        <div onclick="window.toMain()" style="width: 200px; height: 50px; line-height: 48px; text-align: center; font-size: 18pt; border-radius: 25px; border: 2px solid #444; color: #FFFFFF; background-color: #444; position: relative; margin-left: 33px; margin-top: 10px; display: inline-block; vertical-align: middle;">保存 & 退出</div>
    </div>
</body>
<script>
    //aid albumName
    let albumName = "<?php echo $albumName ?>";
    let aid = <?php echo $aid ?>;

    document.getElementById("albumnewname").value = albumName;

    function newname() {
        var newname = document.getElementById("albumnewname").value;
            
        if (!newname){
            alert("请输入内容");
            return;
        }

        // 用FormData传输
        let fd = new FormData();

        fd.append("aid", aid);
        fd.append("newname", newname);

        // 文件上传并获取进度
        let xhr = new XMLHttpRequest();
        xhr.open("post", "/api/albumrename.php", true);
            
        // 成功
        xhr.onload = function (e) {
            alert(e.currentTarget.responseText);
            location.reload();
        }
        // 失败
        xhr.onerror = function (e) {
            alert("发生错误："+e);
        }

        xhr.send(fd);
    }
</script>
</html>