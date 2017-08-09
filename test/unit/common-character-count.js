import commonCharacterCount from '../../src/common-character-count';

describe('commonCharacterCount()', () => {
  it('always should return number', () => {
    const _input1 = 'aabcc',
      _input2 = 'adcaa';

    expect(commonCharacterCount(_input1, _input2)).to.be.a('number');
  });

  context('for strings with common characters', () => {
    it('should return the number of common characters between strings', () => {
      const _inputStrings = [
        { input1: 'aabcc', input2: 'adcaa', output: 3 },
        { input1: 'zzzz', input2: 'zzzzzzz', output: 4 },
        { input1: 'a', input2: 'b', output: 0 }
      ];

      _inputStrings.forEach(({ input1, input2, output }) => {
        expect(commonCharacterCount(input1, input2)).to.eq(output);
      });
    });
  });

  context('for strings without common characters', () => {
    it('should return 0', () => {
      const _inputStrings = [
        { input1: 'qwer', input2: 'yuio'},
        { input1: 'asdf', input2: 'hjkl',},
        { input1: 'zxcv', input2: 'ubnm'}
      ];

      _inputStrings.forEach(({ input1, input2, output }) => {
        expect(commonCharacterCount(input1, input2)).to.eq(0);
      });
    });
  });
});
