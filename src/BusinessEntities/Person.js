export default class Person {

    #FirstName = null;
    #LastName = null;

    constructor(firstName, lastName) {
        this.#FirstName = firstName;
        this.#LastName = lastName;
    }

    get firstName() {
        return this.#FirstName;
    }

    set firstName(firstName) {
        this.#FirstName = firstName;
    }

    get lastName() {
        return this.#LastName;
    }

    set lastName(lastName) {
        this.#LastName = lastName;
    }
}



