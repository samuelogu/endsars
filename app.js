const cron = require("node-cron");
const express = require("express");
const dotenv = require('dotenv');
const tweets = require('./tweets')


    dotenv.config();

app = express()

const Twitter = require('twitter');

const twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


const mainHashtag = "#EndSARS"
const hashtags = require('./hashtags')

// schedule tweet to been sent from the server every minute
cron.schedule("* * * * *", async function() {
    const tweet = tweets[Math.floor(Math.random() * tweets.length)] + " "+mainHashtag+" "+hashtags[Math.floor(Math.random() * hashtags.length)]
    twitter.post('statuses/update', {status: tweet}, (error, tweet, response) => {

    });

});

app.listen(3128);