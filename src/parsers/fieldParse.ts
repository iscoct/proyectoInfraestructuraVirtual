import { Field } from '../types';

function parser<T extends Record<string, any> & Field>(fieldObject: T): string {
    let parsedField = `<${fieldObject.element}`;
    let prop: keyof T;

    for (prop in fieldObject) {
        if (fieldObject.hasOwnProperty(prop) && prop !== 'element'
                && prop !== 'value') {
            parsedField += `
                ${prop}=`;

            parsedField += typeof fieldObject[prop] === 'string' ?
                `"${fieldObject[prop]}"` : `{${fieldObject[prop]}}`;
        }
    }

    parsedField += fieldObject.value ? `
        >
            ${fieldObject.value}
        </${fieldObject.element}>
    ` : `/>`;

    return parsedField;
}

export { parser };