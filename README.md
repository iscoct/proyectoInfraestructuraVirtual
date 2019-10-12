# Proyecto de Infraestructura Virtual

Repositorio donde se realizará el proyecto de infraestrutura virtual.

Mi idea es crear una API para un microservicio que permita la entrada de un metadata en la definición del cuerpo de la petición de la API (metadata a determinar) y devuelva una estructura de una aplicación de React.
En resumen, haré un parser que dando un JSON al microservicio me devuelva un JSON en donde uno de sus campos sea una estructura de una aplicación de React.

Aunque el metadata esté por determinar, crearé un apartado de secciones y otro de elementos (que referenciarán a las secciones donde deben ubicarse) en el metadata para crear la estructura.
Por ejemplo, como sección podríamos considerar la cabecera, el footer y el cuerpo main, y como elementos, botones, spinner, etc.

Los componentes serán los de [react bootstrap](https://react-bootstrap.github.io/components/alerts).

La funcionalidad específica como el campo onclick de un botón no permitirá ser implementada en el metadata.
