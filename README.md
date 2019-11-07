# Proyecto de Infraestructura Virtual

![](https://github.com/iscoct/proyectoInfraestructuraVirtual/workflows/ReactParser/badge.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Build Status](https://travis-ci.com/iscoct/proyectoInfraestructuraVirtual.svg?branch=master)](https://travis-ci.com/iscoct/proyectoInfraestructuraVirtual)
[![CircleCI](https://circleci.com/gh/iscoct/proyectoInfraestructuraVirtual.svg?style=svg)](https://circleci.com/gh/iscoct/proyectoInfraestructuraVirtual)

Repositorio donde se realizará el proyecto de infraestrutura virtual, curso 2019/20.

## Motivación

El problema que se quiere solventar con este microservicio es permitir un desarrollo de interfaces de usuario más ágiles.
El problema más concretamente hablando, es que muchas veces el desarrollo de aplicaciones se convierte en algo repetitivo.
Desde el punto del desarrollador, el desarrollo se podría hacer más rápido si nos dieran un esqueleto de una aplicación donde se hayan introducido los elementos que queramos dentro de las secciones que deseemos.
Ejemplo de elementos son botones, checkboxes, select entre otros. Mientras que ejemplos de secciones serían la cabecera, el pie de página, el cuerpo principal, etc.

## Descripción general del proyecto.

Este microservicio pretende paliar este proceso repetitivo exportando un esquema en formato JSON (metadata) para que nos devuelva un esqueleto de una aplicación de React.

## API REST

Actualmente, la API dispone de las siguientes rutas:

- GET
    - / y /status: Devuelven 200 como código de estado HTTP y { "status": "OK" }
    - /health: Devuelve 200 como código y 'The server is still running' como texto plano
    - /parser: Recibe un JSON con un esquema correcto y devuelve la estructura de la aplicación React
    - /api-doc: Define y especifica la API mediante Swagger ([Open API 3.0](https://swagger.io/docs/specification/about/)).

**Proximamente se podrá ver la documentación de la API en cloud por Swagger cuando se haga el deploy**

## Enlaces

- Para ver este mismo README desde gh-pages: [GitHub Pages](https://iscoct.github.io/proyectoInfraestructuraVirtual/)
- Primer ejemplo sobre la entrada y la salida que hará este microservicio: [Ejemplo](https://iscoct.github.io/proyectoInfraestructuraVirtual/docs/ejemplo)
- Herramientas que se utilizarán: [Herramientas](https://iscoct.github.io/proyectoInfraestructuraVirtual/docs/herramientas)
- Instalar, buildear y lanzar el proyecto: [Instalación, Construcción y Lanzamiento](https://iscoct.github.io/proyectoInfraestructuraVirtual/docs/lanzamiento)
- Para ver el esquema del proyecto: [Esquema](https://iscoct.github.io/proyectoInfraestructuraVirtual/docs/esquema)
- Integración continua: [CI](https://iscoct.github.io/proyectoInfraestructuraVirtual/docs/ci)