<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基于php的网络文件存储系统</title>
</head>
<?php
	/*
	基于php的网络文件存储系统
	 / 文件夹根目录
	 /folder/<path> 文件夹
	 /share/<shareid> 共享文件
	*/
	//工具函数定义专区
	function get_path(){	//获取请求php文件后面写的东西
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
		return $last_path;
	}
	function phpWebPath(){	//获取请求php文件在http的位置
		$php_self_name = basename(__FILE__);//php脚本名称
		$php_web_path = "";//php文件在http的位置
		$urls = explode("/",$_SERVER['PHP_SELF']);//用“/”分割字符串
		foreach ($urls as $i){
			//echo $i."/";
			if ($i){
				$php_web_path = $php_web_path."/".$i;
			}
			if ($i == $php_self_name) {	//遇见这个php脚本名称停止循环
				break;
			}
		}
		return $php_web_path;
	}
	function getReqType(){	//获取请求的状态
		$get_path = get_path();
		if ($get_path){
			$urls = explode("/",$get_path);//用“/”分割字符串
			return $urls[1];
		}
		return "";
	}
	function openFolderWebPath(){	//获取请求php文件在http的位置
		$php_self_name = "folder";//php脚本名称
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
		return $last_path;
	}
	//常量定义专区
	//define("PATH", "/mnt/");
	define("PATH", "c:/Users/");
	$php_self_name = basename(__FILE__);//这个文件的名字
	$php_web_path = phpWebPath();	//这个文件所在位置（http）
	//访问模式
	$getReqType = getReqType();
	
	//测试专区
	//echo "<br/>";
	function test(){
		
		header('content-type:image/jpg;');

		$content=file_get_contents('倩姐的礼貌之路.jpg');

		echo $content;
	}
	
	//处理函数
	//404页面
	function Page404(){
		header( $_SERVER['SERVER_PROTOCOL']." 404 Not Found", true, 404); //设置404状态码
		echo '<body><style>body {background: #f3f3f3;}#big-border {background: #fff;margin: 0 auto;padding: 10px;}#page-title {text-align: center;}#little-page-title{text-align: right;}</style><div id="big-border"><h1 id="page-title">基于php的网络文件存储系统</h1><h6 id="little-page-title">by--htfc786</h6><hr><h2 id="page-title">404 Page Not Found</h1></div>';
	}
	//处理文件夹
	function folderViews(){
		//globals 声明
		global $php_self_name;
		global $php_web_path;
		global $getReqType;
		
		//当前访问路径
		$web_path = "/";
		if (openFolderWebPath()){
			$web_path = openFolderWebPath();
		}
		//当前访问路径在电脑上的路径
		$path = PATH . $web_path;
		//输出HTML
		echo '<body><style>body {background: #f3f3f3;}#big-border {background: #fff;margin: 0 auto;padding: 10px;}#page-title {text-align: center;}#little-page-title{text-align: right;}#file-title{text-align: left;}</style><div id="big-border"><h1 id="page-title">基于php的网络文件存储系统</h1><h6 id="little-page-title">by--htfc786</h6><div id="msg"></div><hr>';
		//打印当前目录和返回上级
		//echo $php_web_path;
		//echo file_exists($path);
		echo "<h4>当前目录 ".$web_path." </h4>";
		if ($web_path != "/"){
			echo "<a href=\"../\" style=\"display: block;\"><-返回上级</a>";
		}
		//输出文件名称等
		if (file_exists($path)){
			echo '<table width="100%" border="1"><tr><td class="file-title">文件名称</td><td class="file-title">文件类型</td><td class="file-title">修改日期</td><td class="file-title">文件大小</td><td class="file-title">操作列表</td></tr><tr></tr><tr></tr>';
			$temp_list_chaos = scandir($path);	//读取目录里的文件
			$temp_list = Array(); 
			foreach ($temp_list_chaos as $f_name){  //整理列表文件
				if(is_dir($path . "" . $f_name)){
					Array_push($temp_list, $f_name); 
				}
			}
			foreach ($temp_list_chaos as $f_name){
				if(is_dir($path . "" . $f_name)){} else {
					Array_push($temp_list, $f_name); 
				}
			}
			foreach ($temp_list as $f_name){	//便利
				if ($f_name != ".." && $f_name != "."){	//排除根目录
					echo '<tr>';
					//根目录下的文件
					//文件名称
					if (is_dir($path . "/" . $f_name)){	
						echo '<td><a href="'.$php_web_path."/folder".$web_path.$f_name.'/">'.$f_name.'</a></td>';
					} else {
						echo "<td>".$f_name."</td>";
					}
					//文件类型
					if (is_dir($path . "" . $f_name)){
						$f_type = "文件夹";
					} elseif (pathinfo($f_name, PATHINFO_EXTENSION) == ""){
						$f_type = "文件";
					} else {
						$f_type = ".".pathinfo($f_name, PATHINFO_EXTENSION);
					}
					echo '<td>'.$f_type.'</td>';
					//文件修改日期
					$f_mtime = date("Y-m-d H:i:s",filemtime($path . "/" . $f_name));
					echo '<td>'.$f_mtime.'</td>';
					//文件大小 mb单位
					if (is_dir($path . "/" . $f_name)){	//文件夹没有大小
						$f_size = "";
					} else {
						$f_size_bytes = filesize($path . "/" . $f_name);
						if ($f_size_bytes < 1024){//Bytes (小于kb)
							$f_size = $f_size_bytes;
							$f_size = number_format($f_size, 0, '.', '')."Bytes";
						} elseif ($f_size_bytes < 1024*1024){ //KB (小于MB)
							$f_size = $f_size_bytes/1024;
							$f_size = number_format($f_size, 2, '.', '') . "KB";
						} elseif ($f_size_bytes < 1024*1024*1024){ //MB (小于GB)
							$f_size = $f_size_bytes/1024/1024;
							$f_size = number_format($f_size, 2, '.', '') . "MB";
						} elseif ($f_size_bytes < 1024*1024*1024*1024){ //GB (小于TB)
							$f_size = $f_size_bytes/1024/1024/1024;
							$f_size = number_format($f_size, 2, '.', '') . "GB";
						} else { //TB (大于GB都算)
							$f_size = $f_size_bytes/1024/1024/1024/1024;
							$f_size = number_format($f_size, 2, '.', '') . "TB";
						}
					}
					echo '<td>'.$f_size.'</td>';
						
					echo '<td></td>';
					echo '</tr>';
				}
			}
			//打印HTML
			echo '</table>';
		} else {
			echo '<h2>当前文件夹不存在</h2>';
		}
		echo '<hr></div></body>';
	}
	
	//一个简单的路由 switch case
	switch ($getReqType)
	{
	case "": case "folder": // / /folder
		folderViews();
		break;
	case "t": test(); break; //测试页面
	default: // /[不存在的网址]
		Page404();
		break;
	}
?>
</html>