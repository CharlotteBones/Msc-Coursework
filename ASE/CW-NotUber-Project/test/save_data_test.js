const assert = require('assert');
const carEntry = require('../database/model/carmodel');

describe('testing database', () => {

    it('saves a record to database', (done) => {

        let car = new carEntry({
            id: 'testCar',
            isBooked: true,
            currentPosition: { x: 0, y: 0 }
        });

        car.save().then( () => {
            assert(car.isNew === false);
            done();
        });
    });
});