import { createSlice } from '@reduxjs/toolkit';

export const purchasemountSlice = createSlice({
    name: 'purchasemount',
    initialState: {
      choosen : {},
      purchasemount: []
    },
    reducers: {
      selectpurchasemount: (state, action) => {
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
export const { selectpurchasemount, find } = purchasemountSlice.actions;
export const purchasemountData = (state) => state.mythicplus;
export default purchasemountSlice.reducer;