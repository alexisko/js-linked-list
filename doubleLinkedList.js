/**
 * @name  doubleLinkedList
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a doubly linked list
 */
function doubleLinkedList() {
    var head = null;
    var tail = null;
    var length = 0;

    function getHead () {
      return head;
    }

    function getTail() {
      return tail;
    }

    function add(val) {
      var newNode = {
        value: val,
        prev: null,
        next: null,
      };
      if(head === null && tail === null) { //dbl is empty
        head = newNode;
        tail = newNode;
        length++;
      } else { //dbl is not empty
        if(head.next === null) { //add second node
          head.next = newNode;
          newNode.prev = head;
          tail = newNode;
          length++;
        } else { //add to tail
          newNode.prev = tail;
          tail.next = newNode;
          tail = newNode;
          length++;
        }
      }
      return newNode;
    }

    function get(num) {
      var curNode = head;
      if(number < length) { //num is not out of bounds
        for(var i = 0; i < number; i++) {
        curNode = curNode.next;
      }
        return curNode;
      }
      return false;
    }

    function remove(num) {
      var curNode;
      var nextNode;
      if(get(num)) {
        if(num === 0) { //removing head
          curNode = head.next;
          curNode.prev = null;
          head = curNode;
          length--;
        } else {
          curNode = get(num);
          if(curNode.next === null) { //removing tail
            prevNode = curNode.prev;
            prevNode.next = null;
            tail = prevNode;
            length--;
          } else { //removing other node in dbl
            prevNode = curNode.prev;
            nextNode = curNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            length--;
          }
        }
      }
      return false;
    }

    function insert(val, num) {
      var newNode = {
        value: val,
        prev: null,
        next: null
      };
      var curNode;
      var prevNode;
      var nextNode;

      if(get(num)) {
        if(num === 0) { //inserting at the head
          newNode.next = head;
          head.prev = newNode;
          head = newNode;
          length++;
        } else {
          curNode = get(num);
          prevNode = curNode.prev;
          prevNode.next = newNode; //link prev node to new node
          newNode.prev = prevNode;
          newNode.next = curNode;
          curNode.prev = newNode;
          length++;
        }
      }
    }

    return {
      getHead: getHead,
      getTail: getTail,
      add: add,
      get: get,
      remove: remove,
      insert: insert
    };
}

var dll = doubleLinkedList();

dll.add('cat');
dll.add('dog');
dll.add('bird');
dll.add('zebra');

var tail = dll.getTail();

console.log(tail.value);
console.log(tail.prev.value);