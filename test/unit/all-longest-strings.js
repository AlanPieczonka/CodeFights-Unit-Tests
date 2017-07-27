import allLongestStrings from '../../src/all-longest-strings';

describe('allLongestStrings()', () => {
    it('should return an array containing all longest strings', () => {
        let inputData = ['xzc', 'sadf', 'qwerty', 'ytrewq', 'sdfgh'];
        let output = allLongestStrings(inputData);

        expect(output).to.include('qwerty', 'ytrewq');
        expect(output.length).to.eq(2);
    });

    it('should return one element as it is', () => {
        let inputData = ['aa'];
        expect(allLongestStrings(inputData)).to.include('aa');
    });


});