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

const tweets = [
    "I'm not a criminal if I use an Iphone",
    "I hate police brutality",
    "This is long overdue",
    "Enough is enough",
    "Bitcoin is not a crime",
    "Being a web developer is not a crime",
    "Being a graphics designer is not a crime",
    "Being young and successful is not a crime",
    "Being a forex trader is not a crime",
    "Ifeoma Abugu was raped and murdered while in detention #RIP",
    "Chibuike Anams was killed while sitting with his friends in a guest house #RIP",
    "Aneka Okorie was killed because he refused to pay bribe ‪🤦🏽‍ #RIP",
    "Christian Ugwuoke was killed while attending a wake keep for his aunt #RIP",
    "It could be you",
    "No reforming!!! Just end it!!!"
]

const hastags = "#EndSARS #EndSarsNow #EndPoliceBrutality #EndSARSBrutality"

// schedule tweet to been sent from the server every minute
cron.schedule("* * * * *", async function() {
    const tweet = tweets[Math.floor(Math.random() * tweets.length)] + " "+hastags
    console.log(tweet);
    /*twitter.post('statuses/update', {status: tweet}, (error, tweet, response) => {

    });*/

});

app.listen(3128);