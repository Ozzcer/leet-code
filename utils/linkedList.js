"use strict";
exports.__esModule = true;
exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    ListNode.convertArrayToLinkedList = function (array) {
        var head = new ListNode(array[0]);
        var currNode = head;
        for (var i = 1; i < array.length; i++) {
            var nextNode = new ListNode(array[i]);
            currNode.next = nextNode;
            currNode = currNode.next;
        }
        return head;
    };
    ListNode.prototype.print = function () {
        var output = [this.val];
        var next = this.next;
        while (next) {
            output.push(next.val);
            next = next.next;
        }
        return output;
    };
    return ListNode;
}());
exports.ListNode = ListNode;
