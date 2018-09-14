// Homework
// Implement a doubly linked list
// reversePrint()
// Make it generic
class DoublyLinkedList<T>{
	head: DoublyLinkedListNode = null;
	size: number = 0;
    tail: DoublyLinkedListNode = null;

	public insertAtHead(value: T): void {
		const oldHead = this.head;
		const oldTail = this.tail;

		// update head
		this.head = new DoublyLinkedListNode(value, null, this.head);

		// update tail
		if (!oldTail) {
			this.tail = this.head;
		}

		// update next node's previousNode
		if (oldHead) {
			oldHead.previousNode = this.head;
		}

		this.size += 1;
	}

	public insertAtTail(value: T): void {
		const oldHead = this.head;
		const oldTail = this.tail;

		// update tail
		this.tail = new DoublyLinkedListNode(value, this.tail, null);

		// update head
		if (!oldHead) {
			this.head = this.tail;
		}

		// update previous node's nextNode
		if (oldTail) {
			oldTail.nextNode = this.tail;
		}

		this.size += 1;
	}

	public print(): void {
		let node = this.head;

		for (let i = 0; i < this.size; i++) {
			console.log(`${i + 1}: ${node.value}`);
			node = node.nextNode;
		}
	}

	public remove(index: number): DoublyLinkedListNode {
		if (index > this.size) {
            throw new Error(`There is no item to remove at ${index}.\n\n¯\\_(ツ)_/¯`);
        }

		let nodeToRemove;

		if (index === 0) {
			// remove head
			nodeToRemove = this.head;
			this.head = nodeToRemove.nextNode;

			nodeToRemove.nextNode = null;
			this.head.previousNode = null;
		} else if (index === (this.size - 1)) {
			// remove tail
			nodeToRemove = this.tail;
			this.tail = nodeToRemove.previousNode;

			nodeToRemove.previousNode = null;
			this.tail.nextNode = null;
		} else {
			// remove a middle node
            let nodeToRemove = this.head;

            for (let i = 0; i < index; i++) {
                nodeToRemove = nodeToRemove.nextNode;
            }

			nodeToRemove.previousNode.nextNode = nodeToRemove.nextNode;
			nodeToRemove.nextNode.previousNode = nodeToRemove.previousNode;
			nodeToRemove.previousNode = null;
			nodeToRemove.nextNode = null;
        }

		this.size -= 1;

		return nodeToRemove;
	}

	public reverse(): void {
		console.log('Permanently reverse the list.');
	}

	public reverseAndPrint(): void {
		this.reverse();
		this.print();
	}
}

class DoublyLinkedListNode {
    value: number;
    nextNode: DoublyLinkedListNode = null;
    previousNode: DoublyLinkedListNode = null;

    constructor(value, previousNode, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
        this.previousNode = previousNode;
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertAtHead(18);
doublyLinkedList.insertAtHead('potato');
doublyLinkedList.insertAtTail('yam');
doublyLinkedList.insertAtTail(42);
doublyLinkedList.remove(3);
debugger;
doublyLinkedList.reverseAndPrint();
