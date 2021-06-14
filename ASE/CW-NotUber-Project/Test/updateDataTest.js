const assert = require('assert');
const carEntry = require('../database/model/carmodel');

describe('update data', () => {

    it('updates a record from the database', (done) => {
        
        carEntry.findOneAndUpdate({ id: 'testCar' },  { id: 'newTestCar', currentPosition: { x: 1, y: 1 } }).then( () => {
            carEntry.findOne({ id: 'nZXB8ZHz' }).then( (result) => {
                assert(result.id === 'nZXB8ZHz');
                done();
            });
        });
    });

    it('increments current position by 1', (done) => {
        
        carEntry.findOneAndUpdate({ id: 'newtestCar' },  { $inc: { 'currentPosition.x': 1, 'currentPosition.y': 1 } }).then( () => {
            carEntry.findOne({ id: 'testCar' }).then( (result) => {
                assert(result.currentPosition.x === 2);
                done();
            });
        });
    });
});
