import addBorder from '../../src/add-border';

describe('addBorder()', () => {

  it('always should return an array', () => {
    const _testArray = [['abc', 'def'], ['cbvn', 'bvxc'], 4, 'testString'];
    _testArray.forEach(myArray => {
      expect(addBorder(myArray)).to.be.an('array');
    });
  });

  context('for non-empty arrays', () => {
    it('should add a border of asterisks to array', () => {
      const _testArray = [
        {
          input: ['abc', 'ded'],
          output: ['*****',
                   '*abc*',
                   '*ded*',
                   '*****']
        },
        {
          input: ['a'],
          output: ['***',
                   '*a*',
                   '***']
        },
        {
          input: [''],
          output: ['**',
                   '**',
                   '**']
        }
      ];

      _testArray.forEach(({ input, output }) => {
        expect(addBorder(input)).to.be.deep.equal(output);
      });
    });
  })


  context('for empty arrays', () => {
    it('should return empty array', () => {
      const _testArray = [];
      expect(addBorder(_testArray)).to.be.deep.equal([]);
    });
  });

});
