import { TextInput } from '@strapi/design-system/TextInput';
import React from 'react';
import { Button } from '@strapi/design-system/Button';

const Field = (props) => {
  console.log('myfirstfield', props);

  const {
    name,
    value,
    attribute,
    onChange,
  } = props;

  const {
    // All our custom field config are here
    placeholder,
    label,
    hint,
  } = attribute.customFieldConfig || {};

  return (
    <>
    <TextInput
      id={name}
      placeholder={placeholder}
      label={label || name}
      name={name}
      hint={hint}
      onChange={e => {
        const arg = {
          target: {
            name,
            value: e.target.value,
          },
        }
        onChange(arg);
      }}
      value={value}
    />
    <Button
      onClick={() => alert('hello')}
    >Hello World</Button>
    </>
  );
}

export default Field;
