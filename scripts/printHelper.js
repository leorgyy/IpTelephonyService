import {
    getMinDate,
    getMaxDate,
    getDirectionCallCount,
    getCallFrequency,
    getCallStatistic
} from "./arrayHelper.js";

import {
    elementCreator
} from "./elementCreator.js"

import {
    convertStatistics
} from "./convertHelper.js"

import { 
    checkEmptyValue 
} from "./validatorHelper.js";

/**
 * Печать на страницу.
 */
export class printHelper {

    /**
     * Выводит количество звонков.
     * @param {Array} array Массив звонков.
     */
    static printCountCalls(array) {

        checkEmptyValue(array);

        let incomingCalls = `Количество входящих звонков: ${getDirectionCallCount(array, 'Incoming')}`;
        let upcomingCalls = `Количество исходящих звонков: ${getDirectionCallCount(array, 'Upcoming')}`;
    
        elementCreator.addText(incomingCalls);
        elementCreator.addText(upcomingCalls);
    }
    
    /**
     * Выводит минимальную и максимальную дату.
     * @param {Array} array Массив звонков.
     */
    static printMinMaxDates(array) {

        checkEmptyValue(array);

        let minDate = `Минимальная дата: ${getMinDate(array)}`;
        let maxDate = `Максимальная дата: ${getMaxDate(array)}`;
    
        elementCreator.addText(minDate);
        elementCreator.addText(maxDate);
    }
    
    /**
     * Выводит частоту звонков.
     * @param {Array} array Массив звонков.
     */
    static printCallFrequency(array) {

        checkEmptyValue(array);

        let frequencyCalls = getCallFrequency(array);
    
        elementCreator.addTable("Таблица частотности звонков", frequencyCalls);
    }
    
    /**
     * Выводит статистику звонков по часам.
     * @param {Array} array Массив звонков.
     */
    static printCallStatistics(array) {

        checkEmptyValue(array);

        let callStatistics = convertStatistics(getCallStatistic(array));
    
        elementCreator.addTable("Таблица статистики звонков", callStatistics);
    }
}