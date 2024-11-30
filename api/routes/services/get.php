<?php 

require_once 'controllers/get.controller.php';

$table = explode('?',$routesArray[0])[0];

$select = $_GET["select"] ?? "*";

$response = new GetController();
$response->getData($table, $select);

?>