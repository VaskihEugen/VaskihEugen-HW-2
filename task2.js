
/*У файлі [task2.js](task2.js) напишіть рекурсивну функцію `digitSum(k)`, яка знаходить суму цифр цілого числа `k`.
*/
let k = 52;
function digitSum(k) {
    k = Math.abs(k);
    if (k < 10) {
        return k;
    }
    return k%10 + digitSum(Math.floor(k/10));

}

console.log(digitSum(k));