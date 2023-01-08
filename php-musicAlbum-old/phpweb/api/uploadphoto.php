<?php 
// 开启Session
session_start();  
//判断登录情况
if (!isset($_SESSION['islogin'])) {
    // 没有登录
    //header('refresh:0; url=/users/login.php');
    echo '请先<a href="/users/login.php">登录</a>';
    //echo "<h4 id='page-title'>您还没有登录,请登录,3秒后自带跳转</h4>";
}else {
    // 已经登录
    $userid = $_SESSION['userid'];//userid
    $username = $_SESSION['username'];//用户名
    $title = "添加图片";
    //配置信息
    //配置数据库信息
    $confIniArray = parse_ini_file("../conf.ini", true);
    $dbHost = $confIniArray["dbHost"];
    $dbUser = $confIniArray["dbUser"];
    $dbPassword = $confIniArray["dbPassword"];
    $dbDatabase = $confIniArray["dbDatabase"];
    $dbPort = $confIniArray["dbPort"];
    //获取图片存储文件夹路径
    $imgSavePathsStart = $confIniArray["imgSavePaths"];
    // 已经登录
    //echo $_SESSION['userid'];
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        //有aid参数正常
        if (isset($_POST["aid"]) && $_POST["aid"]){
            $aid = $_POST["aid"];
            //连接数据库
            $db = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbDatabase,$dbPort); 
            mysqli_query($db,"set names 'utf-8'"); //设定字符集 
            $sql = " select albumMreatorId from album where id = $aid";
            $res = mysqli_query($db,$sql);  //执行sql！！！
            $num = mysqli_num_rows($res);  //获取有多少个
            if ($num==1){
                $row = mysqli_fetch_array($res);
                $albumMreatorId = $row["albumMreatorId"];
                if ($albumMreatorId==$userid){
                    //post过来的图片
                    //整理$_FILES的信息，方便便利数组
                    $files = [];
                    foreach ($_FILES as $file) {
                        if (is_string($file['name'])) {
                            //如果有一个直接赋值
                            $files[0] = $file;
                        } elseif (is_array($file['name'])) {
                            //整理
                            $i = 0;
                            foreach ($file['name'] as $k => $v) {
                                $files[$i]['name'] = $file['name'][$k];
                                $files[$i]['type'] = $file['type'][$k];
                                $files[$i]['tmp_name'] = $file['tmp_name'][$k];
                                $files[$i]['error'] = $file['error'][$k];
                                $files[$i]['size'] = $file['size'][$k];
                                $i++;
                            }
                        }
                    }
                    //文件信息 文件名:$files[$i]["name"] 文件类型:$files[$i]["type"] 文件大小:$files[$i]["size"] 临时文件：$files[$i]["tmp_name"]
                    //echo count($_FILES["file"]["type"]);
                    for ($i=0; $i<count($files); $i++) {
                        if (((($files[$i]["type"] == "image/gif")
                        || ($files[$i]["type"] == "image/jpeg")
                        || ($files[$i]["type"] == "image/png")
                        || ($files[$i]["type"] == "image/bmp")
                        || ($files[$i]["type"] == "image/webp"))    //支持 .gif .jpg .jpeg .png .bmp .webp 格式
                        && ($files[$i]["size"] <= 52428800)     //最大50M
                        && ($i < 20)))   //最多20张
                        {  
                            if ($files[$i]["error"]){
                                //发生错误
                                echo $files[$i]["name"]."上传时发生错误 错误代码：" . $files[$i]["error"] . "";
                            } else {
                                //如果文件夹不存在新建文件夹
                                if(!(is_dir($imgSavePathsStart."/".date("Y"))||file_exists($imgSavePathsStart."/".date("Y")))){
                                    mkdir($imgSavePathsStart."/".date("Y"),0777,true);
                                }
                                if(!(is_dir($imgSavePathsStart."/".date("Y")."/".date("m"))||file_exists($imgSavePathsStart."/".date("Y")."/".date("m")))){
                                    mkdir($imgSavePathsStart."/"."/".date("Y")."/".date("m"),0777,true);
                                }
                                if(!(is_dir($imgSavePathsStart."/".date("Y")."/".date("m")."/".date("d"))||file_exists($imgSavePathsStart."/".date("Y")."/".date("m")."/".date("d")))){
                                    mkdir($imgSavePathsStart."/".date("Y")."/".date("m")."/".date("d"),0777,true);
                                }
                                //路径
                                $imgSavePathsLast = "/".date("Y")."/".date("m")."/".date("d")."/";
                                $imgSavePaths = $imgSavePathsStart.$imgSavePathsLast;
                                //文件名
                                $originalName = $files[$i]["name"];
                                $savename = date("YmdHis").rand(0,99999999).".".pathinfo($files[$i]["name"], PATHINFO_EXTENSION);
                                if (file_exists($imgSavePaths . $savename)){
                                    //是否重名=》重名改名
                                    while (!file_exists($imgSavePaths . $savename)){
                                        //循环到没有重名
                                        $savename = date("YmdHis").rand(0,99999999).".".pathinfo($files[$i]["name"], PATHINFO_EXTENSION);
                                    }
                                } 
                                //复制文件
                                move_uploaded_file($files[$i]["tmp_name"], $imgSavePaths . $savename);
                                
                                $photoPath = $imgSavePathsLast.$savename;
                                $photoUrl = "/photo.php".$photoPath;
                                //header('refresh:1; url=/test.php');
                                //在图片表添加
                                $sql = " insert into photos (mreatorId,albumId,photoOrder,photoPath,photoUrl,originalName) values($userid,$aid,1,'$photoPath','$photoUrl','$originalName')";  
                                $res_insert = mysqli_query($db,$sql);  
                                //echo $res_insert;
                                
                                echo $files[$i]["name"]." 上传成功";
                            }
                        } else {
                            //没按要求上传的
                            echo "无效的文件";
                        }
                    }
                } else {
                    echo "您不是此相册的主人";
                }
            } else {
                echo "没有此相册";
            }
        } else {
            //没有aid参数不正常
            echo '发生错误：没有找到aid参数！';
        }
    }
}
?>