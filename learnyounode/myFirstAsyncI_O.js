var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function callback(err,buf){
    if(!err){
        length=buf.split('\n').length;
        console.log(length-1);
    }
});

