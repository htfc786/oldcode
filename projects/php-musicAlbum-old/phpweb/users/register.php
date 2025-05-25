<?php  
    //配置数据库
    $confIniArray = parse_ini_file("../conf.ini", true);
    //print_r($confIniArray);
    $dbHost = $confIniArray["dbHost"];
    $dbUser = $confIniArray["dbUser"];
    $dbPassword = $confIniArray["dbPassword"]; // 请在此修改数据库密码
    $dbDatabase = $confIniArray["dbDatabase"];
    $dbPort = $confIniArray["dbPort"];

    if(isset($_POST["username"]) && isset($_POST["password"])) {  
        $user = $_POST["username"];  
        $psw = $_POST["password"];  
        $psw_confirm = $_POST["confirm"];  
        if($user == "" || $psw == "" || $psw_confirm == "") {  
            echo "<script>alert('请确认信息完整性！'); history.go(-1);</script>";  
        } else {  
            if($psw == $psw_confirm) {  
                $db = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbDatabase,$dbPort);    //连接数据库  
                //mysqli_select_db("my_test");  //选择数据库  
                mysqli_query($db,"set names 'utf-8'"); //设定字符集  
                $sql = "select username from user where username = '$_POST[username]'"; //SQL语句  
                $result = mysqli_query($db,$sql);    //执行SQL语句  
                $num = mysqli_num_rows($result); //统计执行结果影响的行数  
                if($num) {  //如果已经存在该用户  
                    echo "<script>alert('用户名已存在'); history.go(-1);</script>";  
                }  else {   //不存在当前注册用户名称  
                    $sql_insert = "insert into user (username,password) values('$_POST[username]','$_POST[password]')";  
                    $res_insert = mysqli_query($db,$sql_insert);  
                    //$num_insert = mysql_num_rows($res_insert);  
                    if($res_insert)  {
                        echo "<script>alert('注册成功，请登录！'); window.location.href='login.php';</script>";  
                    } else {  
                        echo "<script>alert('系统繁忙，请稍候！'); history.go(-1);</script>";  
                    }  
                }  
            } else {  
                echo "<script>alert('密码不一致！'); history.go(-1);</script>";  
            }  
        }  
    } else {  
        echo "<script>alert('提交未成功！'); history.go(-1);</script>";  
    }  
?>