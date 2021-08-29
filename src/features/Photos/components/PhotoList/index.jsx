import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row, Typography } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { PhotoCard } from '..';
import './photolist.scss';
const { Text } = Typography;
PhotoList.propTypes = {
    photos: PropTypes.array,
};

function PhotoList(props) {
    const {
        photos,
        handleRemovePhoto,
        handleEditPhoto,
        handleDownloadPhoto
    } = props;
    const match = useRouteMatch();

    if (photos.length === 0) {
        return (
            <div className="text-center">
                <Text type="secondary" >
                    Your gallery is empty.
                    <Link to={`${match.url}/add`}> Add a new photo</Link>
                </Text>
            </div>
        )
    }
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Image.PreviewGroup>
                    {photos.map(item => (
                        <Col xs={24} sm={12} lg={8} key={item.id}>
                            <PhotoCard
                                data={item}
                                handleRemovePhoto={handleRemovePhoto}
                                handleEditPhoto={handleEditPhoto}
                                handleDownloadPhoto={handleDownloadPhoto}
                            />
                        </Col>
                    ))}
                </Image.PreviewGroup>
            </Row>
        </div>
    );
}

export default PhotoList;