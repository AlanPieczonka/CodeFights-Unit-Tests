import commonCharacterCount from '../../src/common-character-count';

describe('commonCharacterCount()', () => {

     it('should return number', () => {
        let inputData1 = 'aabcc',
            inputData2 = 'adcaa';
        expect(commonCharacterCount(inputData1, inputData2)).to.be.a('number');
    });

    it('should return the number of common characters between strings', () => {
      let inputData1 = 'aabcc',
          inputData2 = 'adcaa',
          inputData3 = 'zzzz',
          inputData4 = 'zzzzzzz',
          inputData5 = 'a',
          inputData6 = 'b';

        expect(commonCharacterCount(inputData1, inputData2)).to.eq(3);
        expect(commonCharacterCount(inputData3, inputData4)).to.eq(4);
        expect(commonCharacterCount(inputData5, inputData6)).to.eq(0);
    });
  
});