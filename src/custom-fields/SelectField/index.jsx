import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormItem, Input, Mentions, Select, SubmitButton } from 'formik-antd'

import './selectfield.scss';

SelectField.propTypes = {

};

function SelectField(props) {
    const { label, name, placeholder, options } = props;


    return (
        <FormItem
            label={label}
            name={name}
        >
            <Select
                name={name}
                placeholder={placeholder}
                size="large"
            >
                {options.map((option) => (
                    <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
                ))}
            </Select>
        </FormItem>
    );
}

export default SelectField;