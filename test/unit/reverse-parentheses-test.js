import reverseParentheses from '../../src/reverse-parentheses';

describe('reverseParentheses()', () => {
  it('always should return a string', () => {
    const _inputData = 'abc(cba)ab(bac)c';
    expect(reverseParentheses(_inputData)).to.be.a('string');
  });

  context('for strings with parentheses', () => {
    it('should return reversed string and remove parentheses', () => {
      const _testStrings = [
        { input: 'a(bc)de', output: 'acbde' },
        { input: 'co(de(fight)s)', output: 'cosfighted' },
        {
          input: 'The ((quick (brown) (fox) jumps over the lazy) dog)',
          output: 'The god quick nworb xof jumps over the lazy'
        }
      ];

      _testStrings.forEach(({ input, output }) => {
        expect(reverseParentheses(input)).to.be.equal(output);
      });
    });
  });

  context('for strings without parentheses', () => {
    it('should return a string as it is ', () => {
      const _testStrings = [{ input: 'zxcvbvmn' }, { input: 'ghjklkhj' }];

      _testStrings.forEach(({ input }) => {
        expect(reverseParentheses(input)).to.be.equal(input);
      });
    });
  });
});
