/**
 * @name  circularLinkedList
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a doubly linked list
 */
 function circularLinkedList() {
    var head = null;
    var length = 0;

    function getHead() {
      return head;
    }

    // function getTail() {
    //   return tail;
    // }

    function add(val) {
      var newNode = {
        value: val,
        prev: null,
        next: null
      };
      var tail;

      if(head === null) { //cll is empty
        head = newNode;
        newNode.next = head;
        newNode.prev = head;
        length++;
      } else { //cll is not empty
          if(length > 0) {
            tail = getHead().prev;
            tail.next = newNode;
            newNode.prev = tail;
            newNode.next = head;
            head.prev = newNode;
            length++;
          }
      }
    }

    function get(num) {
      var curNode = head;
      if(num >= 0 && num < length) {
        for(var i = 0; i < num; i++) {
          curNode = curNode.next;
        }
        return curNode;
      }
      return false;
    }

    function remove(num) {
      var curNode;
      var prevNode;
      var nextNode;
      if(get(num)) {
        if(num === 0) { //removing head
          curNode = head;
          prevNode = head.prev;
          nextNode = head.next;
          head = nextNode;

          nextNode.prev = prevNode;
          prevNode.next = nextNode;

          length--;
        } else {
          curNode = get(num);
          if(curNode.next === head) { //removing tail
            prevNode = curNode.prev;
            prevNode.next = head;
            head.prev = prevNode;

            length--;
          } else {
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
        if(num === 0) { //insert at head
          prevNode = head.prev;

          newNode.next = head;
          head.prev = newNode;
          prevNode.next = newNode;
          newNode.prev = prevNode;
          head = newNode;

          length++;
        } else {
          curNode = get(num);
          if(curNode.next === head) { //insert at tail
            curNode.next = newNode;
            newNode.prev = curNode;

            head.prev = newNode;
            newNode.next = head;

            length++;
          } else {
            prevNode = curNode.prev;

            newNode.next = curNode;
            curNode.prev = newNode;
            prevNode.next = newNode;
            newNode.prev = prevNode;

            length++;
          }
        }
      }
      return false;
    }

    return {
      getHead: getHead,
      add: add,
      get: get,
      remove: remove,
      insert: insert
    };
 }

 //tests
 var cll = circularLinkedList();

//test add
console.log("testing add func..");
 cll.add('dog');
 cll.add('cat');
 cll.add('bird');
//cll: dog cat bird
 var head = cll.getHead();
 console.log(head.value);
 console.log(head.next.value);

//test get
console.log("testing get func..");
var result = cll.get(2);
console.log(result.value);
console.log(cll.get(3));
console.log(cll.get(-1));

//test remove
console.log("testing remove func..");
cll.remove(1);
console.log(cll.getHead().value);
console.log(cll.getHead().next.value);
//cll: dog bird
cll.remove(1);
console.log(cll.getHead().value);
console.log(cll.getHead().next.value);
//cll: dog

//test insert
//cll: dog
console.log("testing insert func..");
cll.insert('frog', 0);
//cll: frog dog
console.log(cll.getHead().value);
console.log(cll.getHead().next.value);

cll.add('bird');
cll.add('cat');
//cll: frog dog bird cat
cll.insert('mouse', 2);
var mouse = cll.get(2);
//cll: frog dog mouse bird cat
console.log(mouse.value);
console.log(mouse.prev.value);
console.log(mouse.next.value);
