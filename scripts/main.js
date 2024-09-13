import {
    removeInvalidItems,
} from "../../Task4/scripts/arrayHelper.js";

import {
    getJsonFromFile
} from "../../Task4/scripts/jsonConverter.js";

import {
    printHelper
} from "./printHelper.js"

/**
 * Путь файла.
 */
const filePath = "../../Task4/files/iptele-log.json"

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