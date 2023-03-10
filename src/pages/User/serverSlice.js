import { createSlice } from '@reduxjs/toolkit';

export const serverSlice = createSlice({
    name: 'server',
    initialState: {
      choosen : {},
      server: []
    },
    reducers: {
      selectserver: (state, action) => {
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
export const { selectserver, find } = serverSlice.actions;
export const serverData = (state) => state.server;
export default serverSlice.reducer;