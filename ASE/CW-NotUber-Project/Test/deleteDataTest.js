const assert = require('assert');
const carEntry = require('../database/model/carmodel');

describe('deletes data', () => {

    it('deletes a record from the database', (done) => {

        carEntry.findOneAndRemove({ id: 'testCar'}).then( () => {
            carEntry.findOne({ id: 'testCar' }).then( (result) => {
                assert(result === null);
                done();
            });
        });
    });

    it('deletes all records from the database', (done) => {
        carEntry.deleteMany({}).then( () => {
            carEntry.findOne({}).then( (result) => {
                assert(result === null);
                done();
            });
        });
    });
});
