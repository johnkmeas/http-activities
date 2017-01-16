var https = require('https');

console.log('I did it!');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

var callback = function(response){
  console.log('In response handler callback!');
  response.on('data', function(chunk){
    console.log('[-- Chunk of Length: ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

console.log('I\'m about to make the request!');

https.request(options, callback).end();

console.log('I\'ve mode the request!');