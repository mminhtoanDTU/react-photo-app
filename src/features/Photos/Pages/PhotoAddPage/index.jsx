import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Banner } from 'components';
import { PhotoForm } from 'features/Photos/components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photos/photoSlide';
import randomId from 'logic/randomId'
import { Loading } from 'components';


PhotoAddPage.propTypes = {

};


function PhotoAddPage(props) {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    useState(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, []);

    const handleFormSubmit = (values) => {
        setIsLoading(true)
        setTimeout(() => {
            const newPhoto = {
                ...values,
                id: randomId({ prefix: 'photo' })
            }
            const action = addPhoto(newPhoto);
            dispatch(action);

            history.push('/photos');
            setIsLoading(false);
        }, 2000)
    }

    return (
        <>
            <Banner title="Add a awesome photo 😎" />
            <div className="content form-edit container">
                <PhotoForm onSubmited={handleFormSubmit} />
            </div>
            {isLoading && <Loading />}
        </>
    );
}

export default PhotoAddPage;