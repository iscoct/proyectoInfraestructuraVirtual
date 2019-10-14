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

import '../src/index';
import express from 'express';

describe('Server', () => {
    const server = express();

    it('must listen at 8080 port', () => {
        expect(server.listen).toBeCalledWith(8080);
    });

    it('must server at / and /health to check that the server is running', () => {
        expect(server.get).toHaveBeenCalledWith(['/', '/health'], expect.any(Function));
    });
});