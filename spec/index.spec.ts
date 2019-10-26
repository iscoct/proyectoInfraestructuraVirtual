const get = jest.fn();
const listen = jest.fn();
const use = jest.fn();

jest.mock('express', () => {
    return () => {
        return {
            get,
            listen,
            use
        };
    };
});
jest.mock('body-parser', () => {
    return {
        json: () => 'dummyJson'
    };
});
jest.mock('prettier', () => {
    return {
        format: () => 'dummyPrettierFormat'
    };
});

import express from 'express';

describe('Server', () => {
    const server = express();
    require('../src/index');

    describe('port', () => {
        beforeEach(() => {
            jest.resetModules();
            jest.resetAllMocks();
        });

        it('must listen at 8080 by default', () => {
            require('../src/index');
    
            expect(server.listen).toBeCalledWith(8080, expect.any(Function));
        });
    
        it('must listen at the port it is assigned in the port ENV variable', () => {
            const port = '4000';
            process.env.PORT = port;
    
            require('../src/index');
    
            expect(server.listen).toHaveBeenCalledWith(port, expect.any(Function));
        });
    });

    it('must server at / and /health to check that the server is running', () => {
        expect(server.get).toHaveBeenCalledWith(['/', '/health'], expect.any(Function));
    });

    it('must use body parser', () => {
        expect(server.use).toHaveBeenCalledWith('dummyJson');
    });

    it('must server at /parser to parse the tree it is given', () => {
        expect(server.get).toHaveBeenCalledWith('/parser', expect.any(Function));
    });
});