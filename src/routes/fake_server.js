var stories = require('../fake_data/stories'),
history = require('../fake_data/history');

module.exports = {
  history: function (req, res, next) {
    var journalId = req.params.journalId;
    var histories = history(journalId);
    res.send(histories);
  },

  stories: function (req, res, next) {
    var storyId = req.params.storyId;
    res.send(stories(storyId));
  }
}

