// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';
import ncp from 'ncp';
var mkdirp = require('mkdirp');

mkdirp('dist/css/' , function (err) {
    if (err) console.error(err)
    else console.log('dir dist/css created')
  });

ncp('./src/Client/public/', './dist/css/', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('done!');
 });

fs.readFile('./src/Client/public/styles.css', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  fs.writeFile('dist/styles.css',$.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('styles.css written to /dist'.green);
  });
});