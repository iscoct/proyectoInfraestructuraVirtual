import express from 'express';
import bodyParser from 'body-parser';
import prettier from 'prettier';
import parser from './parsers';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get(['/', '/health'], (req, res): void => {
    res.send('The server is still running');
});

app.get('/parser', (req, res): void => {
    const tree: any = req.body;

    const parsedJson = parser(tree.sections, tree);

    const prettierParsedJson = prettier.format(parsedJson, { printWidth: 100, parser: 'babel' });

    res.setHeader('Content-Type', 'application/json');
    res.end(prettierParsedJson);
});

app.listen(port, (): void => {
    console.log(`Arrancado el servidor en el puerto: ${port}`);
});