// Routes: this is the start of all routes

var fakeServer = require('./fake_server');

module.exports = function (app) {
  app.get('/fake-server/history', fakeServer.history);

  app.get('/fake-server/stories', fakeServer.stories);
}

