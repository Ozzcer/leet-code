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

import { ListNode } from "../utils/linkedList"

var addTwoNumbers = function (l1, l2) {

  let sum = 0;
  let current = new ListNode(0);
  let result = current;

  while (l1 || l2) {

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(sum % 10);
    current = current.next;

    sum = sum > 9 ? 1 : 0;
  }

  if (sum) {
    current.next = new ListNode(sum);
  }

  return result.next;
};

/**
 * 04/25/2022 19:15	Accepted	195 ms	48.7 MB	typescript
 */
// console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([2, 4, 3]), ListNode.convertArrayToLinkedList([5, 6, 4])));
// console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([0]), ListNode.convertArrayToLinkedList([0])));
console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([9, 9, 9, 9, 9, 9, 9]), ListNode.convertArrayToLinkedList([9, 9, 9, 9])));
// console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([2, 4, 9]), ListNode.convertArrayToLinkedList([5, 6, 4, 9])));
// console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), ListNode.convertArrayToLinkedList([5, 6, 4])));
// console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), ListNode.convertArrayToLinkedList([5, 6, 4])));