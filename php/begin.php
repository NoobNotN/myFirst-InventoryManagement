<?php
	$shopname = $_POST['shopname'];  //商铺名
	$con = mysqli_connect('localhost','zyl','zyl');
	if (!$con) {
    	die('Could not connect: ' . mysqli_error($con));
	}
	mysqli_select_db($con,'zyl');
	$zqa = array();
    $result = mysqli_query("SELECT name, price, num FROM $shopname",$con);
    for($i=0; $i<6; $i++){		
    	$row = mysqli_fetch_assoc($result);
		array_push($zqa,$row);
    }
	echo json_encode($zqa);
	mysqli_free_result($result);
	mysqli_close($con);
?>