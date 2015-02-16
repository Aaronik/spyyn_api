var _ = require('lodash'),
    faker = require('faker'),
    articleFactory = require('./article_factory');

function manyArticles (count, storyId) {
  var articles = [];

  _.times(count, function (idx) {
    articles.push(articleFactory.brief(idx, idx + 5, storyId));
  }); 

  return articles;
};

module.exports = function storyFactory (id) {
  return {
    id: id,
    title: faker.lorem.words(id),
    articles: manyArticles(id, id)
  };
};
