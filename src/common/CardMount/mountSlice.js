import { createSlice } from '@reduxjs/toolkit';

export const mountSlice = createSlice({
    name: 'mount',
    initialState: {
      choosen : {},
      mount: []
    },
    reducers: {
      selectmount: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      find: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    }
    
});
export const { selectmount, find } = mountSlice.actions;
export const mountData = (state) => state.mount;
export default mountSlice.reducer;