const arrayStringsAreEqual = require('../1662.Check_If_Two_String_Arrays_are_Equivalent');

describe('arrayStringsAreEqual', () => {
    it('test', () => {
        expect(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])).toEqual(true);
        expect(arrayStringsAreEqual(["a", "cb"],["ab", "c"])).toEqual(false);
        expect(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"])).toEqual(true);
    });
});