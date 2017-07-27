import sortByHeight from '../../src/sort-by-height';

describe('sortByHeight()', () => {

    it('should return an array', () => {
        let inputData = [1,2];

        expect(sortByHeight(inputData)).to.be.a('array');
    });

    it('return sorted array as it is', () => {
      let inputData = [1,2,3,4,5];
      
      expect(sortByHeight(inputData)).to.include(1,2,3,4,5);
      expect(sortByHeight(inputData)[2]).to.eq(3);
    })

    it('sort data correctly', () => {
      let inputData = [4,5,-1,3,2];
      
      expect(sortByHeight(inputData)).to.include(2,3,-1,4,5);
      expect(sortByHeight(inputData)[2]).to.eq(-1);
      expect(sortByHeight(inputData)[0]).to.eq(2);
    })

    it('return -1 elements as they are', () => {
      let inputData = [-1, 160, 90, -1, -1, 30, 270, -1];

      expect(sortByHeight(inputData)).to.include(-1,30,90,-1,-1,160,270,-1);
      expect(sortByHeight(inputData)[0]).to.eq(-1);
      expect(sortByHeight(inputData)[2]).to.eq(90);
      expect(sortByHeight(inputData)[7]).to.eq(-1);
    })

});