<?php

function conexion(){
  return mysqli_connect('localhost','root','Admin','unintercambio');
}

$conexion= conexion();
$sql ="select  est_Cedula,est_Nombre,est_Edad,est_Telefono,est_Correo,est_PAPA,est_Semestre,est_pro_SNIES,est_Pasaporte from estudiante";
$resultado= mysqli_query($conexion,$sql);
$datos=mysqli_fetch_all($resultado,MYSQLI_ASSOC);

if(!empty($datos)){
  echo json_encode($datos);
}
else{
  echo json_encode([]);
}
