const express = require('express');
const router = express.Router();
const carEntry = require('../database/model/carmodel')
const bookingHandler = require('../database/book');
const tickHandler = require('../database/tick');
const resetHandler = require('../database/reset');


// get status
router.get('/status', (req, res) => {
    carEntry.find({}).then( (cars) => {
        res.send(cars);
    });
});

// make a booking
router.post('/book', (req, res) => {
    bookingHandler(req.body, res);
});

// ticker
router.put('/tick', (req, res) => {
    tickHandler(res);
});

// delete
router.delete('/reset', (req, res) => {
    resetHandler();
    res.send('All bookings have been cancelled');
    
});

module.exports = router;
