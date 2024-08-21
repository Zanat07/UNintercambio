<?php

function conexion()
{
  return mysqli_connect('localhost', 'root', 'Admin', 'unintercambio');
}

$conexion = conexion();
$sql = "select fac_ID, fac_Nombre,fac_Decano,fac_telefono,fac_direccion from facultad";
$resultado = mysqli_query($conexion, $sql);
$datos = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

if (!empty($datos)) {
  echo json_encode($datos);
} else {
  echo json_encode([]);
}

