const {mergeKLists, ListNode} = require('../23.Merge_k_Sorted_Lists');

describe('mergeKLists', () => {
    it('test 1', () => {
        const n1 = new ListNode(1, new ListNode(4, new ListNode(5, null)));
        const n2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
        const n3 = new ListNode(2, new ListNode(6, null));
        const result = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4,new ListNode(5, new ListNode(6, null))))))));
        expect(mergeKLists([n1, n2, n3])).toEqual(result);
    });

    it('test 2', () => {
        expect(mergeKLists([])).toEqual(null);
    });
    
    it('test 3', () => {
        expect(mergeKLists([new ListNode(null)])).toEqual(null);
    });
});