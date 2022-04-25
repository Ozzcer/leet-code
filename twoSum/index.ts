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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let v1: string = "" + l1.val;
  let v2: string = "" + l2.val;
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

  let sum: string = (parseInt(v1) + parseInt(v2)).toString();
  let head = new ListNode(parseInt(sum.charAt(sum.length - 1)));
  let currentNode = head;
  for (let i = sum.length - 2; i >= 0; i--) {
    currentNode.next = new ListNode(parseInt(sum.charAt(i)));
    currentNode = currentNode.next;
  }

  return head;
};

console.log(addTwoNumbers(ListNode.convertArrayToLinkedList([2, 4, 3]), ListNode.convertArrayToLinkedList([5, 6, 4])));