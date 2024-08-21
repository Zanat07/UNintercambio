<?php
function conexion()
{
  return mysqli_connect('localhost', 'root', 'Admin', 'unintercambio');
}

$conexion = conexion();
$sql = "select uni_Nombre,uni_ciudad,uni_pais,uni_con_CodigoConvocatoria from universidad";
$resultado = mysqli_query($conexion, $sql);
$datos = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

if (!empty($datos)) {
  echo json_encode($datos);
} else {
  echo json_encode([]);
}
