import reverseParentheses from '../../src/reverse-parentheses'

describe('reverseParentheses()', () => {
    
    it('should return a string', () => {
        let inputData = 'abc(cba)ab(bac)c';
        expect(reverseParentheses(inputData)).to.be.a('string');
    });

    context('for strings with parentheses', () => {
        it('should return reversed string and remove parentheses', () => {
            let inputData1 = 'a(bc)de',
            inputData2 = 'co(de(fight)s)',
            inputData3 = 'The ((quick (brown) (fox) jumps over the lazy) dog)';
           expect(reverseParentheses(inputData1)).to.eq('acbde');
           expect(reverseParentheses(inputData2)).to.eq('cosfighted');
           expect(reverseParentheses(inputData3)).to.eq('The god quick nworb xof jumps over the lazy');
        });
    });

  
    context('for strings without parentheses', () => {
        it('should return a string as it is ', () => {
            let inputData1 = 'zxcvbvmn',
                inputData2 = 'ghjklkhj';
            expect(reverseParentheses(inputData1)).to.eq('zxcvbvmn');
            expect(reverseParentheses(inputData2)).to.eq('ghjklkhj');
        }); 
    });

});