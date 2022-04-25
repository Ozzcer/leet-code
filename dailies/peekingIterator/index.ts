/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
  iterator: Iterator;
  iterable: number[] = [];
  pointer: number = 0;

  constructor(iterator: Iterator) {
    this.iterator = iterator;
    while (this.iterator.hasNext()) {
      this.iterable.push(this.iterator.next());
    }
  }

  peek(): number {
    return this.iterable[this.pointer];
  }

  next(): number {
    this.pointer++;
    return this.iterable[this.pointer - 1];
  }

  hasNext(): boolean {
    return this.pointer < this.iterable.length
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
