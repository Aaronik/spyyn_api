// Routes: this is the start of all routes

var fakeServer = require('./fake_server');

module.exports = function (app) {
  // all stories (paged by date?)
  // story objects, each containing a bunch of articles
  app.get('/fake-server/stories', fakeServer.stories);
  app.get('/fake-server/stories/:storyId', fakeServer.story); // come with many articles, which each have a journal

  // noop
  app.get('/fake-server/articles', fakeServer.articles);
  // one article, one journal, many stories
  app.get('/fake-server/articles/:articleId', fakeServer.article);

  // return all currently used journal metadata
  app.get('/fake-server/journals', fakeServer.journals);
  // metadata about the journal
  app.get('/fake-server/journals/:journalId', fakeServer.journal);
  // many articles
  app.get('/fake-server/journals/:journalId/history', fakeServer.history); 
}
