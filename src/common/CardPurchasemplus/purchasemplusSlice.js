import { createSlice } from '@reduxjs/toolkit';

export const purchasemplusSlice = createSlice({
    name: 'purchasemplus',
    initialState: {
      choosen : {},
      purchasemplus: []
    },
    reducers: {
      selectpurchasemplus: (state, action) => {
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
export const { selectpurchasemplus, find } = purchasemplusSlice.actions;
export const purchasemplusData = (state) => state.mythicplus;
export default purchasemplusSlice.reducer;