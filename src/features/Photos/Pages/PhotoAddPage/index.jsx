import React from 'react';
import PropTypes from 'prop-types';


import { Banner } from 'components';
import { PhotoForm } from 'features/Photos/components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photos/photoSlide';


PhotoAddPage.propTypes = {

};


function PhotoAddPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFormSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                const action = addPhoto(values);
                dispatch(action);

                history.push('/photos');
                resolve(true)
            }, 1000)
        });
    }

    return (
        <>
            <Banner title="Add a awesome photo 😎" />
            <div className="content form-edit container">
                <PhotoForm onSubmited={handleFormSubmit} />
            </div>
        </>
    );
}

export default PhotoAddPage;