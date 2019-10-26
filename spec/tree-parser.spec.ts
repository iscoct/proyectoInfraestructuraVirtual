import parser from '../src/parsers';
import prettier from 'prettier';

describe('Tree parser', () => {
    const treeData: any[][] = [
        [
            {
                fields: {
                    child: {
                        section: 'dummyId',
                        element: "Dropdown.Toggle",
                        id: 'dummyFieldId',
                        value: 'dummyValue'
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
            },
            `
                import React, { PureComponent } from 'react';

                export default class View extends PureComponent {
                    render() {
                        return (
                            <Dropdown
                                drop='up'
                                alignRight={true}
                                show={true}
                                flip={true}
                                id='dummyId'
                            >
                                <Dropdown.Toggle
                                    id='dummyFieldId'
                                >
                                    dummyValue
                                </Dropdown.Toggle>
                            </Dropdown>
                        );
                    }
                }
            `
        ]
    ];

    it.each(treeData)('must parse the whole tree', 
        (tree: any, expectedResult: string) => {
            const parsedElement = parser(tree);

            const prettierParsedElement = prettier.format(parsedElement, { printWidth: 100, parser: 'babel' });
            const prettierExpected = prettier.format(expectedResult, { printWidth: 100, parser: 'babel' });
            
            expect(prettierParsedElement).toBe(prettierExpected);
        }
    );
});