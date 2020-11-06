<?php
	$shopname = $_POST['shopname'];//商店名
	$name = $_POST['name'];			//货物名
	$cname = $_POST['cname'];		//变更后名字
	$con = mysqli_connect('localhost','zyl','zyl');
	if (!$con) {
    	die('Could not connect: ' . mysqli_error($con));
	}
	mysqli_select_db($con,'zyl');
	mysqli_query("UPDATE zyl.$shopname SET name ='$cname' WHERE $shopname.name = '$name'",$con);
	mysqli_close($con);
?>