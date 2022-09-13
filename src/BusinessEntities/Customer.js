import Person from './Person'

export default class Customer extends Person {

    #Addresses = [];
    #PhoneNumber = null;
    #Email = null;
    #Notes = [];
    #TotalPurchasesAmount = null;
    #LastPurchaseDate = null;

    constructor({
                    firstName,
                    lastName,
                    address,
                    phoneNumber,
                    email,
                    note,
                    totalPurchasesAmount,
                    lastPurchaseDate,
                }) {
        super(firstName, lastName)
        this.#Addresses = address
        this.#PhoneNumber = phoneNumber
        this.#Email = email
        this.#Notes = note
        this.#TotalPurchasesAmount = totalPurchasesAmount
        this.#LastPurchaseDate = lastPurchaseDate
    }

    get addresses() {
        return this.#Addresses;
    }

    set addresses(addresses) {
        this.#Addresses = addresses;
    }

    get phoneNumber() {
        return this.#PhoneNumber;
    }

    set phoneNumber(phoneNumber) {
        this.#PhoneNumber = phoneNumber;
    }

    get email() {
        return this.#Email;
    }

    set email(email) {
        this.#Email = email;
    }

    get notes() {
        return this.#Notes;
    }

    set notes(note) {
        this.#Notes = note;
    }

    get totalPurchasesAmount() {
        return this.#TotalPurchasesAmount;
    }

    set totalPurchasesAmount(totalPurchasesAmount) {
        this.#TotalPurchasesAmount = totalPurchasesAmount;
    }

    get lastPurchaseDate() {
        return this.#LastPurchaseDate;
    }

    set lastPurchaseDate(lastPurchaseDate) {
        this.#LastPurchaseDate = lastPurchaseDate;
    }
}