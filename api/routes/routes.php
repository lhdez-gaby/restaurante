<?php

// Divide la URL en segmentos
$routesArray = explode("/", $_SERVER['REQUEST_URI']);
$routesArray = array_values(array_filter($routesArray)); // Reindexa el array

//****** */ DEFINIR LOS ELEMENTOS A ELIMINAR SEGUN LA RUTA******
$prefixToRemove = ["app_restaurante", "api"];

// Elimina los prefijos especificados
foreach ($prefixToRemove as $prefix) {
    if (isset($routesArray[0]) && $routesArray[0] === $prefix) {
        array_shift($routesArray); // Remueve el prefijo
    }
}

//**Cuando no se hace ninguna peticion a la api**

// Si no hay más rutas después de eliminar los prefijos, devuelve un error
if (empty($routesArray) || count($routesArray) == 0) {
    $json = array(
        'status' => 404,
        'result' => 'Not Found'
    );

    echo json_encode($json, http_response_code($json["status"]));
    return;
}

//** Cuando si se hace una peticion a la api**/



if(count($routesArray) == 1 && isset($_SERVER['REQUEST_METHOD'])){
  //Peticiones GET
  if($_SERVER['REQUEST_METHOD']== 'GET' ) {

    include 'services/get.php';
  }

  //Peticiones POST
  if($_SERVER['REQUEST_METHOD']== 'POST' ) {
    
    include 'services/post.php';

  }
  //Peticiones PUT
  if($_SERVER['REQUEST_METHOD']== 'PUT' ) {
    $json = array(
      'status' => 200,
      'result' => 'SOLICITUD PUT'
  );

  echo json_encode($json, http_response_code($json["status"]));
  return;

  }
  //Peticiones DELETE
  if($_SERVER['REQUEST_METHOD']== 'DELETE' ) {
    $json = array(
      'status' => 200,
      'result' => 'SOLICITUD DELETE'
  );

  echo json_encode($json, http_response_code($json["status"]));
  return;

  }

}

?>