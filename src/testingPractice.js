const capitalize = (string) => {
  if (typeof string !== 'string') throw Error(`Expects a string, not a ${typeof string}`);
  const firstLetter = string.match(/\w/) || ' ';
  return string.replace(firstLetter[0], firstLetter[0].toUpperCase());
};

const reverseString = (string) => {
  if (typeof string !== 'string') throw Error(`Expects a string, not a ${typeof string}`);
  if (Array.from(string).length <= 0) return '';
  return `${string.charAt(Array.from(string).length - 1)}${reverseString(string.slice(0, -1))}`;

  // chatGPT breakthrough:
  // return string.split('').reverse().join('');
};

const calculator = {
  add: (a, b) => Number.parseFloat((a + b).toFixed(3), 10),
  substract: (a, b) => Number.parseFloat((a - b).toFixed(3), 10),
  divide: (a, b) => {
    if (Number.parseInt(b, 10) === 0) throw Error('Cannot divide by 0!');
    return Number.parseFloat((a / b).toFixed(3), 10);
  },
  multiply: (a, b) => Number.parseFloat((a * b).toFixed(3), 10),
};

const ceasarCipher = (target, shiftFactor, ...args) => {
  const ALPHABET_LENGTH = 26;
  this.target = target;
  this.targetArray = [];
  this.shiftFactor = 0;

  const assignOperationalVariables = () => {
    this.targetArray = this.target.toLowerCase().split('');
    this.shiftFactor = shiftFactor % ALPHABET_LENGTH;
  };

  const getShiftedAlphabet = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let shiftedAlphabet = '';
    alphabet.forEach((char, index) => {
      let shiftedAlphabetIndex = index + this.shiftFactor;
      if (shiftedAlphabetIndex > alphabet.length - 1) {
        shiftedAlphabetIndex -= alphabet.length;
      }
      shiftedAlphabet += alphabet[shiftedAlphabetIndex];
    });
    return shiftedAlphabet.split('');
  };
  this.shiftedAlphabet = getShiftedAlphabet();

  const getShiftedChar = (i = 0) => {
    const currentTargetChar = this.target.charAt(i);
    const currentShiftedCharIndex = this.shiftedAlphabet.indexOf(this.targetArray[i]);
    const shiftedCharIndex = (currentShiftedCharIndex + this.shiftFactor) % ALPHABET_LENGTH;

    const shiftedChar = (currentShiftedCharIndex !== -1)
      ? this.shiftedAlphabet[shiftedCharIndex] : this.targetArray[i];

    return (currentTargetChar === currentTargetChar.toUpperCase()) ? shiftedChar.toUpperCase()
      : shiftedChar;
  };

  const getShiftedString = (currentI = 0) => {
    const shiftedChar = getShiftedChar(currentI);
    if (!this.targetArray[currentI + 1]) return shiftedChar;
    return [].concat(shiftedChar, getShiftedString(currentI + 1)).join('');
  };

  const checkCorrectParameters = () => {
    const NUMBER_OF_VALID_PARAMETERS = 2;
    if (args.length > 0) throw Error(`Expected 2 parameters, received ${args.length + NUMBER_OF_VALID_PARAMETERS}`);
    if (typeof target !== 'string') throw Error(`Expected a string for [target] parameter not ${typeof target}`);
    if (!Number.isInteger(shiftFactor)) throw Error(`Expected an integer for [shiftFactor] parameter not ${typeof shiftFactor}`);
    this.targetArray = this.target.toLowerCase().split('');
    this.shiftFactor = shiftFactor % ALPHABET_LENGTH;
  };

  const main = () => {
    checkCorrectParameters();
    assignOperationalVariables();
    return getShiftedString();
  };

  return main();
};

const analyzeArray = (array, ...args) => {
  if (args.length > 0) throw Error(`Expects only one parameter, not ${1 + args.length}`);
  if (!Array.isArray(array)) throw Error(`Expects an array, not a ${typeof array}`);
  let min = Infinity;
  let max = 0;
  let smallestAverageDifference = Infinity;
  const { length } = array;
  array.forEach((item) => {
    if (typeof item !== 'number') throw Error(`Expects a number, not a ${typeof item}`);
    if (min > item) min = item;
    if (max < item) max = item;
  });

  const averageOfMax = max / 2;
  let average = array[0];
  array.forEach((item) => {
    const currentDifference = Math.abs(averageOfMax - item);
    if (currentDifference < smallestAverageDifference && currentDifference >= 0) {
      smallestAverageDifference = currentDifference;
      average = item;
    }
  });

  return {
    average, min, max, length,
  };
};

module.exports = {
  capitalize, reverseString, calculator, ceasarCipher, analyzeArray,
};
