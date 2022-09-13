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

test('Should be able to create Address', () => {
    expect(address).toBeDefined();
});

address.addressLine1 = 'New line1 adr';
test('Should be able to get/set addressLine1', () => {
    expect(address.addressLine1).toBe('New line1 adr');
});

address.addressLine2 = 'New line2 adr';
test('Should be able to get/set addressLine2', () => {
    expect(address.addressLine2).toBe('New line2 adr');
});

address.type = "Shipping";
test('Should be able to get/set addressType', () => {
    expect(address.type).toBe("Shipping");
});

address.city = 'Los Angeles';
test('Should be able to get/set city', () => {
    expect(address.city).toBe('Los Angeles');
});

address.postalCode = '321123';
test('Should be able to get/set postalCode', () => {
    expect(address.postalCode).toBe('321123');
});

address.state = 'Florida';
test('Should be able to get/set state', () => {
    expect(address.state).toBe('Florida');
});

address.country = 'Canada';
test('Should be able to get/set country', () => {
    expect(address.country).toBe('Canada');
});