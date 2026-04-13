class Currency {
    static #VALID_CODES = ['USD', 'EUR', 'GBP', 'JPY'];
    #code

    contructor(code) {
        if (!Currency.#VALID_CODES.includes(code)) {
            throw new Error(`Invalid code: ${code} is not valid`);
        }
    }
}