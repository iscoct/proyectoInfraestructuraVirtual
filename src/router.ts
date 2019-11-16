import express from 'express';
import prettier from 'prettier';
import parser from './parsers';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/health', (req, res): void => {
    res.send('The server is still running');
});

app.get(['/', '/status'], (req, res): void => {
    res.json({
        status: 'OK'
    });
});

app.get('/parser', (req, res): void => {
    const tree: any = req.body;

    const parsedJson = parser(tree);

    const prettierParsedJson = prettier.format(parsedJson, { printWidth: 100, parser: 'babel' });

    res.setHeader('Content-Type', 'application/json');
    res.json({
        reactApp: prettierParsedJson
    });
});

export default app;