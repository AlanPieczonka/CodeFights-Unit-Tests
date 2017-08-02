import alternatingSums from '../../src/alternating-sums'

describe('alternatingSums()', () => {

  it('should return an array', () => {
    let input = [[32,54,123,43],[42,432]];
    input.forEach((myArray) => {
        expect(alternatingSums(myArray)).to.be.an('array');
    });
  });

  it('should return an array with sums of elements with even and odd indicies', () => {
    let inputData1 = [50, 60, 60, 45, 70],
        inputData2 = [100, 50];
    expect(alternatingSums(inputData1)).to.include(180, 105);
    expect(alternatingSums(inputData1)[1]).to.equal(105);


    expect(alternatingSums(inputData2)).to.include(100, 50);
    expect(alternatingSums(inputData2)[0]).to.equal(100);
  });

});
