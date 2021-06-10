// https://www.learn-js.org/en/Destructuring

const person = {
    head: {
        eyes: 'x',
        mouth: {
            teeth: 'x',
            tongue: 'x'
        }
    },
    body: {
        shoulders: 'x',
        chest: 'x',
        arms: 'x',
        hands: 'x',
        legs: 'x'
    }   
};

const numbers = ['2', '3', '4'];

let { legs: myLegs } = person.body;
let [firstPosition, secondPosition ,thirdPosition] = numbers;

console.log(myLegs);
console.log(thirdPosition);
