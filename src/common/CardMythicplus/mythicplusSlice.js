import { createSlice } from '@reduxjs/toolkit';

export const mythicplusSlice = createSlice({
    name: 'mythicplus',
    initialState: {
      choosen : {},
      mythicplus: []
    },
    reducers: {
      selectmythicplus: (state, action) => {
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
export const { selectmythicplus, find } = mythicplusSlice.actions;
export const mythicplusData = (state) => state.mythicplus;
export default mythicplusSlice.reducer;