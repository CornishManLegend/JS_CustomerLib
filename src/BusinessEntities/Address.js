export default class Address {

    #AddressLine1
    #AddressLine2
    #Type
    #City
    #PostalCode
    #State
    #Country

    constructor({
                    addressLine1,
                    addressLine2,
                    addressType,
                    city,
                    postalCode,
                    state,
                    country,
                }) {
        this.#AddressLine1 = addressLine1
        this.#AddressLine2 = addressLine2
        this.#Type = addressType
        this.#City = city
        this.#PostalCode = postalCode
        this.#State = state
        this.#Country = country
    }

    get addressLine1() {
        return this.#AddressLine1;
    }

    set addressLine1(addressLine1) {
        this.#AddressLine1 = addressLine1;
    }

    get addressLine2() {
        return this.#AddressLine2;
    }

    set addressLine2(addressLine2) {
        this.#AddressLine2 = addressLine2;
    }

    get type() {
        return this.#Type;
    }

    set type(addressType) {
        this.#Type = addressType;
    }

    get city() {
        return this.#City;
    }

    set city(city) {
        this.#City = city;
    }

    get postalCode() {
        return this.#PostalCode;
    }

    set postalCode(postalCode) {
        this.#PostalCode = postalCode;
    }

    get state() {
        return this.#State;
    }

    set state(state) {
        this.#State = state;
    }

    get country() {
        return this.#Country;
    }

    set country(country) {
        this.#Country = country;
    }
}