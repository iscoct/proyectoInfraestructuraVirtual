import {
    ButtonProps
} from 'react-bootstrap/Button';
import { Field } from '../types';

function parser(fieldObject: ButtonProps & Field): string {
    let parsedField = `<Button`;
    let prop: keyof (ButtonProps & Field);

    for (prop in fieldObject) {
        if (fieldObject.hasOwnProperty(prop) && prop !== 'element') {
            parsedField += `
                ${prop}=`;

            if (typeof fieldObject[prop] === 'string') {
                parsedField += `"${fieldObject[prop]}"`;
            } else {
                parsedField += `{${fieldObject[prop]}}`;
            }
        }
    }

    parsedField += `
        />
    `;

    return parsedField;
}

export { parser };