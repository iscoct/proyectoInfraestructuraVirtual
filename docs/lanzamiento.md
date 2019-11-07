# Prerrequisitos para instalar, realizar el build y el lanzamiento de la aplicación

- Tener instalado [NodeJS](https://nodejs.org/es/download/)
    - Este servicio ha sido implementado en su versión 11, puede ver las [versiones](https://nodejs.org/es/download/releases/)
- Tener instalado [Npm](https://www.npmjs.com/get-npm) o [Npx](https://www.npmjs.com/package/npx).

# Instalación

- Descargarse o clonar el [proyecto](https://github.com/iscoct/proyectoInfraestructuraVirtual)
- Abrir una terminal desde la raíz del proyecto.
- Hacer: `npm install`

Esto instalará de forma automática los paquetes de npm que se encuentran en el fichero package.json en el campo dependencies y devDependencies con sus versiones específicas creando un fichero package-lock.json (si no estuviera descargado o lo actualizará si estuviera y es necesario) con información más específica.

# Build

`buildtool: package.json`

Para poder ejecutar el comando necesario para hacer el build: `npm run build`, se necesita poder ejecutar desde la terminal `tsc`.
Sino se puede, hacer: `npm install -g tsc`.

Este comando hará un `transpilado` del código de `Typescript` a `Javascript` creando un nuevo directorio /dist donde se encontrarán los ficheros transpilados.

# Lanzamiento

- Hacer: `npm start` o `npm run start`

# Testear

Para poder ejecutar el comando: `npm run test` se necesita poder ejecutar desde la terminal `jest`.
Sino se puede, hacer: `npm install -g jest`

Ahora mismo, todas las líneas del código se testean, en la [configuración de Jest actualmente](https://github.com/iscoct/proyectoInfraestructuraVirtual/blob/master/jest.config.json) hemos especificado que den `error los test` si se tiene menos del `95%` del `coverage` cubierto (número de líneas que están testeadas), aún así pasan al **100%**, esto es así por haber seguido la metodología de desarrollo de **TDD**.

- Para ejecutar el coverage: `npm run coverage` y para ver el resultado como página web vaya a la ruta `/spec/Reports/coverage/lcov-report/index.html`.

# Asegurarse que se sigue el desarrollo adecuado

Para poder ejecutar el comando `npm run eslint` se necesita poder ejecutar desde la terminal `eslint`.
Sino se puede, hacer: `npm install -g eslint`.