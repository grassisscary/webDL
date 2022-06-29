
var option = process.argv.slice(2);
var scrape = require('website-scraper');

switch (option[0]) {
  case '--url':
    if(option[1] == null) {
      console.log('You did not enter a URL');
      break;
    }
    else {
      var url = option[1];

      var options = {
        urls: [url],
        directory: `${Math.floor(new Date().getTime() / 1000)}`
      };
       
      var result = scrape(options);
      scrape(options).then((result) => {
        console.log(`You have successfully scraped: ${url}`);
      });
       
      scrape(options, (error, result) => {
        if(error != null) {
          console.log("An Error has occured.");
        }
      });
      break;
    }
  default:
    console.log("usage: 'node site.js --url [URL]'");
}
