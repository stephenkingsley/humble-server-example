const HumbleServer = require('humble-server');
const home = require('./controler/home');

const humbleServerApp = new HumbleServer({
  numCPUs: 5,
  port: 6969,
});

humbleServerApp.router.get('/hello', home);
humbleServerApp.start();

