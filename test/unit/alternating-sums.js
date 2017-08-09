import alternatingSums from '../../src/alternating-sums';

describe('alternatingSums()', () => {
  it('always should return an array', () => {
    const _input = [[32, 54, 123, 43], [42, 432]];
    _input.forEach(myArray => {
      expect(alternatingSums(myArray)).to.be.an('array');
    });
  });

  const _testArray = [
    { input: [50, 60, 60, 45, 70], output: [180, 105] },
    { input: [100, 50], output: [100, 50] },
    { input: [100], output: [100, 0] },
    { input: [], output: [0, 0] }
  ];

  _testArray.forEach(({ input, output }) => {
    it(`for [${input}] should return [${output}]`, () => {
      expect(alternatingSums(input)).to.be.deep.equal(output);
    });
  });
});
