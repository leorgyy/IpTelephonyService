/**
 * Конвертирует словарь статистики звонков в массив объектов. 
 * @param {*} callsStatisticsDictionary Словарь статистики звонков.
 * @returns Отсортированный массив объектов.
 */
export function convertStatistics(callsStatisticsDictionary) {
    let result = Object.entries(callsStatisticsDictionary).map(([hour, count]) => ({
        hour,
        ...Object.fromEntries(Array(count).fill('*').map((_, index) => [`star${index + 1}`, '*']))
    }));

    return result.sort((a, b) => a.hour - b.hour);
}