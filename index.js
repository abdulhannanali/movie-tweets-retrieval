const request = require('request')
const MovieDB = require('moviedb')
const Twitter = require('twitter')
const colors = require("colors")
const fs = require("fs")

require("./config")()

// configuring twitter client
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})


const mdb = MovieDB(process.env.MOVIEDB_API_KEY)


mdb.miscNowPlayingMovies(function (error, response) {
  response.results.forEach((value, index, array) => {
    if (value > 9) {
      return ""
    }
    client.get("search/tweets", {q: value.title, count: 10}, function (error, response, body) {
      console.log("Tweets for " + value.title)
      response.statuses.forEach((value, index, array)  => {
        console.log(tweetFormatter(value))
      })
    })
  })
})

function movieFormatter (movie) {
  return `\n${movie.title}\nPopularity:${movie.popularity}\nRelease Date: ${movie.release_date1}\n`
}

function tweetFormatter(tweet) {
  return `${tweet.text} by ${tweet.user.screen_name}`
}
