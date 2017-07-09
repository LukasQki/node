const request = require('request');

let getWeather = (lat, lnt, callback) => {
    request({
        url: `https://api.darksky.net/forecast/37b39c1bb175d57ccf2dba1cb4e9438c/${lat},${lnt}`,
        json: true
    } , (error, response, body) => {
        if (error) {
            callback('Unable to connect to forecast.io servers');
        } else if (!error && response.statusCode === 200) {
            callback(undefined, {
            temprature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch ewather');
        }

    });
};

module.exports.getWeather = getWeather;

