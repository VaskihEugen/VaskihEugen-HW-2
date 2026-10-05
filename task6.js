/*У файлі [task6.js](task6.js) створіть функцію `isEmpty(obj)`, яка повертає `true`, якщо в об'єкті немає властивостей
та `false` – якщо хоч одна властивість є.*/
let obj = {};
function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;   
}
console.log(isEmpty(obj));

