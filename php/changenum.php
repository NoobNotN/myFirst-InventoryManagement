<?php
	$shopname = $_POST['shopname'];//商店名
	$name = $_POST['name'];			//货物名
	$cnum = $_POST['cnum'];		//变更后数量
	$con = mysqli_connect('localhost','zyl','zyl');
	if (!$con) {
    	die('Could not connect: ' . mysqli_error($con));
	}
	mysqli_select_db($con,'zyl');
	mysqli_query("UPDATE zyl.$shopname SET num = $cnum WHERE $shopname.name = '$name'",$con);
	mysqli_close($con);
?>