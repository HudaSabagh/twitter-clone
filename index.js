const fs = require('fs');
const pug = require('pug');
const path = require('path');
const fakeTweets = require(path.resolve('src/data/tweets.js'));

const compiledHTML = pug.renderFile('src/pug/template.pug', fakeTweets);

fs.writeFile('public/index.html', compiledHTML, () => console.log('Pug successfully compiled to HTML!'))
