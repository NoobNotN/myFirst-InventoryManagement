<?php


//开启目录访问权限
//include './php/connect.php';  //连接数据库

header('Content-Type:application/json; charset=utf-8');

//跨域解决方案
//header('Access-Control-Allow-Origin: *'); //允许所有域名的脚本访问该资源。
//header("Access-Control-Allow-Headers: token,Origin, X-Requested-With, Content-Type, Accept"); //表明允许跨域请求包含content-type头
//header('Access-Control-Allow-Methods: POST,GET'); //请求方式

	$username = $_POST['username'];  //账号
	$password = $_POST['password'];	 //密码

    //连接数据库
	$con = mysqli_connect('localhost','zyl','zyl');
	if (!$con) {
    	die('Could not connect: ' . mysqli_error($con));
	}


//	mysqli_select_db($con,'zyl');
//	$sql = "SELECT password FROM username WHERE username = '$username'";
//  $result = mysqli_query($sql,$con);
//	$row = mysqli_fetch_assoc($result);
//	var_dump($result);
//	if($row["password"]==$password){
//		echo 1;			//登陆成功返回1
//	}else{
//		echo 0;			//登陆失败返回0
//	}
//	mysqli_free_result($result);
//	mysqli_close($con);

$animal = array('password'=>$password,'username'=>$username,'south'=>'monkey');

    echo json_encode($animal,JSON_UNESCAPED_UNICODE)  //防止中文乱码


?>