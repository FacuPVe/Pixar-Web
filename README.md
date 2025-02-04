# PixarWeb

En este proyecto se recreará la página web de Pixar (https://www.pixar.com/) para poner en práctica el desarrollo con Angular.

Se harán los siguientes 4 componentes:

- **Componente 1**: Header de la página que contendrá las secciones FILMS, TECHNOLOGY, CARERRS y MORE. Al hacer clic sobre esas secciones, se nos llevará a partes de la misma página (enlace anclado).
- **Componente 2**: Contenido relacionado sobre una película destacada.
- **Componente 3**: Componente llamado "content" que mostrará las secciones que aparecen en el componente 1.
- **Componente 4**: Footer de la página que mostrará información de Pixar. El Copyright deberá estar guardado en una variable de la clase y mostrarla por interpolación en la web.

Toda esta página tendrá toda la información hardcodeada, ya que la información no se muestra con una llamada a un backend o API.

## Creación de proyecto

Para crear el proyecto, ejecuta:

```bash
ng new pixar-web

```

## ANGULAR 
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
