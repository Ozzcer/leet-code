/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function middleNode(head) {
    var halfPointer = head;
    var fullPointer = head;
    while (fullPointer && fullPointer.next) {
        halfPointer = halfPointer.next;
        fullPointer = fullPointer.next.next;
    }
    return halfPointer;
}
;
function convertArrayToLinkedList(array) {
    var head = new ListNode(array[0]);
    var currNode = head;
    for (var i = 1; i < array.length; i++) {
        var nextNode = new ListNode(array[i]);
        currNode.next = nextNode;
        currNode = currNode.next;
    }
    return head;
}
console.log(middleNode(convertArrayToLinkedList([1, 2, 3, 4, 5])));
