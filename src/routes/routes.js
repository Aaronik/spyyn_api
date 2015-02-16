// Routes: this is the start of all routes

var fakeServer = require('./fake_server');

module.exports = function (app) {
  // all stories (paged by date?)
  // story objects, each containing a bunch of articles
  app.get('/fake-server/stories', function());
  app.get('/fake-server/stories/:storyId', fakeServer.stories); // come with many articles, which each have a journal

  // noop
  app.get('/fake-server/articles', function());
  // one article, one journal, many stories
  app.get('/fake-server/articles/:articleId', function());

  // return all currently used journal metadata
  app.get('/fake-server/journals', function());
  // metadata about the journal
  app.get('/fake-server/journals/:journalId', function());
  // many articles
  app.get('/fake-server/journals/:journalId/history', fakeServer.history); 
  // many articles, related to one story
  app.get('/fake-server/journals/:journalId/story/:storyId', function());
}


