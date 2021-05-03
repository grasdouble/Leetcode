const myAtoi = require('../8.String_to_Integer');

describe('myAtoi', () => {
    it('test 1', () => {
        expect(myAtoi('42')).toEqual(42);
    });

    it('test 2', () => {
        expect(myAtoi('   -42')).toEqual(-42);
    });

    it('test 3', () => {
        expect(myAtoi('4193 with words')).toEqual(4193);
    });

    it('test 4', () => {
        expect(myAtoi('words and 987')).toEqual(0);
    });

    it('test 5', () => {
        expect(myAtoi('-91283472332')).toEqual(-2147483648);
    });

});
