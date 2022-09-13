import AddressValidator from '../src/Validators/AddressValidator';
import * as errorMessages from '../src/Validators/ErrorMessages';
import Address from '../src/BusinessEntities/Address';

const someValidAddress = new Address({
    addressLine1: 'Lincolnn str',
    addressLine2: '2/5',
    addressType: "Billing",
    city: 'Ontario',
    postalCode: '32112',
    state: 'Washington',
    country: 'Canada',
});

test('Should be able to use AddressValidator', () => {
    expect(AddressValidator.Validate(someValidAddress)).toBeDefined();
});

test('Should be able to validate an address with no errors', () => {
    expect(AddressValidator.Validate(someValidAddress).length).toBe(0);
});

test('Should be able to throw an exception when the address line1 is empty', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.addressLine1 = null;
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.AddressLine1IsRequiredException,
    );
});

test('Should be able to throw an exception when the length of the address line1 is exceeded', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.addressLine1 = "x".repeat(101);
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.AddressLine1MaxLenghtException,
    );
});

test('Should be able to throw an exception when the length of the address line2 is exceeded', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.addressLine2 = "x".repeat(101);
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.AddressLine2MaxLenghtException,
    );
});

test('Should be able to throw an exception when the addressType is empty', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.addressType = null;
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.AddressTypeRequiredException,
    );
});

test('Should be able to throw an exception when the addressType is wrong', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.addressType = "half-Shipping";
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.AddressTypeException,
    );
});

test('Should be able to throw an exception when the city name is empty', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.city = null;
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.CityIsRequiredException,
    );
});

test('Should be able to throw an exception when the length of the city is exceeded', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.city = "x".repeat(51);
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.CityMaxLenghtException,
    );
});

test('Should be able to throw an exception when the postal code is empty', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.postalCode = null;
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.PostalCodeIsRequiredException,
    );
});

test('Should be able to throw an exception when the length of the postal code is exceeded', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.postalCode = "x".repeat(7);
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.PostalCodeMaxLenghtException,
    );
});

test('Should be able to throw an exception when the state name is empty', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.state = null;
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.StateNameIsRequiredException,
    );
});

test('Should be able to throw an exception when the length of the state name is exceeded', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.state = "x".repeat(22);
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.StateNameMaxLenghtException,
    );
});

test('Should be able to throw an exception when the country name is empty', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.country = null;
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.CountryNameIsRequiredException,
    );
});

test('Should be able to throw an exception when the country name is wrong', () => {
    const invalidAddress = someValidAddress;
    invalidAddress.country = "China";
    expect(AddressValidator.Validate(invalidAddress)).toContain(
        errorMessages.InvalidCountryName,
    );
});