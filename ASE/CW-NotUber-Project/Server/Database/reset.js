const carEntry = require('./model/carmodel');

const locations = [
    { ID: 'mXfkjrFw', lat: 51.5090562, lng: -0.1304571 },    
    { ID: 'nZXB8ZHz', lat: 51.5080898, lng: -0.07620836346036469 },
    { ID: 'Tkwu74WC', lat: 51.5425649, lng: -0.00693080308689057 },
    { ID: '5KWpnAJN', lat: 51.519821199999996, lng: -0.09397523701275332 },
    { ID: 'uf5ZrXYw', lat: 51.5133798, lng: -0.0889552 },
    { ID: 'VMerzMH8', lat: 51.5253378, lng: -0.033435 },
    { ID: '8efT67Xd', lat: 51.54458615, lng: -0.0161905117168855 } 
];

/* reset flushes the database and re-creates 
the entries with their starting locations */

const resetHandler = () => {

    carEntry.deleteMany({}).then( () => {

        locations.forEach( (location) => {
            let car = new carEntry({
                id: `${location.ID}`,
                isBooked: false,
                currentPosition: { 
                    x: location.lat, 
                    y: location.lng 
                    },
                customerSrc: null,
                customerDest: null
                });
            car.save()
        });    
    });
};

module.exports = resetHandler;
