const cron = require("node-cron");
const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

app = express()

const Twitter = require('twitter');

const twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// schedule tasks to be run on the server at 08:30 am"
cron.schedule("30 7 * * *", async function() {


});

app.listen(3128);

var stream = twitter.stream('statuses/filter', {track: '#ENDSARS'});

stream.on('data', function(event) {
    console.log(event && event.text);
});

stream.on('error', function(error) {
    throw error;
});