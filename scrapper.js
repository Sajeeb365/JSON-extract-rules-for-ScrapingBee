const request = require('request');

const api_key = 'your_api_key';
const url = 'https://www.chrono24.com/dealer/filipucci/index.htm';

const extract_rules = [
    "a.b-watch-card__link",
    "div.b-watch-card__brand",
    "div.b-watch-card__model",
    "div.b-watch-card__price",
    "img.b-watch-card__img"
];

const options = {
    url: 'https://app.scrapingbee.com/api/v1/scrape',
    headers: { 'Authorization': 'Token ' + api_key },
    json: {
        url: url,
        extract_rules: extract_rules
    }
};

request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});
