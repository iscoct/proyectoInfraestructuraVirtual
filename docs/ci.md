# Integración Continua

Para ver por qué se usan los comandos concretos de la build: [Instalación, buildeo y lanzamiento](https://iscoct.github.io/proyectoInfraestructuraVirtual/docs/lanzamiento)
Como sistemas de Integración continua he decidido usar TravisCI, CircleCI y GitHub Actions.

## TravisCI

TravisCI permite una configuración rápida y sencilla para la automatización de tests cuando se hace un push a la rama master del repositorio.

Por defecto, TravisCI hará los siguiente comandos cuando ejecuta la pipeline:

- `nvm install 11`
- `npm ci` que es igual que install pero cogiendo las versiones de los paquetes concretas de package-lock.json
- `npm test`

Pero como se quiere que se pase el coverage especificado en la versión de Jest, el fichero de configuración se muestra abajo:

```yaml
language: node_js
node_js:
  - "11"
script:
  - npm run coverage
  - npm run eslint
```

## GitHub Actions

En GitHub Actions he hecho una configuración más avanzada, el fichero de configuración es el siguiente:

```yaml
name: ReactParser

on:
  push:
    branches:
      - master
    paths-ignore:
      - 'docs/**'
      - 'README.md'
      - 'LICENSE'
      - '.gitignore'
  pull_request:
    branches:
      - master
    paths-ignore:
      - 'docs/**'
      - 'README.md'
      - 'LICENSE'
      - '.gitignore'
  
jobs:
  run:
    runs-on: 'ubuntu-18.04'
    steps:
      - uses: actions/checkout@v1
      - name: 'Install NodeJS'
        uses: actions/setup-node@v1
        with: 
          node-version: '11.x'
      - name: 'Install'
        run: npm install
      - name: 'Build'
        run: npm run build
      - name: 'Coverage'
        run: npm run coverage
      - name: 'ESLint'
        run: npm run eslint
```

Voy a explicar el por qué está hecho así.
Las operaciones de instalación, construcción, buildeo, testeo y coverage y parseado de buenas prácticas se hace para que se hagan las mismas operaciones que en TravisCI (las explicaciones de estos comandos se puede ver arriba en esta misma sección).

Ahora bien, en esta build hemos especificado que todas operaciones se realicen en Ubuntu 18: `runs-on: 'ubuntu-18.04'`.
También hemos especificado que la build se lance cuando se haga un push o una pull request en master:

```yaml
    push:
        branches:
            - master
    ...
    pull_request:
        branches:
            - master
```

Y por último, también hemos especificado que cuando sólo se modifiquen ficheros de documentación o configuración que por sí mismo no modifique el comportamiento del proyecto, no se lance la build:

```yaml
        paths-ignore:
            - 'docs/**'
            - 'README.md'
            - 'LICENSE'
            - '.gitignore'
```

## Circle CI

El fichero de configuración ha sido:

```yaml
version: 2.1
jobs:
  build:
    docker:
      - image: circleci/node:11
    steps:
      - checkout
      - run:
          name: Install
          command: npm install
      - run:
          name: Build
          command: npm run build
      - run:
          name: Coverage
          command: npm run coverage
      - run:
          name: ESLint
          command: npm run eslint
```

Con este fichero hemos dicho las operaciones que debía realizar igual que las anteriores 2, pero además, hemos especificado la versión de Circle CI, `version: 2.1`, y se especifica también la imagen de node, en este caso como una imagen de docker:

```yaml
    docker:
      - image: circleci/node:11
```