?php 
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
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){ //仅支持post
        //有aid参数正常
        if ((isset($_POST["aid"]) && $_POST["aid"])){  //参数是否正确
            $aid = $_POST["aid"];
            //连接数据库
            $db = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbDatabase,$dbPort); 
            mysqli_query($db,"set names 'utf-8'"); //设定字符集 
            $sql = " select albumMreatorId from album where id = $aid";
            $res = mysqli_query($db,$sql);  //执行sql！！！
            $num = mysqli_num_rows($res);  //获取有多少个
            if ($num==1){   //相册是否存在
                $row = mysqli_fetch_array($res);
                $albumMreatorId = $row["albumMreatorId"];
                if ($albumMreatorId==$userid){//相册是否是相册创建者
                    //根据aid和uid去照片表里 查并且删除
                    $rs = mysqli_query($db," SELECT photoPath FROM photos WHERE mreatorId = $userid and albumId = $aid");  //执行sql！！！
                    //$num = mysqli_num_rows($rs);  //获取有多少个
                    //删除数据库
                    $status = mysqli_query($db," DELETE FROM photos WHERE mreatorId = $userid and albumId = $aid"); 
                    if($status){  
                        while ($row=mysqli_fetch_assoc($rs)){
                            $photoPath = $row["photoPath"];
                            //删除文件
                            $status = unlink($imgSavePathsStart.$photoPath);    
                            if (!$status) {  
                                echo "删除失败";
                                return; 
                            }
                        }
                    } else {  
                        echo "删除失败";  
                        return;  
                    }
                    //删除数据库里记录的
                    $status = mysqli_query($db," DELETE FROM album WHERE albumMreatorId = $userid and id = $aid"); 
                    if (!$status){
                        echo "删除失败";  
                        return;  
                    }
                    echo "删除成功";
                } else {//不是相册创建者
                    echo "您不是此相册的主人";
                }
            } else {    //相册不存在
                echo "没有此相册";
            }
        } else {//参数不正确
            echo '发生错误：缺少参数！';
        }
    }
}
?>