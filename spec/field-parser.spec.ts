import {
    ButtonProps
} from 'react-bootstrap';
import { DropdownItemProps } from 'react-bootstrap/DropdownItem';
import { DropdownToggleProps } from 'react-bootstrap/DropdownToggle';

import { Field } from '../src/types';
import { parser } from '../src/parsers/fieldParse';
import prettier from 'prettier';

describe('Field parser', () => {
    it('must parse button component', () => {
        const jsonObject: ButtonProps & Field = {
            element: 'Button',
            active: false,
            block: true,
            disabled: false,
            href: 'dummyRef',
            size: 'sm',
            type: 'button',
            variant: 'primary',
            value: 'dummyValue'
        };
        const expectedParserButton = `
            <Button
                active={false}
                block={true}
                disabled={false}
                href='dummyRef'
                size='sm'
                type='button'
                variant='primary'
            >
                dummyValue
            </Button>
        `;

        const parsedField = parser(jsonObject);
        const prettierParsedField = prettier.format(parsedField, { printWidth: 100, parser: 'babel' });
        const prettierExpected = prettier.format(expectedParserButton, { printWidth: 100, parser: 'babel' });
    
        expect(prettierParsedField).toBe(prettierExpected);
    });

    it('must parse dropdown item component', () => {
        const jsonObject: DropdownItemProps & Field = {
            active: false,
            disabled: true,
            eventKey: '0',
            element: 'Dropdown.Item',
            href: 'dummyRef',
            value: 'dummyValue'
        };
        const expectedDropdownItem = `
            <Dropdown.Item
                active={false}
                disabled={true}
                eventKey="0"
                href="dummyRef"
            >
                dummyValue
            </Dropdown.Item>
        `;

        const parsedField = parser(jsonObject);
        const prettierParsedField = prettier.format(parsedField, { printWidth: 100, parser: 'babel' });
        const prettierExpected = prettier.format(expectedDropdownItem, { printWidth: 100, parser: 'babel' });

        expect(prettierParsedField).toBe(prettierExpected);
    });

    it('must parse dropdown divider component', () => {
        const jsonObject: Field = {
            element: 'Dropdown.Divider'
        };
        const expectedDropdownDivider = `
            <Dropdown.Divider/>
        `;

        const parsedField = parser(jsonObject);
        const prettierParsedField = prettier.format(parsedField, { printWidth: 100, parser: 'babel' });
        const prettierExpected = prettier.format(expectedDropdownDivider, { printWidth: 100, parser: 'babel' });

        expect(prettierParsedField).toBe(prettierExpected);
    });

    it('must parse dropdown header component', () => {
        const jsonObject: Field = {
            element: 'Dropdown.Header',
            value: 'dummyValue'
        };
        const expectedDropdownHeader = `
            <Dropdown.Header>dummyValue</Dropdown.Header>
        `;

        const parsedField = parser(jsonObject);
        const prettierParsedField = prettier.format(parsedField, { printWidth: 100, parser: 'babel' });
        const prettierExpected = prettier.format(expectedDropdownHeader, { printWidth: 100, parser: 'babel' });

        expect(prettierParsedField).toBe(prettierExpected);
    });

    it('must parse dropdown toggle component', () => {
        const jsonObject: DropdownToggleProps & Field = {
            element: 'Dropdown.Toggle',
            value: 'dummyValue',
            id: 'dummyId',
            split: true
        };
        const expectedDropdownToggle = `
            <Dropdown.Toggle
                id="dummyId"
                split={true}
            >
                dummyValue
            </Dropdown.Toggle>
        `;

        const parsedField = parser(jsonObject);
        const prettierParsedField = prettier.format(parsedField, { printWidth: 100, parser: 'babel' });
        const prettierExpected = prettier.format(expectedDropdownToggle, { printWidth: 100, parser: 'babel' });

        expect(prettierParsedField).toBe(prettierExpected);
    });
});