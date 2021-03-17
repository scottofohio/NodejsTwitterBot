#!/usr/bin/env nodejs

// https://www.npmjs.com/package/twitter 

// required lib, just twitter. 
var Twitter = require('twitter');

// json files with content. 
var nouns = require('./nouns.json');
var phrases  = require('./phrases.json');

// API credentials
var client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY_GOES_HERE',
  consumer_secret: 'YOUR_CONSUMER_SECRET_GOES_HERE',
  access_token_key: 'YOUR_ACCESS_TOKEN_HERE',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET_HERE'
});

// class to work with nouns in phrases.json and create tweet object
class nounGenerator {
  constructor(data) {
    this.data = data;
  }
  nounGenerator() {
    return 'This is a random now noun bot. here is a random noun: ' + this.data["nouns"][Math.floor(Math.random() *  this.data["nouns"].length)];
  }
}

// class to work with phrases in phrases.json and create tweet object
class phraseGenerator {
  constructor(data) {
    this.data = data;
  }
  tweetContent() {
    let randomPhrase =  this.data["phrases"][Math.floor(Math.random() *  this.data["phrases"].length)];;
    let newNoun = randomPhrase.replace('*NOUN*', this.data["nouns"][Math.floor(Math.random() * this.data["nouns"].length)]);    
    let newVerb = newNoun.replace('*VERB*', this.data["verbs"][Math.floor(Math.random() * this.data["verbs"].length)]);
    let newAdjective = newVerb.replace('*ADJECTIVE*', this.data["adjectives"][Math.floor(Math.random() * this.data["adjectives"].length)]);
    let finalPhrase = newAdjective.replace('*ADVERB*', this.data["adverbs"][Math.floor(Math.random() * this.data["adverbs"].length)]);
    return finalPhrase;
  }
}

function postTweet(classObj) { 
  /* This will post a single tweet  
  // on execution on the node server.  
  // Pass a tweet object to do so. */
  client.post('statuses/update', {
    status: classObj.tweetContent()
  }, function(error, tweet, response) {
    if(error)
      console.log(error);
    if (!error)
      console.log(tweet);
  });
}
function tweetTime(frequency, classObj) {
  /* 
  // uses the postTweet() function 
  // pass a number to set a frequency in minutes and the class object
  // Example tweetTIme(15) to send a tweet every 15 minutes 
  */
  var minutes = frequency, 
  the_interval = minutes * 60 * 1000;
  setInterval(function() {
    postTweet(classObj);
  }, the_interval);
}

// post Tweet every 15 minutes with random word 
let nounObj = new nounGenerator(nouns);
tweetTime(15, nounObj);