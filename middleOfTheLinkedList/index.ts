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

function middleNode(head: ListNode | null): ListNode | null {
  let halfPointer: ListNode = head;
  let fullPointer: ListNode = head;

  while (fullPointer && fullPointer.next) {
    halfPointer = halfPointer.next;
    fullPointer = fullPointer.next.next;
  }

  return halfPointer;
};

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


console.log(middleNode(convertArrayToLinkedList([1, 2, 3, 4, 5])));
