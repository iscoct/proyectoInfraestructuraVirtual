import request from 'supertest';
import app from '../src/router';
import prettier from 'prettier';

describe('API', () => {
    const requestedApp = request(app);

    describe('GET /health', () => {
        it('must send the phrase "The server is still running" indicating that the server is up', (done) => {
            requestedApp.get('/health').expect(200,
                'The server is still running', done);
        });
    });

    describe.each([['/'], ['/status']])('GET %s', () => {
        it('must send a json with state field and OK as value indicating that the server is ready', (done) => {
            requestedApp.get('/status').expect(200,
                { state: 'OK' }, done);
        });
    });

    describe('GET /parser', () => {
        it('must parse fields and only one section', (done) => {
            const tree = {
                fields: {
                    toggleChild: {
                        section: 'dummyId',
                        element: "Dropdown.Toggle",
                        id: 'dummyFieldId',
                        value: 'dummyValue'
                    },
                    buttonChild: {
                        section: 'dummyId',
                        element: 'Button',
                        id: 'dummyButtonId'
                    }
                },
                sections: {
                    dropdown: {
                        drop: 'up',
                        alignRight: true,
                        show: true,
                        flip: true,
                        id: 'dummyId',
                        element: 'Dropdown'
                    }
                }
            };
            const expectedResult = `
                import React, { PureComponent } from "react";

                export default class View extends PureComponent {
                    render() {
                        return (
                            <React.Fragment>
                                <Dropdown
                                    drop="up"
                                    alignRight={true}
                                    show={true}
                                    flip={true}
                                    id="dummyId"
                                >
                                    <Dropdown.Toggle
                                        id="dummyFieldId"
                                    >
                                        dummyValue
                                    </Dropdown.Toggle>
                                    <Button id="dummyButtonId" />
                                </Dropdown>
                            </React.Fragment>
                        );
                    }
                }
            `;

            requestedApp.get('/parser').set('Content-Type', 'application/json').
                send(tree).expect(200).then((response) => {
                    const prettierParsedElement = prettier.format(response.body.reactApp, { printWidth: 100, parser: 'babel' });
                    const prettierExpected = prettier.format(expectedResult, { printWidth: 100, parser: 'babel' });

                    expect(prettierExpected).toEqual(prettierParsedElement);
                    done();
                });
        });

        it('must parse 2 sections and 2 fields in different sections', (done) => {
            const tree = {
                fields: {
                    toggleChild: {
                        section: 'dummyId',
                        element: "Dropdown.Toggle",
                        id: 'dummyFieldId',
                        value: 'dummyValue'
                    },
                    buttonChild: {
                        section: 'dummyContainer',
                        element: 'Button',
                        id: 'dummyButtonId'
                    }
                },
                sections: {
                    dropdown: {
                        drop: 'up',
                        alignRight: true,
                        show: true,
                        flip: true,
                        id: 'dummyId',
                        element: 'Dropdown'
                    },
                    container: {
                        element: 'Container',
                        flex: 'row',
                        maxWidth: true,
                        id: 'dummyContainer'
                    }
                }
            };
            const expectedResult = `
                import React, { PureComponent } from "react";

                export default class View extends PureComponent {
                    render() {
                        return (
                            <React.Fragment>
                                <Dropdown
                                    drop="up"
                                    alignRight={true}
                                    show={true}
                                    flip={true}
                                    id="dummyId"
                                >
                                    <Dropdown.Toggle
                                        id="dummyFieldId"
                                    >
                                        dummyValue
                                    </Dropdown.Toggle>
                                    
                                </Dropdown>
                                <Container
                                    flex="row"
                                    maxWidth={true}
                                    id="dummyContainer"
                                >
                                    <Button id="dummyButtonId" />
                                </Container>
                            </React.Fragment>
                        );
                    }
                }
            `;

            requestedApp.get('/parser').set('Content-Type', 'application/json').
                send(tree).expect(200).then((response) => {
                    const prettierParsedElement = prettier.format(response.body.reactApp, { printWidth: 100, parser: 'babel' });
                    const prettierExpected = prettier.format(expectedResult, { printWidth: 100, parser: 'babel' });

                    expect(prettierExpected).toEqual(prettierParsedElement);
                    done();
                });
        });

        it('must parse 1 section inside another and 2 fields inside the most nested sections', (done) => {
            const tree = {
                fields: {
                    toggleChild: {
                        section: 'dummyContainer',
                        element: "Dropdown.Toggle",
                        id: 'dummyFieldId',
                        value: 'dummyValue'
                    },
                    buttonChild: {
                        section: 'dummyContainer',
                        element: 'Button',
                        id: 'dummyButtonId'
                    }
                },
                sections: {
                    dropdown: {
                        drop: 'up',
                        alignRight: true,
                        show: true,
                        flip: true,
                        id: 'dummyId',
                        element: 'Dropdown',
                        sections: {
                            container: {
                                element: 'Container',
                                flex: 'row',
                                maxWidth: true,
                                id: 'dummyContainer'
                            }
                        }
                    }
                }
            };
            const expectedResult = `
                import React, { PureComponent } from "react";

                export default class View extends PureComponent {
                    render() {
                        return (
                            <React.Fragment>
                                <Dropdown
                                    drop="up"
                                    alignRight={true}
                                    show={true}
                                    flip={true}
                                    id="dummyId"
                                >
                                    <Container
                                        flex="row"
                                        maxWidth={true}
                                        id="dummyContainer"
                                    >
                                        <Dropdown.Toggle
                                            id="dummyFieldId"
                                        >
                                            dummyValue
                                        </Dropdown.Toggle>
                                        <Button id="dummyButtonId" />
                                    </Container>
                                </Dropdown>
                                
                            </React.Fragment>
                        );
                    }
                }
            `;

            requestedApp.get('/parser').set('Content-Type', 'application/json').
                send(tree).expect(200).then((response) => {
                    const prettierParsedElement = prettier.format(response.body.reactApp, { printWidth: 100, parser: 'babel' });
                    const prettierExpected = prettier.format(expectedResult, { printWidth: 100, parser: 'babel' });

                    expect(prettierExpected).toEqual(prettierParsedElement);
                    done();
                });
        });
    });
});