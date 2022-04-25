"use strict";
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
exports.__esModule = true;
var linkedList_1 = require("../utils/linkedList");
function addTwoNumbers(l1, l2) {
    var head = new linkedList_1.ListNode();
    var current = head;
    var carry = 0;
    var sum = l1.val + l2.val + carry;
    current.val = sum % 10;
    carry = Math.floor(sum / 10);
    while ((l1 === null || l1 === void 0 ? void 0 : l1.next) || (l2 === null || l2 === void 0 ? void 0 : l2.next)) {
        l1 = l1 === null || l1 === void 0 ? void 0 : l1.next;
        l2 = l2 === null || l2 === void 0 ? void 0 : l2.next;
        current.next = new linkedList_1.ListNode();
        current = current.next;
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        current.val = sum % 10;
        carry = Math.floor(sum / 10);
    }
    if (carry === 1) {
        current.next = new linkedList_1.ListNode(1);
    }
    return head;
}
;
/**
 * 04/25/2022 19:15	Accepted	195 ms	48.7 MB	typescript
 */
// console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([2, 4, 3]), ListNode.convertArrayToLinkedList([5, 6, 4])));
// console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([0]), ListNode.convertArrayToLinkedList([0])));
console.log(addTwoNumbers(linkedList_1.ListNode.convertArrayToLinkedList([9, 9, 9, 9, 9, 9, 9]), linkedList_1.ListNode.convertArrayToLinkedList([9, 9, 9, 9])));
// console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([2, 4, 9]), ListNode.convertArrayToLinkedList([5, 6, 4, 9])));
// console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), ListNode.convertArrayToLinkedList([5, 6, 4])));
// console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), ListNode.convertArrayToLinkedList([5, 6, 4])));
