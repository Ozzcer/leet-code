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

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function isPalindrome(head: ListNode | null): boolean {
  // initialise starting strings
  let forwards: string = head.val.toString();
  let backwards: string = head.val.toString();
  let currentNode: ListNode = head.next;

  while (currentNode) {
    forwards += currentNode.val
    backwards = currentNode.val + backwards;
    currentNode = currentNode.next;
  }

  return forwards === backwards;
};

/**
 * RESULTS:
 * Runtime: 227ms faster than 40.38%
 * Memory Usage: 77.6MB less than 52.53%
 */
