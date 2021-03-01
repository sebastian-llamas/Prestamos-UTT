<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
$request = substr($_SERVER['REQUEST_URI'], strlen(dirname($_SERVER['PHP_SELF'])));
$URL=explode('/', $request);
if(sizeof($URL) >=3){
    $controller = $URL[1];
    if(sizeof($URL) == 4){
         $action = $URL[2];
          $params = $URL[3];
    }else {
         $action ='';
         $params =  $URL[2];
    }
    $controller .='Controller.php';
    if(file_exists($controller)){
        require_once($controller);
    }else {
        echo 'invalid controller';
    }
}else{
    echo 'invalid url';
}

?>