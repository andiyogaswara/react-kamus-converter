import { Dictionary } from "./constant";

export const alternateSum = (numbers) => {
  return numbers.reduce((acc, num, index) => {
    if (index === 0) {
      return acc + num;
    }
    const newAcc = index % 2 !== 0 ? acc + num : acc - num;
    return newAcc;
  }, 0);
};

export const generateSequence = (target) => {
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
};

export const convertSequenceToAlphabet = (sequence) => {
  return sequence
    .map(num => {
      const key = Object.keys(Dictionary).find(
        k => Dictionary[k] === num.toString() && k === k.toUpperCase()
      );
      return key || '';
    })
    .join('');
};

export const convertNumberToAlphabet = (target) => {
  const positiveTarget = Math.abs(target);

  const sequence = generateSequence(positiveTarget);
  const result = convertSequenceToAlphabet(sequence);
  return result;
};
