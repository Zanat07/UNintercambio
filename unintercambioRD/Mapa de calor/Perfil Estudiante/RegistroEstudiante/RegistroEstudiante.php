<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>RegistroEstudiante</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel="stylesheet" href="../style.css"> <!-- ESTE ES EL CSS DEL MENU -->
  <link rel='stylesheet' type='text/css' media='screen' href='formularioRegistro.css'>
  <!-- ESTE ES EL CSS DEL FORMULARIO -->
  <script src="/logout.js"></script>
</head>

<body>

  <header>
    <nav>
      <ul>
        <li id="brand-container">
          <div class="brand-container">
            <div class="column" id="logo">
              <img src="../assets/logo 2 - copia 1.svg" alt="Logo Un Intercambio" id="logoIntercambio">
            </div>

          </div>
        </li>
        <li><a href="../RegistroEstudiante/RegistroEstudiante.php">Registro Estudiante</a>
        </li>
        <li><a href="../HeatMap/MAPA.html">Heat Map</a>
        </li>
        <li><a href="../HeatMap/HeatMap.html">Estadisticas</a>
        </li>
        <li><a class="button-container">
            <button id="cerrar-sesion" onclick="logout()">Cerrar sesion</button> <!--BOTON PARA CERRAR SESION-->
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <div class="form-container"> <!--CONTENIDO DE FORMULARIO-->
    <h1 id="form-title">Registro estudiante</h1>
    <form method="post" id="student-form">
      <div class="row">
        <div class="column">
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/editIcon.svg"></img>
            </span>
            <input type="number" name="identification" placeholder="Cedula" required> <!--INPUT "identification"-->
          </div><br><br>
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/editIcon.svg"></img>
            </span>
            <input type="text" name="names" placeholder="Nombres" required> <!--INPUT "names"-->
          </div><br><br>
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/editIcon.svg"></img>
            </span>
            <input type="number" name="age" placeholder="Edad" required> <!--INPUT "age"-->
          </div><br><br>
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/editIcon.svg"></img>
            </span>
            <input type="number" name="cel-number" placeholder="Telefono" required> <!--INPUT "cel-number"-->
          </div><br><br>
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/editIcon.svg"></img>
            </span>
            <input type="email" name="email" placeholder="Correo electronico" required> <!--INPUT "email"-->
          </div><br><br>
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/editIcon.svg"></img>
            </span>
            <input type="number" name="papa" placeholder="PAPA" required> <!--INPUT "papa"-->
          </div><br><br>
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/editIcon.svg"></img>
            </span>
            <input type="number" name="semestre" placeholder="Semestre" required> <!--INPUT "semestre"-->
          </div><br><br>
        </div>
        <div class="column">
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/editIcon.svg"></img>
            </span>
            <input type="text" name="program" placeholder="Programa" required> <!--INPUT "program"-->
          </div><br><br>
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/editIcon.svg"></img>
            </span>
            <input type="text" name="passport" placeholder="Pasaporte" required> <!--INPUT "pasaport"-->
          </div><br><br>
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/editIcon.svg"></img>
            </span>
            <input type="text" name="call-code" placeholder="Codigo convocatoria" required> <!--INPUT "call-code"-->
          </div><br><br>

          <input type="date" name="date" placeholder="Fecha" required><br><br><!--INPUT FECHA "date"-->
          <div class="custom-file-input">
            <label id="file-upload" class="custom-file-upload">
              <span class="upload-container">
                <img class="manImg" src="../assets/attach.svg">
              </span>
              Certificado de notas
              <input type="file" id="grad-cert" placeholder="Certificado de notas"> <!--SUBIR NOTAS "grad-cert"-->
            </label>
          </div><br>
          <div class="custom-file-input">
            <label id="file-upload" class="custom-file-upload">
              <span class="upload-container">
                <img class="manImg" src="../assets/attach.svg">
              </span>
              Carta de motivacion
              <input type="file" id="mot-lett" placeholder="Carta de motivacion"> <!--SUBIR CARTA "mot-lett"-->
            </label>
          </div><br>
          <div class="custom-text-input">
            <span class="edit-container">
              <img class="manImg" src="../assets/register.svg"></img>
            </span>
            <input type="submit" value="Registrarse" name="register"> <!--"ESTE ES EL BOTON DE REGISTRO"-->


          </div><br><br>
        </div>
      </div>
    </form>

  </div>
  <?php
  include("registrar.php");
  ?>



</body>

<footer>
  <div class="barra"></div> <!-- Barra encima del texto -->
  <p>Todas las marcas comerciales, logotipos y nombres de servicio que aparecen en esta página son propiedad de UN
    intercambio o de terceros que han autorizado su uso. Queda prohibido el uso no autorizado de cualquier marca
    comercial sin el consentimiento previo por escrito de UN intercambio o del titular de la marca.r</p>
</footer>

</html>
