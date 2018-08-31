class SingleLinkedList {
    head: SingleLinkedListNode = null;
    size: number = 0;

    public insertAtHead(value: number): void {
        this.head = new SingleLinkedListNode(value, this.head);
        this.size += 1;
    };

    public insertAtIndex(value: number, index: number): void {
        if (index > this.size) {
            throw new Error(`There is no item at ${index}. Sorry bruh.`);
        }

        if (index === 0) {
            this.insertAtHead(value);
        } else {
            let previousNode = this.head;

            for (let i = 0; i < (index - 1); i++) {
                previousNode = previousNode.nextNode;
            }

            previousNode.nextNode = new SingleLinkedListNode(value, previousNode.nextNode);

            this.size += 1;
        }
    };
}

class SingleLinkedListNode {
    value: number;
    nextNode: SingleLinkedListNode = null;

    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

// let ll = new LinkedList();
// ll.insertAtHead(42);
// ll.insertAtHead(36);
// ll.insertAtHead(18);
// ll.insertAtIndex(100, 2);
// console.log(ll);
