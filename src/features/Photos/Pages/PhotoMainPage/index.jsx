import { Banner, Loading } from 'components';
import PhotoList from 'features/Photos/components/PhotoList';
import { removePhoto } from 'features/Photos/photoSlide';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './photomainpage.scss';


PhotoPage.propTypes = {

};

function PhotoPage(props) {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const match = useRouteMatch();
    const PhotosData = useSelector(state => state.photos);

    const handleRemovePhoto = (idPhoto) => {
        setIsLoading(true)
        setTimeout(() => {
            const action = removePhoto(idPhoto);
            dispatch(action);
            setIsLoading(false);
        }, 1000)
    }
    const handleEditPhoto = (idPhoto) => {
        setIsLoading(true);
        setTimeout(() => {
            history.push(`${match.url}/edit/${idPhoto}`);
            setIsLoading(false);
        }, 1000)
    }

    return (
        <>
            <Banner title="Awesome Photos 😍" />
            <div className="content container">
                <PhotoList
                    photos={PhotosData}
                    handleRemovePhoto={handleRemovePhoto}
                    handleEditPhoto={handleEditPhoto}
                />
            </div>
            {isLoading && <Loading />}
        </>
    );
}

export default PhotoPage;