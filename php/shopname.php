<?php
	$username = $_POST['username'];			//用户名
	$con = mysqli_connect('localhost','zyl','zyl');
	if (!$con) {
    	die('Could not connect: ' . mysqli_error($con));
	}
	mysqli_select_db($con,$username);
	$zqa = array();
    $result = mysqli_query("SELECT shopname FROM $username",$con);
    $newsNum=mysqli_num_rows($result);  
    for($i=0; $i<$newsNum; $i++){
    	$row = mysqli_fetch_assoc($result);
        array_push($zqa,$row);
    }
	echo json_encode($zqa);
	mysqli_free_result($result);
	mysqli_close($con);
?>