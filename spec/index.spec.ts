const listen = jest.fn();
const use = jest.fn();
const mockYamlLoader = jest.fn(() => 'dummyYamlLoader');
const mockSwaggerSetup = jest.fn(() => 'dummySwaggerSetup');

jest.mock('body-parser', () => {
    return {
        json: () => 'dummyJson'
    };
});
jest.mock('prettier', () => {
    return {
        format: 'dummyPrettierFormat'
    };
});
jest.mock('swagger-ui-express', () => {
    return {
        serve: 'dummySwagger',
        setup: mockSwaggerSetup
    };
});
jest.mock('yamljs', () => {
    return {
        load: mockYamlLoader
    };
});
jest.mock('../src/router', () => {
    return {
        listen,
        use
    };
});

import '../src';

describe('Server', () => {
    it('must load swagger.yaml to create the Swagger UI', () => {
        expect(mockYamlLoader).toHaveBeenCalledWith('./swagger.yaml');
    });

    it('must setup swagger ui with swagger.yaml', () => {
        expect(mockSwaggerSetup).toHaveBeenCalledWith('dummyYamlLoader');
    });

    describe('use', () => {
        it('Swagger UI', () => {
            expect(use).toHaveBeenCalledWith('/api-doc', 'dummySwagger', 'dummySwaggerSetup');
        });
    });

    describe('port', () => {
        beforeEach(() => {
            jest.resetModules();
            jest.clearAllMocks();
        });

        it('must listen at 8080 by default', () => {
            require('../src/index');
    
            expect(listen).toBeCalledWith(8080, expect.any(Function));
        });

        it('must listen at the port it is assigned in the port ENV variable', () => {
            const port = '4000';
            process.env.PORT = port;
    
            require('../src/index');
    
            expect(listen).toHaveBeenCalledWith(port, expect.any(Function));
        });
    });
});