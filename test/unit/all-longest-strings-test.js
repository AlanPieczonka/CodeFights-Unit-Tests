import allLongestStrings from '../../src/all-longest-strings';

describe('allLongestStrings()', () => {
  it('always should retun an array', () => {
    const _inputData = ['xzc', 'sadf', 'qwerty', 'ytrewq', 'sdfgh'];
    expect(allLongestStrings(_inputData)).to.be.an('array');
  });

  context('for more than one element in an array', () => {
    it('should return an array containing all longest strings', () => {
      const _testArray = [
        {
          input: ['xzc', 'sadf', 'qwerty', 'ytrewq', 'sdfgh'],
          output: ['qwerty', 'ytrewq']
        },
        {
          input: ['neutra', 'Fingerstache', 'Mumblecore'],
          output: ['Fingerstache']
        }
      ];

      _testArray.forEach(({ input, output }) => {
        expect(allLongestStrings(input)).to.deep.equal(output);
      });
    });
  });

  context('for one element in an array', () => {
    it('should return element as it is', () => {
      const _inputData1 = ['aa'],
        _inputData2 = ['zxcvbnm'];
      expect(allLongestStrings(_inputData1)).to.deep.equal(_inputData1);
      expect(allLongestStrings(_inputData2)).to.deep.equal(_inputData2);
    });
  });
});
