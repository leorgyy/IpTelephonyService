/**
 * Проверяет число на граничное значение.
 * @param {Number} value
 * @param {Number} boundValue
 */
export function checkBoundValue(value, boundValue) {
    if (value < boundValue) {
        let message = `${value} не должно быть меньше ${boundValue}`;
        alert(message);
        throw Error(message);
    }
}

/**
 * Проверяет значение на пустоту.
 * @param {any} value
 */
export function checkEmptyValue(value) {
    if (!value) {
        let message = `${value} не должно быть пустым`;
        alert(message);
        throw Error(message);
    }
}