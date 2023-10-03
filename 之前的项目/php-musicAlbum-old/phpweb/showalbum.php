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
//配置信息
$confIniArray = parse_ini_file("./conf.ini", true); //配置文件
$templatsSavePaths = $confIniArray["templatsSavePaths"]."/html";   //获取模板存储文件夹路径
//配置数据库信息
$dbHost = $confIniArray["dbHost"];
$dbUser = $confIniArray["dbUser"];
$dbPassword = $confIniArray["dbPassword"];
$dbDatabase = $confIniArray["dbDatabase"];
$dbPort = $confIniArray["dbPort"];
//获取id
if (getId()){
    //获取id
    $aid = getId();
    //连接数据库
    $db = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbDatabase,$dbPort);    //连接数据库  
    //mysql_select_db("my_test");  //选择数据库  
    mysqli_query($db,"set names 'utf-8'"); //设定字符集 
    //运行sql
    $sql = " select albumName,albumTemplateId from album where id = $aid";
    $rs = mysqli_query($db,$sql);  //执行sql！！！
    $num = mysqli_num_rows($rs);  //获取有多少个（正常应该有只一个）
    if($num) { 
        $row = mysqli_fetch_array($rs);  //将数据以索引方式储存在数组中  
        $templateId = $row["albumTemplateId"];
        //title
        $template = file_get_contents($templatsSavePaths."/$templateId/index.html");
        $webHtml = str_replace("{{ title }}",$row["albumName"],$template);
        //imgList
        $sql=" select photoUrl from photos where albumId = $aid";
        $rs = mysqli_query($db,$sql);  //执行sql！！！
        $num = mysqli_num_rows($rs);  //获取有多少个
        //echo mysqli_error($rs);
        $imgList = "";
        //$row = mysqli_fetch_array($rs,1);
        while ($row=mysqli_fetch_assoc($rs)){//$row=mysqli_fetch_assoc($rs)){
            $imgList = $imgList."\"".$row["photoUrl"]."\",";
        }
        $webHtml = str_replace("{{ imgList }}",$imgList,$webHtml);
        echo $webHtml;
    } else {
        echo "没有此相册";
    }
}    
?>