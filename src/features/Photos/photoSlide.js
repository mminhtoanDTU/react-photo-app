import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    photos: [],
}

const PhotoSlice = createSlice({
    name: "photos",
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            const newPhoto = action.payload;
            state.push(newPhoto)
        },
    }
});

const { reducer, actions } = PhotoSlice;
export const { addPhoto, fetchPhoto } = actions;
export default reducer;








