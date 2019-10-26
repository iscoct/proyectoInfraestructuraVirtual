# Esquema

## Primer nivel

El primer nivel anidamiento del cuerpo del mensaje del JSON es:

```json
{
    "sections": {
        ...
    },
    "fields": {
        ...
    }
}
```

### Propiedades

- sections: Aquí es donde definiremos las secciones
- fields: Aquí es donde definiremos los campos

## Los campos (**fields**)

```json
{
    ...
    "fields": {
        "button": {
            "element": "Button",
            "section": "MyButtonSection",
            "value": "Button Value",
            "variant": "primary",
            ...
        }
    }
}
```

El primer nivel tanto de sectiosn como de fields puede tener cualquier nombre, lo importante es lo que haya en su interior.
Las propiedades que pueden tener dentro de los objetos del primer nivel de los campos son:

- element: Nombre del componente que se pondrá en la sección correspondiente. Por ejemplo, el resultado del json anterior será que dentro de la sección cuyo id sea MyButtonSection habrá <Button ...>...</Button>.
- section: Id de la sección donde estará el componente Button.
- value: Valor que estará dentro de las etiquetas del componente. En el caso del json sería <Button ...>Button Value</Button>
- Cualquier otra propiedad que se introduzca dentro de fields estará como propiedades del componente. En el caso del json sería, <Button variant='primary'>Button Value</Button>.

## Las secciones (**sections**)

```json
{
    ...
    "sections": {
        "buttonSection": {
            "id": "MyButtonSection",
            "element": "Container",
            "sections": {
                "id": "AnotherSection",
                "element": "Panel",
                ...
            },
            ...
        },
        "cardSection": {
            "element": "MainContainer",
            ...
        }
    }
}
```

El primer nivel de sections puede tener cualquier nombre, lo importante es lo que haya en su interior.
Las propiedades que pueden tener dentro de los objetos del primer nivel de las secciones son:

- element: Nombre del componente que se pondrá en el orden correspondiente. Por ejemplo, el resultado del json de las secciones será: <Container ...><Panel ...>...</Panel></Container><MainContainer ...>...</MainContainer>
- id: Id de la sección, sirve para saber que campos deben de estar dentro.
- sections: Secciones que irán dentro de la sección padre, esto nos sirve para mantener un orden. Todas las secciones se van parseando una detrás de otra poniéndolas en el mayor nivel posible, pero si queremos anidarlo, lo único que tenemos que hacer es meter unas secciones dentro de otras.
- Cualquier otra propiedad será igual que los fields, estarán como propiedades del componente.