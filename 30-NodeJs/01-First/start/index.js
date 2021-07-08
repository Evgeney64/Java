console.log('Hello NodeJs')

console.log('dirname: ' + __dirname)
console.log('filename: ' + __filename)

console.log(' - path --------------------------------')
const path = require('path');

console.log('dirname(__filename): ' + path.dirname(__filename));
console.log('basename(__filename): ' + path.basename(__filename));
console.log('extname(__filename): ' + path.extname(__filename));
console.log('parse(__filename): ' + path.parse(__filename));
console.log('parse(__filename).name: ' + path.parse(__filename).name);

console.log(' - os --------------------------------')
const os = require('os');
console.log('os.platform: ' + os.platform());
console.log('os.arch: ' + os.arch());
console.log('os.cpus: ' + os.cpus().toString());
console.log('os.totalmem: ' + os.totalmem());
console.log('os.freemem: ' + os.freemem());

//console.log('parse(__filename): ' + path.parse('/home/user/dir/file.txt'));
