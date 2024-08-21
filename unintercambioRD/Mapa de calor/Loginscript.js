function loguear()
{
  let user=document.getElementById("usuario").value;
  let pass=document.getElementById("clave").value;

  if (user==="Admin" && pass==="1234")
  {
    window.location="Perfil Admin/usuarios/Usuarios.html";
  }
  else
  {
    if (user==="Operator" && pass==="1234")
    {
      window.location="Convenios/Convenios.html";
    }
    else
    {
      if (user==="Estudiante" && pass==="1234")
      {
        window.location="Perfil Estudiante/RegistroEstudiante/RegistroEstudiante.php";
      }
      else
      {
        alert("Usuario Invalido")
      }
    }
  }
}
