# Dashboard App React

Desarrollo de una aplicación web utilizando React y TypeScript para la visualización de información de contactos mediante una interfaz tipo dashboard.

El proyecto implementa una estructura basada en componentes reutilizables, separación de responsabilidades y tipado estático mediante interfaces de TypeScript. La aplicación presenta una tabla de contactos generada dinámicamente a partir de datos definidos dentro del componente, utilizando componentes independientes para organizar la información.

La página está organizada mediante un componente principal que integra la vista general y componentes secundarios encargados de mostrar la lista completa y cada registro individual.

## Tecnologías utilizadas

- **React 19** para la construcción de la interfaz mediante componentes funcionales.
- **TypeScript** para la definición de interfaces, tipado de datos y validación durante el desarrollo.
- **Vite** como herramienta de construcción y servidor de desarrollo rápido.
- **Bootstrap 5** utilizado para la estructura visual de la tabla y estilos responsivos.
- **CSS** para la personalización de estilos globales y específicos de la aplicación.
- **ESLint** para mantener estándares de calidad y buenas prácticas en el código.

## Estructura del proyecto

```text
src/
├─ components/
│  ├─ ContactList.tsx       # Componente encargado de mostrar la lista de contactos
│  └─ ContactRow.tsx        # Componente reutilizable para cada fila de contacto
│
├─ types/
│  └─ contact.ts            # Interfaz TypeScript para definir la estructura Contact
│
├─ App.tsx                  # Componente principal de la aplicación
├─ main.tsx                 # Punto de entrada y renderizado de React
├─ App.css                  # Estilos específicos del componente principal
└─ index.css                # Estilos globales de la aplicación
```

## Qué hice en el proyecto

- **Creación del proyecto:**

  Se creó una aplicación utilizando React con TypeScript mediante Vite como entorno de desarrollo. La configuración inicial permite trabajar con componentes modernos y tipado estático.

- **Configuración de React y TypeScript:**

  Se utilizó TypeScript para definir estructuras claras de datos y mejorar la seguridad del código mediante interfaces y tipos personalizados.

- **Arquitectura basada en componentes:**

  La aplicación fue dividida en componentes independientes para evitar concentrar toda la lógica en un solo archivo. Cada componente tiene una responsabilidad específica dentro de la interfaz.

- **Componente principal App:**

  El componente `App` funciona como punto central de la aplicación. Se encarga de organizar la estructura general de la página e integrar el componente encargado de mostrar los contactos.

- **Modelo de datos Contact:**

  Se creó la interfaz `Contact` dentro de `types/contact.ts`, definiendo los atributos necesarios para representar un contacto:

  - `id`: identificador numérico del contacto.
  - `name`: nombre del contacto.
  - `email`: correo electrónico del contacto.

- **Componente ContactList:**

  Se implementó un componente encargado de administrar la lista de contactos y generar dinámicamente las filas correspondientes.

  La información es recorrida mediante el método `map()` de JavaScript, creando un componente independiente para cada contacto recibido.

- **Componente ContactRow:**

  Se desarrolló un componente reutilizable encargado de representar una fila individual dentro de la tabla.

  Este componente recibe la información mediante `props` tipadas con TypeScript y muestra los datos correspondientes del contacto.

- **Uso de Props y tipado:**

  Se utilizaron propiedades (`props`) para comunicar información entre componentes. La propiedad `contact` recibe un objeto que cumple con la interfaz `Contact`, garantizando consistencia en los datos enviados.

- **Renderizado dinámico de información:**

  La tabla de contactos se genera utilizando renderizado dinámico. Cada elemento de la lista produce una fila independiente sin necesidad de escribir manualmente cada registro.

- **Diseño de interfaz:**

  Se utilizó Bootstrap para aplicar estilos a la tabla mediante clases como `table`, `table-striped` y `table-sm`, logrando una presentación organizada y adaptable.

- **Separación de responsabilidades:

  La estructura del proyecto separa los componentes visuales (`components`) de los modelos de datos (`types`), facilitando futuras modificaciones y la escalabilidad del código.

- **Organización y limpieza del código:**

  Los componentes fueron distribuidos en archivos independientes, evitando duplicación de código y manteniendo una estructura clara para el desarrollo.

- **Verificación del funcionamiento:**

  Se comprobó la correcta compilación del proyecto utilizando Vite y TypeScript mediante el comando de producción:

```bash
npm run build
```

  La aplicación genera correctamente los archivos optimizados dentro de la carpeta `dist`.

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

La terminal debe permanecer abierta mientras se utiliza la aplicación.

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

## Autor

Proyecto desarrollado como práctica de React y TypeScript.
