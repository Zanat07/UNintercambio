// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const usuarios = [
  { correo: 'Admin', contraseña: '1234' },
  { correo: 'Operator', contraseña: '1234' },
  { correo: 'Estudiante', contraseña: '1234' },
];

// Llena la tabla con datos
const usuarioBody = document.getElementById('usuarioBody');
usuarios.forEach(usuario => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${usuario.correo}</td>
    <td>${usuario.contraseña}</td>
  `;
  usuarioBody.appendChild(fila);
});


//---------------------------------TABLA OPERADORES------------------------------------------//


// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const operadores = [
  { correo: 'Operator', contraseña: '1234' },
];

// Llena la tabla con datos
const operadorBody = document.getElementById('operadorBody');
operadores.forEach(operador => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${operador.correo}</td>
    <td>${operador.contraseña}</td>
  `;
  operadorBody.appendChild(fila);
});
