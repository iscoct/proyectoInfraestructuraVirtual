const get = jest.fn();
const listen = jest.fn();

jest.mock('express', () => {
    return () => {
        return {
            get,
            listen
        };
    };
});

import express from 'express';

describe('Server', () => {
    const server = express();

    beforeEach(() => {
        jest.resetModules();
        jest.resetAllMocks();
    });

    it('must listen at 8080 port', () => {
        require('../src/index');

        expect(server.listen).toBeCalledWith(8080, expect.any(Function));
    });

    it('must listen at the port it is assigned in the port ENV variable', () => {
        const port = '4000';
        process.env.PORT = port;

        require('../src/index');

        expect(server.listen).toHaveBeenCalledWith(port, expect.any(Function));
    });

    it('must server at / and /health to check that the server is running', () => {
        require('../src/index');

        expect(server.get).toHaveBeenCalledWith(['/', '/health'], expect.any(Function));
    });
});