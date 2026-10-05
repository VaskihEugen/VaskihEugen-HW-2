/*У файлі [task3.js](task3.js) 
1. Створіть новий об'єкт `user`;
2. Додайте властивість `name` із значенням `Cris`;
3. Додайте властивість `surname` зі значенням `Simons`;
4. Змініть значення name на `Brain`;
5. Видаліть властивість `name` з об'єкта.*/
let user = {
    name: "Cris",
    surname: "Simons"
};
user.name = "Brain";
delete user.name;
console.log(user);

