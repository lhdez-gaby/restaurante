<?php

require_once "connection.php";

class GetModel{

  static public function getData($table,$select){

    //validar existencia de la tabla y columnas

    $selectArray = explode(",",$select);

    if(empty(Connection::getColumnsData($table,$selectArray))){
      return null;
    }

    $sql = 'SELECT '.$select.' FROM '.$table;

    $stmt = Connection::connect()->prepare($sql);

    $stmt-> execute();

    return $stmt -> fetchAll(PDO::FETCH_CLASS);
  }
}
?>