<?php

  //mostrar errores

  ini_set('display_errors', 1);
  ini_set('log_errors', 1);

  //****AVISO: CAMBIAR RUTA SEGUN DONDE ESTE UBICADO EL ARCHIVO***
  ini_set('error_log','\\wsl.localhost\Ubuntu\opt\lampp\htdocs\app_restaurante\api\php_error_log');

  // Requerimientos
  require_once "models/connection.php";
  require_once "controllers/routes.controller.php";

  $index = new RoutesController();
  $index -> index();
?>