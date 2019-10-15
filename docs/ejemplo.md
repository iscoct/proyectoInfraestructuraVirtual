# Primer ejemplo del microservicio

## Entrada

```json
{
    "sections": {
        "container": {
            "id": "dummyContainer",
            ...
        },
        "modal": {
            "header": {
                "id": "dummyModalsHeader",
                ...
            },
            "body": {
                ...
            },
            "footer": {
                ...
            }
        },
        "navs": {
            "href": "dummyNavs",
            "disabled": false,
            ...
        }
    },
    "fields": {
        "button": {
            "section": "dummyContainer",
            "variant": "primary",
            "size": "lg",
            "text": "dummyText",
            ...
        },
        ...
    }
}
```

En siguientes hitos iremos mostrando la documentación del esquema exportado.

## Salida

```
import React, { PureComponent } from 'react';
import { Button, Modal, Navbar, ... } from 'react-bootstrap';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        ...
    }

    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    ...
                    <button variant="primary" size="lg">dummyText</button>
                    ...
                </Navbar>
                ...
                <Modal>
                    ...
                </Modal>
            </React.Fragment>
        );
    }
}
```