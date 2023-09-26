/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return null;
  let cur = head;
  while (cur) {
    cur.next = new Node(cur.val, cur.next)
    cur = cur.next.next
  }
  cur = head
  while (cur) {
    if (cur.random !== null) cur.next.random = cur.random.next
    cur = cur.next.next
  }

  let newNode = head.next, res = newNode
  cur = head
  while (cur.next && newNode.next) {
    cur.next = cur.next.next
    newNode.next = newNode.next.next
    cur = cur.next
    newNode = newNode.next
  }
  cur.next = null
  return res
};