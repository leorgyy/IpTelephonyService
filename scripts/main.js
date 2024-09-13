import {
    removeInvalidItems,
} from "./arrayHelper.js";

import {
    getJsonFromFile
} from "./jsonConverter.js";

import {
    printHelper
} from "./printHelper.js"

/**
 * Путь файла.
 */
const filePath = "./files/iptele-log.json"

printResult(filePath);

/**
 * Вывод результатов.
 * @param {string} filePath Путь к json файлу.
 */
function printResult(filePath) {

    getJsonFromFile(filePath).then(array => {
        let correctArray = removeInvalidItems(array);

        printHelper.printMinMaxDates(correctArray)

        printHelper.printCountCalls(correctArray);
        
        printHelper.printCallFrequency(correctArray);

        printHelper.printCallStatistics(correctArray);
    });
}