import {
    ButtonProps
} from 'react-bootstrap/Button';
import { Field } from '../src/types';
import { parser } from '../src/parsers/fieldParse';
import prettier from 'prettier';

describe('Field parser', () => {
    it('must parse button component', () => {
        const jsonObject: ButtonProps & Field = {
            element: 'button',
            active: false,
            block: true,
            disabled: false,
            href: 'dummyRef',
            size: 'sm',
            type: 'button',
            variant: 'primary'
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
            />
        `;
        const parsedField = parser(jsonObject);

        const prettierParsedField = prettier.format(parsedField, { printWidth: 100, parser: 'babel' });
        const prettierExpected = prettier.format(expectedParserButton, { printWidth: 100, parser: 'babel' });
    
        expect(prettierParsedField).toBe(prettierExpected);
    });
});