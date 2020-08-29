import React from 'react';
import { HTMLFieldProps, connectField } from 'uniforms';
import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const ajv = new Ajv({ allErrors: true, useDefaults: true });

const schema = {
    title: 'Guest',
    type: 'object',
    properties: {
        picture: { type: 'string' },
    },
};

function createValidator(schema: object) {
    const validator = ajv.compile(schema);

    return (model: object) => {
        validator(model);
        return validator.errors?.length ? { details: validator.errors } : null;
    };
}

const schemaValidator = createValidator(schema);

const bridge = new JSONSchemaBridge(schema, schemaValidator);

type ImageProps = HTMLFieldProps<string, HTMLDivElement>;

function Image({ onChange, value }: ImageProps) {
    return (
        <div className="ImageField">
            <label htmlFor="file-input">
                <div>Choose your photo</div>
                <img
                    style={{ cursor: 'pointer', width: '150px', height: '150px' }}
                    src={value || ''}
                />
            </label>
            <input
                accept="image/*"
                id="file-input"
                onChange={({ target: { files } }) => {
                    if (files && files[0]) {
                        onChange(URL.createObjectURL(files[0]));
                    }
                }}
                style={{ display: 'none' }}
                type="file"
            />
        </div>
    );
}

export const ImageField = connectField(Image);