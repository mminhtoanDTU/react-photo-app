import { configureStore } from '@reduxjs/toolkit';
import PhotoReducer from 'features/Photos/photoSlide';

const rootReducer = {
    photos: PhotoReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;