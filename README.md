# Dashboard App React

Desarrollo de una aplicación web utilizando React y TypeScript para la visualización de información de contactos mediante una interfaz tipo dashboard.

El proyecto implementa una estructura basada en componentes reutilizables, separación de responsabilidades y tipado estático mediante interfaces de TypeScript. Los contactos se obtienen desde una API REST pública mediante un módulo de servicio, y la aplicación funciona como una SPA (Single Page Application) con varias páginas navegables gracias a React Router.

La aplicación cuenta con una página de inicio, una tabla con la lista de contactos, una página de detalle para cada contacto y una página 404 para las rutas que no existen. Un menú de navegación permanece visible en todas las páginas.

## Tecnologías utilizadas

- **React 19** para la construcción de la interfaz mediante componentes funcionales y Hooks (`useState`, `useEffect`).
- **TypeScript** para la definición de interfaces, tipado de datos y validación durante el desarrollo.
- **React Router 8** (paquete `react-router`) para el enrutamiento entre páginas sin recargar la aplicación.
- **Fetch API** nativa del navegador para consumir la API REST.
- **JSONPlaceholder** (`https://jsonplaceholder.typicode.com/users`) como API pública de pruebas.
- **Vite** como herramienta de construcción y servidor de desarrollo rápido.
- **Bootstrap 5** para la barra de navegación, tablas, tarjetas, botones, alertas y spinners.
- **CSS** para algunos estilos globales propios (fondo y avatares).
- **ESLint** para mantener estándares de calidad y buenas prácticas en el código.

## Estructura del proyecto

```text
src/
├─ components/
│  ├─ Avatar.tsx            # Círculo con las iniciales del contacto
│  ├─ ContactList.tsx       # Carga los contactos desde el servicio y muestra la tabla
│  ├─ ContactRow.tsx        # Fila de la tabla con enlace al detalle del contacto
│  └─ Navbar.tsx            # Menú de navegación con NavLink
│
├─ pages/
│  ├─ HomePage.tsx          # Página de inicio (/)
│  ├─ ContactsPage.tsx      # Lista de contactos (/contactos)
│  ├─ ContactDetailPage.tsx # Detalle de un contacto (/contactos/:id)
│  └─ NotFoundPage.tsx      # Página 404 para cualquier otra ruta (*)
│
├─ services/
│  └─ contactsService.ts    # Acceso a la API: getContacts() y getContact(id)
│
├─ types/
│  └─ contact.ts            # Interfaces Contact y ContactDetail
│
├─ App.tsx                  # Navbar y definición de las rutas
├─ main.tsx                 # Punto de entrada: StrictMode, BrowserRouter y Bootstrap
└─ index.css                # Estilos globales de la aplicación
```

## Rutas de la aplicación

| Ruta             | Página              | Contenido                                        |
| ---------------- | ------------------- | ------------------------------------------------ |
| `/`              | `HomePage`          | Bienvenida y botón para ver los contactos        |
| `/contactos`     | `ContactsPage`      | Tabla con todos los contactos de la API          |
| `/contactos/:id` | `ContactDetailPage` | Tarjeta con los datos completos de un contacto   |
| `*`              | `NotFoundPage`      | Página 404 con botón para volver al inicio       |

## Qué hice en el proyecto

### Parte 1: componentes, props y tipado

- **Creación del proyecto:**

  Se creó una aplicación utilizando React con TypeScript mediante Vite como entorno de desarrollo. La configuración inicial permite trabajar con componentes modernos y tipado estático.

- **Arquitectura basada en componentes:**

  La aplicación fue dividida en componentes independientes para evitar concentrar toda la lógica en un solo archivo. Cada componente tiene una responsabilidad específica dentro de la interfaz.

- **Modelo de datos Contact:**

  Se creó la interfaz `Contact` dentro de `types/contact.ts`, definiendo los atributos necesarios para representar un contacto:

  - `id`: identificador numérico del contacto.
  - `name`: nombre del contacto.
  - `email`: correo electrónico del contacto.

