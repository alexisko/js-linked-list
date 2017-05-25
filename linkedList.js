/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var length = 0;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(val) {
    var newNode = {
      value: null,
      next: null
    };
    if(head === null && tail === null) { //linked list is empty
      head = newNode;
      tail = newNode;
      newNode.value = val;
    } else { //linked list is not empty
      newNode.value = val;
      tail.next = newNode;
      tail = newNode;
    }
    length++;
    return newNode;
  }

  function get(number) {
    var curNode = head;
    if(number < length) {
      for(var i = 0; i < number; i++) {
      curNode = curNode.next;
    }
      return curNode;
    }
    return false;
  }

  function remove(number) {
    var curNode = head;
    var prev;
    if(get(number)) {
      if(number === 0) { //removing head
        head = curNode.next;
        curNode.next = null;
        length--;
      } else { //not removing head
        for(var i = 0; i < number; i++) {
          prev = curNode;
          curNode = curNode.next;
        }
        prev.next = curNode.next;
        curNode.next = null;
        if(prev.next === null) { //update tail
          tail = prev;
        }
        length--;
      }
    }
    return false;
  }

  function insert(val, number) {
    var newNode = {
      value: val,
      next: null
    };
    var curNode = head;
    var prev;
    if(number < length && number >= 0) {
      if(number === 0) { //add to head
        newNode.next = head;
        head = newNode;
        length++;
      } else {
        if(get(number)) {
          newNode.next = get(number);
          for(var i = 0; i < number; i++) {
            prev = curNode;
            curNode = curNode.next;
          }
          prev.next = newNode;
          length++;
        }
      }
    }
    return false;
  }
  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  }
}