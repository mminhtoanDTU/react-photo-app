import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('photos')) || [];

const data = [
    {
        categoryId: 4,
        id: "photo-1629856-Ewa39M-041627",
        photoUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9nfHx8fHx8MTYyOTg4NjkxMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title: "Puppy"
    },
    {
        categoryId: 5,
        id: "photo-1629856-MXj4w4-075297",
        photoUrl: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybHx8fHx8fDE2MzAwNDE5MDc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title: "Girl"
    },
    {
        categoryId: 1,
        id: "photo-1629856-8E911D-120846",
        photoUrl: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9vZHx8fHx8fDE2MzAwNDE4MzY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title: "Food"
    }
]

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








