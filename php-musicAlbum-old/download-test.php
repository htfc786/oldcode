<?php
//对函数的说明

//参数说明 $file_name 文件名

//$file_sub_dir: 下载文件的子路径 '"/xxx/xxx/"

function down_file($file_name,$file_sub_dir){
	$file_path = $file_name;
	//1.打开文件
	if(!file_exists($file_path)){
		echo "文件不存在!";
		return ;
	}
	$fp=fopen($file_path,"r");
	//2.处理文件
	//获取下载文件的大小
	$file_size=filesize($file_path);
	if($file_size>3000000000000000000000000){
		echo "window.alert('过大')";
		return ;
	}
	//返回的文件
	header("Content-type: text/plain");
	//按照字节大小返回
	header("Accept-Ranges: bytes");
	//返回文件大小
	header("Accept-Length: $file_size");
	//这里客户端的弹出对话框，对应的文件名
	//header("Content-Disposition: attachment; filename=".$file_name);
	//向客户端回送数据
	$buffer=1024;
	//为了下载的安全，我们最好做一个文件字节读取计数器
	$file_count=0;
	//这句话用于判断文件是否结束
	while(!feof($fp) && ($file_size-$file_count>0) ){
		$file_data=fread($fp,$buffer);
		//统计读了多少个字节
		$file_count+=$buffer;
		//把部分数据回送给浏览器;
		echo $file_data;
	}
	//关闭文件
	fclose($fp);
}
//测试函数是否可用
down_file("index.php","/qianjie");
?>