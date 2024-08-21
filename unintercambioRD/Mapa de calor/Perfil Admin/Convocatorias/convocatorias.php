<?php
function conexion()
{
  return mysqli_connect('localhost', 'root', 'Admin', 'unintercambio');
}

$conexion = conexion();
$sql = "select con_CodigoConvocatoria,con_Tipo,con_FechaInicio,con_FechaFinalización from convocatoria;";
$resultado = mysqli_query($conexion, $sql);
$datos = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

if (!empty($datos)) {
  echo json_encode($datos);
} else {
  echo json_encode([]);
}

