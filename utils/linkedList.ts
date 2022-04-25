
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  static convertArrayToLinkedList(array: number[]): ListNode {
    let head = new ListNode(array[0]);
    let currNode = head;
    for (let i = 1; i < array.length; i++) {
      let nextNode = new ListNode(array[i]);
      currNode.next = nextNode;
      currNode = currNode.next;
    }
    return head;
  }

  print(): number[] {
    const output: number[] = [this.val];
    let next = this.next;
    while (next) {
      output.push(next.val);
      next = next.next;
    }
    return output;
  }
}



