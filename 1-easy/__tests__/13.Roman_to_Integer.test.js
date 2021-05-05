const romanToInt = require('../13.Roman_to_Integer');

describe('romanToInt', () => {
    it('test 1', () => {
        expect(romanToInt("III")).toEqual(3);
    });

    it('test 2', () => {
        expect(romanToInt("IV")).toEqual(4);
    });

    it('test 3', () => {
        expect(romanToInt("IX")).toEqual(9);
    });

    it('test 4', () => {
        expect(romanToInt("LVIII")).toEqual(58);
    });

    it('test 5', () => {
        expect(romanToInt("MCMXCIV")).toEqual(1994);
    });
});

