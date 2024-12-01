<?php

require_once "connection.php";

class PostModel{
  static public function  postData($table,$data){

    $columns = "";
    $params = "";

    foreach ($data as $key => $value){
      $columns .=$key.",";
      $params .=":".$key.",";
    }

    $columns = substr($columns, 0, -1);
    $params = substr($params, 0, -1);
    
    $sql = "INSERT INTO $table ($columns) VALUES ($params)";

    $stmt = Connection::connect()->prepare($sql);

    foreach ($data as $key => $value){
      $stmt ->bindParam(":".$key, $data[$key], PDO::PARAM_STR);
    }
    try{

      if($stmt -> execute()){
      $response = array(
        "comment" => "El proceso fue exitoso"
      );

      return $response;
    }else{
      return Connection::connect()->errorInfo();
    }

    } catch (PDOException $e) {
      // Manejar error por correo duplicado
      if ($e->getCode() === "23000" && strpos($e->getMessage(), "Duplicate entry") !== false) {
          return [
              "status" => "error",
              "message" => "El correo ya está registrado",
              "code" => 400
          ];
      }
      // Otros errores de base de datos
      return [
          "status" => "error",
          "message" => $e->getMessage(),
          "code" => 500
      ];
  }


    

  }
}