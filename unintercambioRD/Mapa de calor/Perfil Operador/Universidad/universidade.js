// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const facultades = [
  { id: 1, nombre: 'Facultad de Ciencias', decano: 'Dr. Juan Pérez', telefono: '555-1234' },
  { id: 2, nombre: 'Facultad de Ingeniería', decano: 'Dra. María Rodríguez', telefono: '555-5678' },
  { id: 3, nombre: 'Facultad de Humanidades', decano: 'Dr. Luis Martínez', telefono: '555-9876' },
  { id: 4, nombre: 'Facultad de Medicina', decano: 'Dra. Ana Sánchez', telefono: '555-4321' },
  { id: 5, nombre: 'Facultad de Arquitectura', decano: 'Arq. Laura Torres', telefono: '555-8765' },
  { id: 6, nombre: 'Facultad de Derecho', decano: 'Dr. Marcos Gómez', telefono: '555-2345' },
  { id: 7, nombre: 'Facultad de Economía', decano: 'Dr. Elena Rodríguez', telefono: '555-6789' },
  { id: 8, nombre: 'Facultad de Psicología', decano: 'Dra. Carlos Martínez', telefono: '555-3456' },
  { id: 9, nombre: 'Facultad de Ciencias Sociales', decano: 'Dr. Andrea Díaz', telefono: '555-7890' },
  { id: 10, nombre: 'Facultad de Educación', decano: 'Dra. Juanita López', telefono: '555-8901' },
];




//---------------------Tabla Departamento---------------------------------------//

// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const departamentos = [
  { id: 1, nombre: 'Departamento de Matemáticas', director: 'Dr. José Pérez', secretaria: 'Maria González', telefono: '555-1234', direccion: 'Calle 123', facultad: 'Facultad de Ciencias' },
  { id: 2, nombre: 'Departamento de Informática', director: 'Dra. Ana Rodríguez', secretaria: 'Juanita López', telefono: '555-5678', direccion: 'Avenida XYZ', facultad: 'Facultad de Ingeniería' },
  { id: 3, nombre: 'Departamento de Historia', director: 'Dr. Luis Martínez', secretaria: 'Laura Gómez', telefono: '555-9876', direccion: 'Plaza Principal', facultad: 'Facultad de Humanidades' },
  { id: 4, nombre: 'Departamento de Química', director: 'Dra. Carla Sánchez', secretaria: 'Pedro Ramírez', telefono: '555-4567', direccion: 'Calle de los Elementos', facultad: 'Facultad de Ciencias' },
  { id: 5, nombre: 'Departamento de Arquitectura', director: 'Arq. Marco Ruiz', secretaria: 'Ana María Díaz', telefono: '555-7890', direccion: 'Avenida del Diseño', facultad: 'Facultad de Ingeniería' },
  { id: 6, nombre: 'Departamento de Literatura', director: 'Dr. Carmen González', secretaria: 'Ricardo Vargas', telefono: '555-2345', direccion: 'Calle de los Libros', facultad: 'Facultad de Humanidades' },
  { id: 7, nombre: 'Departamento de Física', director: 'Dr. Martín Herrera', secretaria: 'Laura Soto', telefono: '555-3456', direccion: 'Calle de las Leyes de la Física', facultad: 'Facultad de Ciencias' },
  { id: 8, nombre: 'Departamento de Ingeniería Civil', director: 'Ing. María Torres', secretaria: 'Carlos González', telefono: '555-6789', direccion: 'Avenida de las Construcciones', facultad: 'Facultad de Ingeniería' },
  { id: 9, nombre: 'Departamento de Filosofía', director: 'Dr. Alberto Ruiz', secretaria: 'Marta López', telefono: '555-8901', direccion: 'Calle de las Ideas', facultad: 'Facultad de Humanidades' },
  { id: 10, nombre: 'Departamento de Biología', director: 'Dra. Julia Martínez', secretaria: 'Diego Ramírez', telefono: '555-1122', direccion: 'Calle de los Seres Vivos', facultad: 'Facultad de Ciencias' },
  { id: 11, nombre: 'Departamento de Ingeniería Eléctrica', director: 'Ing. Andrés Sánchez', secretaria: 'Lucía Pérez', telefono: '555-3344', direccion: 'Avenida de la Energía', facultad: 'Facultad de Ingeniería' },
  { id: 12, nombre: 'Departamento de Lingüística', director: 'Dr. Elena Rodríguez', secretaria: 'Rafaela Torres', telefono: '555-5566', direccion: 'Calle de las Lenguas', facultad: 'Facultad de Humanidades' },
  { id: 13, nombre: 'Departamento de Geología', director: 'Dr. Carlos Gómez', secretaria: 'Isabel Martínez', telefono: '555-7788', direccion: 'Calle de las Rocas', facultad: 'Facultad de Ciencias' },
  { id: 14, nombre: 'Departamento de Ingeniería Mecánica', director: 'Ing. Juan Torres', secretaria: 'Sara Díaz', telefono: '555-9900', direccion: 'Avenida de las Máquinas', facultad: 'Facultad de Ingeniería' },
  { id: 15, nombre: 'Departamento de Psicología', director: 'Dra. Laura Sánchez', secretaria: 'Javier Ramírez', telefono: '555-2211', direccion: 'Calle de la Mente', facultad: 'Facultad de Humanidades' },
  // Agrega más datos según sea necesario
];


//---------------------Tabla Programa---------------------------------------//

// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const programas = [
  { codigoSNIES: '12345', nombre: 'Ingeniería de Software', creditos: 150, departamento: 'Departamento de Informática' },
  { codigoSNIES: '67890', nombre: 'Psicología Clínica', creditos: 120, departamento: 'Departamento de Psicología' },
  { codigoSNIES: '23456', nombre: 'Biología Molecular', creditos: 130, departamento: 'Departamento de Biología' },
  { codigoSNIES: '78901', nombre: 'Arquitectura Sostenible', creditos: 160, departamento: 'Departamento de Arquitectura' },
  { codigoSNIES: '34567', nombre: 'Derecho Internacional', creditos: 140, departamento: 'Departamento de Derecho' },
  { codigoSNIES: '89012', nombre: 'Economía Financiera', creditos: 130, departamento: 'Facultad de Economía' },
  { codigoSNIES: '45678', nombre: 'Historia del Arte', creditos: 110, departamento: 'Departamento de Historia' },
  { codigoSNIES: '12389', nombre: 'Ingeniería Eléctrica', creditos: 155, departamento: 'Departamento de Ingeniería Eléctrica' },
  { codigoSNIES: '56789', nombre: 'Lengua y Literatura', creditos: 120, departamento: 'Departamento de Lingüística' },
  { codigoSNIES: '23490', nombre: 'Medicina Interna', creditos: 180, departamento: 'Facultad de Medicina' },
];

// Llena la tabla con datos
const programaBody = document.getElementById('programaBody');
programas.forEach(programa => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
      <td>${programa.codigoSNIES}</td>
      <td>${programa.nombre}</td>
      <td>${programa.creditos}</td>
      <td>${programa.departamento}</td>
    `;
  programaBody.appendChild(fila);
});

