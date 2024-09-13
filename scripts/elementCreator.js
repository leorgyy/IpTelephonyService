import {
    checkEmptyValue
} from "./validationHelper.js";

/**
 * Создатель элементов.
 */
export class elementCreator {

    /**
     * Добавляет таблицу на страницу.
     * @param {string} tableHeader Название таблицы.
     * @param {Array} objectArray Массив объектов.
     */
    static addTable(tableHeader, objectArray) {

        checkEmptyValue(objectArray);
        checkEmptyValue(tableHeader);

        let table = document.createElement("table");
        let caption = table.createCaption();
        caption.textContent = tableHeader;

        let keys = Object.keys(objectArray[0]);
        let body = document.createElement("tbody");

        objectArray.forEach(item => {
            let row = document.createElement("tr");
            
            keys.forEach(key => {
                let cell = document.createElement("td");
                cell.textContent = item[key];

                if (cell.textContent === "*") {
                    cell.style.backgroundColor = "green";
                }
                row.appendChild(cell);
            });

            body.appendChild(row);
        });

        table.appendChild(body);
        document.body.appendChild(table);
    }

    /**
     * Добавляет текст на страницу.
     * @param {string} text Добавляемый текст.
     */
    static addText(text) {
        checkEmptyValue(text);

        let paragraph = document.createElement("p");
        paragraph.textContent = text;
        
        document.body.appendChild(paragraph);
    }
}