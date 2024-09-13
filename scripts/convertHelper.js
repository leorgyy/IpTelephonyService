import {
    checkEmptyValue
} from "./validatorHelper.js";

/**
 * Конвертирует словарь статистики звонков в массив объектов. 
 * @param {*} callsStatisticsDictionary Словарь статистики звонков.
 * @returns Отсортированный массив объектов.
 */
export function convertStatistics(callsStatisticsDictionary) { 
    
    checkEmptyValue(callsStatisticsDictionary);

    const result = callsStatisticsDictionary.map(([hour, count]) => {
        const starsArray = Array.from({ length: count }, (_, index) => [`star${index + 1}`, '*']);
        const starsObject = Object.fromEntries(starsArray);
        return { hour, ...starsObject };
    });
    
    console.log(result);

    return result.sort((a, b) => a.hour - b.hour);
}