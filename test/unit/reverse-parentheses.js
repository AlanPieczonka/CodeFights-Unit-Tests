import reverseParentheses from '../../src/reverse-parentheses'

describe('reverseParentheses', () => {
    
    it('should return a string', () => {
        let inputData = 'abc(cba)ab(bac)c';
        expect(reverseParentheses(inputData)).to.be.a('string');
    });

    it('should return a string without parentheses as it is ', () => {
        let inputData = 'zxcvbvmn';
        expect(reverseParentheses(inputData)).to.eq('zxcvbvmn');
    });

    it('should reverse the strings contained in each pair of matching parentheses and remove parentheses', () => {
        let inputData1 = 'a(bc)de',
            inputData2 = 'co(de(fight)s)',
            inputData3 = 'The ((quick (brown) (fox) jumps over the lazy) dog)';

        expect(reverseParentheses(inputData1)).to.eq('acbde');
        expect(reverseParentheses(inputData2)).to.eq('cosfighted');
        expect(reverseParentheses(inputData3)).to.eq('The god quick nworb xof jumps over the lazy');
    });

});