// import { Random } from 'random-test-values';
import CustomerValidator from '../src/Validators/CustomerValidator';
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