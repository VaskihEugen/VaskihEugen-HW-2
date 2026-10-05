/*У файлі [task4.js](task4.js) 
1. Створіть новий об'єкт `car`;
2. Додайте властивість `model` з будь-яким значенням;
3. Додайте властивість `speed` з будь-яким значенням;
4. Додати метод `run()`, який виводить повідомлення: "model їде зі швидкістю
speed";
5. Додайте метод `stop()`, який виводить повідомлення: "model зупинилася";*/
let car = {
    model: "BMW",
    speed: 200,
    run: function() {
        console.log(car.model + " їде зі швидкістю " + car.speed);
    },
    stop: function(){
        console.log(car.model + " зупинилася");
    }
};
car.run();
car.stop();

