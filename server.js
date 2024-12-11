const GUN = require('gun');
const server = require('https').createServer().listen(process.env.PORT || 8765);

const gun = GUN({
  web: server
});

console.log('Gun server started');
