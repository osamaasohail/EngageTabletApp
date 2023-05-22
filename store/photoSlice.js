import {createSlice} from '@reduxjs/toolkit';

export const photoSlice = createSlice({
  name: 'photoSlice',
  initialState: {
    totalPictures: 0,
    pictures: [],
    picturesList: [],
  },
  reducers: {
    addPhoto: (state, action) => {
      const picture = action.payload;
      state.picturesList.push(picture);
      state.pictures.push({id: state.totalPictures, source: picture});
      //   state.pictures[pictureId]={"imagePath":picture};
    },
    increaseCount: state => {
      state.totalPictures += 1;
    },
    clearCount: state => {
      state.totalPictures = 0;
    },
    clearPicturesList: state => {
      state.picturesList = [];
    },
    clearPictures: state => {
      state.pictures = [];
    },
  },
});
