// Routes: this is the start of all routes

var fakeServer = require('./fake_server');

module.exports = function (app) {
  app.get('/fake-server/journals/:journalId/history', fakeServer.history);
  app.get('/fake-server/stories/:storyId', fakeServer.stories);
}

