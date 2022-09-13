import * as errorMessages from './ErrorMessages';

export default class AddressValidator {

    static Validate(address) {

        const errorList = [];
        const addressLine1MaxLength = 100;
        const addressLine2MaxLength = 100;
        const cityNameMaxLength = 50;
        const postalCodeMaxLength = 6;
        const stateNameMaxLength = 20;
        const countries = ['United States', 'Canada'];

        if (!address.addressLine1) {
            errorList.push(errorMessages.AddressLine1IsRequiredException);
        }

        if (address.addressLine1 && address.addressLine1.length > addressLine1MaxLength) {
            errorList.push(errorMessages.AddressLine1MaxLenghtException);
        }

        if (address.addressLine2 && address.addressLine2.length > addressLine2MaxLength) {
            errorList.push(errorMessages.AddressLine2MaxLenghtException);
        }

        if (!address.addressType) {
            errorList.push(errorMessages.AddressTypeRequiredException);
        }

        if (!(address.addressType === "Shipping" || address.addressType === "Billing")) {
            errorList.push(errorMessages.AddressTypeException);
        }

        if (!address.city) {
            errorList.push(errorMessages.CityIsRequiredException);
        }
        if (address.city && address.city.length > cityNameMaxLength) {
            errorList.push(errorMessages.CityMaxLenghtException);
        }

        if (!address.postalCode) {
            errorList.push(errorMessages.PostalCodeIsRequiredException);
        }
        if (address.postalCode && address.postalCode.length > postalCodeMaxLength) {
            errorList.push(errorMessages.PostalCodeMaxLenghtException);
        }

        if (!address.state) {
            errorList.push(errorMessages.StateNameIsRequiredException);
        }
        if (address.state && address.state.length > stateNameMaxLength) {
            errorList.push(errorMessages.StateNameMaxLenghtException);
        }

        if (!address.country) {
            errorList.push(errorMessages.CountryNameIsRequiredException);
        }
        if (address.country && !countries.includes(address.country)) {
            errorList.push(errorMessages.InvalidCountryName);
        }

        return errorList;
    }
}
