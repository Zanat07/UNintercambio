# UNintercambio

## Descripción

UNintercambio es una aplicación web que muestra convenios internacionales en forma de tarjetas. Los usuarios pueden buscar convenios, aplicar filtros y ver detalles adicionales en un pop-up. También incluye una barra de búsqueda y un botón para cerrar sesión.

## Estructura del Proyecto

- **index.html**: Página principal de la aplicación.
- **navbar.css**: Archivo CSS para el estilo de la barra de navegación.
- **HeatMap.css**: Archivo CSS para el estilo del mapa de calor (si aplica).
- **DataConvenios.json**: Archivo JSON que contiene los datos de los convenios.
- **flags/**: Directorio que contiene imágenes de banderas.
- **login.html**: Página de inicio de sesión a la que se redirige al usuario al cerrar sesión.

## Instalación y Ejecución

1. **Clona el repositorio**:
    ```bash
    git clone [<URL_DEL_REPOSITORIO>](https://github.com/Zanat07/UNintercambio.git)
    ```

2. **Navega a la carpeta del proyecto**:
    ```bash
    cd <UNintercambio>
    ```

3. **Abre `login.html` en un navegador web**. Puedes utilizar cualquier navegador moderno para ver la aplicación.

## Uso

- **Barra de búsqueda**: Utiliza la barra de búsqueda para filtrar las tarjetas de convenios. Presiona `Enter` para aplicar el filtro.
- **Filtros**: Los filtros aplicados se muestran en la parte superior. Puedes hacer clic en el icono de la 'x' para eliminar un filtro.
- **Ver detalles**: Haz clic en una tarjeta para mostrar un pop-up con detalles adicionales.
- **Cerrar sesión**: Haz clic en el botón "Cerrar sesión" para redirigir al usuario a la página de inicio de sesión (`UI/login.html`).

## Funcionamiento del Código

- **HTML**: Contiene la estructura de la página y referencias a los estilos y scripts.
- **CSS**: Estiliza la página, incluyendo la barra de búsqueda, las tarjetas, y el pop-up.
- **JavaScript**:
    - `fetchJSON()`: Carga los datos de los convenios desde `DataConvenios.json`.
    - `createCards(data)`: Crea las tarjetas de convenios y las agrega al contenedor.
    - `applyFilters(filters)`: Aplica los filtros seleccionados a las tarjetas.
    - `addFilter(filter, filters)`: Añade un nuevo filtro.
    - `removeFilter(filter, filters)`: Elimina un filtro existente.
    - `showPopup(content)`: Muestra un pop-up con detalles de la tarjeta seleccionada.
    - `hidePopup()`: Oculta el pop-up.
    - `logout()`: Redirige al usuario a la página de inicio de sesión.

## Contribuciones

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadida nueva característica'`).
4. Envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta, no dudes en contactar con el autor del proyecto:

- **Nombre del Autor**: Juan Sebastian Tinjaca Mesa
- **Correo Electrónico**: jtinjacam@unal.edu.co

