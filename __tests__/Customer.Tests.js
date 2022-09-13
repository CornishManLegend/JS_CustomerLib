import Customer from '../src/BusinessEntities/Customer';
import Address from '../src/BusinessEntities/Address';

const address = new Address({
    addressLine1: 'Mulholland Drive',
    addressLine2: '13/1',
    addressType: "Billing",
    city: 'Los Angeles',
    postalCode: '90012',
    state: 'Washington',
    country: 'United States',
});

const customer = new Customer({
    firstName: 'John',
    lastName: 'Wayne',
    address: [address],
    phoneNumber: '+12345678911111',
    email: 'johnWayne@gmail.com',
    note: ["note"],
    totalPurchasesAmount: 10.0,
    lastPurchaseDate: new Date(2022, 1, 1),
});

test('Should be able to create Customer', () => {
    expect(customer).toBeDefined();
});

customer.firstName = 'John2';

test('Should be able to get/set firstName', () => {
    expect(customer.firstName).toBe('John2');
});

customer.lastName = 'Wayne2';

test('Should be able to get/set lastname', () => {
    expect(customer.lastName).toBe('Wayne2');
});

const address2 = new Address({
    addressLine1: 'Lincolnn str',
    addressLine2: '2/5',
    addressType: "Shipping",
    city: 'Ontario',
    postalCode: '32112',
    state: 'Washington',
    country: 'Canada',
});

customer.addresses = [address, address2];

test('Should be able to get/set addresses', () => {
    expect(customer.addresses.length).toBe(2);
});

customer.phoneNumber = '+12345678922222';

test('Should be able to get/set phoneNumber', () => {
    expect(customer.phoneNumber).toBe('+12345678922222');
});

customer.email = 'johnWayne2@gmail.com';

test('Should be able to get/set email', () => {
    expect(customer.email).toBe('johnWayne2@gmail.com');
});

customer.notes = ['some note1', 'note2'];

test('Should be able to get/set notes', () => {
    expect(customer.notes.length).toBe(2);
});

customer.totalPurchasesAmount = 1;

test('Should be able to get/set totalPurchasesAmount', () => {
    expect(customer.totalPurchasesAmount).toBe(1);
});

customer.lastPurchaseDate = new Date('2022-02-02');

test('Should be able to get/set lastPurchaseDate', () => {
    expect(customer.lastPurchaseDate.getTime()).toBe(
        new Date('2022-02-02').getTime())
});