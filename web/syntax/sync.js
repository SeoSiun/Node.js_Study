var fs = require('fs');

//readFileSync
/*console.log('A');
var result = fs.readFIleSync('syntax/sample.txt','utf8');
console.log(result);
console.log('C');*/
//A
//B
//C


//readFile (async)
console.log('A');
fs.readFile('syntax/sample.txt','utf8', function(err,result){
  console.log(result);
});
console.log('C');
//A
//C
//B
