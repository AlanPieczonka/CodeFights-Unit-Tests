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

  let testArray = [
    {input: [50, 60, 60, 45, 70], output: [180, 105]},
    {input: [100, 50], output: [100, 50]},
    {input: [100], output: [100, 0]},
    {input: [], output: [0, 0]}
  ]

  testArray.forEach((object) => {
    context(`for [${object.input}]`, () => {
      it(`should return [${object.output}]`, () => {
        expect(alternatingSums(object.input)).to.include(...object.output);
      })
    });
  })
});
