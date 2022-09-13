import CustomerValidator from '../src/Validators/CustomerValidator';
import * as errorMessages from '../src/Validators/ErrorMessages';
import Customer from '../src/BusinessEntities/Customer';
import Address from '../src/BusinessEntities/Address';


const validAddress = new Address({
    addressLine1: 'Mulholland Drive',
    addressLine2: '13/1',
    addressType: "Billing",
    city: 'Los Angeles',
    postalCode: '90012',
    state: 'Washington',
    country: 'United States',
});

const validCustomer = new Customer({
    firstName: 'John',
    lastName: 'Wayne',
    address: [validAddress],
    phoneNumber: '+12345678911111',
    email: 'johnWayne@gmail.com',
    note: ["note"],
    totalPurchasesAmount: 10.0,
    lastPurchaseDate: new Date(2022, 1, 1),
});

test('Should be able to use CustomerValidator', () => {
    expect(CustomerValidator.Validate(validCustomer)).toBeDefined();
});

test('Should be able to validate a customer with no errors', () => {
    expect(CustomerValidator.Validate(validCustomer).length).toBe(0);
});

test('Should be able to throw an exception when the length of the first name is exceeded', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.firstName = "x".repeat(51);
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.FirstNameMaxLenghtException,
    );
});

test('Should be able to throw an exception when the last name is empty', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.lastName = null;
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.LastNameIsRequiredException,
    );
});

test('Should be able to throw an exception when the length of the last name is exceeded', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.lastName = "x".repeat(51);
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.LastNameMaxLenghtException,
    );
});

test('Should be able to throw an exception when the addresses is empty', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.addresses = null;
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.AddressMissingException,
    );
});

test('Should be able to throw an exception when no addresses', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.addresses = [];
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.AddressMissingException,
    );
});

test('Should be able to throw an exception the phone number format is wrong', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.phoneNumber = "+asdasd123";
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.IncorrectPhoneNumberFormat,
    );
});

test('Should be able to throw an exception when the length of the phone number is exceeded', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.phoneNumber = "+1234567891111111";
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.IncorrectPhoneNumberFormat,
    );
});

test('Should be able to throw an exception when the email format is wrong - @ missing', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.email = 'johnWaynegmail.com';
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.IncorrectEmailFormat,
    );
});

test('Should be able to throw an exception when the email format is wrong - dot missing', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.email = 'johnWayne@gmailcom';
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.IncorrectEmailFormat,
    );
});

test('Should be able to throw an exception when the notes is empty', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.notes = null;
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.NotesMissingException,
    );
});

test('Should be able to throw an exception when no notes', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.notes = [];
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.NotesMissingException,
    );
});

test('Should be able to validate a customer with no errors when Total Purchases Amount is null', () => {
    const someAddress = new Address({
        addressLine1: 'Mulholland Drive',
        addressLine2: '13/1',
        addressType: "Billing",
        city: 'Los Angeles',
        postalCode: '90012',
        state: 'Washington',
        country: 'United States',
    });

    const someCustomer = new Customer({
        firstName: 'Bob',
        lastName: 'Wayne',
        address: [someAddress],
        phoneNumber: '+12345678988888',
        email: 'bobWayne@gmail.com',
        note: ["note"],
        totalPurchasesAmount: null,
        lastPurchaseDate: new Date(2022, 1, 1),
    });
    expect(CustomerValidator.Validate(someCustomer).length).toBe(0);
});

test('Should be able to throw an exception when Total Purchases Amount is not correct', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.totalPurchasesAmount = -1;
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.IncorrectTotalPurchasesAmount,
    );
});

test('Should be able to throw an exception when Last Purchase Date is not valid', () => {
    const invalidCustomer = validCustomer;
    invalidCustomer.lastPurchaseDate = new Date(2010, 1, 1);
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        errorMessages.NotValidlastPurchaseDate,
    );
});

test('Should be able to validate a customer with no errors when Last Purchase Date is null', () => {
    const someAddress = new Address({
        addressLine1: 'Mulholland Drive',
        addressLine2: '13/1',
        addressType: "Billing",
        city: 'Los Angeles',
        postalCode: '90012',
        state: 'Washington',
        country: 'United States',
    });

    const someCustomer = new Customer({
        firstName: 'Marta',
        lastName: 'Wayne',
        address: [someAddress],
        phoneNumber: '+12345678977777',
        email: 'bobWayne@gmail.com',
        note: ["note"],
        totalPurchasesAmount: 100.0,
        lastPurchaseDate: null,
    });
    expect(CustomerValidator.Validate(someCustomer).length).toBe(0);
});