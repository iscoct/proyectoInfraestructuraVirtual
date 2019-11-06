export function tagParser(object: any): string {
    let parsedTag = `<${object.element}`;

    for (let prop in object) {
        if (prop !== 'element' && prop !== 'value' && prop !== 'sections' && prop !== 'section') {
            const propValue = object[prop];

            parsedTag += `
                ${prop}=`;

            parsedTag += typeof propValue === 'string' ?
                `"${propValue}"` : `{${propValue}}`;
        }
    }

    parsedTag += object.value ? `
        >
            ${object.value}
        </${object.element}>
    ` : object.section ? `/>` : '>';

    return parsedTag;
}

export function sectionParser(object: any, tree: any): string {
    let parsedSection = tagParser(object);

    for (const subsection in object.sections) {
        const section = object.sections[subsection];

        parsedSection += sectionParser(section, tree);
    }

    if (tree) {
        for (const field in tree.fields) {
            const actualField = tree.fields[field];
    
            if (actualField.section === object.id) {
                parsedSection += tagParser(actualField);
            }
        }
    }

    parsedSection += `</${object.element}>`;

    return parsedSection;
}

export default function treeParser(tree: any): string {
    const sections = tree.sections;
    let parsedSections = '';

    for (const section in sections) {
        parsedSections += sectionParser(sections[section], tree);
    }

    return `
        import React, { PureComponent } from 'react';

        export default class View extends PureComponent {
            render() {
                return (
                    <React.Fragment>
                        ${parsedSections}
                    </React.Fragment>
                );
            }
        }
    `;
}
