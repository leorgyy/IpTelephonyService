import {
    checkBoundValue,
    checkEmptyValue
} from "./validatorHelper.js";

/**
 * Удаляет из массива некорректные данные.
 * @param {Array} array Массив.
 * @returns Массив с корректными значениями.
 */
export function removeInvalidItems(array) {
    
    checkEmptyValue(array);
    checkBoundValue(array.length, 0);

    return array.filter(element =>
        (element.CallStart < element.CallEnd)
        && (validatePhoneNumber(element.Phone))
        && (validateInternalPhone(element.InternalPhone))
    )
}

/**
 * Проверяет номер телефона на правильность.
 * @param {string} stringPhone Строка с номером телефона.
 * @returns Результат сравнения.
 */
export function validatePhoneNumber(stringPhone) {

    var expression = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    return expression.test(stringPhone);
}

/**
 * Проверяет внутренний номер телефона на правильность.
 * @param {string} stringPhone Строка с номером телефона.
 * @returns Результат сравнения.
 */
export function validateInternalPhone(stringPhone) {

    var expression = /^\d{5}$/;

    return expression.test(stringPhone);
}

/**
 * Получает количество звонков с заданным направлением.
 * @param {Array} arrayCalls Массив со звонками.
 * @param {string} directionCall Направление.
 * @returns Количество звонков по заданному направлению.
 */
export function getDirectionCallCount(arrayCalls, directionCall) {

    checkEmptyValue(arrayCalls);
    checkBoundValue(arrayCalls.length, 0);

    checkEmptyValue(directionCall);
    checkBoundValue(directionCall.length, 0);

    let count = 0;

    for (let i = 0; i < arrayCalls.length; i++) {
        if (arrayCalls[i].Direction === directionCall) {
            count++;
        }
    }

    return count;
}

/**
 * Получает минимальную дату звонка.
 * @param {Array} arrayCalls Массив звонков.
 * @returns Минимальная дата.
 */ 
export function getMinDate(arrayCalls) {
    
    checkEmptyValue(arrayCalls);
    checkBoundValue(arrayCalls.length, 0);

    let minDate = convertStringToDate(arrayCalls[0].CallStart);

    for (let i = 0; i < arrayCalls.length; i++) {
        let callStart = convertStringToDate(arrayCalls[i].CallStart);

        if (minDate > callStart) {
            minDate = callStart;
        }
    }

    return minDate;

}

/**
 * Получает максимальную дату звонка.
 * @param {Array} arrayCalls Массив звонков.
 * @returns Максимальная дата.
 */
export function getMaxDate(arrayCalls) {

    checkEmptyValue(arrayCalls);
    checkBoundValue(arrayCalls.length, 0);

    let maxDate = convertStringToDate(arrayCalls[0].CallEnd);

    for (let i = 0; i < arrayCalls.length; i++) {
        let callEnd = convertStringToDate(arrayCalls[i].CallEnd);

        if (maxDate < callEnd) {
            maxDate = callEnd;
        }
    }

    return maxDate;
}

/**
 * Перевод строки в дату.
 * @param {string} dateString Строка.
 * @returns Правильная дата.
 */
export function convertStringToDate(dateString) {

    checkEmptyValue(dateString);

    let arrayFromString = dateString.split(' ');

    let time = arrayFromString[1];
    let date = arrayFromString[0].split('/');

    let year = date[2];
    let month = date[1];
    let day = date[0];

    return new Date(`${year}-${month}-${day} ${time}`);
}

/**
 * Получает список частоты звонков по убыванию.
 * @param {Array} callsArray Массив со звонками.
 * @returns Массив частотности звонков.
 */
export function getCallFrequency(callsArray) {

    let newDictionary = {};

    callsArray.forEach(element => {
        if (element.Phone in newDictionary) {
            newDictionary[element.Phone]++;
        } else {
            newDictionary[element.Phone] = 1;
        }

        if(element.InternalPhone in newDictionary) {
            newDictionary[element.InternalPhone]++;
        }  else {
            newDictionary[element.InternalPhone] = 1;
        }
    })

    let result = Object.entries(newDictionary);
    result.sort((a, b) => a[1] - b[1]);

    return result;
}

/**
 * Получает статистику звонков по времени.
 * @param {Array} callsArray Массив с звонками.
 * @returns Статистика распределения звонков по времени.
 */
export function getCallStatistic(callsArray) {

    checkEmptyValue(callsArray);
    checkBoundValue(callsArray.length, 0);

    const startTime = 0;
    const endTime = 24;

    let callsDictionary = {};

    for (let i = startTime; i < endTime; i++) {
        let counter = 0;

        callsArray.forEach(element => {

            if (convertStringToDate(element.CallStart).getHours() === i) {
                counter++;
            }
        })

        if (counter > 0) {
            callsDictionary[i] = counter;
        }
    }

    let result = Object.entries(callsDictionary);
    result.sort((a,b) => a > b);

    return result;
}