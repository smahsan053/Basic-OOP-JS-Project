export class Person {
    // Declare a field to represent the personality
    private personality: string;

    // constructor
    constructor() {
        this.personality = 'Mystery'
    }
    AskQuestion(answer: number): void {
        if (answer === 1) {
            this.personality = 'Extrovert'
        } else if (answer === 2) {
            this.personality = 'Introvert'
        } else {
            this.personality = 'You are still a Mystery'
        }
    }
    // This method returns the value of the personality
    GetPersonality(): string {
        return this.personality
    }
}

export class Student extends Person {
    // here we can either read or write data
    // private field (backig field) hold any data assigned to Name property
    private _name: string
    // public Name:string
    constructor() {
        super()
        this._name = ''
    }
    // This is the Name Property
    // use get accessor to read data from class
    get Name(): string {
        return this._name
    }

    set Name(value: string) {
        // The value property of the set accessor is automatically created by the compiler
        this._name = value

    }
}

