<?php

function conexion(){
  return mysqli_connect('localhost','root','Admin','unintercambio');
}

$conexion= conexion();
$sql ="select res_NumeroREspuesta,res_sol_NumeroSolicitud,res_Estado, res_comentario,sol_NumeroSolicitud,sol_est_Cedula,sol_Fecha from respuesta join solicitud where (res_sol_NumeroSolicitud=sol_NumeroSolicitud)";
$resultado= mysqli_query($conexion,$sql);
$datos=mysqli_fetch_all($resultado,MYSQLI_ASSOC);

if(!empty($datos)){
  echo json_encode($datos);
}
else{
  echo json_encode([]);
}
