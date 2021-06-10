// https://www.learn-js.org/en/Object_Oriented_JavaScript

var Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.describe = function() {
        return this.name + ", " + this.age + " years old";
    };
};
