import alternatingSums from '../../src/alternating-sums'

describe('alternatingSums()', () => {

   context('always', () => {
     it('should return an array', () => {
       let input = [[32,54,123,43],[42,432]];
       input.forEach((myArray) => {
           expect(alternatingSums(myArray)).to.be.an('array');
       });
     });
   });

  context('for arrays with more than 2 elements', () => {
    it('should return an array with sums of elements with even and odd indicies', () => {
      let inputData = [50, 60, 60, 45, 70];
      expect(alternatingSums(inputData)).to.include(180, 105);
      expect(alternatingSums(inputData)[1]).to.equal(105);
    })
  });

  context('for arrays with 2 elements', () => {
    it('should return original elements', () => {
      let inputData = [100, 50];
      expect(alternatingSums(inputData)).to.include(100, 50);
      expect(alternatingSums(inputData)[0]).to.equal(100);
    })
  })

  context('for arrays with 1 element', () => {
    it('should return original element', () => {
      let inputData = [100];
      expect(alternatingSums(inputData)).to.include(100, 0);
      expect(alternatingSums(inputData)[1]).to.equal(0);
    })
  })

  context('for arrays with 0 elements', () => {
    it('should return zeros', () => {
      let inputData = [];
      expect(alternatingSums(inputData)).to.include(0, 0);
      expect(alternatingSums(inputData)[1]).to.equal(0);
    })
  })


});
