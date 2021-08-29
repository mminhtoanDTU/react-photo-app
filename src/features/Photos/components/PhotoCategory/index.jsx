import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { PHOTO_CATEGORY_OPTIONS } from 'constant/global';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './photocategory.scss';

PhotoCategory.propTypes = {

};

function PhotoCategory(props) {
    const { categoryList, handleCategoryChange, currentCategory } = props;

    const [isShowBtn, setIsShowBtn] = useState(false);

    const sliceRef = useRef(null);

    useEffect(() => {
        const slideWidth = sliceRef.current.offsetWidth;
        const bodyWidth = document.body.offsetWidth;
        if (bodyWidth > 1111) {

            if (slideWidth > (1111 - 160)) {
                setIsShowBtn(true);
            } else {
                setIsShowBtn(false)
            }
        } else {
            if (slideWidth > (bodyWidth - 160)) {
                setIsShowBtn(true);
            } else {
                setIsShowBtn(false)
            }
        }
    })



    return (
        <div className="category-bar">
            <button
                className={`category-item all ${currentCategory === 0 ? 'active' : ''}`}
                onClick={() => handleCategoryChange(0)}
            >
                <span>All</span>
            </button>
            <div className="category-bar__wrap">
                {isShowBtn && <div
                    className="category-btn left"
                    onClick={() => sliceRef.current.scrollBy({
                        left: -200,
                    })}
                >
                    <LeftOutlined />
                </div>}
                {isShowBtn && <div
                    className="category-btn right"
                    onClick={() => sliceRef.current.scrollBy({
                        left: 200
                    })}
                >
                    <RightOutlined />
                </div>}
                {!isShowBtn && <div className="divider"></div>}
                <div ref={sliceRef} className="category-bar__slide">
                    {categoryList.map((id) => {
                        const itemCate = PHOTO_CATEGORY_OPTIONS.find((cate) => cate.value === id);
                        return (
                            <button
                                key={itemCate.value}
                                className={`category-item ${currentCategory === itemCate.value ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(itemCate.value)}
                            >
                                <span>{itemCate.label}</span>
                            </button>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default PhotoCategory;