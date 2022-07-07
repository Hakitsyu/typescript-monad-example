export class Monad<T> {
    private _value?: T;

    // Defining default value
    constructor(value?: T) {
        this._value = value;
    }

    bind<RT>(func: (obj: T) => RT) {
        const result = this.value ? func(this.value) : undefined;
        return new Monad<RT>(result);
    }

    get isEmpty() {
        return !this._value;
    }

    get value(): T | undefined {
        return this._value;
    }
}