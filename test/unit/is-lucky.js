import isLucky from '../../src/is-lucky';

// use desribe function, class, module
describe('isLucky()', () => {
  // use context for describing state
  context('for lucky numbers', () => {
    [1230, 123006, 0].forEach(luckyNumber => {
      // make description of test short and to the point
      it(`should confirm luckyness of number ${luckyNumber}`, () => {
        expect(isLucky(luckyNumber)).to.be.true;
      });
    });
  });
  // you can automate (to some extend), generating tests for multiple datasets
  context('for unlucky numbers', () => {
    [4354, 10, 1122].forEach(unluckyNumber => {
      it(`should confirm unluckyness of number ${unluckyNumber}`, () => {
        expect(isLucky(unluckyNumber)).to.be.false;
      });
    });
  });
});
