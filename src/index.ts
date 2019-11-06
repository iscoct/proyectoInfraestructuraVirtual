import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import app from './router';

const port = process.env.PORT || 8080;
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, (): void => {
    console.log(`Arrancado el servidor en el puerto: ${port}`);
});

export default app;