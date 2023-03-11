import { createSlice } from '@reduxjs/toolkit';

export const purchaseraidSlice = createSlice({
    name: 'purchaseraid',
    initialState: {
      choosen : {},
      purchaseraid: []
    },
    reducers: {
      selectpurchaseraid: (state, action) => {
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
export const { selectpurchaseraid, find } = purchaseraidSlice.actions;
export const purchaseraidData = (state) => state.mythicplus;
export default purchaseraidSlice.reducer;