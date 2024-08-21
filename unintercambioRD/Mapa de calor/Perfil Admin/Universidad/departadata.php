<?php
function conexion()
{
  return mysqli_connect('localhost', 'root', 'Admin', 'unintercambio');
}

$conexion = conexion();
$sql = "select dep_ID,dep_Nombre,dep_Director,dep_Secretaria,dep_telefono,dep_direccion,dep_fac_ID from departamento";
$resultado = mysqli_query($conexion, $sql);
$datos = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

if (!empty($datos)) {
  echo json_encode($datos);
} else {
  echo json_encode([]);
}
