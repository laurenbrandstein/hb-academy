// Decorator Pattern: attaches additional
// responsibilities to an object dynamically.
// Decorators provide a flexible alternative to
// subclassing for extending functionality.

namespace Decorator {
    abstract class Taco {
        description: string = "Unknown Taco";

        public getDescription(): string {
            return this.description;
        }
    
        public abstract cost(): number;    
    }

    abstract class CondimentDecorator extends Taco {
        public abstract getDescription(): string;
    }

    class CrunchyTaco extends Taco {
        constructor() {
            super();
            this.description = "Crunchy Taco";
        }

        public cost(): number {
            return 1.99;
        }
    }

    class SoftTaco extends Taco {
        constructor() {
            super();
            this.description = "Soft Taco";
        }

        public cost(): number {
            return 1.99;
        }
    }

    class Gordito extends Taco {
        constructor() {
            super();
            this.description = "Gordito";
        }

        public cost(): number {
            return 2.49;
        }
    }

    class Guac extends CondimentDecorator {
        constructor(public taco: Taco) {
            super();
        }

        public getDescription(): string {
            return this.taco.getDescription() + ", Guac";
        }

        public cost(): number {
            return 1.00 + this.taco.cost();
        }
    }

    class Cheese extends CondimentDecorator {
        constructor(public taco: Taco) {
            super();
        }

        public getDescription(): string {
            return this.taco.getDescription() + ", Cheese";
        }

        public cost(): number {
            return .50 + this.taco.cost();
        }
    }

    class SourCream extends CondimentDecorator {
        constructor(public taco: Taco) {
            super();
        }

        public getDescription(): string {
            return this.taco.getDescription() + ", Sour Cream";
        }

        public cost(): number {
            return .50 + this.taco.cost();
        }
    }

    class PicoDeGallo extends CondimentDecorator {
        constructor(public taco: Taco) {
            super();
        }

        public getDescription(): string {
            return this.taco.getDescription() + ", Pico de Gallo";
        }

        public cost(): number {
            return this.taco.cost();
        }
    }

    let taco = new SoftTaco();
    console.log(taco.getDescription()
    + " $" + taco.cost());

    let taco2 = new CrunchyTaco();
    taco2 = new Guac(taco2);
    taco2 = new PicoDeGallo(taco2);
    taco2 = new Cheese(taco2);
    console.log(taco2.getDescription()
    + " $" + taco2.cost());

    let taco3 = new Gordito();
    taco3 = new SourCream(taco3);
    taco3 = new Guac(taco3);
    taco3 = new Cheese(taco3);
    console.log(taco3.getDescription()
    + " $" + taco3.cost());
}
