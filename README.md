#Twitter #ENDSARS bot
This is a simple twitter cron bot to send a tweet every minute from your twitter account. Feel free to send a pull request 😁

## Installation & Setup ##
`git clone https://github.com/samuelogu/endsars.git`

`cd endsars`

`npm i`

`touch .env`

You will need valid Twitter developer credentials in the form of a set of consumer and access tokens/keys. You can get these [here](https://apps.twitter.com/). Do not forgot to adjust your permissions - most POST request require write permissions. Put in your access tokens/keys in the `.env` file.

```javascript
TWITTER_CONSUMER_KEY=**********************
TWITTER_CONSUMER_SECRET=*****************************************
TWITTER_ACCESS_TOKEN_KEY=*****************************************
TWITTER_ACCESS_TOKEN_SECRET=*****************************************
```

Available tweets can be found in the `app.js` file as an array. Add as much as you need.

```
const tweets = [
    "I'm not a criminal if I use an Iphone",
    "I hate police brutality"
]
```

Add hashtags of your choice 

```
const hastags = "#EndSARS #EndSarsNow #EndPoliceBrutality #EndSARSBrutality"
```

`npm install forever -g`

`forever start app.js`

This will start a cron job on your server and send a tweet every minute. Use based on your discretion.

