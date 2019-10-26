import { sectionParser } from '../src/parsers';
import prettier from 'prettier';

describe('Section parser', () => {
    const dropdown = {
        drop: 'up',
        alignRight: true,
        show: true,
        flip: true,
        id: 'dummyId',
        element: 'Dropdown'
    };

    const sectionData: any[][] = [
        [
            'dropdown',
            dropdown,
            `
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
            `,
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
                    dropdown
                }
            }
        ]
    ];

    it.each(sectionData)('must parse %s component', 
        (component: string, object: any, expectedResult: string, tree: any) => {
            const parsedElement = sectionParser(object, tree);

            const prettierParsedElement = prettier.format(parsedElement, { printWidth: 100, parser: 'babel' });
            const prettierExpected = prettier.format(expectedResult, { printWidth: 100, parser: 'babel' });
            
            expect(prettierParsedElement).toBe(prettierExpected);
        }
    );
});