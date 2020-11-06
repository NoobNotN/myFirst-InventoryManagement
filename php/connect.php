<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/10/17
 * Time: 17:50
 */

$con = mysqli_connect('localhost','zyl','zyl');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}