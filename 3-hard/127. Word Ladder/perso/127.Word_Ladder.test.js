const ladderLength = require('./127.Word_Ladder');

describe('ladderLength', () => {
    it('ladderLength v1', () => {
        expect(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"])).toBe(5);    
    });
});