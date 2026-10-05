/*У файлі [task5.js](task5.js)
1. Створіть новий об'єкт `tv`;
2. Додайте властивість `currentChannel` зі значенням `1`;
3. Додайте метод `nextChannel()`, який збільшує `currentChannel` на одиницю;
4. Додайте метод `previousChannel()`, який зменшує поточний `currentChannel` на
одиницю;
5. Додати метод `setChannel(number)`, який переходить на канал за номером.*/
let tv = {
    currentChannel: 1,
    nextChannel: function(){
        this.currentChannel++;
    },
    previousChannel: function(){
        this.currentChannel--;
    },
    setChannel: function(number){
        this.currentChannel = number;
    }                   
};



