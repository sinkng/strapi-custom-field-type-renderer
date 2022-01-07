const { trim } = require('lodash');
const fs = require('fs');

const REPLACEMENT = `
    <GenericInput
      attribute={fieldSchema}
      autoComplete="new-password"
      intlLabel={{ id: label, defaultMessage: label }}
      description={description ? { id: description, defaultMessage: description } : null}
      disabled={shouldDisableField}
      error={errorId}
      labelAction={labelAction}
      contentTypeUID={currentContentTypeLayout.uid}
      customInputs={{
        json: InputJSON,
        uid: InputUID,
        media: fields.media,
        wysiwyg: Wysiwyg,
        ...fields,
      }}
      multiple={fieldSchema.multiple || false}
      name={keys}
      onChange={onChange}
      options={options}
      placeholder={placeholder ? { id: placeholder, defaultMessage: placeholder } : null}
      required={fieldSchema.required || false}
      step={step}
      /** HACKYCODE for custom field render by sinh nguyen */
      type={(fieldSchema.customFieldConfig || {}).fieldRenderer || inputType}
      /** HACKYCODE for custom field render by sinh nguyen */
      // validations={validations}
      value={inputValue}
      withDefaultValue={false}
    />
`

function enableCustomFieldRenderer() {
  const fileToModify = `${process.cwd()}/node_modules/@strapi/admin/admin/src/content-manager/components/Inputs/index.js`;

  if (fs.existsSync(fileToModify)) {
    const originalContent = fs.readFileSync(fileToModify, 'utf-8');
    const pos1 = originalContent.indexOf('<GenericInput');
    if (pos1 > -1) {
      const pos2 = originalContent.indexOf('/>', pos1 + 1);
      if (pos2 > 0) {
        const strToReplace = originalContent.substring(pos1, pos2 + 2);
        const newContent = originalContent.replace(
          strToReplace,
          trim(REPLACEMENT, '\n').trim(),
        );
        fs.writeFileSync(fileToModify, newContent, { encoding: 'utf-8' });
      }
    } else {
      throw Error('Unable to enable custom-field-renderer because original code base has change.');
    }
  }
}

module.exports = enableCustomFieldRenderer;