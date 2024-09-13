import {
    checkEmptyValue,
} from "./validatorHelper.js"

/**
 * Получаем промис с массивом объектов из json файла.
 * @param {string} filePath
 * @returns Ошибка файла.
 */
export async function getJsonFromFile(filePath) {
    
    checkEmptyValue(filePath);

	return new Promise((resolve, reject) => {
        fetch(filePath)
        .then(response => {
            
            checkEmptyValue(response);
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}