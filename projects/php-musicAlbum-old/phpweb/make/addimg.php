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
    $title = '编辑相册'; //title
    
    if (isset($_GET["aid"])&&$_GET["aid"]){
        $aid=$_GET["aid"];
    } else {
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
    <title>Document</title>
    <style>
    @-webkit-keyframes zhuan {
		0% {
			-webkit-transform:rotate(0deg);
		}
		100% {
			-webkit-transform:rotate(360deg);
		}
	}
    </style>
</head>
<body>
    <div id="mainImgList" style="overflow: auto;">
        <?php 
        if (isset($_SESSION['islogin'])) {
            if (isset($_GET["aid"])&&$_GET["aid"]){
                $aid=$_GET["aid"];
                $sql=" select id,photoUrl from photos where albumId = $aid";
                $rs = mysqli_query($db,$sql);  //执行sql！！！
                if(mysqli_num_rows($rs)) { 
                    //$row = mysqli_fetch_array($rs);  //将数据以索引方式储存在数组中  
                    while ($row=mysqli_fetch_assoc($rs)){
                        $photoUrl = $row['photoUrl'];
                        $photoId = $row['id'];
                        echo <<<END
                        <div style="width: 78px; height: 150px; position: relative; float: left; width: 78px; margin: 16px 0 0 8px; height: 150px; border: 1px solid #BFBFBF; box-shadow: 2px 2px 3px #aaaaaa;">
                        <div style="background-image:url($photoUrl); position: absolute; width: 78px; height: 150px; background-size: cover;"></div>
                            <div onclick="delImg($photoId)" style="position: absolute; right: -2px;">
                                <img src="/img/addimg/cha.png"  style="width: 25px; height: 25px;">
                            </div>
                            <!--<div style="position: absolute;">
                                <img onclick="" src="/img/addimg/turn.png" style="width: 25px;height: 25px;">
                            </div>-->
                            <!--<div class="" style="position: absolute; bottom: -2px; width: 78px; height: 35px;">
                                <div></div>
                                <img onclick="" src="/img/addimg/next.png" style="position: absolute; opacity: 0.8;">
                                <img onclick="" src="/img/addimg/next.png" style="position: absolute; opacity: 0.8; right: 0px; -webkit-transform: scale(-1,1);">
                            </div>-->
                        </div>
                        END;
                    }
                } else {
                    echo "此相册没有图片，赶紧上传吧！";
                }
            }
        }
        ?>
    </div>
    <input id="uploadFiles" name="files" type="file" multiple="" accept=".jpg,.jpeg,.png,.bmp,.gif,.webp" style="display:none;"/>

    <div id="screenLoad" style="position: absolute; width: 100%;height: 100%; background-color: black;opacity: 0.5; top:0;left:0;display:none;"></div>
    <div id="loading" style="position: absolute;top: 40%;width: 300px;left: 100px;height: 100px;border-radius: 10px;overflow: hidden;display:none;">
        <div style="position: absolute;width: 100%;height: 100%;z-index: 0;background-color: black;opacity: 0.68;"></div>
        <img src="/img/addimg/loading.png" style="position: absolute;z-index: 1;top: 15px;left: 16px; -webkit-animation: zhuan 1s linear infinite;">
        <span id="uploadMsg" style="position: absolute;line-height: 70px;top: 15px;left: 102px;z-index: 1;color: white;font-size: 22px;">上传中</span>
    </div>

    <div id="topBar" style="position: fixed; background-color:#fff; top: 100%; left: 0px; width: 100%; height: 70px; display: -webkit-flex; margin-top: -70px; ">
        <div onclick="uploadFiles()" style=" width: 200px; height: 50px; line-height: 48px; text-align: center; font-size: 18pt; border-radius: 25px; border: 2px solid #444; position: relative; margin-left: 33px; margin-top: 10px; display: inline-block; vertical-align: middle;">新增图片</div>
        <div onclick="window.parent.toMain()" style="width: 200px; height: 50px; line-height: 48px; text-align: center; font-size: 18pt; border-radius: 25px; border: 2px solid #444; color: #FFFFFF; background-color: #444; position: relative; margin-left: 33px; margin-top: 10px; display: inline-block; vertical-align: middle;">保存 & 退出</div>
    </div>
    <script>
        //aid
        let aid = <?php echo $aid ?>;
        //图片列表高度
        let height = window.top.height
        let mainImgList = document.getElementById("mainImgList")
        mainImgList.style.height = (height-100) + "px";
        //上传文件函数
        function uploadFiles() {
            let uploadFiles = document.getElementById("uploadFiles");
            let uploadMsg = document.getElementById("uploadMsg");
            
            uploadFiles.click();

            uploadFiles.onchange=function () {
                //alert("1111")
                //document.getElementById("uploadTs").style.display=block;
                        
                if (!uploadFiles.files[0]) {
                    alert("请选择文件！");
                    return;
                }
                // 用FormData传输
                let fd = new FormData();

                fd.append("aid", aid);

                for (var i=0;i<=uploadFiles.files.length;i++) {
                    fd.append("files["+i+"]", uploadFiles.files[i]);
                }

                document.getElementById("screenLoad").style.display="block";
                document.getElementById("loading").style.display="block";
                // 文件上传并获取进度
                let xhr = new XMLHttpRequest();
                xhr.open("post", "/api/uploadphoto.php", true);
                // 获取进度
                xhr.upload.onprogress = function (e) {
                    if (e.lengthComputable) {
                        // 文件上传进度
                        // 获取百分制的进度
                        let filePercent = Math.round(e.loaded / e.total * 100);
                        // 长度根据进度条的总长度等比例扩大
                        //probg.style.width = progress.clientWidth / 100 * percent + "px";
                        // 进度数值按百分制来
                        uploadMsg.innerHTML = "上传进度：" + filePercent + "%";
                    }
                }
                // 上传成功
                xhr.onload = function (e) {
                    uploadMsg.innerHTML = "上传成功";
                    alert(e.currentTarget.responseText);
                    document.getElementById("screenLoad").style.display="none";
                    document.getElementById("loading").style.display="none";
                    uploadFiles.value=null;
                    location.reload();
                }
                // 上传失败
                xhr.onerror = function (e) {
                    uploadMsg.innerHTML = "上传失败：" + e
                    alert("上传失败：" + e);
                }

                xhr.send(fd);
            }
        }
        function delImg(photoId) {
            // 用FormData传输
            let fd = new FormData();

            fd.append("aid", aid);
            fd.append("photoid", photoId);

            // 文件上传并获取进度
            let xhr = new XMLHttpRequest();
            xhr.open("post", "/api/delphoto.php", true);
            
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
</body>
</html>