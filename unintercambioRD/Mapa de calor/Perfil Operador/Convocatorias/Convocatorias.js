// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const convocatorias = [
    { codigo: '001', nombre: 'Convocatoria 1', modalidad: 'Pasantías', inicio: '2023-01-01', finalizacion: '2023-02-01', tipo: 'Nacional', universidad: 'Universidad Nacional sede Medellin' },
    { codigo: '002', nombre: 'Convocatoria 2', modalidad: 'Cursar Materias', inicio: '2023-02-15', finalizacion: '2023-03-15', tipo: 'Internacional', universidad: 'Universidad Autonoma' },
    { codigo: '003', nombre: 'Convocatoria 3', modalidad: 'Doble Titulación', inicio: '2023-03-20', finalizacion: '2023-04-20', tipo: 'Nacional', universidad: 'Universidad de chile' },
    // Agrega más datos según sea necesario
  ];





//---------------------Tabla Departamento---------------------------------------//

// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const universidades = [
    { nombre: 'Universidad Nacional', pais: 'Colombia' },
    { nombre: 'Universidad Autónoma', pais: 'México' },
    { nombre: 'Universidad de Buenos Aires', pais: 'Argentina' },
    { nombre: 'Universidade de São Paulo', pais: 'Brasil' },
    { nombre: 'Universidad de Chile', pais: 'Chile' },
    { nombre: 'Universidad Nacional Autónoma de Honduras', pais: 'Honduras' },
    { nombre: 'Universidad de Costa Rica', pais: 'Costa Rica' },
    { nombre: 'Universidad Central de Venezuela', pais: 'Venezuela' },
    { nombre: 'Universidad Nacional de Asunción', pais: 'Paraguay' },
    { nombre: 'Universidad de la República', pais: 'Uruguay' },
  ];



//---------------------Tabla MOVILIDAD---------------------------------------//

// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const movilidad = [
    { modalidad: 'Cursar asignatura', duracion: '4 meses' },
    { modalidad: 'Practica', duracion: '6 meses' },
    { modalidad: 'Pasantia', duracion: '10 meses' },
    { modalidad: 'Doble Titulación', duracion: '6 meses' },
    { modalidad: 'Estancia de investigación', duracion: '10 meses' },
    { modalidad: 'Trabajo de grado', duracion: '4 meses' },
  ];

  // Llena la tabla con datos
  const movilidadBody = document.getElementById('movilidadBody');
  movilidad.forEach(mov => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${mov.modalidad}</td>
      <td>${mov.duracion}</td>
    `;
    movilidadBody.appendChild(fila);
  });

//---------------------Tabla requisitos---------------------------------------//


// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const requisitos = [
    { id: 1, nombre: 'Certificado de notas' },
    { id: 2, nombre: 'Pasaporte válido' },
    { id: 3, nombre: 'Carta de motivación' },
  ];

  // Llena la tabla con datos
  const requisitoBody = document.getElementById('requisitoBody');
  requisitos.forEach(req => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${req.id}</td>
      <td>${req.nombre}</td>
    `;
    requisitoBody.appendChild(fila);
  });


