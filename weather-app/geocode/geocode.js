const request = require('request');


module.exports.geocodeAddress = (address, callback) => {
    //encodeURIComponent()
    //decodeURIComponent()
    let encodedAddress = encodeURIComponent(address); //took address from user input and encode it

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                Latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            });
        }

    });
};