# Continuos Deployment

Para hacer despliegue de la aplicación se ha optado por trabajar con 2 plataformas, Heroku y Azure.

## Heroku
He optado por heroku debido a su simplicidad y dado que no es necesario añadir una tarjeta de crédito.

Todas las operaciones para realizar el despliegue las he hecho desde la página [web](https://www.heroku.com) y no desde CLI.

Los pasos que he seguido son los siguientes:

- Registrarme en la plataforma (y confirmar registro desde correo)
- Create new app
    - Introducimos el nombre de la app
    - Escogemos la reunión (en este caso Europe)
- En deployment method, escogemos conectar con GitHub
    - Introducimos nuestra cuenta GitHub y el nombre del repositorio (podemos buscar el repositorio)
    - Introducimos que se haga el deploy cada vez que se haga un cambio en master (esperando a que la CI si queremos, en mi caso sí he escogido esa opción)

Podemos hacer deployment manual para que veamos que se hace el deploy correctamente.

URL: [Heroku React Parser](https://react-parser.herokuapp.com/)

## Azure
También he escogido Azure como plataforma de desarrollo dado la gran capacidad de la plataforma.

Antes de nada, como ya tenía usuario en Azure, sólo he creado una app service en Azure Portal con un Resource Group creado sólo para este proyecto, y he utilizado una suscripción de estudiante de la cual soy propietario.

Lo que he hecho es que una vez que se haga una pull request o se haga un push directamente en la rama master de Github, cuando se terminen con éxito todas las operaciones de la build de Github Actions se haga el deploy desde ahí mismo.

Para hacerlo he seguido la siguiente documentación de [Azure](https://github.com/Azure/actions) y sus subsecciones correspondientes.

Esta documentación se ha traducido en que he obtenido el secreto tal y como se dice en [Configure deployments credentials](https://github.com/Azure/login#configure-deployment-credentials) e introducido en el secreto del proyecto como AZURE_CREDENTIALS.

Esto me ha permitido que pueda iniciar sesión en Azure de la siguiente manera:

```yaml
    - uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}
```

y para hacer el deploy, como ya tiene las credenciales del app service, la suscripción, etc. solo hay que hacer

```yaml
    - uses: azure/webapps-deploy@v1
        with:
          app-name: 'ReactParser'
```

por último, cerramos sesión aunque se haya producido algún error:

```yaml
    - name: 'logout'
        run: az logout
        if: always()
```

la URL es:

URL: [Azure React Parser](http://reactparser.azurewebsites.net/)