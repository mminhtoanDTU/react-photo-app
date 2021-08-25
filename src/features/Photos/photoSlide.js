import { createSlice } from '@reduxjs/toolkit'
// let PhotoLocal = [];
// if (localStorage.getItem('photos')) {
//     PhotoLocal = JSON.parse(localStorage.getItem('photos'));
// }
const initialState = [
    {
        categoryId: 4,
        id: "photo-1629856-Ewa39M-041627",
        photoUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9nfHx8fHx8MTYyOTg4NjkxMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title: "Puppy"
    },
    {
        categoryId: 4,
        id: "photo-1629856-MXj4w4-075297",
        photoUrl: "https://images.unsplash.com/photo-1627472689415-05067f0109e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTg1NjA1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title: "Long den"
    },
    {
        categoryId: 4,
        id: "photo-1629856-8E911D-120846",
        photoUrl: "https://images.unsplash.com/photo-1627947412171-b6d0c91b758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTg1NjA5OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title: "Star"
    }
];


const PhotoSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        addPhoto: (state, action) => {
            const newPhoto = action.payload;
            state.push(newPhoto);
            // let newLocal = JSON.parse(localStorage.getItem('photos')) || [];
            // newLocal.push(newPhoto);
            // localStorage.setItem("photos", JSON.stringify(newLocal));
        },
        removePhoto: (state, action) => {
            const photoId = action.payload;
            return state.filter(photo => photo.id !== photoId);
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload;
            const photoId = state.findIndex(photo => photo.id === newPhoto.id);
            if (photoId >= 0) {
                state[photoId] = newPhoto;
            }
        }
    }
});

const { reducer, actions } = PhotoSlice;
export const { addPhoto, removePhoto } = actions;
export default reducer;








