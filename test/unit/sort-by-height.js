import sortByHeight from '../../src/sort-by-height';

describe('sortByHeight()', () => {

    it('should return an array', () => {
        let inputData = [1,2];
        expect(sortByHeight(inputData)).to.be.an('array');
    });

  context('for sorted arrays', () => {
    it('should return array as it is', () => {
      let inputData = [1,2,3,4,5];
      
      expect(sortByHeight(inputData)).to.include(1,2,3,4,5);
      expect(sortByHeight(inputData)[2]).to.eq(3);
      expect(sortByHeight(inputData)[4]).to.eq(5);
    })
  });

  context('for arrays without -1 elements', () =>{
    it('should return sorted array', () => {
        let inputData1 = [124,36,1,12,365,45],
            inputData2 = [3123,435,3455,123,6456,23];

        expect(sortByHeight(inputData1)).to.include(1,12,36,45,124,365);
        expect(sortByHeight(inputData1)[3]).to.eq(45);
        expect(sortByHeight(inputData1)[5]).to.eq(365);

        expect(sortByHeight(inputData2)).to.include(23,123,435,3123,435,6456);
        expect(sortByHeight(inputData2)[0]).to.eq(23);
        expect(sortByHeight(inputData2)[5]).to.eq(6456);
    });
  })

  context('for arrays with -1 elements', () => {
    it('should sort data correctly', () => {
      let inputData = [4,5,-1,3,2];
      
      expect(sortByHeight(inputData)).to.include(2,3,-1,4,5);
      expect(sortByHeight(inputData)[2]).to.eq(-1);
      expect(sortByHeight(inputData)[0]).to.eq(2);
    })

    it('should return -1 elements as they are', () => {
      let inputData = [-1, 160, 90, -1, -1, 30, 270, -1];

      expect(sortByHeight(inputData)).to.include(-1,30,90,-1,-1,160,270,-1);
      expect(sortByHeight(inputData)[0]).to.eq(-1);
      expect(sortByHeight(inputData)[2]).to.eq(90);
      expect(sortByHeight(inputData)[7]).to.eq(-1);
    })
  });
});