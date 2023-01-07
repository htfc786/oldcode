<?php
//获取图片存储文件夹路径
$imgSavePathsStart = "./";
//var_dump($_FILES);
if($_SERVER['REQUEST_METHOD'] === 'POST'){
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
                echo $files[$i]["name"]."上传时发生错误 错误代码：" . $files[$i]["error"] . "<br/>";
            } else {
                //打印文件信息
                //echo "上传的文件名: " . $files[$i]["name"] . "<br/>";
                //echo "上传的文件类型: " . $files[$i]["type"] . "<br/>";
                //echo "上传的文件大小: " . ($files[$i]["size"] / 1024) . " Kb<br/>";
                //echo "上传的文件的临时文件位置: " . $files[$i]["tmp_name"] . "<br/>";
                //如果文件夹不存在新建文件夹
                //路径
                $imgSavePaths = $imgSavePathsStart;
                //文件名
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
                echo $files[$i]["name"]."上传成功<br/>";

                //header('refresh:1; url=/test.php');
                
            }
        } else {
            //没按要求上传的
            echo "无效的文件<br/>";
        }
    }
	return;
}
?>
<div>
    <label for="file">请选择图片:</label>
    <input id="uploadFiles" name="files" type="file" multiple="" accept=""/>
    <br/>
    <input id="uploadBtn" type="submit" value="上传图片"/>
    <br/>
    <span id="uploadMsg"></span>
</div>

<script>
let uploadFiles = document.getElementById("uploadFiles");
let uploadBtn = document.getElementById("uploadBtn");
let uploadMsg = document.getElementById("uploadMsg");

// 文件上传
uploadBtn.onclick = function () {
    if (!uploadFiles.files[0]) {
        alert("请选择文件！");
        return;
    }

    // 用FormData传输
    let fd = new FormData();

    for (var i=0;i<=uploadFiles.files.length;i++) {
        fd.append("files["+i+"]", uploadFiles.files[i]);
    }

    // 文件上传并获取进度
    let xhr = new XMLHttpRequest();
    xhr.open("post", "fileupload.php", true);
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
        uploadMsg.innerHTML = e.currentTarget.responseText;
        uploadFiles.value=null;
    }
    // 上传失败
    xhr.onerror = function (e) {
        uploadMsg.innerHTML = "上传失败：" + e
    }

    xhr.send(fd);
}

</script>