import allLongestStrings from '../../src/all-longest-strings';

describe('allLongestStrings()', () => {

    it('should retun an array', () => {
        let inputData = ['xzc', 'sadf', 'qwerty', 'ytrewq', 'sdfgh'];
        
        expect(allLongestStrings(inputData)).to.be.a('array');
    });

    it('should return an array containing all longest strings', () => {
        let inputData = ['xzc', 'sadf', 'qwerty', 'ytrewq', 'sdfgh'];

        expect(allLongestStrings(inputData)).to.include('qwerty', 'yrtewq');
        expect(allLongestStrings(inputData)[0]).to.eq('qwerty');
        expect(allLongestStrings(inputData)[1]).to.eq('ytrewq');
    });

    it('should return one element as it is', () => {
        let inputData = ['aa'];
        expect(allLongestStrings(inputData)).to.include('aa');
    });


});