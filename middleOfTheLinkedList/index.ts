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

function middleNode(head: ListNode | null): ListNode | null {
  let halfPointer: ListNode = head;
  let fullPointer: ListNode = head;

  while (fullPointer && fullPointer.next) {
    halfPointer = halfPointer.next;
    fullPointer = fullPointer.next.next;
  }

  return halfPointer;
};

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function convertArrayToLinkedList(array: number[]): ListNode {
  let head = new ListNode(array[0]);
  let currNode = head;
  for (let i = 1; i < array.length; i++) {
    let nextNode = new ListNode(array[i]);
    currNode.next = nextNode;
    currNode = currNode.next;
  }
  return head;
}

/**
 * RESULTS:
 * Runtime: 74 ms faster than 64.76%
 * Memory Usage: 42.8 MB less than 76.38%
 */