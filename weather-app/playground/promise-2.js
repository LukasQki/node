const request = require('request');


let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address); //took address from user input and encode it

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }

        });
    })
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});