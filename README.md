# PixarWeb

En este proyecto se ha recreado la página web de inicio de Pixar (https://www.pixar.com/) para poner en práctica el desarrollo con Angular. En concreto, esta versión de la página ha sido recreada: https://web.archive.org/web/20250204222454/https://www.pixar.com/


https://github.com/user-attachments/assets/155ff717-f76e-4d80-8bef-c6a888eceeb6


Se han implementado los siguientes 4 componentes:

- **Componente 1**: Header de la página que contiene las secciones FILMS, TECHNOLOGY, CARERRS y MORE. Al hacer clic sobre esas secciones, se nos llevará a partes de la misma página (enlace anclado).
- **Componente 2**: Contenido relacionado sobre una película destacada.
- **Componente 3**: Componente llamado "content" que muestra las secciones que aparecen en el componente 1.
- **Componente 4**: Footer de la página que muestra información de Pixar. El Copyright está guardado en una variable de la clase y se muestra por interpolación en la web.

Toda esta página tiene la información hardcodeada, ya que la información no se muestra con una llamada a un backend o API.

## Creación de proyecto

Para crear el proyecto, ejecuta los siguientes comandos:
```bash
# Comprobar que está instalado node y npm:
node -v
npm -v 
# Si no están instalados ir a la página https://nodejs.org/es para poder tener ambas utilidades en el equipo(npm se instalará con node).

# Comprobar que está instalado Angular CLI (Command Line Interface):
ng version # o ng v

# En caso de que no esté instalado, utilizar el siguiente comando:
npm install -g @angular/cli

# Ahora con todas las comprobaciones hechas, podremos crear el proyecto con el siguiente comando:
ng new pixar-web
```

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```
/src
└── app
     └── components/  <-- Aquí se encuentran los componentes implementados
        ├── header/         <-- Componente 1: El Header
        │   ├── header.component.css
        │   ├── header.component.html
        │   ├── header.component.spec.ts
        │   └── header.component.ts
        ├── featured-film/  <-- Componente 2: Película destacada
        │   ├── featured-film.component.css
        │   ├── featured-film.component.html
        │   ├── featured-film.component.spec.ts
        │   └── featured-film.component.ts
        ├── content/        <-- Componente 3: Contenedor principal
        │   ├── content.component.css
        │   ├── content.component.html
        │   ├── content.component.spec.ts
        │   └── content.component.ts
        └── footer/         <-- Componente 4: El Footer
             ├── footer.component.css
             ├── footer.component.html
             ├── footer.component.spec.ts
             └── footer.component.ts
```

## Características implementadas

- Navegación mediante enlaces anclados
- Iconos de Font Awesome

## ANGULAR 

Este proyecto se ha hecho con [Angular CLI](https://github.com/angular/angular-cli) versión 19.1.5.

### Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques cualquiera de los archivos fuente.

### Generación de código

Angular CLI incluye potentes herramientas para generación de código. Para generar un nuevo componente, ejecuta:

```bash
ng generate component nombre-componente
```

Para obtener una lista completa de los esquemas disponibles (como `components`, `directives` o `pipes`), ejecuta:

```bash
ng generate --help
```

### Compilación

Para compilar el proyecto ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los artefactos de compilación en el directorio `dist/`. Por defecto, la compilación de producción optimiza tu aplicación para rendimiento y velocidad.

### Ejecutar pruebas unitarias

Para ejecutar pruebas unitarias con el ejecutor de pruebas [Karma](https://karma-runner.github.io), utiliza el siguiente comando:

```bash
ng test
```

### Ejecutar pruebas end-to-end

Para pruebas end-to-end (e2e), ejecuta:

```bash
ng e2e
```

Angular CLI no viene con un framework de pruebas end-to-end por defecto. Puedes elegir uno que se adapte a tus necesidades.

### Recursos adicionales

Para más información sobre el uso de Angular CLI, incluyendo referencias detalladas de comandos, visita la página [Visión general y referencia de comandos de Angular CLI](https://angular.dev/tools/cli).
