<?php /*
/api/albummake.php
api-相册制作


*/ ?>
<?php session_start(); // 开启Session ?>
<?php
if (!(isset($_SESSION['islogin']))) {
    // 没有登录
    //header('refresh:0; url=./login.php');
    //$codeNoLogin = $conf["codeNoLogin"];
    echo "请先登录";
    return;
}
// 已经登录
//$username = $_SESSION['username'];  //用户名

//判断请求方式
//不判断了，支持get

//请求参数 此处只判断do
if(!(isset($_GET["do"]) && $_GET["do"])){
    echo "请求参数错误";
    return;
}
//print_r($_GET);
//此处按需判断其他参数
switch ($_GET["do"]) {
    case "getTemplate": //获取模板
        //groupId
        if(!(isset($_GET["groupId"]) && $_GET["groupId"])){
            echo "缺少请求参数";
            return;
        }
        break;

    case "changeTemplate":
        if(!(isset($_GET["aid"]) && $_GET["aid"])){
            echo "缺少请求参数";
            return;
        }
        if(!(isset($_GET["templateId"]) && $_GET["templateId"])){
            echo "缺少请求参数";
            return;
        }
        break;

    default:
        echo "没有此方式";
        return;
}

//连接数据库
//读取配置
$confIniArray = parse_ini_file("../conf.ini", true);
//数据库配置
$dbHost = $confIniArray["dbHost"];
$dbUser = $confIniArray["dbUser"];
$dbPassword = $confIniArray["dbPassword"]; // 请在此修改数据库密码
$dbDatabase = $confIniArray["dbDatabase"];
$dbPort = $confIniArray["dbPort"];
$dbEncoding = $confIniArray["dbEncoding"];
//连接!
$db = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbDatabase,$dbPort);
//mysql_select_db("my_test");  //选择数据库  
mysqli_query($db,"set names '$dbEncoding'"); //设定字符集 

switch ($_GET["do"]) {
    case "getTemplate": //获取模板
        if ($_GET["groupId"]=="all"){
            $templatesGroupQuery = mysqli_query($db,"SELECT id,templatName,templatIMG,templatGroupId FROM templates");
        } else {
            $groupId = $_GET["groupId"];
            $templatesGroupQuery = mysqli_query($db,"SELECT id,templatName,templatIMG,templatGroupId FROM templates WHERE templatGroupId = $groupId");
        }
        $templatesData = array();
        while ($templatesGroupRow=mysqli_fetch_assoc($templatesGroupQuery)){//$row=mysqli_fetch_assoc($rs)){
            $templateId = $templatesGroupRow["id"];
            $templateName = $templatesGroupRow["templatName"];
            $templateIMG = $templatesGroupRow["templatIMG"];
            $templategroupId = $templatesGroupRow["templatGroupId"];

            $templateGroupQuery = mysqli_query($db,"SELECT groupName FROM templatesgroup WHERE id = $templategroupId");
            if(!mysqli_num_rows($templateGroupQuery)==1) {
                $templateGroup = "无";
            } else {
                $templateGroup = mysqli_fetch_array($templateGroupQuery)["groupName"];
            }
            

            $templateDataArr=array(
                "templateId" => $templateId,
                "templateName" => $templateName,
                "templateIMG" => $templateIMG,
                "templateGroup" => $templateGroup,
            );
            array_unshift($templatesData,$templateDataArr);
        }
        echo json_encode(array("data" => $templatesData));
        break;
    
    case "changeTemplate":

        break;

    default:
        echo "没有此方式";
        return;
}
?>