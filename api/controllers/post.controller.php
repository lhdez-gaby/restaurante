<?php
require_once 'models/get.model.php';
require_once 'models/post.model.php';

class PostController{
  //Peticion POST para crear datos
  static public function postData($table, $data){
    $response = PostModel::postData($table,$data);
     
    $return = new PostController();
    $return -> fncResponse($response);
  }

  //Peticion POST para registrar usuario

  static public function postRegister($table, $data){
    if(isset($data["password"]) && isset($data["password"]) != null){
      $data["password"] = crypt($data["password"], '$2a$07$sdfr4hj5ressergwr7uyi6mcv1b$');
      $response = PostModel::postData($table,$data);
      $return = new PostController();
      $return -> fncResponse($response);
    } else {
      http_response_code(400);
      echo json_encode(["status" => 400, "comment" => "Password is required"]);
    }
  }

  //Peticion POST para login de usuario

  static public function postLogin($table, $data){
    $email = $data["email"];
    $response = GetModel::getData($table,'*');
    $resultado = array_filter($response , function ($item) use ($email) {
      return $item->email === $email;
    });
  
  // Convertimos el resultado en un array indexado y obtenemos el primer elemento si existe
    $resultado = array_values($resultado);
    if(!empty($resultado)){
      $crypt = crypt($data["password"], '$2a$07$sdfr4hj5ressergwr7uyi6mcv1b$');

      if($resultado[0]->{"password"} == $crypt){
        $resultadoSinPassword = array_map(function ($item) {
          // Creamos una copia del objeto sin el campo 'password'
          unset($item->password);
          return $item;
      }, $resultado);
        $return = new PostController();
        $return->fncResponse($resultado);

      }else{
        $response = array(
          "status" => "error",
          "message" => "Password incorrecta",
          "code" => 400
        ); 
        $return = new PostController();
        $return->fncResponse($response);

      }
    }else{
      $response = array(
        "status" => "error",
        "message" => "Email no encontrado",
        "code" => 400
      ); 
      $return = new PostController();
      $return->fncResponse($response);
    }
  }

  public function fncResponse($response){

    if (isset($response['status']) && $response['status'] === "error") {
      $json = array(
        'status' => $response['code'],
        'results' => array(
          "comment" => $response['message']
        ),
        'method' => 'post'
      );
  }else if(!empty($response)){
      $json = array(
        'status' => 200,
        'results' => $response,
        'method' => 'post'
      );
    }else{
      $json = array(
        'status' => 404,
        'results' => 'Not Found',
        'method' => 'post'
      );
    }

    echo json_encode($json, http_response_code($json['status']));
  }

}

?>