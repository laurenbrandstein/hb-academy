// Homework
// Implement a doubly linked list
// reversePrint()
// Make it generic
class DoublyLinkedList<T>{

	private head: DoublyLinkedListNode<T>;
	private directionForward: boolean;

	constructor(headValue: T) {
		this.head = new DoublyLinkedListNode<T>(null, null, headValue);
		this.directionForward = true;
	}

	public insert(value: T): void {
		this.head = new DoublyLinkedListNode<T>(null, this.head, value);
		//Point old head back to new head
		if(this.directionForward && this.head.next) {
			this.head.next.previous = this.head;
		}
		if(!this.directionForward && this.head.previous) {
			this.head.previous.next = this.head;
		}
	}

	public insertAtTail(value: T): void {
		let currNode = this.getLastNode();
		if(this.directionForward) {
			currNode.next = new DoublyLinkedListNode<T>(currNode, null, value);
		} else {
			currNode.previous = new DoublyLinkedListNode<T>(currNode, null, value);
		}
	}

	private getLastNode(): DoublyLinkedListNode<T>{
		let currNode = this.head;

		if (this.directionForward) {
			while(currNode && currNode.next) {
				currNode = currNode.next;
			}
		} else {
			while(currNode && currNode.previous) {
				currNode = currNode.previous;
			}
		}
		
		return currNode;
	}

	public remove(index: number): T { //first node is at index
		let currNode = this.head;
		//either bring us to the tail node or the index
		if(this.directionForward) {
			while(currNode && currNode.next && index > 0) {
				currNode = currNode.next;
				index--;
			}
		} else {
			while(currNode && currNode.previous && index > 0) {
				currNode = currNode.previous;
				index--;
			}
		}
		//Connect separated nodes
		if(currNode) {
			if(currNode.previous) {
				currNode.previous.next = currNode.next;
			} else {
				this.head = currNode.next;
			}

			if(currNode.next) {
				currNode.next.previous = currNode.previous;
			}
		}

		return currNode ? currNode.value : null;
	}

	public reverse(): void {
		console.log('rrrrr-reverse!');
		let currNode = this.head;
		//either bring us to the tail node or the index
		while(currNode && currNode.next) {
			currNode = currNode.next;
		}
		this.head = currNode;
		this.directionForward = !this.directionForward;
	}

	public reversePrint(): void {
		let currNode = this.getLastNode();
		//Print backwards
		while(currNode) {
			console.log(currNode.value);
			currNode = this.directionForward ? currNode.previous : currNode.next;
		}
	}
}

class DoublyLinkedListNode<T> {
	constructor(
		public previous: DoublyLinkedListNode<T>,
		public next: DoublyLinkedListNode<T>,
		public value:T
	) {}
}



const dll = new DoublyLinkedList<number>(null);
console.log(dll.remove(1));
console.log(dll.remove(0));
console.log(dll.insert(1));
console.log(dll.insert(2));
console.log(dll.insert(3));
console.log(dll.remove(0));
console.log(dll.insertAtTail(0));
console.log(dll.remove(0));
console.log(dll.remove(0));
console.log(dll.remove(0));
console.log(dll.remove(0));
console.log(dll.insert(1));
console.log(dll.insert(2));
console.log(dll.insert(3));
console.log(dll.remove(1));
console.log(dll.insert(1));
console.log(dll.insert(2));
console.log(dll.insert(3));
dll.reversePrint();
dll.reverse();
dll.reversePrint();

//Reverse the ll





