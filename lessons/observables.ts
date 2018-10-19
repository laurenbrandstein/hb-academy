interface IObservable {
    registerObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObserver(observer: IObserver): void;
    observers: IObserver[];
}

interface IObserver {
    update(temperature: number, humidity: number, pressure: number): void;
}

interface IDisplayElement {
    display(): void;
}

class WeatherStation implements IObservable {
    constructor(temperature: number, humidity: number, pressure: number, observers: IObserver[]) {
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperature = temperature;
        this.observers = [...observers];
    }

    public humidity: number;
    public pressure: number;
    public temperature: number;
    public observers: IObserver[];

    public registerObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        this.observers = [
            ...this.observers.slice(0, index),
            ...this.observers.slice(index + 1)
        ]
    }

    public notifyObserver(observer: IObserver): void {
        // @TODO: for each observer, call their update function with my new values
        // @TODO: need a self-updater/value setter
    }
}

class WeatherChart implements IObserver {
    constructor(temperature: number, humidity: number, pressure: number) {
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperature = temperature;
    }

    public humidity: number;
    public pressure: number;
    public temperature: number;

    public update(temperature: number, humidity: number, pressure: number): void {
        this.setValues(temperature, humidity, pressure);
        this.updateDisplay();
    }

    public setValues(temperature: number, humidity: number, pressure: number): void {
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperature = temperature; 
    }

    public updateDisplay(): void {
        console.log(` ~*~ ~*~ ~*~ ~*~ ~*~ ~*~ ~*~ `);
        console.log(`Today's humidity is ${this.humidity}%.\n`);
        console.log(`Today's pressure is ${this.pressure}%.\n`);
        console.log(`Today's temperature is ${this.temperature}%.\n`);
        console.log(` ~*~ ~*~ ~*~ ~*~ ~*~ ~*~ ~*~ `);
    }
}
