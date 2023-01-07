<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基于php的网络文件存储系统</title>
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
        #file-title{
            text-align: left;
        }
		
    </style>
</head>
<body>
	<?php
		//函数定义专区
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
		//常量定义专区
		//define("PATH", "/mnt/");
		define("PATH", "c:/Users/");
		//这个文件的名字
		$php_self_name = basename(__FILE__);
		//当前访问路径
		
		$web_path = "/";
		if (get_path()){
			$web_path = get_path();
		}
		//当前访问路径在电脑上的路径
		$path = PATH . $web_path;
		
		//测试专区
		
		//echo "<br/>";
		//echo basename(__FILE__);
		/*
		echo $_SERVER["SCRIPT_NAME"];
		echo "filename:".$php_self_name;
		echo "<br/>";
		echo $_SERVER['PHP_SELF'];
		echo "️<br/>";
		echo $path;
		echo "<br/>";
		echo $web_path;
		echo "<br/>";
		echo "<br/>";
		echo dirname($web_path);
		*/
	?>
    <div id="big-border">
        <h1 id="page-title">基于php的网络文件存储系统</h1>
        <h6 id="little-page-title">by--htfc786</h6>
        <div id="msg"></div>
        <hr>
        <h4>当前目录 <?php echo $web_path; ?></h4>
		<a href="../" style="display: block;"><-返回上级</a>
		<br/>
        <table width="100%" border="1">
		<!--<table width="100%" border="1" cellspacing="0" cellpadding="0">-->
            <tr>
                <td class="file-title">文件名称</td>
                <td class="file-title">文件类型</td>
                <td class="file-title">修改日期</td>
                <td class="file-title">文件大小</td>
                <td class="file-title">操作列表</td>
            </tr>
			<tr></tr>
			<tr></tr>
			<?php
			$temp_list = scandir($path);	//读取目录里的文件
			foreach ($temp_list as $f_name){	//便利
				if ($f_name != ".." && $f_name != "."){	//排除根目录
					echo '<tr>';
					//根目录下的文件
					//$list[] = $f_name;
					//文件名称
					if (is_dir($path . "/" . $f_name)){	
						echo '<td><a href="'.$_SERVER['PHP_SELF']."".$f_name.'/">'.$f_name.'</a></td>';
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
			?>
        </table>
        <hr>
    </div>
</body>
</html>