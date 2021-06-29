const assert = require('assert');
const carEntry = require('../database/model/carmodel');

describe('finding data', () => {

    it('finds a record', (done) => {

        carEntry.findOne({ id: 'testCar' }).then( (result) => {
            assert(result.id === 'testCar');
            done();
        });
    });
});