# Herramientas que se utilizan

## Para implementar el servicio

- Lenguaje (entorno de desarrollo): **Javascript** [NodeJS](https://nodejs.org/es/)
    Se usa NodeJS por la experiencia en este lenguaje del desarrollador.
    No obstante, aprender NodeJS tiene ventajas como que su lenguaje es Javascript, y si se aprende Javascript podemos utilizar nuestros conocimiento en el Frontend (React, Vue, Angular) como en el backend (NodeJS).
    Además, los paquetes exportados npm tienen, por lo general, una gran documentación siendo muy intuitiva, el código es abierto, es eficiente dado que es asíncrono y tiene una gran comunidad de gente especializada en el desarrollo del software.
- Gestor de paquetes: [NVM](https://github.com/nvm-sh/nvm)
    Es un gestor de paquetes que se usa por debajo de npm (https://www.npmjs.com/).
    Sirve para controlar las versiones de los paquetes importados desde npm.
- Control de version: **Git**
    Se usa porque es una manera de manejar los cambios hechos en el proyecto y de compartir el código entre múltiples desarrolladores.
    Si se quiere saber más sobre los beneficios sobre de un [VSC](https://www.seguetech.com/a-review-of-software-version-control-systems-benefits-and-why-it-matters/).
- Framework para exportar la API: [Express](https://expressjs.com/)
    Se usa porque es una manera de exportar operaciones sobre el servidor de una manera muy sencilla e intuitiva.
    Además de estar en un estado muy estable tras sus 5 años de uso.
- Framework para testeo: [Jest](https://jestjs.io/)
    Se utiliza Jest porque proporciona un gran contexto del fichero que se testea, informando sobre el número de línea y apuntando hacia el error de cada error en un test.
    Además, es intuitivo y fácil de leer los tests que se definen.
- Framework complementario para ayudar en el desarrollo web: [Typescript](https://www.typescriptlang.org/)
    Typescript permite definir y añadir tipos en la declaración de las funciones, variables, métodos, etc.
    Se usa este framework porque ayuda a conocer los errores en fases más tempranas del desarrollo en comparación con Javascript.
- Framework para seguir las buenas prácticas de desarrollo de Javascript y Typescript: [ESlint](https://eslint.org/)
    ESLint es un "lint" que mira tu código verificando que cumples las reglas que se definen sobre buenas praxis a la hora de programar.
    Se usa ESLint porque no te obliga a utilizar reglas, tu escoges cuales reglas quieres seguir (por ejemplo, que ningún fichero exceda las 300 líneas de código).
    Esto hace que el código sea más unificado y más fácil de leer y entender para aquellos que entienden y siguen las reglas (o hace un mejor código siguiente las buenas praxis de Javascript/Typescript).
- Herramienta de construcción: **tsc** ([Typescript](https://www.typescriptlang.org/docs/handbook/compiler-options.html))
    Se usa para transpilar el código de Typescript a un Javascript ejecutable.
- Documentación de la API: [Swagger](https://swagger.io/tools/swagger-ui/)
    Swagger nos permite tener una referencia concisa que contenga toda la información requerida para trabajar con una API, de tal manera que podamos conocer de manera muy sencilla todas las operaciones que puede realizar un servicio.
    Además, también nos permite hacer peticiones desde Swagger, lo que nos sirve para hacer de Playground.
- Librería de logs (puede cambiar porque está por revisar si hay alguna mejor): [Log4JS](https://www.npmjs.com/package/log4js)

## Metodología de desarrollo [TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas)

La principal ventaja de esta técnica de desarrollo es que al indicar lo que ha de hacer el software se evita la posibilidad de escribir código que no se va a utilizar.
La otra principal ventaja es que si no garantizamos que pasa un test tampoco podemos garantizar que el código funciona tal y como se quiere.

## Construcción y prueba

- Para hacer integración continua: [Travis CI](https://travis-ci.com/) y [GitHub Actions](https://github.com/iscoct/proyectoInfraestructuraVirtual/actions) y [Github Actions](https://github.com/iscoct/proyectoInfraestructuraVirtual/actions)