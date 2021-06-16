const carEntry = require("./model/carmodel");

/* pythag is to work out point to point distances 
from the car's location to the customer */

const pythag = (x, y) => {

    let x2 = (Math.abs(x) ** 2);
    let y2 = (Math.abs(y) ** 2);
    let Coord = Math.sqrt( x2 + y2);

    return Coord
};

/* bookingHandler finds all cars that are not booked and calls 
the appropriate function based on how many cars are returned */

bookingHandler = (req, res) => {

    carEntry.find({ isBooked: false }).then( (result) => {
        if ( result.length === 0 ) {
            res.send('Sorry there are no cars available')
        } else if ( result.length === 1 ) {
            bookCar(`${result[0].id}`, req, res);
        } else {
            findClosest(result, req, res);
        }
    });
};

/* findClosest sorts through the pythag results to 
call the booking function for the closest car */

const findClosest = (cars, req, res) => {

    let customerDist = req.source.x + req.source.y
    let closestCar = { dist: 1000, id: ''};
    
    cars.forEach( (car) => {
        let carDist = car.currentPosition.x + car.currentPosition.y;
        carDist = pythag(customerDist, carDist); 

        if ( closestCar.dist > carDist) {
            closestCar.dist = carDist
            closestCar.id = `${car.id}`
        }
    });

    return bookCar(closestCar.id, req, res);
};

// bookCar then creates the booking and sends the response

const bookCar = (car, req, res) => {
    carEntry.findOneAndUpdate( { id: car }, { 
        isBooked: true, 
        customerSrc: { x: req.source.x, y: req.source.y }, 
        customerDest: { x: req.destination.x, y: req.destination.y } 
    }).then(res.send(car));
};

module.exports = bookingHandler;
