/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
    padding-right: 56px;
  }
`;

const Label = styled.label``;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 80%;
  height: 60px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
    background: #808080;
  }
`;

function FormField({
  label, type, name, value, onChange,
}) {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      {label}
      <Label>
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
