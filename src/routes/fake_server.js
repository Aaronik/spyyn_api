var _ =                     require('lodash'),
    storyFactory =          require('../fake_data/story_factory'),
    articleFactory =        require('../fake_data/article_factory'),
    journalFactory =        require('../fake_data/journal_factory'),
    journalHistoryFactory = require('../fake_data/journal_history_factory');

function buildMany (factory, count) {
  var objects = [];

  _.times(count, function (idx) {
    objects.push(factory(idx));
  });

  return objects;
}

module.exports = {
  // ### STORIES
  stories: function (req, res, next) {
    var stories = buildMany(storyFactory, 1000);
    res.json(stories);
  },

  story: function (req, res, next) {
    var storyId = req.params.storyId
    res.json(storyFactory(storyId));
  },

  // ### ARTICLES
  articles: function (req, res, next) {
    var articles = buildMany(articleFactory.brief, 1000);
    res.json(articles);
  },

  article: function (req, res, next) {
    var articleId = req.params.articleId;
    res.json(articleFactory.full(articleId))
  },

  // ### JOURNALS
  journals: function (req, res, next) {
    var journals = buildMany(journalFactory, 10);
    res.json(journals);
  },

  journal: function (req, res, next) {
    var journalId = req.params.journalId;
    res.json(journalFactory(journalId));
  },
 
  history: function (req, res, next) {
    var journalId = req.params.journalId;
    var histories = journalHistoryFactory(journalId);
    res.json(histories);
  },

}

