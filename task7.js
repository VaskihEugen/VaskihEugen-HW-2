/*У файлі [task7.js](task7.js) є об'єкт `salaries` з зарплатами. Напишіть код, який виведе середнє значення всіх зарплат. Код має працювати з різною кількістю зарплат в об'єкті
```js
let salaries = {
  John: 100,
  Bill: 300,
  Mike: 250
};
let salaries = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50
};
```*/
let salaries1 = {
  John: 100,
  Bill: 300,
  Mike: 250
};
let salaries2 = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50
};

function averageSalary(salaries) {
  let totalSalary = 0;
  let count = 0;
    for (let key in salaries) {
        totalSalary += salaries[key];
        count++;
    }
    return totalSalary / count;
}

console.log(averageSalary(salaries1));
console.log(averageSalary(salaries2));