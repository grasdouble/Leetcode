const convert = require('../6.ZigZag_Conversion');

describe('convert', () => {
    it('test 1', () => {
        expect(convert('PAYPALISHIRING',3)).toEqual('PAHNAPLSIIGYIR');
    });

    it('test 2', () => {        
        expect(convert('PAYPALISHIRING',4)).toEqual('PINALSIGYAHRPI');
    });

    it('test 3', () => {
        expect(convert('A', 1)).toEqual('A');
    });

});
