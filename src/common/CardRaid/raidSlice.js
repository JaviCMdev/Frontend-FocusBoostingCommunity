import { createSlice } from '@reduxjs/toolkit';

export const raidSlice = createSlice({
    name: 'raid',
    initialState: {
      choosen : {},
      raid: []
    },
    reducers: {
      selectraid: (state, action) => {
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
export const { selectraid, find } = raidSlice.actions;
export const raidData = (state) => state.raid;
export default raidSlice.reducer;