var _ = require('lodash'),
    storyFactory = require('./story_factory');


module.exports = function (journalId) {
  var histories = [];

  _.times(journalId, function (idx) {
    var story = storyFactory(idx);
    story.journalId = journalId;
    histories.push(story);
  })

  return histories;
};
