const {
  capitalize, reverseString, calculator, ceasarCipher, analyzeArray,
} = require('./testingPractice');

describe('capitalize strings', () => {
  test('Capitalize the first lowercase letter', () => {
    expect(capitalize('mario')).toBe('Mario');
  });

  test('Ignore function on bad parameter datatype', () => {
    expect(() => capitalize(822)).toThrow(Error);
  });

  test('Capitalize strings when the first word is located spaces after', () => {
    expect(capitalize('  john is cool tbh.')).toBe('  John is cool tbh.');
  });

  test('Ignore empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  test('Ignore function on undefined', () => {
    expect(() => capitalize(undefined)).toThrow(Error);
  });
});

describe('Reverse strings', () => {
  test('Reverse a word by letters', () => {
    expect(reverseString('Luigi')).toBe('igiuL');
  });

  test('Reverse sentence by letters', () => {
    expect(reverseString('The neon lights flickered as a mysterious melody wafted through the bustling city streets.'))
      .toBe('.steerts ytic gniltsub eht hguorht detfaw ydolem suoiretsym a sa derekcilf sthgil noen ehT');
  });

  test('Don\'t reverse numbers', () => {
    expect(() => reverseString(723)).toThrow(Error);
  });

  test('Leave empty strings as they are', () => {
    expect(reverseString('')).toBe('');
  });

  test('Reverse strings that contain numbers', () => {
    expect(reverseString('Hell0! my n4me 15 D4sh!!11!1!1!')).toBe('!1!1!11!!hs4D 51 em4n ym !0lleH');
  });
});

describe('Perform basic operations with the calculator object', () => {
  test('Add 2 and 8 to equal to 10', () => {
    expect(calculator.add(2, 8)).toBe(10);
  });

  test('Add 10e9 and 6.23 to equal to 10e9 + 6.23', () => {
    expect(calculator.add(10e9, 6.23)).toBe(10e9 + 6.23);
  });

  test('Add 1/3 and 7 to equal to 7.333', () => {
    expect(calculator.add(1 / 3, 7)).toBe(7.333);
  });

  test('Substract 2387 to 754 to equal to 1633', () => {
    expect(calculator.substract(2387, 754)).toBe(1633);
  });

  test('Substract 8.239 to 4.3 to equal to 3,939', () => {
    expect(calculator.substract(8.239, 4.3)).toBe(3.939);
  });

  test('Divide 2 by 3 to equal to 0.333', () => {
    expect(calculator.divide(2, 3)).toBe(0.667);
  });

  test('Divide 8 by 0 to throw an Error', () => {
    expect(() => calculator.divide(8, 0)).toThrow(Error);
  });

  test('Multiply 162 by 248 to equal to 40176', () => {
    expect(calculator.multiply(162, 248)).toBe(40176);
  });

  test('Multiply 8.239 by 4/7 to equal to 4,708', () => {
    expect(calculator.multiply(8.239, 4 / 7)).toBe(4.708);
  });
});

describe('Execute ceasarCipher function correctly', () => {
  test('letters shifted by 2 for "Mario" gives Octkq', () => {
    expect(ceasarCipher('Mario', 2)).toBe('Octkq');
  });

  test('letters shifted correctly by 7 for a long paragraph', () => {
    expect(ceasarCipher('In the dimly lit room, the soft hum of machinery provided an eerie backdrop to the tense atmosphere. Detective Anderson leaned against the worn-out desk, his eyes fixed on the cryptic symbols scrawled across the old chalkboard.', 7)).toBe('Pu aol kptsf spa yvvt, aol zvma obt vm thjopulyf wyvcpklk hu llypl ihjrkyvw av aol aluzl hatvzwolyl. Klaljapcl Huklyzvu slhulk hnhpuza aol dvyu-vba klzr, opz lflz mpelk vu aol jyfwapj zftivsz zjyhdslk hjyvzz aol vsk johsrivhyk.');
  });

  test('throw Error on bad parameter datatype', () => {
    expect(() => ceasarCipher(null, 7)).toThrow(Error);
    expect(() => ceasarCipher('Get me some milk!', 7.8)).toThrow(Error);
    expect(() => ceasarCipher('John Smith! is good af', 'I know!')).toThrow(Error);
    expect(() => ceasarCipher(1, 'I know!')).toThrow(Error);
    expect(() => ceasarCipher('grr', 6, true)).toThrow(Error);
  });

  test('Works on high value of shiftFactor', () => {
    expect(ceasarCipher('Get me some milk!', 2763039)).toBe('Zxm fx lhfx fbed!');
  });
});

describe('Analyze arrays and get their min, max, average and length values', () => {
  test('check correct parameter datatypes', () => {
    expect(() => analyzeArray('array')).toThrow(Error);
    expect(() => analyzeArray(null)).toThrow(Error);
    expect(() => analyzeArray([7, 8], [8])).toThrow(Error);
  });

  test('get proper object value from analyzing array', () => {
    expect(analyzeArray([7, 29, 38, 4, 2, 39, 3, 23])).toEqual({
      average: 23, min: 2, max: 39, length: 8,
    });
    expect(analyzeArray([
      0.2231067346463551,
      0.5197634615953783,
      0.380080564584387,
      0.7571027453865047,
      0.6198349288612941,
      0.6725100219870106,
      0.19115996473528396,
      0.42803966315487973,
      0.6982415838938791,
      0.6931274451114244,
    ])).toEqual({
      average: 0.380080564584387, min: 0.19115996473528396, max: 0.7571027453865047, length: 10,
    });
    expect(analyzeArray([
      667, 103, 107, 728, 824, 472, 546, 312, 846, 370, 471, 542,
      222, 456, 844, 357, 175, 984, 225, 638, 59, 885, 266, 627,
      539, 125, 357, 464, 915, 956, 827, 47, 425, 829, 404, 167,
      909, 956, 705, 496, 349, 11, 319, 263, 643, 262, 813, 473,
      678, 568, 885, 500, 726, 842, 344, 23, 403, 420, 745, 317,
      212, 520, 603, 458, 38, 598, 383, 946, 451, 214, 873, 30,
      361, 892, 52, 286, 768, 623, 543, 435, 197, 488, 459, 907,
      532, 655, 578, 664, 894, 498, 680, 577, 659, 292, 493, 922,
      167, 330, 385, 38,
    ])).toEqual({
      average: 493, min: 11, max: 984, length: 100,
    });
  });
});
