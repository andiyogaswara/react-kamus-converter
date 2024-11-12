import { createSlice } from '@reduxjs/toolkit';
import { Dictionary } from '../../constant';
import { alternateSum, convertNumberToAlphabet } from '../../helper';

const initialState = {
  input: '',
  step1Result: '',
  step2Result: 0,
  step3Result: '',
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
      const step1Result = state.input
        .split('')
        .map(char => Dictionary[char] || 0)
        .join('');

      state.step1Result = step1Result;
      state.output = step1Result;

      const numbers = step1Result.split('').map(Number);
      const step2Result = alternateSum(numbers);
      state.step2Result = step2Result;

      const step3Result = convertNumberToAlphabet(step2Result);
      state.step3Result = step3Result;
    },
  },
});

export const { setInput, convertInput } = converterSlice.actions;
export default converterSlice.reducer;
