<?php 

class Connection{

  //informacion de la base de datos

  static public function infoDatabase(){

    $infoDB = array (
      'database' => 'restaurante',
      'user' => 'root',
      'pass' => '',
    );
    
    return $infoDB;
  }

 //conexión a la base de datos
 static public function connect(){

  try{
    $link = new PDO(
      'mysql:host=localhost;dbname='.Connection::infoDataBase()['database'],
      Connection::infoDataBase()['user'],
      Connection::infoDataBase()['pass']
    );

    $link->exec("SET NAMES 'utf8mb4'");
    $link->setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND, "SET NAMES 'utf8mb4'");

  }catch(PDOException $e){
    die('Error: '.e->getMessage());
  }

  return $link;

 }

 static public function getColumnsData($table, $columns){
  $database = Connection::infoDatabase()['database'];

  $validate = Connection::connect()
      ->query("SELECT COLUMN_NAME AS item 
        FROM information_schema.columns 
        WHERE table_schema = '$database' 
        AND table_name = '$table'")
      ->fetchAll(PDO::FETCH_OBJ);

      //validamos existencia de tabla
      
      if(empty($validate)){
        return null;
      }else{

        //ajuste de seleccion de columas globales
        if($columns[0] == '*'){
          array_shift($columns);
        }
        //validamos existencia de columnas
        $sum = 0;      
        foreach($validate as $key => $value){
          $sum += in_array($value->item,$columns);
        }
        return $sum == count($columns) ? $validate : null;
      }
 }

}

?>