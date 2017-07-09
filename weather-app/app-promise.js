const yargs = require('yargs');
const axios = require('axios');

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

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    let lat = response.data.results[0].geometry.location.lat;
    let lnt = response.data.results[0].geometry.location.lng;
    let weatherURL = `https://api.darksky.net/forecast/37b39c1bb175d57ccf2dba1cb4e9438c/${lat},${lnt}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's curently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
    if(e.code ==='ENOTFOUND') {
        console.log('Unable to connect API servers.');
    } else {
        console.log(e.message);
    }
});