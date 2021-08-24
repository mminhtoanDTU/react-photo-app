import { PHOTO_CATEGORY_OPTIONS } from 'constant/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Formik } from 'formik';
import { Form, SubmitButton } from 'formik-antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as Yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function PhotoForm(props) {
    const { onSubmited } = props;
    const initalValues = {
        title: '',
        categoryId: null,
        photoUrl: ''
    };
    const photoSchema = Yup.object().shape({
        title: Yup.string().required("This field is required!"),
        categoryId: Yup.number().required('This field is required!').nullable(),
    })

    return (
        <Formik
            initialValues={initalValues}
            validationSchema={photoSchema}
            onSubmit={onSubmited}
        >
            {FormikProps => {
                const { values, errors, touched } = FormikProps;

                return (
                    <Form
                        autoComplete="off"
                        layout="vertical"
                    >
                        <InputField
                            label="Title"
                            name="title"
                            placeholder="Eg: Cute puppy"
                            type="text"
                        />
                        <SelectField
                            label="Category"
                            name="categoryId"
                            placeholder="what is category"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                        <FastField
                            name="photoUrl"
                            label="Photo"
                            component={RandomPhotoField}
                        />

                        <SubmitButton
                            disabled={false}
                            size="large"
                            type="primary"
                            htmlType="submit"
                            block
                        >
                            Add to gallery
                        </SubmitButton>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;