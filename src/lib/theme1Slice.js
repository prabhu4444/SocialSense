// src/theme1Slice.js
import { createSlice } from '@reduxjs/toolkit';



const theme1Slice = createSlice({
  name: 'theme1',
  initialState: {
    themeColor: {
      type: 'solid', // 'solid', 'linear', 'radial'
      value: '#ffffff', // Default solid color
    },
    foregroundColor: '#000000', // Default foreground color
  },
  reducers: {
    setThemeColor: (state, action) => {
      state.themeColor = action.payload;
    },
    setForegroundColor: (state, action) => {
      state.foregroundColor = action.payload;
    },
  },
});

export const { setThemeColor, setForegroundColor } = theme1Slice.actions;
export default theme1Slice.reducer;
