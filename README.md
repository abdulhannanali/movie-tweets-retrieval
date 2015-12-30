# movie-tweets-retrieval
Retrieves the last 100 tweets with the name of the movie using twitter/loklak api. Done as a task for Google CodeIn


This is a really initial version of the app.

## Environment variables
You need to register for an `API Key` on themoviedb and for an script on [twitter](http://apps.twitter.com).

After that create a `config.js` in your script folder and replace the strings with the variables you obtained.

```
module.exports = function () {
  process.env.MOVIEDB_API_KEY = "Your-key-here"
  process.env.TWITTER_CONSUMER_KEY = "Your-key-here"
  process.env.TWITTER_CONSUMER_SECRET = "Your-key-here"
  process.env.TWITTER_ACCESS_TOKEN = "Your-key-here"
  process.env.TWITTER_ACCESS_TOKEN_SECRET = "Your-key-here"
}

```

## Running the script
To run this script you need to do the following. First, You need to have [node.js](https://nodejs.org) and [npm](http://npm.com) in order to run this script.

After cloning the repository and creating config.js (see Environment variables) run
```
npm install
```
in order to install the required packages.

In order to run the script enter the command
```
npm run
```

### Contributions
Feel free to make a PR and raise some issues :smile:
