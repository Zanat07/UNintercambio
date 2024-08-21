// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const estudiantes = [
  { cedula: '123456789', nombre: 'Juan Pérez', edad: 20, correo: 'juan@example.com', PAPA: 4.5, semestre: 3, programaId: 1, pasaporte: 'ABC123' },
  { cedula: '987654321', nombre: 'María Rodríguez', edad: 22, correo: 'maria@example.com', PAPA: 4.2, semestre: 5, programaId: 2, pasaporte: 'XYZ789' },
  { cedula: '456789123', nombre: 'Luis Martínez', edad: 21, correo: 'luis@example.com', PAPA: 4.8, semestre: 4, programaId: 3, pasaporte: 'DEF456' },
  { cedula: '654321987', nombre: 'Ana Sánchez', edad: 23, correo: 'ana@example.com', PAPA: 4.0, semestre: 6, programaId: 1, pasaporte: 'GHI789' },
  { cedula: '987123456', nombre: 'Laura Torres', edad: 20, correo: 'laura@example.com', PAPA: 4.6, semestre: 3, programaId: 2, pasaporte: 'JKL012' },
  { cedula: '321987654', nombre: 'Marcos Gómez', edad: 22, correo: 'marcos@example.com', PAPA: 4.3, semestre: 5, programaId: 3, pasaporte: 'MNO345' },
  { cedula: '789123456', nombre: 'Elena Rodríguez', edad: 21, correo: 'elena@example.com', PAPA: 4.7, semestre: 4, programaId: 1, pasaporte: 'PQR678' },
  { cedula: '234567890', nombre: 'Carlos Martínez', edad: 23, correo: 'carlos@example.com', PAPA: 4.1, semestre: 6, programaId: 2, pasaporte: 'STU901' },
  { cedula: '345678901', nombre: 'Andrea Díaz', edad: 20, correo: 'andrea@example.com', PAPA: 4.9, semestre: 3, programaId: 3, pasaporte: 'VWX234' },
  { cedula: '567890123', nombre: 'Juanita López', edad: 22, correo: 'juanita@example.com', PAPA: 4.4, semestre: 5, programaId: 1, pasaporte: 'YZA567' },
  { cedula: '678901234', nombre: 'Sofía Ramírez', edad: 21, correo: 'sofia@example.com', PAPA: 4.5, semestre: 4, programaId: 2, pasaporte: 'BCD890' },
  { cedula: '789012345', nombre: 'Roberto Torres', edad: 23, correo: 'roberto@example.com', PAPA: 4.2, semestre: 6, programaId: 3, pasaporte: 'EFG123' },
  { cedula: '890123456', nombre: 'Lorena Pérez', edad: 20, correo: 'lorena@example.com', PAPA: 4.8, semestre: 3, programaId: 1, pasaporte: 'HIJ456' },
  { cedula: '901234567', nombre: 'Miguel Gómez', edad: 22, correo: 'miguel@example.com', PAPA: 4.0, semestre: 5, programaId: 2, pasaporte: 'KLM789' },
  { cedula: '123450987', nombre: 'Natalia Díaz', edad: 21, correo: 'natalia@example.com', PAPA: 4.6, semestre: 4, programaId: 3, pasaporte: 'NOP012' },
];


//---------------------------------TABLA SOLICITUD---------------------------------------------//

// Simulación de datos (reemplaza esto con la lógica para obtener datos desde la base de datos)
const solicitudes = [
  { estado: 'Aprobado', numero: 1, estudiante: '123456789', convocatoria: 'Convocatoria 1', fechaSolicitud: '2023-01-10', numeroRespuesta: 101, fechaRespuestaFinal: '2023-01-15', comentario: 'Aprobado para cursar asignatura' },
  { estado: 'Rechazado', numero: 2, estudiante: '987654321', convocatoria: 'Convocatoria 2', fechaSolicitud: '2023-02-20', numeroRespuesta: 102, fechaRespuestaFinal: '2023-02-25', comentario: 'Falta anexar carta de motivación' },
  { estado: 'En Revisión', numero: 3, estudiante: '456789123', convocatoria: 'Convocatoria 3', fechaSolicitud: '2023-03-15', numeroRespuesta: null, fechaRespuestaFinal: null, comentario: 'Falta pasaporte válido' },
  { estado: 'Aprobado', numero: 4, estudiante: '654321987', convocatoria: 'Convocatoria 1', fechaSolicitud: '2023-04-05', numeroRespuesta: 103, fechaRespuestaFinal: '2023-04-10', comentario: 'Aprobado para realizar práctica' },
  { estado: 'Rechazado', numero: 5, estudiante: '987123456', convocatoria: 'Convocatoria 2', fechaSolicitud: '2023-05-15', numeroRespuesta: 104, fechaRespuestaFinal: '2023-05-20', comentario: 'No cumple con requisitos mínimos' },
  { estado: 'Aprobado', numero: 6, estudiante: '321987654', convocatoria: 'Convocatoria 3', fechaSolicitud: '2023-06-01', numeroRespuesta: 105, fechaRespuestaFinal: '2023-06-05', comentario: 'Aprobado para realizar pasantía' },
  { estado: 'Rechazado', numero: 7, estudiante: '789123456', convocatoria: 'Convocatoria 1', fechaSolicitud: '2023-07-10', numeroRespuesta: 106, fechaRespuestaFinal: '2023-07-15', comentario: 'No hay disponibilidad de cupos' },
  { estado: 'En Revisión', numero: 8, estudiante: '234567890', convocatoria: 'Convocatoria 2', fechaSolicitud: '2023-08-20', numeroRespuesta: null, fechaRespuestaFinal: null, comentario: 'Falta certificado de notas' },
  { estado: 'Aprobado', numero: 9, estudiante: '345678901', convocatoria: 'Convocatoria 3', fechaSolicitud: '2023-09-15', numeroRespuesta: 107, fechaRespuestaFinal: '2023-09-20', comentario: 'Aprobado para doble titulación' },
  { estado: 'Rechazado', numero: 10, estudiante: '567890123', convocatoria: 'Convocatoria 1', fechaSolicitud: '2023-10-05', numeroRespuesta: 108, fechaRespuestaFinal: '2023-10-10', comentario: 'No cumple con los criterios de selección' },
  { estado: 'Aprobado', numero: 11, estudiante: '678901234', convocatoria: 'Convocatoria 2', fechaSolicitud: '2023-11-15', numeroRespuesta: 109, fechaRespuestaFinal: '2023-11-20', comentario: 'Aprobado para realizar estancia de investigación' },
  { estado: 'Rechazado', numero: 12, estudiante: '789012345', convocatoria: 'Convocatoria 3', fechaSolicitud: '2023-12-01', numeroRespuesta: 110, fechaRespuestaFinal: '2023-12-05', comentario: 'No cumple con los requisitos mínimos de idioma' },
  { estado: 'En Revisión', numero: 13, estudiante: '890123456', convocatoria: 'Convocatoria 1', fechaSolicitud: '2024-01-10', numeroRespuesta: null, fechaRespuestaFinal: null, comentario: 'Falta anexar pasaporte' },
  { estado: 'Aprobado', numero: 14, estudiante: '901234567', convocatoria: 'Convocatoria 2', fechaSolicitud: '2024-02-20', numeroRespuesta: 111, fechaRespuestaFinal: '2024-02-25', comentario: 'Aprobado para realizar trabajo de grado' },
];

// Llena la tabla con datos
const solicitudBody = document.getElementById('solicitudBody');
solicitudes.forEach(solicitud => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
      <td>${solicitud.estado}</td>
      <td>${solicitud.numero}</td>
      <td>${solicitud.estudiante}</td>
      <td>${solicitud.convocatoria}</td>
      <td>${solicitud.fechaSolicitud}</td>
      <td>${solicitud.numeroRespuesta || 'En Revisión'}</td>
      <td>${solicitud.fechaRespuestaFinal || 'En Revisión'}</td>
      <td>${solicitud.comentario}</td>
    `;
  solicitudBody.appendChild(fila);
});

