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
    var v1 = "" + l1.val;
    var v2 = "" + l2.val;
    while (l1.next || l2.next) {
        if (l1.next) {
            l1 = l1.next;
            v1 += l1.val;
        }
        if (l2.next) {
            l2 = l2.next;
            v2 += l2.val;
        }
    }
    var sum = (parseInt(v1) + parseInt(v2)).toString();
    var head = new linkedList_1.ListNode(parseInt(sum.charAt(sum.length - 1)));
    var currentNode = head;
    for (var i = sum.length - 2; i >= 0; i--) {
        currentNode.next = new linkedList_1.ListNode(parseInt(sum.charAt(i)));
        currentNode = currentNode.next;
    }
    return head;
}
;
console.log(addTwoNumbers(linkedList_1.ListNode.convertArrayToLinkedList([2, 4, 3]), linkedList_1.ListNode.convertArrayToLinkedList([5, 6, 4])));
