import allLongestStrings from '../../src/all-longest-strings';

describe('allLongestStrings()', () => {

    it('should retun an array', () => {
        let inputData = ['xzc', 'sadf', 'qwerty', 'ytrewq', 'sdfgh'];
        
        expect(allLongestStrings(inputData)).to.be.an('array');
    });

    context('for more than one element in an array', () => {
        it('should return an array containing all longest strings', () => {
            let inputData1 = ['xzc', 'sadf', 'qwerty', 'ytrewq', 'sdfgh'],
                inputData2 = ['neutra', 'Fingerstache', 'Mumblecore'];

            expect(allLongestStrings(inputData1)).to.include('qwerty', 'ytrewq');
            expect(allLongestStrings(inputData2)).to.include('Fingerstache');
        });
    });

    context('for one element in an array', () =>{
        it('should return element as it is', () => {
            let inputData1 = ['aa'],
            inputData2 = ['zxcvbnm'];
            expect(allLongestStrings(inputData1)).to.include('aa');
            expect(allLongestStrings(inputData2)).to.include('zxcvbnm');
        });
    });

});