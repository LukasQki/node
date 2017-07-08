const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        // console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude,(errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                // console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`its currently ${weatherResults.temprature}. It feels like ${weatherResults.apparentTemperature}`);
            };
        });
    }
});




// 37b39c1bb175d57ccf2dba1cb4e9438c