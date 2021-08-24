import { FormItem, Input } from 'formik-antd';
import PropTypes from 'prop-types';
import React from 'react';

InputField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disable: PropTypes.bool
};

InputField.defaultProps = {
    label: '',
    placeholder: '',
    type: 'text',
    disabled: false
}

function InputField(props) {
    const { label, name, placeholder, type } = props;

    return (
        <FormItem
            label={label}
            name={name}
        >
            <Input
                name={name}
                placeholder={placeholder}
                type={type}
                size="large"
                fast={true}
            />
        </FormItem>
    );
}

export default InputField;