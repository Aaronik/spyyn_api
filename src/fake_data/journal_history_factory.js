var _ = require('lodash'),
    storyFactory = require('./story_factory');


module.exports = function (journalId) {
  var histories = [];

  _.times(journalId, function (idx) {
    histories.push(storyFactory(idx));
  })

  return histories;
};
