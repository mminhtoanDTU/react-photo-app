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
    const { photos, handleRemovePhoto, handleEditPhoto } = props;
    const match = useRouteMatch();
    return (
        <section className="section-gallery">
            <div className="gallery-top">
                <h2 className="gallery-title"> My Gallery </h2>
                <Button type="primary" className="gallery-btn">
                    <Link to={`${match.url}/add`} className="gallery-link">
                        Add new photo
                    </Link>
                </Button>
            </div>
            <div className="gallery-grid">
                {photos.length === 0 ? (
                    <Text type="secondary">
                        Your gallery is empty.
                        <Link to={`${match.url}/add`}> Add a new photo</Link>
                    </Text>
                ) : (
                    <Row gutter={[16, 16]}>
                        <Image.PreviewGroup>
                            {photos.map(item => (
                                <Col xs={24} sm={12} lg={8} key={item.id}>
                                    <PhotoCard
                                        data={item}
                                        handleRemovePhoto={handleRemovePhoto}
                                        handleEditPhoto={handleEditPhoto}
                                    />
                                </Col>
                            ))}
                        </Image.PreviewGroup>
                    </Row>
                )
                }
            </div>
        </section>
    );
}

export default PhotoList;