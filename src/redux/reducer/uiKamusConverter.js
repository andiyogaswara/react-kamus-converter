import { createSlice } from '@reduxjs/toolkit';
import { Dictionary } from '../../constant';

const initialState = {
  input: '',
  step1Result: '',
  step2Result: 0,
  step3Result: '',
  output: ''
};

function alternateSum(numbers) {
  return numbers.reduce((acc, num, index) => {
    if (index === 0) {
      return acc + num;
    }
    const newAcc = index % 2 !== 0 ? acc + num : acc - num;
    return newAcc;
  }, 0);
}

function generateSequence(target) {
  const sequence = [];
  let sum = 0;
  let current = 0;

  while (sum < target) {
    if (sum + current <= target) {
      sequence.push(current);
      sum += current;
      current += 1;
    } else {
      current = 0;
    }
  }

  return sequence;
}

function convertSequenceToAlphabet(sequence) {
  return sequence.map(num => {
    const key = Object.keys(Dictionary).find(
      k => Dictionary[k] === num.toString() && k === k.toUpperCase()
    );
    return key || '';
  }).join('');
}

function convertNumberToAlphabet(target) {
  const positiveTarget = Math.abs(target);

  const sequence = generateSequence(positiveTarget);
  const result = convertSequenceToAlphabet(sequence);
  return result;
}

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
