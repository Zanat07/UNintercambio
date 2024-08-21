<?php

function conexion(){
  return mysqli_connect('localhost','root','Admin','unintercambio');
}

$conexion= conexion();
$sql ="select sol_NumeroSolicitud,sol_est_Cedula, sol_Fecha from solicitud;";
$resultado= mysqli_query($conexion,$sql);
$datos=mysqli_fetch_all($resultado,MYSQLI_ASSOC);

if(!empty($datos)){
  echo json_encode($datos);
}
else{
  echo json_encode([]);
}
