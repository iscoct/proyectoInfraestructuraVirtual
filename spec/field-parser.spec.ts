import { sectionParser } from '../src/parsers';
import prettier from 'prettier';

describe('Field parser', () => {
    const fieldData: any[][] = [
        [
            'button',
            {
                element: 'Button',
                active: false,
                block: true,
                disabled: false,
                href: 'dummyRef',
                size: 'sm',
                type: 'button',
                variant: 'primary',
                value: 'dummyValue',
                id: 'dummyId',
                section: 'dummySection'
            },
            `
                <Button
                    active={false}
                    block={true}
                    disabled={false}
                    href='dummyRef'
                    size='sm'
                    type='button'
                    variant='primary'
                    id='dummyId'
                >
                    dummyValue
                </Button>
            `,
            {}
        ],
        [
            'dropdown item',
            {
                active: false,
                disabled: true,
                eventKey: '0',
                element: 'Dropdown.Item',
                href: 'dummyRef',
                value: 'dummyValue',
                id: 'dummyId',
                section: 'dummySection'
            },
            `
                <Dropdown.Item
                    active={false}
                    disabled={true}
                    eventKey="0"
                    href="dummyRef"
                    id='dummyId'
                >
                    dummyValue
                </Dropdown.Item>
            `,
            {}
        ],
        [
            'dropdown divider',
            {
                element: 'Dropdown.Divider',
                id: 'dummyId',
                section: 'dummySection'
            },
            `
                <Dropdown.Divider id='dummyId'/>
            `,
            {}
        ],
        [
            'dropdown header',
            {
                element: 'Dropdown.Header',
                value: 'dummyValue',
                id: 'dummyId',
                section: 'dummySection'
            },
            `
                <Dropdown.Header id='dummyId'>dummyValue</Dropdown.Header>
            `,
            {}
        ],
        [
            'dropdown toggle',
            {
                element: 'Dropdown.Toggle',
                value: 'dummyValue',
                id: 'dummyId',
                split: true,
                section: 'dummySection'
            },
            `
                <Dropdown.Toggle
                    id="dummyId"
                    split={true}
                >
                    dummyValue
                </Dropdown.Toggle>
            `,
            {}
        ],
        [
            'carousel caption',
            {
                element: 'Carousel.Caption',
                value: 'dummyValue',
                id: 'dummyId',
                section: 'dummySection'
            },
            `
                <Carousel.Caption
                    id='dummyId'
                >
                    dummyValue
                </Carousel.Caption>
            `,
            {}
        ]
    ];

    it.each(fieldData)('must parse %s component', 
        (component: string, object: any, expectedResult: string, tree: any) => {
            const parsedElement = sectionParser(object, tree);

            const prettierParsedElement = prettier.format(parsedElement, { printWidth: 100, parser: 'babel' });
            const prettierExpected = prettier.format(expectedResult, { printWidth: 100, parser: 'babel' });
            
            expect(prettierParsedElement).toBe(prettierExpected);
        }
    );
});