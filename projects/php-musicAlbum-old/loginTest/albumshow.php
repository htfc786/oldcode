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

$confIniArray = parse_ini_file("./conf.ini", true); //配置文件
$PrePath = $confIniArray["PrePath"];
$PrePathNo = $PrePath;
if(substr($PrePath,-1)=="/" or substr($PrePath,-1)=="\\"){
	$PrePathNo = rtrim(rtrim($PrePath,"/"),"\\");
}
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

//查询相册信息
$albumDataQuery = mysqli_query($db,"select albumName,albumTemplateId from album where id = $aid");  
if(!(mysqli_num_rows($albumDataQuery)==1)){  //获取有多少个（正常应该有只一个）
    echo "没有此相册";
    return;
}
$albumData = mysqli_fetch_array($albumDataQuery);

//获取模板相关的
$templateId = $albumData["albumTemplateId"];


if($templateId==0){	//无模板
	echo '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>暂无模板</title><style>#noTemplateDiv {text-align: center; margin:auto;}#noTemplate {font: bold 25px Arial; color:#FF0000; vertical-align: middle}</style></head><body><div id="noTemplateDiv"><span id="noTemplate">提示：此相册当前没有设置模板，请去“编辑”里设置一个</span></div></body></html>';
	return;
}

$templateDataQuery = mysqli_query($db,"select * from templates where id = $templateId");  

if(mysqli_num_rows($templateDataQuery) != 1){	//无模板(数据库查不到)
	echo '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>暂无模板</title><style>#noTemplateDiv {text-align: center; margin:auto;}#noTemplate {font: bold 25px Arial; color:#FF0000; vertical-align: middle}</style></head><body><div id="noTemplateDiv"><span id="noTemplate">提示：此相册没有模板或模板已经被删除，请去“编辑”里设置一个</span></div></body></html>';
	return;
}

$templateData = mysqli_fetch_array($templateDataQuery);
/*
templatHtmlPath
templatFileUrl
*/

$templatHtmlPath = $templateData["templatHtmlPath"];
$templatFileUrl = $templateData["templatFileUrl"];

$templateHtml = file_get_contents(".".$templatHtmlPath); //读文件
//静态文件 staticFile
$webHtml = str_replace("{{ staticFile }}",$PrePathNo.$templatFileUrl,$templateHtml);
//title
$webHtml = str_replace("{{ title }}",$albumData["albumName"],$webHtml);
//imgList
$imgListQuery = mysqli_query($db,"select photoUrl from photos where albumId = $aid");  //执行sql！！！
$imgList = "";
if (mysqli_num_rows($imgListQuery) == 0){//获取有多少个
	$imgList = "";
} else {
	while ($row=mysqli_fetch_assoc($imgListQuery)){//$row=mysqli_fetch_assoc($rs)){
		$imgList = $imgList."\"".$PrePathNo.$row["photoUrl"]."\",";
	}
}
//music (暂时没有)

$webHtml = str_replace("{{ imgList }}",$imgList,$webHtml);
//输出
echo $webHtml;
?>