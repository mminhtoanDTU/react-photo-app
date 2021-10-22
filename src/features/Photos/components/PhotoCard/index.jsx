import { DeleteOutlined, DownloadOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Divider, Image } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import './photocard.scss';

PhotoCard.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
};

function PhotoCard(props) {
    const { data, handleRemovePhoto, handleEditPhoto, handleDownloadPhoto } = props;
    const { id, title, photoUrl } = data;

    const [isPopOpen, setIsPopOpen] = useState(false);
    const btnMoreFunc = useRef(null);

    useEffect(() => {
        if (isPopOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [isPopOpen])

    const handleClickOutside = (e) => {
        if (btnMoreFunc.current.contains(e.target)) {
            return;
        }

        setIsPopOpen(false);
    }

    const handleIsPopOpen = () => {
        setIsPopOpen(pre => !pre);
    }




    return (
        <div className="photo-card" data-aos="fade-up">
            <Image
                height={400}
                width={"100%"}
                src={photoUrl}
                alt={`Image of ${title}`}
            />
            <div className="photo-card__meta">
                <span className="photo-card__meta-item title">{title}</span>
                <div
                    className="photo-card__meta-item func"
                    onClick={handleIsPopOpen}
                    ref={btnMoreFunc}
                >
                    <EllipsisOutlined />
                </div>
                {isPopOpen &&
                    <div className="popover">
                        <a onClick={() => handleDownloadPhoto(photoUrl, title)}>
                            <DownloadOutlined />
                            Download
                        </a>
                        <Divider style={{ margin: ' 0' }} />
                        <a onClick={() => handleRemovePhoto(id)}>
                            <DeleteOutlined />
                            Delete
                        </a>
                        <Divider style={{ margin: ' 0' }} />
                        <a onClick={() => handleEditPhoto(id)}>
                            <EditOutlined />
                            Edit
                        </a>
                    </div>
                }
            </div>
        </div>
    );
}

export default PhotoCard;