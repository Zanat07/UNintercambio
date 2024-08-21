<?php

function conexion()
{
  return mysqli_connect('localhost', 'root', 'Admin', 'unintercambio');
}

$conexion = conexion();
$sql = "select pro_SNIES,pro_Nombre,pro_CreditosTotales,pro_dep_ID from programa";
$resultado = mysqli_query($conexion, $sql);
$datos = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

if (!empty($datos)) {
  echo json_encode($datos);
} else {
  echo json_encode([]);
}
