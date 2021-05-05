const intToRoman = require('../12.Integer_to_Roman');

describe('intToRoman', () => {
    it('test 1', () => {
        expect(intToRoman(3)).toEqual('III');
    });

    it('test 2', () => {
        expect(intToRoman(4)).toEqual('IV');
    });

    it('test 3', () => {
        expect(intToRoman(9)).toEqual('IX');
    });

    it('test 4', () => {
        expect(intToRoman(58)).toEqual('LVIII');
    });

    it('test 5', () => {
        expect(intToRoman(1994)).toEqual('MCMXCIV');
    });
});