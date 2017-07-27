import isLucky from  '../../src/is-lucky';

describe('isLucky', () => {

  it('should return boolean', () => {
        let inputData = 2137;
        expect(isLucky(inputData)).to.be.a('boolean');
    });

    it('should check if the sum of the first half of the digits is equal to the sum of the second half and return true', () => {
        let inputData1 = 1230,
            inputData2 = 134008;
        expect(isLucky(inputData1)).to.be.true;
        expect(isLucky(inputData2)).to.be.true;
    });

    it('should check if the sum of the first half of the digits is equal to the sum of the second half and return false', () => {
        let inputData1 = 4354,
            inputData2 = 10;
        expect(isLucky(inputData1)).to.be.false;
        expect(isLucky(inputData2)).to.be.false;
    });

});

