<?php

include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['identification']) >= 1 && strlen($_POST['names']) >= 1
        && strlen($_POST['age']) >= 1
        && strlen($_POST['cel-number']) >= 1
        && strlen($_POST['email']) >= 1
        && strlen($_POST['papa']) >= 1
        && strlen($_POST['semestre']) >= 1
        && strlen($_POST['program']) >= 1
        && strlen($_POST['passport']) >= 1) {

	      $cedula = trim($_POST['identification']);
        $name = trim($_POST['names']);
        $edad = trim($_POST['age']);
        $cel = trim($_POST['cel-number']);
        $email = trim($_POST['email']);
        $papa = trim($_POST['papa']);
        $semest = trim($_POST['semestre']);
        $programa = trim($_POST['program']);
        $pasaporte = trim($_POST['passport']);
	    $consulta = "insert into estudiante (est_Cedula, est_Nombre, est_Edad, est_Telefono, est_Correo, est_PAPA, est_Semestre,est_pro_SNIES, est_Pasaporte)values ('$cedula','$name','$edad','$cel','$email','$papa','$semest','$programa','$pasaporte')";
	    $resultado = mysqli_query($conex,$consulta);

    }
}