- **Componentes ContactList y ContactRow:**

  `ContactList` recorre la lista de contactos con el método `map()` y genera un componente `ContactRow` por cada contacto, usando el `id` como `key`. `ContactRow` recibe el contacto mediante `props` tipadas con TypeScript y representa una fila de la tabla.

### Parte 2: consumo de una API REST con Hooks

- **Servicio de contactos:**

  Se creó el módulo `services/contactsService.ts`, encargado de obtener los datos desde la API. De esta forma los componentes no necesitan conocer la URL, el formato de la respuesta ni los errores HTTP.

  - `getContacts()`: obtiene la lista completa de contactos.
  - `getContact(id)`: obtiene los datos de un contacto específico.

  Ambas funciones usan `fetch()` con `async` / `await` y revisan `response.ok`, ya que `fetch` no falla por sí solo ante errores 404 o 500.

- **Estado y efectos en ContactList:**

  El arreglo fijo de contactos se reemplazó por datos reales de la API. El componente usa tres estados con `useState` (`contacts`, `cargando` y `error`) y un `useEffect` con arreglo de dependencias vacío para pedir los datos una sola vez al montar el componente.

- **Renderizado condicional:**

  Mientras los datos se cargan se muestra un spinner; si ocurre un error, una alerta de Bootstrap; y si todo sale bien, la tabla de contactos.

### Parte 3: enrutamiento con React Router

- **Instalación y configuración:**

  Se instaló el paquete `react-router` y se envolvió el componente `App` con `<BrowserRouter>` en `main.tsx`, habilitando el uso de rutas en toda la aplicación.

- **Páginas y rutas:**

  Se creó la carpeta `pages/` para los componentes asociados a una ruta, separándolos de los componentes reutilizables de `components/`. En `App.tsx` se definieron las rutas con `<Routes>` y `<Route>`, incluyendo la ruta `*` para la página 404.

- **Menú de navegación:**

  El componente `Navbar` usa `NavLink`, que navega sin recargar la página y marca con la clase `active` el enlace de la página actual. El menú queda fuera de `<Routes>`, por lo que se ve en todas las páginas.

- **Ruta dinámica y página de detalle:**

  Se agregó la interfaz `ContactDetail`, que extiende `Contact` con `phone`, `website` y `company`. Cada nombre de la tabla es un `Link` hacia `/contactos/:id`, y la página `ContactDetailPage` lee el `id` de la URL con `useParams()` para pedir los datos del contacto. Si el `id` no existe (por ejemplo `/contactos/99`), se muestra la alerta "Contacto no encontrado".

### Diseño de la interfaz

- Se retiraron los estilos de la plantilla de Vite para que Bootstrap controle el diseño.
- La tabla se muestra dentro de una tarjeta con efecto al pasar el mouse, encabezados en español y el total de contactos.
- Cada contacto tiene un avatar con sus iniciales (componente `Avatar`).
- Los botones de navegación (Ver contactos, Volver al inicio, Volver) usan el estilo gris `btn-secondary`.

### Verificación del funcionamiento

Se comprobó la correcta compilación del proyecto y la ausencia de errores de ESLint mediante:

```bash
npm run build
npm run lint
```

## Ejecución del proyecto

Con Node.js y npm instalados, abrir una terminal dentro de la carpeta del proyecto.

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador la dirección mostrada por Vite:

```text
http://localhost:5173/
```

La terminal debe permanecer abierta mientras se utiliza la aplicación. Se necesita conexión a internet, ya que los contactos se obtienen desde la API de JSONPlaceholder.

> En desarrollo, `StrictMode` ejecuta los efectos dos veces a propósito, por lo que en la pestaña Red del navegador aparecen dos peticiones a la API. Es el comportamiento esperado.

## Compilación para producción

Para generar una versión optimizada del proyecto:

```bash
npm run build
```

Los archivos generados se almacenan en:

```text
dist/
```

Para visualizar la versión compilada:

```bash
npm run preview
```

Al publicar la aplicación en un servidor, este debe estar configurado para devolver `index.html` en cualquier ruta, de modo que React Router pueda manejar direcciones como `/contactos/3`.

## Autor

Proyecto desarrollado como práctica de React y TypeScript.
