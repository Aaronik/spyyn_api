var faker = require('faker');

function brief (id, journalId, storyId) {
  return {
    id: id,
    link: 'http://www.awesomearticlenumber' + id + '.com',
    title: faker.hacker.phrase(),
    summary: faker.lorem.paragraph(),
    journalId: journalId || id + 34,
    metrics: {
      internalImportance: id % 100,
      sentiment: (id + 70) % 100,
      focus: (id + 50) % 100,
      controversy: (id + 30) % 100,
      idiosyncracyCredit: id + 23 % 100
    }
  };
};

function full (id, journalId, storyId) {
  var article = brief(id, journalId, storyId);
  article.body = faker.lorem.paragraphs(id);
  return article;
};

module.exports = {
  brief: brief,
  full: full
};

// Do we want to include the metrics for the journal?
