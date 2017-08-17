import areSimilar from '../../src/are-similar';

describe('areSimilar()', () => {
  it('always should return a boolean', () => {
    const _testArray = [[[1, 2, 3], [2, 1, 3]], 43, 'string', true];
    _testArray.forEach(myArray => {
      expect(areSimilar(...myArray)).to.be.a('boolean');
    });
  });

  context('for similiar arrays', () => {
    it('should return true', () => {
      const _testArray = [
        [[1, 2, 3], [2, 1, 3]],
        [[2, 3, 1], [1, 3, 2]],
        [
          [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
          [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
        ]
      ];
      _testArray.forEach(arrays => {
        expect(areSimilar(...arrays)).to.be.true;
      });
    });
  });

  context('for non-similiar arrays', () => {
    it('should return false', () => {
      const _testArray = [
        [[1, 2, 2], [2, 1, 1]],
        [[1, 1, 4], [1, 2, 3]],
        [[1, 2, 3], [1, 10, 2]],
        [
          [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
          [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
        ]
      ];
      _testArray.forEach(arrays => {
        expect(areSimilar(...arrays)).to.be.false;
      });
    });
  });
});
