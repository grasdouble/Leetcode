const threeConsecutiveOdds = require('../1550.Three_Consecutive_Odds');

describe('threeConsecutiveOdds', () => {
    it('test', () => {
        expect(threeConsecutiveOdds([2,6,4,1])).toEqual(false);
        expect(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])).toEqual(true);
    });
});