import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('photos')) || [];

const PhotoSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        addPhoto: (state, action) => {
            const newArray = [action.payload, ...state];
            localStorage.setItem("photos", JSON.stringify(newArray));

            return newArray;
        },
        removePhoto: (state, action) => {
            const photoId = action.payload;
            const newArray = state.filter(photo => photo.id !== photoId);

            localStorage.setItem("photos", JSON.stringify(newArray));
            return newArray;
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload;
            const photosLocalStored = JSON.parse(localStorage.getItem('photos'));

            const photoId = state.findIndex(photo => photo.id === newPhoto.id);
            if (photoId >= 0) {
                state[photoId] = newPhoto;

                const newUpdated = photosLocalStored[photoId] = newPhoto;
                const arrayUpdated = [
                    ...photosLocalStored.slice(0, photoId),
                    newUpdated,
                    ...photosLocalStored.slice(photoId + 1)
                ];
                localStorage.setItem("photos", JSON.stringify(arrayUpdated));
            }
        }
    }
});

const { reducer, actions } = PhotoSlice;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;








