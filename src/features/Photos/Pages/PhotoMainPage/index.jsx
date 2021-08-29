import { render } from '@testing-library/react';
import { Button, message } from 'antd';
import axios from 'axios';
import { Banner, Loading } from 'components';
import { PhotoCategory, PhotoList } from 'features/Photos/components';
import { removePhoto } from 'features/Photos/photoSlide';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import './photomainpage.scss';


PhotoPage.propTypes = {

};

function PhotoPage(props) {
    const PhotosData = useSelector(state => state.photos);

    const [isLoading, setIsLoading] = useState(false);
    const [showList, setShowList] = useState(PhotosData);
    const [currentCategory, setCurrentCategory] = useState(0);
    const [categoryList, setCategoryList] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();
    const match = useRouteMatch();

    //update category when change list
    useEffect(() => {
        window.scrollTo(0, 0);
        const getArrayCate = () => {
            const listCate = [];
            PhotosData.forEach(photo => {
                listCate.push(photo.categoryId);
            });
            setCategoryList(Array.from(new Set(listCate)));
        }
        const renderList = () => {
            if (currentCategory === 0) {
                setShowList(PhotosData);
            } else {
                const newList = PhotosData.filter(photo => photo.categoryId === currentCategory);
                setShowList(newList);
            }
        }
        getArrayCate();
        renderList();
    }, [PhotosData])

    const handleRemovePhoto = (idPhoto) => {
        message.loading({ content: 'Deleting...', key: 'remove' });
        setTimeout(() => {
            const action = removePhoto(idPhoto);
            dispatch(action);
            message.success({ content: 'Deleted!', key: 'remove', duration: 2 });
        }, 1000)
    }
    const handleEditPhoto = (idPhoto) => {
        setIsLoading(true);
        setTimeout(() => {
            history.push(`${match.url}/edit/${idPhoto}`);
            setIsLoading(false);
        }, 1000)
    }
    const handleDownloadPhoto = (photoUrl, title) => {
        axios({
            url: photoUrl,
            method: "GET",
            responseType: "blob"
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${title}.jpg`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });
    }
    const handleCategoryChange = (cateId) => {
        setCurrentCategory(cateId);
        if (cateId === 0) {
            setShowList(PhotosData);
        } else {
            const newList = PhotosData.filter(photo => photo.categoryId === cateId);
            setShowList(newList);
        }
    }

    return (
        <>
            <Banner title="Awesome Photos 😍" />
            <div className="content container">
                <div className="gallery-top">
                    <h2 className="gallery-title"> My Gallery </h2>
                    <Button type="primary" className="gallery-btn">
                        <Link to={`${match.url}/add`} className="gallery-link">
                            Add new photo
                        </Link>
                    </Button>
                </div>
                {categoryList.length !== 0 && <PhotoCategory
                    categoryList={categoryList}
                    handleCategoryChange={handleCategoryChange}
                    currentCategory={currentCategory}
                />}
                <PhotoList
                    photos={showList}
                    handleRemovePhoto={handleRemovePhoto}
                    handleEditPhoto={handleEditPhoto}
                    handleDownloadPhoto={handleDownloadPhoto}
                />
            </div>
            {isLoading && <Loading />}
        </>
    );
}

export default PhotoPage;