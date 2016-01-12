// problem2 solution --> console.log(process.argv.slice(2).reduce( (prev, curr) => +prev + +curr ));

/* problem3 solution:
var fs = require('fs');
var data = fs.readFileSync(process.argv[2]);
var numOfNewLines = data.toString().split("\n").length-1;
console.log(numOfNewLines);
*/


