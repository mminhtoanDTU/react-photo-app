import { Button, Image } from 'antd';
import { FormItem, Input } from 'formik-antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './randomphotofield.scss';

RandomPhotoField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
};

RandomPhotoField.defaultProps = {
    label: '',
    name: '',
}

function RandomPhotoField(props) {
    const { field, form, label } = props;
    const { name } = field;
    const [currentUrl, setCurretUrl] = useState('');
    const [querySearch, setQuerySearch] = useState('');

    useEffect(() => {
        handleRandomClick();
    }, [])

    const handleRandomClick = () => {
        const url = `https://source.unsplash.com/featured/?${querySearch}`;
        const fetchImage = async () => {
            const response = await fetch(url);
            const data = await response.clone();
            setCurretUrl(data.url);
            form.setFieldValue(name, data.url);
        }
        fetchImage();
    }

    return (
        <FormItem
            name={name}
            label={label}
        >
            <div className="photo-field">
                <Input
                    addonBefore="Search"
                    name={name}
                    placeholder="Eg: cat,dog"
                    size="large"
                    allowClear
                    value={querySearch}
                    onChange={e => setQuerySearch(e.target.value)}
                />
                <Button
                    size="large"
                    onClick={handleRandomClick}
                >
                    Random
                </Button>
            </div>
            <div className="photo-wrapper">
                <Image
                    src={currentUrl}
                    height={400}
                    width={"100%"}
                    alt="Awesome photo."
                />
            </div>
        </FormItem>
    );
}

export default RandomPhotoField;