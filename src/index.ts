import express from 'express';

const app = express();
const port = 8080;

app.get(['/', '/health'], (req, res): void => {
    res.send('The server is still running');
});

app.listen(port, (): void => {
    console.log(`Arrancado el servidor en el puerto: ${port}`);
});