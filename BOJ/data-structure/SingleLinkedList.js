class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 해당 값 탐색
  find(value) {
    let currNode = this.head;
    while (currNode && currNode.value !== value) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 맨 뒤에 요소 추가
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  // node 뒤에 요소 삽입
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  // value값을 가지는 노드 삭제
  remove(value) {
    let prevNode = this.head;

    if (prevNode.value === value) {
      this.head = this.head.next;
      return true;
    }

    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
      if (prevNode.next === null) {
        this.tail = prevNode;
      }
    } else {
      console.log('유효하지 않은 노드');
    }
  }

  display() {
    let currNode = this.head;
    let displayString = '[';

    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substring(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}
