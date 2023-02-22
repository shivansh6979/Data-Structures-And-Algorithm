class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  // adding an item at the last index
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    //for pointing the last node to the newly added node
    this.tail.next = newNode;
    // making the newly added node the tail node
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let currentNode = this.head;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      console.log(
        "Index greater than the length of list so, adding at the last position"
      );
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
  }
}

const Mylist = new LinkedList(10);

console.log("append", Mylist.append(6));
console.log("list", Mylist.printList());
