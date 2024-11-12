import { createSlice } from '@reduxjs/toolkit';
import { Dictionary } from '../../constant'


const initialState = {
  input: '',
  output: ''
};

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    convertInput: (state) => {
      const result = state.input
        .split('')
        .map(char => Dictionary[char] || '')
        .join('');
      state.output = result;
    },
  },
});

export const { setInput, convertInput } = converterSlice.actions;
export default converterSlice.reducer;
