# Twitter Bot 
Just a simple Node Js Twitter bot that reads from a JSON and outputs tweets. 

## Get Started

### Create API Keys
Create a twitter account you want to use for your bot, then [apply for developer access on that account](https://developer.twitter.com/en/apply-for-access.). Then you will need to generate api keys, and place them into the `app.js` file in the app directory. 


#### Place your keys in this block in `app.js`
``` javascript 
var client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY_GOES_HERE',
  consumer_secret: 'YOUR_CONSUMER_SECRET_GOES_HERE',
  access_token_key: 'YOUR_ACCESS_TOKEN_HERE',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET_HERE'
});
```

### Download NodeJS
[NodeJS](https://nodejs.org/en/download/)
Ultimately you'll need to run this on a server so you'll need node and a daemon process manager like [PM2](https://pm2.keymetrics.io/) or similar to keep the app running.

### Post Tweet

#### Install node modules 
```bash
$ cd /path/to/NodejsTwitterBot
$ npm install
```

### Open `app.js` and add one of the examples at the bottom

#### Open Terminal and run
```bash
$ cd /path/to/NodejsTwitterBot
$ node app.js
```

#### Interval Tweets
``` javascript
// Tweet random phrase every 15 minutes
let phraseObj = new nounGenerator(phrases); 
tweetTime(15, phraseObj); 

// post Tweet every 15 minutes with random word 
let nounObj = new nounGenerator(nouns);
tweetTime(15, nounObj);
```
 
#### Single Tweets 
``` javascript
// tweet single phrase one time 
let phraseObj = new nounGenerator(phrases); 
postTweet(phraseObj);

// post random phrase once 
let nounObj = new nounGenerator(nouns);
postTweet(nounObj); 
```