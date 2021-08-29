import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Banner } from 'components';
import { PhotoForm } from 'features/Photos/components';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photos/photoSlide';
import randomId from 'logic/randomId'
import { Loading } from 'components';
import { message } from 'antd';


PhotoAddPage.propTypes = {

};


function PhotoAddPage(props) {
    const [isLoading, setIsLoading] = useState(false);
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();

    const isAddMode = !photoId;
    const editedPhoto = photos.find(photo => photo.id === photoId);

    const initalValues = isAddMode ? {
        title: '',
        categoryId: null,
        photoUrl: ''
    } : editedPhoto;

    //Scroll top first
    useState(() => {
        setIsLoading(true);
        window.scrollTo(0, 0);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, []);

    const handleFormSubmit = (values) => {
        message.loading({ content: `${isAddMode ? 'Adding...' : 'Updating...'}`, key: 'addedit' });
        setTimeout(() => {
            if (isAddMode) {
                const newPhoto = {
                    ...values,
                    id: randomId({ prefix: 'photo' })
                }
                const action = addPhoto(newPhoto);
                dispatch(action);
            } else {
                const action = updatePhoto(values);
                dispatch(action);
            }

            history.push('/photos');
            message.success({ content: 'Done!', key: 'addedit', duration: 1 });
        }, 2000)
    }

    return (
        <>
            <Banner title={isAddMode ? "Add a awesome photo 😎" : "Edit your photo 😚"} />
            <div className="content form-edit container">
                <PhotoForm
                    isAddMode={isAddMode}
                    initalValues={initalValues}
                    onSubmited={handleFormSubmit}
                />
            </div>
            {isLoading && <Loading />}
        </>
    );
}

export default PhotoAddPage;