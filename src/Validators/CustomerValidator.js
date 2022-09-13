import * as errorMessages from './ErrorMessages';

export default class CustomerValidator {

    static Validate(customer) {

        const errorList = [];
        const firstNameMaxLength = 50;
        const lastNameMaxLength = 50;
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@""]+(\.[^<>()[\]\\.,;:\s@""]+)*)|("".+""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const dateMinValue = new Date(2020, 1, 1);

        if (customer.firstName && customer.firstName.length > firstNameMaxLength) {
            errorList.push(errorMessages.FirstNameMaxLenghtException);
        }

        if (!customer.lastName) {
            errorList.push(errorMessages.LastNameIsRequiredException);
        }

        if (customer.lastName && customer.lastName.length > lastNameMaxLength) {
            errorList.push(errorMessages.LastNameMaxLenghtException);
        }

        if (!customer.addresses.length) {
            errorList.push(errorMessages.AddressMissingException)
        }

        if (!phoneRegex.test(customer.phoneNumber)) {
            errorList.push(errorMessages.IncorrectPhoneNumberFormat);
        }

        if (!emailRegex.test(customer.email)) {
            errorList.push(errorMessages.IncorrectEmailFormat);
        }

        if (!customer.notes.length) {
            errorList.push(errorMessages.NotesMissingException);
        }

        if (customer.totalPurchasesAmount && customer.totalPurchasesAmount < 0) {
            errorList.push(errorMessages.IncorrectTotalPurchasesAmount);
        }

        if (customer.lastPurchaseDate && customer.lastPurchaseDate < dateMinValue) {
            errorList.push(errorMessages.NotValidlastPurchaseDate);
        }

        return errorList;
    }
}
