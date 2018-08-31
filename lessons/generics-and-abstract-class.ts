class LinkedList<T> {
    head: LinkedListNode<T> = null;
    size: number = 0;

    public insertAtHead(value: T): void {
        this.head = new LinkedListNode(value, this.head);
        this.size += 1;
    };

    public insertAtIndex(value: T, index: number): void {
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

            previousNode.nextNode = new LinkedListNode(value, previousNode.nextNode);

            this.size += 1;
        }
    };

    public printList(): void {
        let curr = this.head;
        console.log(curr.value);
        while(curr.nextNode != null) {
            curr = curr.nextNode;
            console.log(curr.value);
        }
    }
}

class LinkedListNode<T> {
    value: T;
    nextNode: LinkedListNode<T> = null;
    prevNode: LinkedListNode<T> = null;

    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

abstract class Shape {
    sides: number;
    color: string;

    constructor(sides: number) {
        this.sides = sides;
    }

    private helperFunction(): void {
        console.log('hello');
    }

    protected protectedFunction(): void {
        this.helperFunction();
    }

    public publicFunction(): void {
        this.helperFunction();
    }


}

class Triangle extends Shape {
    constructor() {
        super(3);
    }
}

class Circle extends Shape {
    constructor() {
        super(0);
    }
}

class Hexagon extends Shape {
    constructor() {
        super(6);
    }
}

class Square extends Shape {
    constructor() {
        super(4);

        this.protectedFunction();
    }
}

let ll = new LinkedList<Shape>();

ll.insertAtHead(new Triangle());
ll.insertAtHead(new Circle());
ll.insertAtHead(new Hexagon());
ll.insertAtHead(new Square());

let square = new Square();

square.publicFunction();
