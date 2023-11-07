var fs = require('fs');

fs.readFile('f.txt', function(err, data) {
    
    console.log(data.toString('ascii'))
})