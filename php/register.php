<?php
	$username = $_POST['username'];		//用户名
	$password = $_POST['password'];		//密码     注册成功返回1，失败返回0
	$con = mysqli_connect('localhost','zyl','zyl');
	if (!$con) {
    	die('Could not connect: ' . mysqli_error($con));
	}
	mysqli_select_db($con,'zyl');
	$sql = "SELECT id FROM username WHERE username = '$username'";
    $result = mysqli_query($sql,$con);
	$zqa = mysqli_query("SELECT * FROM username",$con);
	$q =mysqli_num_rows($zqa);
	$q = $q + 1;
	if($result){
			mysqli_free_result($result);
			mysqli_close($con);
			return 0;
	}
	mysqli_query("INSERT INTO zyl.username (id, username, password) VALUES ('$q', '$username', '$password')",$con) or die('添加数据出错：'.mysqli_error());
	$sql = "CREATE TABLE zyl.$username ( id INT(255) NOT NULL , shopname CHAR(255) NOT NULL ) ENGINE = InnoDB;";
	mysqli_free_result($result);
	mysqli_close($con);
	return 1;
?>