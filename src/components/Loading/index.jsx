import React from 'react';
import './loading.scss'
function Loading(props) {
    return (
        <div className="loading-wrapper">
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;