<?php 
require_once 'models/connection.php';
require_once 'controllers/post.controller.php';

if(isset($_POST)){
  // Obtener el cuerpo de la solicitud
  $table = explode('?',$routesArray[0])[0];
  $jsonBody = file_get_contents('php://input');


  // Decodificar el JSON a un arreglo asociativo
  $data = json_decode($jsonBody, true);

  if ($data) {
    $columns = array();

      // Extraer las claves del JSON
    foreach (array_keys($data) as $key) {
        array_push($columns, $key);
    }
  }
  //validar la tabla y las columnas
  if(empty(Connection::getColumnsData($table, $columns))){
    $json = array(
      'status'=> 400,
      'results'=>'Error: Fields in the form do not match the database'
    );

    echo json_encode($json, http_response_code($json['status']));
    return;
  }
  //echo '<pre>';print_r($data);'</pre>';
  //Solicitamos respuesta del controlador    
  $response = new PostController(); 

  //peticion post para registrar usuario
  if(isset($_GET['register']) && isset($_GET['register']) == true){
    $response -> postRegister($table, $data);
  }else if(isset($_GET['login']) && isset($_GET['login']) == true){
    $response -> postLogin($table, $data);
  }else{
    $response->postData($table,$data);  
  }

  

};


?>