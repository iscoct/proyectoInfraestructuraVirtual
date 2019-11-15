# Estructura de clases

En el enfoque de la solución no se contempló ninguna estructura de clases.
No obstante, se ha dividido el código de la siguiente manera:

- Puesta en marcha del servidor (/src/index.ts)
- Enrutamiento o middleware: conjunto de operaciones que hará el servidor para cada una de las operaciones exportadas por el servidor (/src/router.ts)
- Parser del esquema JSON en la estructura de React (/src/parsers/index.ts). Dentro de esto está dividido en:
    - El parseador de etiquetas, el cual sólo parsea un único elemento, por ejemplo
        ```json
            "field": {
                "element": "Button",
                "value": "Some value",
                ...
            }
        ```
      dará como resultado
        ```
            <Button ...>Some value</Button>
        ```
    - El parseador de secciones, el cual busca en todo el árbol los elementos que deben estar en la sección que se parsea y los introduce en su sección.
    - El parseador del árbol entero, el cual introduce la estructura general de la aplicación y parsea todas las secciones.