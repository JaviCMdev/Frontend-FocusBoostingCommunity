import { createSlice } from '@reduxjs/toolkit';

export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
      choosen : {},
      services: []
    },
    reducers: {
      select: (state, action) => {
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
export const { select, find } = serviceSlice.actions;
export const serviceData = (state) => state.service;
export default serviceSlice.reducer;