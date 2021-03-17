#!/usr/bin/env nodejs

// https://www.npmjs.com/package/twitter 

var Twitter = require('twitter');
var tweet_one_words = require('./content.json');

var client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY_GOES_HERE',
  consumer_secret: 'YOUR_CONSUMER_SECRET_GOES_HERE',
  access_token_key: 'YOUR_ACCESS_TOKEN_HERE',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET_HERE'
});

class GenerateTweet {
  constructor(data) {
    this.data = data;
  }
  CreateTweet() {
    let randomPhrase =  this.data["phrases"][Math.floor(Math.random() *  this.data["phrases"].length)];;
    let newNoun = randomPhrase.replace('*NOUN*', this.data["nouns"][Math.floor(Math.random() * this.data["nouns"].length)]);    
    let newVerb = newNoun.replace('*VERB*', this.data["verbs"][Math.floor(Math.random() * this.data["verbs"].length)]);
    let newAdjective = newVerb.replace('*ADJECTIVE*', this.data["adjectives"][Math.floor(Math.random() * this.data["adjectives"].length)]);
    let finalPhrase = newAdjective.replace('*ADVERB*', this.data["adverbs"][Math.floor(Math.random() * this.data["adverbs"].length)]);
    return finalPhrase;
  }
}

let tweet_one = new GenerateTweet(tweet_one_words);

client.post('statuses/update', {status: tweet_one.CreateTweet()}, function(error, tweet, response) {
  if(error) {
    console.log(error);
  }
  if (!error) {
    console.log(tweet);
  }
});
