const carEntry = require('../database/model/carmodel');


/* this function works out where the car 
needs to go and updates individual cars */

const carInc = (car, currentDest) => {

    let a = 0.01
    let b = 0.01
    let current = car.currentPosition;


    if (Math.round((current.x * 100)) === Math.round((currentDest.x * 100))) {
        a = null
    } else if (current.x > currentDest.x) {
        a = -0.01
    }

    if (Math.round((current.y * 10)) === Math.round((currentDest.y * 10))) {
        b = null
    } else if (current.y > currentDest.y) {
        b = -0.01
    }

    let updates = { $inc: { 'currentPosition.x': a, 'currentPosition.y': b } }

    if (a === null && b === null) {
        if (car.customerSrc != null) {
            updates = { customerSrc: null }
        } else {
            updates = { isBooked: false, customerDest: null, customerSrc: null }
        }
    } else if (a === null && typeof(b) === 'number') {
        updates = { $inc: {'currentPosition.y': b } }
    } else if (b === null && typeof(a) === 'number') {
        updates = { $inc: {'currentPosition.x': a } }
    } 
    console.log(updates);

    carEntry.findOneAndUpdate({ id: `${car.id}` },  updates )
    .then( (result) => {});

};

/* tickHandler finds all booked cars and finds out where 
they are going before sending the result at the end */

const tickHandler = (res) => {

    carEntry.find({ isBooked: true }).then( (result) => {
        result.forEach( (car) => {

            console.log(car)
            let dest = car.customerDest;
            let src = car.customerSrc;
            console.log(car);
        
            if (src === null) {
                carInc(car, dest);
            } else {
                carInc(car, src);
            }
        });
    });
    carEntry.find({isBooked: true}).then( (result) => {
        res.send(result);
    });
};

module.exports = tickHandler;
