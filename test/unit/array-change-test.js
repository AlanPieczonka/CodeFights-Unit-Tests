import arrayChange from '../../src/array-change';

describe('arrayChange()', () => {

    context('for standard input', () => {

        const _testArray = [
            { input: [1,1,1], output: 3 },
            { input: [-1000, 0, -2, 0], output: 5 },
            { input: [2, 1, 10, 1], output: 12 },
            { input: [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15], output: 13 }
          ];
        
        _testArray.forEach(({ input, output }) => {
            it(`for [${input}] should return [${output}]`, () => {
              expect(arrayChange(input)).to.be.equal(output);
            });
          });

    });

});